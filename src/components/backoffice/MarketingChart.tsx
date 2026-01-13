import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Mail, MailX, TrendingUp } from "lucide-react";

interface Lead {
  id: string;
  marketing_consent: boolean | null;
  completed: boolean;
  current_step: number;
}

interface MarketingChartProps {
  leads: Lead[];
}

const MarketingChart = ({ leads }: MarketingChartProps) => {
  const marketingAccepted = leads.filter(l => l.marketing_consent === true).length;
  const marketingRejected = leads.filter(l => l.marketing_consent === false).length;
  const marketingNull = leads.filter(l => l.marketing_consent === null).length;

  const pieData = [
    { name: "Aceitaram", value: marketingAccepted, color: "#22c55e" },
    { name: "Recusaram", value: marketingRejected, color: "#ef4444" },
    { name: "Sem resposta", value: marketingNull, color: "#94a3b8" },
  ].filter(item => item.value > 0);

  // Marketing consent by step
  const stepMarketingData = [
    {
      name: "Passo 1",
      aceites: leads.filter(l => l.current_step === 1 && !l.completed && l.marketing_consent === true).length,
      recusados: leads.filter(l => l.current_step === 1 && !l.completed && l.marketing_consent === false).length,
    },
    {
      name: "Passo 2",
      aceites: leads.filter(l => l.current_step === 2 && !l.completed && l.marketing_consent === true).length,
      recusados: leads.filter(l => l.current_step === 2 && !l.completed && l.marketing_consent === false).length,
    },
    {
      name: "Passo 3",
      aceites: leads.filter(l => l.current_step === 3 && !l.completed && l.marketing_consent === true).length,
      recusados: leads.filter(l => l.current_step === 3 && !l.completed && l.marketing_consent === false).length,
    },
    {
      name: "Passo 4",
      aceites: leads.filter(l => l.current_step === 4 && !l.completed && l.marketing_consent === true).length,
      recusados: leads.filter(l => l.current_step === 4 && !l.completed && l.marketing_consent === false).length,
    },
    {
      name: "Completo",
      aceites: leads.filter(l => l.completed && l.marketing_consent === true).length,
      recusados: leads.filter(l => l.completed && l.marketing_consent === false).length,
    },
  ];

  // Conversion rate comparison
  const completedWithMarketing = leads.filter(l => l.completed && l.marketing_consent === true).length;
  const completedWithoutMarketing = leads.filter(l => l.completed && l.marketing_consent === false).length;
  
  const conversionWithMarketing = marketingAccepted > 0 
    ? ((completedWithMarketing / marketingAccepted) * 100).toFixed(1) 
    : "0";
  const conversionWithoutMarketing = marketingRejected > 0 
    ? ((completedWithoutMarketing / marketingRejected) * 100).toFixed(1) 
    : "0";

  const acceptanceRate = leads.length > 0 
    ? ((marketingAccepted / leads.length) * 100).toFixed(1) 
    : "0";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Marketing Stats Cards */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Mail className="h-5 w-5 text-green-600" />
            Consentimento Marketing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Taxa de aceitação</span>
              <span className="text-2xl font-bold text-green-600">{acceptanceRate}%</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-lg font-bold text-green-600">{marketingAccepted}</p>
                <p className="text-xs text-muted-foreground">Aceites</p>
              </div>
              <div className="p-2 bg-red-50 dark:bg-red-950 rounded-lg">
                <p className="text-lg font-bold text-red-600">{marketingRejected}</p>
                <p className="text-xs text-muted-foreground">Recusados</p>
              </div>
              <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-lg font-bold text-slate-600">{marketingNull}</p>
                <p className="text-xs text-muted-foreground">N/A</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Distribuição Marketing</CardTitle>
        </CardHeader>
        <CardContent>
          {pieData.length > 0 ? (
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number, name: string) => [value, name]}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[180px] flex items-center justify-center text-muted-foreground">
              Sem dados
            </div>
          )}
        </CardContent>
      </Card>

      {/* Conversion Comparison */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Conversão por Marketing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Com marketing</span>
                </div>
                <span className="text-xl font-bold text-green-600">{conversionWithMarketing}%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {completedWithMarketing} vendas de {marketingAccepted} leads
              </p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MailX className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium">Sem marketing</span>
                </div>
                <span className="text-xl font-bold text-red-600">{conversionWithoutMarketing}%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {completedWithoutMarketing} vendas de {marketingRejected} leads
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingChart;
