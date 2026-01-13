import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, RefreshCcw, Search, Filter, ArrowLeft, Users, CheckCircle, Clock, AlertCircle, LogOut } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

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
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/backoffice/login");
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

    setFilteredLeads(result);
  }, [searchTerm, stepFilter, statusFilter, leads]);

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
      "Código Postal",
      "Cidade",
      "NIB",
      "Nome Titular",
      "Morada Titular",
      "Código Postal Titular",
      "Cidade Titular",
      "Termos Aceites",
      "Passo Atual",
      "Completo",
      "Data Criação",
      "Última Atualização",
    ];

    const rows = filteredLeads.map((lead) => [
      lead.full_name || "",
      lead.email || "",
      lead.phone || "",
      lead.marketing_consent ? "Sim" : "Não",
      lead.first_book || "",
      lead.address || "",
      lead.door_number || "",
      lead.floor || "",
      `${lead.postal_code_1 || ""}-${lead.postal_code_2 || ""}`,
      lead.city || "",
      lead.nib || "",
      lead.account_holder_name || "",
      lead.account_holder_address || "",
      `${lead.account_holder_postal_code_1 || ""}-${lead.account_holder_postal_code_2 || ""}`,
      lead.account_holder_city || "",
      lead.terms_accepted ? "Sim" : "Não",
      lead.current_step.toString(),
      lead.completed ? "Sim" : "Não",
      format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: pt }),
      format(new Date(lead.updated_at), "dd/MM/yyyy HH:mm", { locale: pt }),
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(";"))
      .join("\n");

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
            <Button variant="outline" onClick={fetchLeads} disabled={loading}>
              <RefreshCcw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Atualizar
            </Button>
            <Button onClick={exportToExcel} disabled={filteredLeads.length === 0}>
              <Download className="h-4 w-4 mr-2" />
              Exportar Excel
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
              <div className="flex gap-4">
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
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
                      <TableCell colSpan={6} className="text-center py-8">
                        A carregar...
                      </TableCell>
                    </TableRow>
                  ) : filteredLeads.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Nenhuma lead encontrada
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredLeads.map((lead) => (
                      <TableRow key={lead.id}>
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
