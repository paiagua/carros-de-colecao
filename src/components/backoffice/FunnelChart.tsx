import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, FunnelChart as RechartsFunnel, Funnel, LabelList } from "recharts";

interface FunnelChartProps {
  stats: {
    total: number;
    step1: number;
    step2: number;
    step3: number;
    step4: number;
    completed: number;
  };
}

const FunnelChart = ({ stats }: FunnelChartProps) => {
  // Calculate funnel data - cumulative approach (how many reached each step)
  const funnelData = [
    { 
      name: "Iniciaram", 
      value: stats.total, 
      fill: "#6366f1",
      percentage: 100
    },
    { 
      name: "Passo 2+", 
      value: stats.total - stats.step1, 
      fill: "#f59e0b",
      percentage: stats.total > 0 ? Math.round(((stats.total - stats.step1) / stats.total) * 100) : 0
    },
    { 
      name: "Passo 3+", 
      value: stats.step3 + stats.step4 + stats.completed, 
      fill: "#eab308",
      percentage: stats.total > 0 ? Math.round(((stats.step3 + stats.step4 + stats.completed) / stats.total) * 100) : 0
    },
    { 
      name: "Passo 4+", 
      value: stats.step4 + stats.completed, 
      fill: "#3b82f6",
      percentage: stats.total > 0 ? Math.round(((stats.step4 + stats.completed) / stats.total) * 100) : 0
    },
    { 
      name: "Vendas", 
      value: stats.completed, 
      fill: "#22c55e",
      percentage: stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0
    },
  ];

  const barData = [
    { name: "Passo 1", value: stats.step1, fill: "#ef4444" },
    { name: "Passo 2", value: stats.step2, fill: "#f59e0b" },
    { name: "Passo 3", value: stats.step3, fill: "#eab308" },
    { name: "Passo 4", value: stats.step4, fill: "#3b82f6" },
    { name: "Completo", value: stats.completed, fill: "#22c55e" },
  ];

  const conversionRate = stats.total > 0 ? ((stats.completed / stats.total) * 100).toFixed(1) : "0";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Funnel Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between">
            Funil de Conversão
            <span className="text-sm font-normal text-muted-foreground">
              Taxa: <span className="text-green-600 font-bold">{conversionRate}%</span>
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {funnelData.map((item, index) => (
              <div key={item.name} className="relative">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground">
                    {item.value} ({item.percentage}%)
                  </span>
                </div>
                <div className="h-8 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="h-full rounded-lg transition-all duration-500 flex items-center justify-center text-white text-xs font-medium"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.fill,
                      minWidth: item.value > 0 ? '40px' : '0',
                    }}
                  >
                    {item.value > 0 && item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bar Chart - Current Step Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Distribuição por Passo</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip 
                formatter={(value: number) => [value, "Leads"]}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default FunnelChart;
