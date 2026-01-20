import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, Legend, LineChart, Line } from "recharts";
import { format, subDays, parseISO, startOfDay, eachDayOfInterval } from "date-fns";
import { pt } from "date-fns/locale";
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, TrendingUp } from "lucide-react";

interface Lead {
  id: string;
  current_step: number;
  completed: boolean;
  created_at: string;
}

interface DailyChartProps {
  leads: Lead[];
}

const DailyChart = ({ leads }: DailyChartProps) => {
  const [period, setPeriod] = useState<"7" | "14" | "30">("14");
  
  const dailyData = useMemo(() => {
    const days = parseInt(period);
    const today = startOfDay(new Date());
    const startDate = subDays(today, days - 1);
    
    // Create array of all days in range
    const dateRange = eachDayOfInterval({ start: startDate, end: today });
    
    // Group leads by day
    const leadsByDay = leads.reduce((acc, lead) => {
      const date = format(parseISO(lead.created_at), "yyyy-MM-dd");
      if (!acc[date]) {
        acc[date] = { total: 0, step1: 0, step2: 0, step3: 0, step4: 0, completed: 0 };
      }
      acc[date].total++;
      if (lead.completed) {
        acc[date].completed++;
      } else {
        const stepKey = `step${lead.current_step}` as keyof typeof acc[string];
        if (stepKey in acc[date]) {
          (acc[date] as any)[stepKey]++;
        }
      }
      return acc;
    }, {} as Record<string, { total: number; step1: number; step2: number; step3: number; step4: number; completed: number }>);
    
    // Map to chart data with all days
    return dateRange.map(date => {
      const dateStr = format(date, "yyyy-MM-dd");
      const dayData = leadsByDay[dateStr] || { total: 0, step1: 0, step2: 0, step3: 0, step4: 0, completed: 0 };
      return {
        date: format(date, "dd/MM", { locale: pt }),
        fullDate: format(date, "dd 'de' MMMM", { locale: pt }),
        ...dayData,
      };
    });
  }, [leads, period]);

  const stepBreakdownData = useMemo(() => {
    const days = parseInt(period);
    const today = startOfDay(new Date());
    const startDate = subDays(today, days - 1);
    
    // Filter leads in date range and count by step
    const filteredLeads = leads.filter(lead => {
      const leadDate = startOfDay(parseISO(lead.created_at));
      return leadDate >= startDate && leadDate <= today;
    });

    return [
      { name: "Passo 1", value: filteredLeads.filter(l => l.current_step === 1 && !l.completed).length, fill: "#ef4444" },
      { name: "Passo 2", value: filteredLeads.filter(l => l.current_step === 2 && !l.completed).length, fill: "#f59e0b" },
      { name: "Passo 3", value: filteredLeads.filter(l => l.current_step === 3 && !l.completed).length, fill: "#eab308" },
      { name: "Passo 4", value: filteredLeads.filter(l => l.current_step === 4 && !l.completed).length, fill: "#3b82f6" },
      { name: "Completo", value: filteredLeads.filter(l => l.completed).length, fill: "#22c55e" },
    ];
  }, [leads, period]);

  const totals = useMemo(() => {
    return dailyData.reduce((acc, day) => ({
      total: acc.total + day.total,
      completed: acc.completed + day.completed,
    }), { total: 0, completed: 0 });
  }, [dailyData]);

  const avgPerDay = totals.total / parseInt(period);
  const conversionRate = totals.total > 0 ? (totals.completed / totals.total * 100).toFixed(1) : "0";

  return (
    <div className="space-y-6 mb-8">
      {/* Period selector and summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Análise Temporal
          </h2>
          <Select value={period} onValueChange={(v) => setPeriod(v as "7" | "14" | "30")}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="14">Últimos 14 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-6 text-sm">
          <div>
            <span className="text-muted-foreground">Total no período: </span>
            <span className="font-bold">{totals.total}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Média/dia: </span>
            <span className="font-bold">{avgPerDay.toFixed(1)}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Conversão: </span>
            <span className="font-bold text-green-600">{conversionRate}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily leads area chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Leads por Dia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={dailyData}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  interval={parseInt(period) > 14 ? 2 : 0}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  labelFormatter={(label, payload) => payload?.[0]?.payload?.fullDate || label}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="total" 
                  name="Total Leads"
                  stroke="#6366f1" 
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="completed" 
                  name="Completos"
                  stroke="#22c55e" 
                  fillOpacity={1}
                  fill="url(#colorCompleted)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Step breakdown for period */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribuição no Período</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={stepBreakdownData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value: number) => [value, "Leads"]}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {stepBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Stacked daily chart by step */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Evolução por Passo (Diário)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                interval={parseInt(period) > 14 ? 2 : 0}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                labelFormatter={(label, payload) => payload?.[0]?.payload?.fullDate || label}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="step1" name="Passo 1" stackId="a" fill="#ef4444" />
              <Bar dataKey="step2" name="Passo 2" stackId="a" fill="#f59e0b" />
              <Bar dataKey="step3" name="Passo 3" stackId="a" fill="#eab308" />
              <Bar dataKey="step4" name="Passo 4" stackId="a" fill="#3b82f6" />
              <Bar dataKey="completed" name="Completo" stackId="a" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyChart;
