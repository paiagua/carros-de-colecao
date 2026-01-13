import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ArrowRight, Check, Sparkles, Gift, Package, Car, Shield, X, RefreshCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import car1 from "@/assets/cars/car-1.png";
import car2 from "@/assets/cars/car-2.png";
import car3 from "@/assets/cars/car-3.png";
import { trackSubscriptionFormSubmit, trackEvent } from "@/lib/analytics";

const step1Schema = z.object({
  fullName: z.string().trim().min(3, "Nome completo é obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string()
    .trim()
    .regex(/^9\d{8}$/, "Telemóvel deve começar com 9 e ter 9 dígitos")
    .length(9, "Telemóvel deve ter 9 dígitos"),
  marketingConsent: z.boolean().default(false)
});

const step2Schema = z.object({
  firstBook: z.enum(["1", "2", "3"], {
    required_error: "Selecione o primeiro carro"
  })
});

const step3Schema = z.object({
  address: z.string().trim().min(5, "Morada completa é obrigatória").max(200),
  doorNumber: z.string().trim().min(1, "Nº é obrigatório").max(20),
  floor: z.string().trim().max(20).optional(),
  postalCode1: z.string().trim().regex(/^\d{4}$/, "Código postal deve ter 4 dígitos").length(4, "Código postal inválido"),
  postalCode2: z.string().trim().regex(/^\d{3}$/, "Código postal deve ter 3 dígitos").length(3, "Código postal inválido"),
  city: z.string().trim().min(2, "Localidade é obrigatória").max(100)
});

const step4Schema = z.object({
  nib: z.string()
    .trim()
    .regex(/^\d{21}$/, "NIB deve ter 21 dígitos"),
  accountHolderName: z.string().trim().min(3, "Nome do titular é obrigatório").max(100),
  accountHolderAddress: z.string().trim().min(5, "Morada do titular é obrigatória").max(200),
  accountHolderPostalCode1: z.string().trim().regex(/^\d{4}$/, "Código postal deve ter 4 dígitos").length(4, "Código postal inválido"),
  accountHolderPostalCode2: z.string().trim().regex(/^\d{3}$/, "Código postal deve ter 3 dígitos").length(3, "Código postal inválido"),
  accountHolderCity: z.string().trim().min(2, "Localidade é obrigatória").max(100),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Deve aceitar os termos"
  })
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;

interface SubscriptionFormProps {
  onClose: () => void;
}

const STORAGE_KEY = 'subscription_form_data';

const SubscriptionForm = ({ onClose }: SubscriptionFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [showDebitDetails, setShowDebitDetails] = useState(false);
  const [showOffersDetails, setShowOffersDetails] = useState(false);
  const [showTermsDetails, setShowTermsDetails] = useState(false);
  const [useDeliveryAddress, setUseDeliveryAddress] = useState(true);
  const [nibConfirmed, setNibConfirmed] = useState(false);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [isLoadingAccountAddress, setIsLoadingAccountAddress] = useState(false);
  const [dataRecovered, setDataRecovered] = useState(false);
  const [recoveredName, setRecoveredName] = useState<string | null>(null);
  const { toast } = useToast();

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      marketingConsent: false
    }
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema)
  });

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema)
  });

  const step4Form = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      termsAccepted: false
    }
  });

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        
        // Only show recovery message if there's meaningful data
        if (parsed.formData?.fullName) {
          setDataRecovered(true);
          setRecoveredName(parsed.formData.fullName.split(' ')[0]); // First name only
        }
        
        setFormData(parsed.formData || {});
        setCurrentStep(parsed.currentStep || 1);
        
        // Restore step 1 form
        if (parsed.formData?.fullName) step1Form.setValue('fullName', parsed.formData.fullName);
        if (parsed.formData?.email) step1Form.setValue('email', parsed.formData.email);
        if (parsed.formData?.phone) step1Form.setValue('phone', parsed.formData.phone);
        if (parsed.formData?.marketingConsent) step1Form.setValue('marketingConsent', parsed.formData.marketingConsent);
        
        // Restore step 2 form
        if (parsed.formData?.firstBook) step2Form.setValue('firstBook', parsed.formData.firstBook);
        
        // Restore step 3 form
        if (parsed.formData?.address) step3Form.setValue('address', parsed.formData.address);
        if (parsed.formData?.doorNumber) step3Form.setValue('doorNumber', parsed.formData.doorNumber);
        if (parsed.formData?.floor) step3Form.setValue('floor', parsed.formData.floor);
        if (parsed.formData?.postalCode1) step3Form.setValue('postalCode1', parsed.formData.postalCode1);
        if (parsed.formData?.postalCode2) step3Form.setValue('postalCode2', parsed.formData.postalCode2);
        if (parsed.formData?.city) step3Form.setValue('city', parsed.formData.city);
        
        // Restore step 4 form
        if (parsed.formData?.nib) step4Form.setValue('nib', parsed.formData.nib);
        if (parsed.formData?.accountHolderName) step4Form.setValue('accountHolderName', parsed.formData.accountHolderName);
        if (parsed.formData?.accountHolderAddress) step4Form.setValue('accountHolderAddress', parsed.formData.accountHolderAddress);
        if (parsed.formData?.accountHolderPostalCode1) step4Form.setValue('accountHolderPostalCode1', parsed.formData.accountHolderPostalCode1);
        if (parsed.formData?.accountHolderPostalCode2) step4Form.setValue('accountHolderPostalCode2', parsed.formData.accountHolderPostalCode2);
        if (parsed.formData?.accountHolderCity) step4Form.setValue('accountHolderCity', parsed.formData.accountHolderCity);
        
        if (parsed.nibConfirmed) setNibConfirmed(parsed.nibConfirmed);
      } catch (e) {
        console.error('Error loading saved form data:', e);
      }
    }
  }, []);

  // Save data to localStorage whenever formData or currentStep changes
  // Note: termsAccepted is excluded as it should never be pre-filled
  const saveToStorage = (newFormData: any, step: number, nibStatus?: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { termsAccepted, ...dataToSave } = newFormData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      formData: dataToSave,
      currentStep: step,
      nibConfirmed: nibStatus ?? nibConfirmed
    }));
  };

  // Clear localStorage on successful submission
  const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  // Auto-save step 4 fields as user types
  const step4Values = step4Form.watch();
  useEffect(() => {
    if (currentStep === 4) {
      const { termsAccepted, ...step4DataToSave } = step4Values;
      const newFormData = { ...formData, ...step4DataToSave };
      // Only save if there's meaningful data
      if (step4DataToSave.accountHolderName || step4DataToSave.accountHolderAddress || step4DataToSave.nib) {
        saveToStorage(newFormData, 4, nibConfirmed);
      }
    }
  }, [step4Values, currentStep]);

  // Função para buscar morada pelo código postal
  const fetchAddressByPostalCode = async (postalCode: string, formType: 'delivery' | 'account') => {
    if (formType === 'delivery') {
      setIsLoadingAddress(true);
    } else {
      setIsLoadingAccountAddress(true);
    }
    
    try {
      const response = await fetch(`https://fidelidadeapi.quickflowai.com/Olyvia/postcodes/${postalCode}`);
      
      if (response.ok) {
        const data = await response.json();
        
        if (data && data.address) {
          if (formType === 'delivery') {
            step3Form.setValue('address', data.address.addressLabel || data.address.street || '');
            step3Form.setValue('city', data.locality || '');
          } else {
            step4Form.setValue('accountHolderAddress', data.address.addressLabel || data.address.street || '');
            step4Form.setValue('accountHolderCity', data.locality || '');
          }
          
          toast({
            title: "Morada encontrada!",
            description: "Os campos foram preenchidos automaticamente.",
          });
        }
      }
    } catch (error) {
      console.error('Erro ao buscar morada:', error);
    } finally {
      if (formType === 'delivery') {
        setIsLoadingAddress(false);
      } else {
        setIsLoadingAccountAddress(false);
      }
    }
  };

  const handleStep1 = (data: Step1Data) => {
    trackEvent('subscription_step_complete', { step: 1 });
    const newFormData = { ...formData, ...data };
    setFormData(newFormData);
    saveToStorage(newFormData, 2);
    setCurrentStep(2);
  };

  const handleStep2 = (data: Step2Data) => {
    trackEvent('subscription_step_complete', { step: 2, first_car: data.firstBook });
    const newFormData = { ...formData, ...data };
    setFormData(newFormData);
    saveToStorage(newFormData, 3);
    setCurrentStep(3);
  };

  const handleStep3 = (data: Step3Data) => {
    trackEvent('subscription_step_complete', { step: 3 });
    
    // Pre-fill step 4 fields with delivery data
    const accountHolderName = step4Form.getValues("accountHolderName") || formData.fullName || "";
    const accountHolderAddress = data.address || "";
    const accountHolderPostalCode1 = data.postalCode1 || "";
    const accountHolderPostalCode2 = data.postalCode2 || "";
    const accountHolderCity = data.city || "";
    
    // Set form values
    step4Form.setValue("accountHolderName", accountHolderName);
    step4Form.setValue("accountHolderAddress", accountHolderAddress);
    step4Form.setValue("accountHolderPostalCode1", accountHolderPostalCode1);
    step4Form.setValue("accountHolderPostalCode2", accountHolderPostalCode2);
    step4Form.setValue("accountHolderCity", accountHolderCity);
    
    // Save all data including pre-filled step 4 fields
    const newFormData = { 
      ...formData, 
      ...data,
      accountHolderName,
      accountHolderAddress,
      accountHolderPostalCode1,
      accountHolderPostalCode2,
      accountHolderCity
    };
    setFormData(newFormData);
    saveToStorage(newFormData, 4);
    
    setNibConfirmed(false);
    setCurrentStep(4);
  };

  // Build CSV content
  const buildCsvContent = (data: any) => {
    const safeGet = (k: string, d: any = "") =>
      data?.[k] !== null && data?.[k] !== undefined ? data[k] : d;

    const csvData = {
      "Nome Completo": safeGet("fullName"),
      "Email": safeGet("email"),
      "Telemóvel": safeGet("phone"),
      "Consente Marketing": safeGet("marketingConsent", false) ? "Sim" : "Não",
      "Primeiro Mineral": safeGet("firstBook"),
      "Morada Entrega": `${safeGet("address")}, nº ${safeGet("doorNumber")}${safeGet("floor") ? `, ${safeGet("floor")}` : ""}`,
      "Código Postal Entrega": `${safeGet("postalCode1")}-${safeGet("postalCode2")}`,
      "Localidade Entrega": safeGet("city"),
      "NIB": safeGet("nib"),
      "Nome Titular Conta": safeGet("accountHolderName"),
      "Morada Titular": safeGet("accountHolderAddress"),
      "Código Postal Titular": `${safeGet("accountHolderPostalCode1")}-${safeGet("accountHolderPostalCode2")}`,
      "Localidade Titular": safeGet("accountHolderCity"),
      "Termos Aceites": safeGet("termsAccepted", false) ? "Sim" : "Não",
      "Data Subscrição": new Date().toLocaleString("pt-PT"),
    };

    const headers = Object.keys(csvData).join(",");
    const values = Object.values(csvData)
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(",");
    return `${headers}\n${values}`;
  };

  // Save CSV to server
  const saveCsvToServer = async (csv: string, fullName: string) => {
    const res = await fetch("/api/save-subscription.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ csv, fullName: fullName || "subscricao" }),
    });

    const text = await res.text().catch(() => "");
    let payload: any = null;
    try { payload = text ? JSON.parse(text) : null; } catch {}

    if (!res.ok || (payload && payload.ok === false)) {
      const serverMsg = payload?.error || text || `HTTP ${res.status}`;
      throw new Error(serverMsg);
    }

    return payload || { ok: true };
  };

  const handleStep4 = async (data: Step4Data) => {
    const finalData = { 
      ...formData, 
      ...data
    };

    try {
      const csv = buildCsvContent(finalData);
      await saveCsvToServer(csv, finalData.fullName);

      // Clear saved data on successful submission
      clearStorage();
      
      trackSubscriptionFormSubmit(true);
      toast({
        title: "Subscrição guardada com sucesso!",
        description: "Em breve será contactado pela nossa equipa.",
      });
      onClose();
    } catch (err: any) {
      console.error(err);
      trackSubscriptionFormSubmit(false);
      toast({
        title: "Erro ao guardar",
        description: err?.message || "Não foi possível guardar no servidor.",
        variant: "destructive",
      });
    }
  };

  const minerals = [
    { id: "1", title: "VW Beetle", image: car1, price: "5,95€" },
    { id: "2", title: "VW T1 Bus", image: car2, price: "5,95€" },
    { id: "3", title: "Renault 4L", image: car3, price: "5,95€" }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden h-full flex flex-col min-h-0">
      {/* Welcome back message */}
      {dataRecovered && (
        <div className="mb-4 p-3 bg-gradient-to-r from-accent/20 to-amber-500/20 rounded-lg border border-accent/30 animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-lg">👋</span>
            <div>
              <p className="font-semibold text-foreground">
                Bem-vindo de volta{recoveredName ? `, ${recoveredName}` : ''}!
              </p>
              <p className="text-sm text-muted-foreground">
                Os seus dados foram recuperados. Continue de onde parou.
              </p>
            </div>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              className="ml-auto text-xs text-muted-foreground hover:text-foreground"
              onClick={() => {
                clearStorage();
                setDataRecovered(false);
                setRecoveredName(null);
                setCurrentStep(1);
                setFormData({});
                step1Form.reset();
                step2Form.reset();
                step3Form.reset();
                step4Form.reset();
                setNibConfirmed(false);
              }}
            >
              Recomeçar
            </Button>
          </div>
        </div>
      )}

      {/* Progress indicator - Fixed at top */}
      <div className="mb-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            {currentStep === 1 && "Começar"}
            {currentStep === 2 && "Metade quase preenchida."}
            {currentStep === 3 && "O próximo passo já é o último."}
            {currentStep === 4 && "O próximo passo já é o último."}
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2.5">
          <div
            className="bg-accent h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Personal Info */}
      {currentStep === 1 && (
        <form onSubmit={step1Form.handleSubmit(handleStep1)} className="flex flex-col flex-1 min-h-0">
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto space-y-6 pb-4">
            <div className="relative mb-8 py-8">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cta/10 rounded-full blur-2xl" />
              
              <div className="relative text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 leading-tight">
                  Subscrever Coleção <span className="text-accent">Inédita</span> de{" "}
                  <span className="relative inline-block">
                    <span className="inline-flex items-center justify-center bg-gradient-to-br from-accent to-amber-500 text-black w-16 h-16 md:w-20 md:h-20 rounded-full font-black text-2xl md:text-3xl shadow-xl shadow-accent/40 transform -rotate-3 hover:rotate-0 transition-transform">
                      150
                    </span>
                  </span>{" "}
                  Carros
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-base">Nome Completo *</Label>
                <Input
                  id="fullName"
                  placeholder="Ex: João Silva"
                  {...step1Form.register("fullName")}
                  className="mt-1.5 h-12 text-base"
                />
                {step1Form.formState.errors.fullName && (
                  <p className="text-sm text-destructive mt-1">
                    {step1Form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-base">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  {...step1Form.register("email")}
                  className="mt-1.5 h-12 text-base"
                />
                {step1Form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {step1Form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-base">Telemóvel *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="912345678"
                  maxLength={9}
                  {...step1Form.register("phone")}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length > 0 && !value.startsWith('9')) {
                      value = '9' + value.substring(1);
                    }
                    if (value.length > 9) {
                      value = value.substring(0, 9);
                    }
                    e.target.value = value;
                    step1Form.setValue('phone', value);
                  }}
                  className="mt-1.5 h-12 text-base"
                />
                {step1Form.formState.errors.phone && (
                  <p className="text-sm text-destructive mt-1">
                    {step1Form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <Card className="p-4 bg-muted/30 border">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="marketingConsent"
                    checked={step1Form.watch("marketingConsent")}
                    onCheckedChange={(checked) => {
                      step1Form.setValue("marketingConsent", checked === true);
                    }}
                  />
                  <Label htmlFor="marketingConsent" className="text-sm cursor-pointer leading-relaxed">
                    Quero receber comunicações sobre promoções e novidades da Medialivre, S.A.
                  </Label>
                </div>
              </Card>
            </div>
          </div>

          {/* Fixed button at bottom */}
          <div className="flex-shrink-0 pt-4 border-t border-border bg-background">
            <Button type="submit" variant="cta" className="w-full h-14 text-lg font-semibold group" size="lg">
              <span>Continuar para o Passo 2</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </form>
      )}

      {/* Step 2: Select First Book */}
      {currentStep === 2 && (
        <form onSubmit={step2Form.handleSubmit(handleStep2)} className="flex flex-col flex-1 min-h-0">
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto space-y-6 pb-4">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4">
                {formData.fullName?.split(' ')[0]}, escolha o seu <span className="text-accent">primeiro carro</span>!
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">Clique no carro que deseja receber primeiro</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-full overflow-hidden">
              {minerals.map((mineral) => (
                <Card
                  key={mineral.id}
                  className={`relative p-3 md:p-5 cursor-pointer transition-all hover:scale-105 ${
                    step2Form.watch("firstBook") === mineral.id
                      ? "border-4 border-accent shadow-2xl shadow-accent/30 bg-accent/5"
                      : "border-2 hover:border-accent/50"
                  }`}
                  onClick={() => {
                    step2Form.setValue("firstBook", mineral.id as "1" | "2" | "3");
                    // Aguarda um momento para a animação e depois avança
                    setTimeout(() => {
                      const data = { firstBook: mineral.id as "1" | "2" | "3" };
                      handleStep2(data);
                    }, 300);
                  }}
                >
                  {step2Form.watch("firstBook") === mineral.id && (
                    <div className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold shadow-lg animate-pulse-glow text-sm md:text-base z-10">
                      ✓
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[160px] sm:max-w-[200px] aspect-square bg-muted/30 rounded-lg shadow-md flex items-center justify-center p-2 mb-3 md:mb-4">
                      <img
                        src={mineral.image}
                        alt={mineral.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold text-center text-xs md:text-sm mb-1">
                      Carro {mineral.id}
                    </p>
                    <p className="text-center text-[10px] md:text-xs text-muted-foreground leading-relaxed break-words px-2">
                      {mineral.title}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {step2Form.formState.errors.firstBook && (
              <p className="text-sm text-destructive text-center font-semibold">
                {step2Form.formState.errors.firstBook.message}
              </p>
            )}

            <Card className="p-4 md:p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 text-center">
              <p className="text-base md:text-lg font-semibold mb-2">150 carros de coleção esperam por si!</p>
              <p className="text-xs md:text-sm text-muted-foreground">Uma viagem completa pelo fascinante mundo automóvel</p>
            </Card>
          </div>

          {/* Fixed button at bottom */}
          <div className="flex-shrink-0 pt-4 border-t border-border bg-background">
            <div className="flex gap-3 md:gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="gap-2 h-11 md:h-12 text-sm md:text-base w-full"
              >
                <ChevronLeft className="w-4 h-4" /> Voltar ao Passo 1
              </Button>
            </div>
          </div>
        </form>
      )}

      {/* Step 3: Address */}
      {currentStep === 3 && (
        <form onSubmit={step3Form.handleSubmit(handleStep3)} className="flex flex-col flex-1 min-h-0 overflow-hidden">
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto space-y-6 pb-4 min-h-0">
            <Card className="p-6 bg-gradient-to-br from-accent/15 via-accent/10 to-amber-500/10 border-2 border-accent/40 shadow-lg shadow-accent/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-400/20 rounded-full blur-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center shadow-lg">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Receberá as OFERTAS nos seguintes envios:</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-white/10 rounded-lg border border-accent/20">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-sm">1º</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Caderno Exclusivo</p>
                      <p className="text-sm text-muted-foreground">de OFERTA no primeiro envio</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-white/10 rounded-lg border border-accent/20">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Car className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Pack de 3 Ferrari</p>
                      <p className="text-sm text-muted-foreground">de OFERTA no 4º e 19º envio</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-white/10 rounded-lg border border-accent/20">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Package className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Caixa Organizadora de Madeira</p>
                      <p className="text-sm text-muted-foreground">de OFERTA no 6º, 14º, 21º, 29º e 36º envio</p>
                    </div>
                  </div>
                </div>
                
                {!showOffersDetails ? (
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className="mt-5 text-accent hover:text-accent/80 font-medium p-0 h-auto"
                    onClick={() => setShowOffersDetails(true)}
                  >
                    Ver mais informações →
                  </Button>
                ) : (
                  <div className="space-y-2 text-sm border-t border-accent/20 pt-4 mt-5 animate-fade-in">
                    <p className="font-medium">Cada carro: <span className="text-accent font-bold">5,95€</span></p>
                    <p className="text-xs text-muted-foreground mt-4">
                      Preços válidos para Portugal Continental, IVA incluído. Pode cancelar a assinatura quando desejar.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Caso haja um aumento significativo nos custos de produção e transporte, a editora pode alterar os preços de venda e a periodicidade das entregas.
                    </p>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      className="text-muted-foreground hover:text-foreground p-0 h-auto text-xs"
                      onClick={() => setShowOffersDetails(false)}
                    >
                      ← Ocultar
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            <div>
              <h2 className="text-2xl font-display font-bold mb-2">
                Morada onde vai querer receber os seus carros:
              </h2>
            </div>

            <div className="space-y-4">
              {/* Código Postal PRIMEIRO */}
              <div>
                <Label htmlFor="postalCode1">Código postal:* <span className="text-xs text-muted-foreground">(preencha para auto-completar a morada)</span></Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="postalCode1"
                    maxLength={4}
                    {...step3Form.register("postalCode1")}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      e.target.value = value;
                      step3Form.setValue('postalCode1', value);
                      
                      // Se tiver 4 dígitos, passa para o segundo campo
                      if (value.length === 4) {
                        document.getElementById('postalCode2')?.focus();
                        const postalCode2 = step3Form.getValues('postalCode2');
                        if (postalCode2?.length === 3) {
                          fetchAddressByPostalCode(`${value}-${postalCode2}`, 'delivery');
                        }
                      }
                    }}
                    placeholder="0000"
                    className="w-24"
                  />
                  <span className="flex items-center text-muted-foreground">-</span>
                  <Input
                    id="postalCode2"
                    maxLength={3}
                    {...step3Form.register("postalCode2")}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      e.target.value = value;
                      step3Form.setValue('postalCode2', value);
                      
                      // Se tiver 3 dígitos e o primeiro campo também tiver 4, busca a morada
                      const postalCode1 = step3Form.getValues('postalCode1');
                      if (value.length === 3 && postalCode1?.length === 4) {
                        fetchAddressByPostalCode(`${postalCode1}-${value}`, 'delivery');
                      }
                    }}
                    placeholder="000"
                    className="w-20"
                  />
                  {isLoadingAddress && (
                    <span className="flex items-center text-accent text-sm">A carregar...</span>
                  )}
                </div>
                {(step3Form.formState.errors.postalCode1 || step3Form.formState.errors.postalCode2) && (
                  <p className="text-sm text-destructive mt-1">Código postal inválido</p>
                )}
              </div>

              {/* Morada - só aparece quando código postal está completo */}
              {step3Form.watch("postalCode1")?.length === 4 && step3Form.watch("postalCode2")?.length === 3 && (
                <>
                  <div>
                    <Label htmlFor="address">{formData.fullName?.split(' ')[0]}, qual a Morada completa para a Entrega?*</Label>
                    <Input
                      id="address"
                      {...step3Form.register("address")}
                      className="mt-1"
                      placeholder="Ex: Rua António Ramalho"
                    />
                    {step3Form.formState.errors.address && (
                      <p className="text-sm text-destructive mt-1">
                        {step3Form.formState.errors.address.message}
                      </p>
                    )}
                  </div>

                  {/* Nº e Andar */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="doorNumber">Nº*</Label>
                      <Input
                        id="doorNumber"
                        {...step3Form.register("doorNumber")}
                        className="mt-1"
                        placeholder="Ex: 6"
                      />
                      {step3Form.formState.errors.doorNumber && (
                        <p className="text-sm text-destructive mt-1">
                          {step3Form.formState.errors.doorNumber.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="floor">Andar</Label>
                      <Input
                        id="floor"
                        {...step3Form.register("floor")}
                        className="mt-1"
                        placeholder="Ex: 2º Esq"
                      />
                    </div>
                  </div>

                  {/* Localidade */}
                  <div>
                    <Label htmlFor="city">Localidade*</Label>
                    <Input
                      id="city"
                      {...step3Form.register("city")}
                      className="mt-1"
                      placeholder="Ex: Queluz"
                    />
                    {step3Form.formState.errors.city && (
                      <p className="text-sm text-destructive mt-1">
                        {step3Form.formState.errors.city.message}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Fixed button at bottom */}
          <div className="flex-shrink-0 pt-4 border-t border-border bg-background">
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(2)}
                className="gap-2 group"
              >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Voltar
              </Button>
              <Button type="submit" variant="cta" className="flex-1 group" size="lg">
                <span>Último Passo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </form>
      )}

      {/* Step 4: Payment Details */}
      {currentStep === 4 && (
        <form onSubmit={step4Form.handleSubmit(handleStep4)} className="flex flex-col flex-1 min-h-0 overflow-hidden">
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto space-y-6 pb-4 min-h-0">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-4">
                Faltam apenas os seus dados de pagamento da Coleção
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="p-4 border-2 border-border">
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="nib">NIB:*</Label>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    🔒 Ligação segura • Dados protegidos
                  </span>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="flex-1">
                    <Input
                      id="nib"
                      value={(() => {
                        const digits = step4Form.watch('nib') || '';
                        let formatted = '';
                        if (digits.length > 0) formatted += digits.slice(0, 4);
                        if (digits.length > 4) formatted += '-' + digits.slice(4, 8);
                        if (digits.length > 8) formatted += '-' + digits.slice(8, 19);
                        if (digits.length > 19) formatted += '-' + digits.slice(19, 21);
                        return formatted;
                      })()}
                      onChange={(e) => {
                        // Remove all non-digits
                        let digits = e.target.value.replace(/\D/g, '');
                        // Limit to 21 digits
                        digits = digits.slice(0, 21);
                        step4Form.setValue('nib', digits);
                      }}
                      maxLength={24}
                      className="font-mono text-lg"
                      placeholder="1221-2121-21212121212-12"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Introduza os 21 dígitos do seu NIB (aceita hífens automaticamente).
                    </p>
                    {step4Form.formState.errors.nib && (
                      <p className="text-sm text-destructive mt-1">
                        {step4Form.formState.errors.nib.message}
                      </p>
                    )}
                  </div>
                  {!nibConfirmed && (
                    <Button 
                      type="button"
                      variant="cta"
                      size="sm"
                      className="whitespace-nowrap"
                      onClick={() => {
                        const nibValue = step4Form.getValues("nib");
                        if (nibValue && nibValue.length === 21) {
                          setNibConfirmed(true);
                          // Save NIB to formData and storage
                          const newFormData = { ...formData, nib: nibValue };
                          setFormData(newFormData);
                          saveToStorage(newFormData, 4, true);
                        } else {
                          toast({
                            title: "NIB inválido",
                            description: "O NIB deve ter 21 dígitos.",
                            variant: "destructive"
                          });
                        }
                      }}
                    >
                      Confirmar NIB
                    </Button>
                  )}
                  {nibConfirmed && (
                    <span className="text-accent text-sm flex items-center gap-1 pt-2">✓ Confirmado</span>
                  )}
                </div>
              </Card>

              {nibConfirmed && (
                <>
                  <Card className="p-4 bg-accent/5 border-2 border-accent/30">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="useDeliveryAddress"
                        checked={useDeliveryAddress}
                        onCheckedChange={(checked) => {
                          setUseDeliveryAddress(checked === true);
                          if (checked === true) {
                            step4Form.setValue("accountHolderAddress", formData.address || "");
                            step4Form.setValue("accountHolderPostalCode1", formData.postalCode1 || "");
                            step4Form.setValue("accountHolderPostalCode2", formData.postalCode2 || "");
                            step4Form.setValue("accountHolderCity", formData.city || "");
                          }
                        }}
                      />
                      <Label htmlFor="useDeliveryAddress" className="text-sm cursor-pointer leading-relaxed font-medium">
                        Usar Morada de Entrega
                      </Label>
                    </div>
                  </Card>

                  <div>
                    <Label htmlFor="accountHolderName">Nome do titular da Conta*</Label>
                    <Input
                      id="accountHolderName"
                      {...step4Form.register("accountHolderName")}
                      className="mt-1"
                    />
                    {step4Form.formState.errors.accountHolderName && (
                      <p className="text-sm text-destructive mt-1">
                        {step4Form.formState.errors.accountHolderName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="accountHolderAddress">Morada do titular da Conta*</Label>
                    <Input
                      id="accountHolderAddress"
                      {...step4Form.register("accountHolderAddress")}
                      className="mt-1"
                    />
                    {step4Form.formState.errors.accountHolderAddress && (
                      <p className="text-sm text-destructive mt-1">
                        {step4Form.formState.errors.accountHolderAddress.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Código postal do titular* <span className="text-xs text-muted-foreground">(auto-completa a morada)</span></Label>
                    <div className="flex gap-2 mt-1 items-center">
                      <Input
                        id="accountPostalCode1"
                        maxLength={4}
                        {...step4Form.register("accountHolderPostalCode1")}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          e.target.value = value;
                          step4Form.setValue('accountHolderPostalCode1', value);
                          
                          if (value.length === 4) {
                            document.getElementById('accountPostalCode2')?.focus();
                            const postalCode2 = step4Form.getValues('accountHolderPostalCode2');
                            if (postalCode2?.length === 3) {
                              fetchAddressByPostalCode(`${value}-${postalCode2}`, 'account');
                            }
                          }
                        }}
                        placeholder="0000"
                        className="w-24"
                      />
                      <span className="text-muted-foreground">-</span>
                      <Input
                        id="accountPostalCode2"
                        maxLength={3}
                        {...step4Form.register("accountHolderPostalCode2")}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          e.target.value = value;
                          step4Form.setValue('accountHolderPostalCode2', value);
                          
                          const postalCode1 = step4Form.getValues('accountHolderPostalCode1');
                          if (value.length === 3 && postalCode1?.length === 4) {
                            fetchAddressByPostalCode(`${postalCode1}-${value}`, 'account');
                          }
                        }}
                        placeholder="000"
                        className="w-20"
                      />
                      {isLoadingAccountAddress && (
                        <span className="text-accent text-sm">A carregar...</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="accountHolderCity">Localidade do titular*</Label>
                    <Input
                      id="accountHolderCity"
                      {...step4Form.register("accountHolderCity")}
                      className="mt-1"
                    />
                  </div>

                  <div className="space-y-2 text-sm">
                    <button 
                      type="button"
                      onClick={() => setShowDebitDetails(true)}
                      className="block text-primary hover:underline font-semibold"
                    >
                      Detalhes de Débito de Conta
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowTermsDetails(true)}
                      className="block text-primary hover:underline font-semibold"
                    >
                      Detalhes Termos da coleção
                    </button>
                  </div>

                  <Card className="p-4 border-2 border-accent/30 bg-accent/5 !mt-2">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="termsAccepted"
                        checked={step4Form.watch("termsAccepted")}
                        onCheckedChange={(checked) => {
                          step4Form.setValue("termsAccepted", checked === true);
                        }}
                      />
                      <Label htmlFor="termsAccepted" className="text-sm cursor-pointer leading-relaxed">
                        Li, compreendi e aceito os{" "}
                        <a 
                          href="https://aminhaconta.xl.pt/Layers/TermsAndConditions" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:underline font-semibold underline"
                        >
                          termos de utilização
                        </a>{" "}
                        e a{" "}
                        <a 
                          href="https://aminhaconta.xl.pt/Layers/PrivacyPolicy" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:underline font-semibold underline"
                        >
                          política de privacidade
                        </a>. *
                      </Label>
                    </div>
                    {step4Form.formState.errors.termsAccepted && (
                      <p className="text-sm text-destructive mt-2">
                        {step4Form.formState.errors.termsAccepted.message}
                      </p>
                    )}
                  </Card>
                </>
              )}
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex-shrink-0 pt-4 border-t border-border bg-background">
            {/* Garantias */}
            <Card className="p-4 mb-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-green-700 dark:text-green-400">Subscrição Sem Compromisso</p>
                  <p className="text-sm text-muted-foreground">Pode cancelar a qualquer momento</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2 bg-white/50 dark:bg-white/5 rounded-lg">
                  <X className="w-4 h-4 text-green-600" />
                  <span>Cancelamento gratuito</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/50 dark:bg-white/5 rounded-lg">
                  <RefreshCcw className="w-4 h-4 text-green-600" />
                  <span>Sem período mínimo</span>
                </div>
              </div>
            </Card>
            
            <div className="flex flex-col gap-2">
              <Button type="submit" variant="cta" className="w-full h-14 text-lg font-bold group shadow-none hover:shadow-none" size="lg">
                <Check className="w-5 h-5" />
                <span>Confirmar Subscrição</span>
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                🔒 Os seus dados estão protegidos e seguros
              </p>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setCurrentStep(3)}
                className="gap-1 h-10 text-sm text-muted-foreground hover:text-foreground group"
              >
                <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> 
                <span>Voltar</span>
              </Button>
            </div>
          </div>
        </form>
      )}

      {/* Dialog for Debit Details */}
      <Dialog open={showDebitDetails} onOpenChange={setShowDebitDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Detalhes de Débito de Conta</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p className="leading-relaxed">
              Por débito na minha conta mencionada, queiram proceder ao pagamento das importâncias referentes à obra "DESCOBRIR A HISTÓRIA" que lhes serão apresentadas pela VASP PREMIUM. A insuficiência do saldo não responsabiliza o banco pela execução dos pagamentos.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog for Terms Details */}
      <Dialog open={showTermsDetails} onOpenChange={setShowTermsDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Detalhes Termos da Coleção</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Os seus dados pessoais serão tratados pela Medialivre, S.A., pessoa colectiva número 502801034, com sede na Rua Luciana Stegagno Picchio, nº3, 1549-023 Lisboa, na qualidade de responsável pelo tratamento (doravante também "Empresa" ou "nós"). 
            </p>
            <p>
              Os dados pessoais recolhidos e tratados serão aqueles previstos no presente cupão, concretamente Nome, Morada, Código Postal, Localidade, Telemóvel, Data de Nascimento, Endereço de e-mail, NIB.
            </p>
            <p>
              Os seus dados pessoais serão tratados com a finalidade de execução de todas as operações relacionadas com a gestão da subscrição...
            </p>
            <p>
              Os seus dados poderão ser cedidos a terceiros prestadores de serviços à Empresa no âmbito das finalidades acima identificadas, designadamente à Vasp Premium - Entrega Personalizada de Publicações, Lda., pessoa colectiva número 503178489, com sede na Quinta do Grajal- Venda Seca, 2739-511 Agualva-Cacém, sendo garantido que os tratamentos por essas entidades serão feitos em rigoroso cumprimento da lei aplicável.
            </p>
            <p>
              É igualmente informado que tem o direito de aceder aos dados pessoais que lhe digam respeito...
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubscriptionForm;
