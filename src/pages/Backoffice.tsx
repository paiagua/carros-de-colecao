import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Download, RefreshCcw, Search, Filter, ArrowLeft, Users, CheckCircle, Clock, AlertCircle, LogOut, BarChart3, Mail, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import FunnelChart from "@/components/backoffice/FunnelChart";
import MarketingChart from "@/components/backoffice/MarketingChart";
import DailyChart from "@/components/backoffice/DailyChart";

interface Lead {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  marketing_consent: boolean | null;
  first_book: string | null;
  address: string | null;
  door_number: string | null;
  floor: string | null;
  postal_code_1: string | null;
  postal_code_2: string | null;
  city: string | null;
  nib: string | null;
  account_holder_name: string | null;
  account_holder_address: string | null;
  account_holder_postal_code_1: string | null;
  account_holder_postal_code_2: string | null;
  account_holder_city: string | null;
  terms_accepted: boolean | null;
  current_step: number;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

const Backoffice = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [stepFilter, setStepFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [marketingFilter, setMarketingFilter] = useState<string>("all");
  const [showCharts, setShowCharts] = useState(true);
  const [selectedLeads, setSelectedLeads] = useState<Set<string>>(new Set());
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();

  // Toggle single lead selection
  const toggleLeadSelection = (leadId: string) => {
    setSelectedLeads(prev => {
      const newSet = new Set(prev);
      if (newSet.has(leadId)) {
        newSet.delete(leadId);
      } else {
        newSet.add(leadId);
      }
      return newSet;
    });
  };

  // Toggle all visible leads selection
  const toggleAllLeads = () => {
    if (selectedLeads.size === filteredLeads.length) {
      setSelectedLeads(new Set());
    } else {
      setSelectedLeads(new Set(filteredLeads.map(l => l.id)));
    }
  };

  // Delete selected leads
  const deleteSelectedLeads = async () => {
    if (selectedLeads.size === 0) return;
    
    setIsDeleting(true);
    const { error } = await supabase
      .from("leads")
      .delete()
      .in("id", Array.from(selectedLeads));

    if (error) {
      console.error("Error deleting leads:", error);
      toast({
        title: "Erro ao eliminar",
        description: "Não foi possível eliminar as leads selecionadas.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Leads eliminadas",
        description: `${selectedLeads.size} lead(s) eliminada(s) com sucesso.`,
      });
      setSelectedLeads(new Set());
      fetchLeads();
    }
    setIsDeleting(false);
  };

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login");
    }
  }, [user, authLoading, navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
    } else {
      setLeads(data || []);
      setFilteredLeads(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchLeads();
    }
  }, [user]);

  useEffect(() => {
    let result = leads;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (lead) =>
          lead.full_name?.toLowerCase().includes(term) ||
          lead.email?.toLowerCase().includes(term) ||
          lead.phone?.includes(term)
      );
    }

    // Filter by step
    if (stepFilter !== "all") {
      const step = parseInt(stepFilter);
      result = result.filter((lead) => lead.current_step === step);
    }

    // Filter by status
    if (statusFilter === "completed") {
      result = result.filter((lead) => lead.completed);
    } else if (statusFilter === "incomplete") {
      result = result.filter((lead) => !lead.completed);
    }

    // Filter by marketing consent
    if (marketingFilter === "accepted") {
      result = result.filter((lead) => lead.marketing_consent === true);
    } else if (marketingFilter === "rejected") {
      result = result.filter((lead) => lead.marketing_consent === false);
    }

    setFilteredLeads(result);
  }, [searchTerm, stepFilter, statusFilter, marketingFilter, leads]);

  const getStepBadge = (step: number, completed: boolean) => {
    if (completed) {
      return <Badge className="bg-green-500 hover:bg-green-600">Completo</Badge>;
    }
    const colors: Record<number, string> = {
      1: "bg-red-500 hover:bg-red-600",
      2: "bg-orange-500 hover:bg-orange-600",
      3: "bg-yellow-500 hover:bg-yellow-600",
      4: "bg-blue-500 hover:bg-blue-600",
    };
    return <Badge className={colors[step] || "bg-gray-500"}>Passo {step}</Badge>;
  };

  const exportToExcel = () => {
    // Create CSV content
    const headers = [
      "Nome Completo",
      "Email",
      "Telefone",
      "Consentimento Marketing",
      "Primeiro Livro",
      "Morada",
      "Número Porta",
      "Andar",
      "Código Postal 1",
      "Código Postal 2",
      "Cidade",
      "NIB",
      "Nome Titular",
      "Morada Titular",
      "Código Postal Titular 1",
      "Código Postal Titular 2",
      "Cidade Titular",
      "Termos Aceites",
      "Passo Atual",
      "Completo",
      "Data Criação",
      "Última Atualização",
    ];

    // Helper to format cell - numbers without quotes, text with quotes
    const formatCell = (value: string | number | null | undefined, isNumeric: boolean = false, preserveAsText: boolean = false): string => {
      if (value === null || value === undefined || value === "") {
        return isNumeric ? "" : '""';
      }
      if (isNumeric) {
        // Return number without quotes so Excel recognizes it
        const numValue = String(value).replace(/\D/g, '');
        return numValue || "";
      }
      // For long numbers like NIB/IBAN, add tab prefix to force Excel to treat as text
      if (preserveAsText) {
        return `"\t${String(value).replace(/"/g, '""')}"`;
      }
      // Escape quotes in text and wrap in quotes
      return `"${String(value).replace(/"/g, '""')}"`;
    };

    const rows = filteredLeads.map((lead) => [
      formatCell(lead.full_name),
      formatCell(lead.email),
      formatCell(lead.phone, true), // numeric
      formatCell(lead.marketing_consent ? "Sim" : "Não"),
      formatCell(lead.first_book),
      formatCell(lead.address),
      formatCell(lead.door_number),
      formatCell(lead.floor),
      formatCell(lead.postal_code_1, true), // numeric
      formatCell(lead.postal_code_2, true), // numeric
      formatCell(lead.city),
      formatCell(lead.nib, false, true), // NIB with tab prefix to preserve as text in Excel
      formatCell(lead.account_holder_name),
      formatCell(lead.account_holder_address),
      formatCell(lead.account_holder_postal_code_1, true), // numeric
      formatCell(lead.account_holder_postal_code_2, true), // numeric
      formatCell(lead.account_holder_city),
      formatCell(lead.terms_accepted ? "Sim" : "Não"),
      lead.current_step.toString(), // numeric - no quotes
      formatCell(lead.completed ? "Sim" : "Não"),
      formatCell(format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: pt })),
      formatCell(format(new Date(lead.updated_at), "dd/MM/yyyy HH:mm", { locale: pt })),
    ]);

    const csvContent = [
      headers.map(h => `"${h}"`).join(";"),
      ...rows.map((row) => row.join(";"))
    ].join("\n");

    // Add BOM for Excel UTF-8 compatibility
    const bom = "\uFEFF";
    const blob = new Blob([bom + csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `leads_${format(new Date(), "yyyy-MM-dd_HH-mm")}.csv`;
    link.click();
  };

  const stats = {
    total: leads.length,
    completed: leads.filter((l) => l.completed).length,
    step1: leads.filter((l) => l.current_step === 1 && !l.completed).length,
    step2: leads.filter((l) => l.current_step === 2 && !l.completed).length,
    step3: leads.filter((l) => l.current_step === 3 && !l.completed).length,
    step4: leads.filter((l) => l.current_step === 4 && !l.completed).length,
  };

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Gestão de Leads</h1>
              <p className="text-muted-foreground">Backoffice de subscrições • {user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={showCharts ? "default" : "outline"} 
              onClick={() => setShowCharts(!showCharts)}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Gráficos
            </Button>
            <Button variant="outline" onClick={fetchLeads} disabled={loading}>
              <RefreshCcw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Atualizar
            </Button>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => { setStepFilter("all"); setStatusFilter("all"); }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" /> Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.total}</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:border-green-500 transition-colors" onClick={() => { setStepFilter("all"); setStatusFilter("completed"); }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Completos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:border-red-500 transition-colors" onClick={() => { setStepFilter("1"); setStatusFilter("incomplete"); }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-600 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> Passo 1
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-600">{stats.step1}</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:border-orange-500 transition-colors" onClick={() => { setStepFilter("2"); setStatusFilter("incomplete"); }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-orange-600 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Passo 2
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600">{stats.step2}</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:border-yellow-500 transition-colors" onClick={() => { setStepFilter("3"); setStatusFilter("incomplete"); }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-yellow-600 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Passo 3
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-yellow-600">{stats.step3}</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:border-blue-500 transition-colors" onClick={() => { setStepFilter("4"); setStatusFilter("incomplete"); }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Passo 4
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">{stats.step4}</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        {showCharts && (
          <>
            <DailyChart leads={leads} />
            <FunnelChart stats={stats} />
            <MarketingChart leads={leads} />
          </>
        )}

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar por nome, email ou telefone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-4 flex-wrap">
                <Select value={stepFilter} onValueChange={setStepFilter}>
                  <SelectTrigger className="w-[150px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Passo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os passos</SelectItem>
                    <SelectItem value="1">Passo 1</SelectItem>
                    <SelectItem value="2">Passo 2</SelectItem>
                    <SelectItem value="3">Passo 3</SelectItem>
                    <SelectItem value="4">Passo 4</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="completed">Completos</SelectItem>
                    <SelectItem value="incomplete">Incompletos</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={marketingFilter} onValueChange={setMarketingFilter}>
                  <SelectTrigger className="w-[150px]">
                    <Mail className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Marketing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="accepted">Aceitaram</SelectItem>
                    <SelectItem value="rejected">Recusaram</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={exportToExcel} disabled={filteredLeads.length === 0}>
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selection Actions */}
        {selectedLeads.size > 0 && (
          <Card className="mb-4 border-red-200 bg-red-50">
            <CardContent className="py-3 flex items-center justify-between">
              <span className="text-sm font-medium text-red-700">
                {selectedLeads.size} lead(s) selecionada(s)
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setSelectedLeads(new Set())}>
                  Limpar seleção
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm" disabled={isDeleting}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Eliminar selecionadas
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Tem a certeza?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta ação não pode ser revertida. Vai eliminar permanentemente {selectedLeads.size} lead(s) da base de dados.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={deleteSelectedLeads} className="bg-red-600 hover:bg-red-700">
                        Eliminar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox 
                        checked={filteredLeads.length > 0 && selectedLeads.size === filteredLeads.length}
                        onCheckedChange={toggleAllLeads}
                      />
                    </TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Cidade</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8">
                        A carregar...
                      </TableCell>
                    </TableRow>
                  ) : filteredLeads.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Nenhuma lead encontrada
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredLeads.map((lead) => (
                      <TableRow key={lead.id} className={selectedLeads.has(lead.id) ? "bg-red-50" : ""}>
                        <TableCell>
                          <Checkbox 
                            checked={selectedLeads.has(lead.id)}
                            onCheckedChange={() => toggleLeadSelection(lead.id)}
                          />
                        </TableCell>
                        <TableCell>{getStepBadge(lead.current_step, lead.completed)}</TableCell>
                        <TableCell className="font-medium">{lead.full_name || "-"}</TableCell>
                        <TableCell>{lead.email || "-"}</TableCell>
                        <TableCell>{lead.phone || "-"}</TableCell>
                        <TableCell>{lead.city || "-"}</TableCell>
                        <TableCell>
                          {format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: pt })}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          A mostrar {filteredLeads.length} de {leads.length} leads
        </p>
      </div>
    </div>
  );
};

export default Backoffice;
