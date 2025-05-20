"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import { useBrand } from "@/app/contexts/brand-context";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", sells: 222, commissions: 150 },
  { date: "2024-04-02", sells: 97, commissions: 180 },
  { date: "2024-04-03", sells: 167, commissions: 120 },
  { date: "2024-04-04", sells: 242, commissions: 260 },
  { date: "2024-04-05", sells: 373, commissions: 290 },
  { date: "2024-04-06", sells: 301, commissions: 340 },
  { date: "2024-04-07", sells: 245, commissions: 180 },
  { date: "2024-04-08", sells: 409, commissions: 320 },
  { date: "2024-04-09", sells: 59, commissions: 110 },
  { date: "2024-04-10", sells: 261, commissions: 190 },
  { date: "2024-04-11", sells: 327, commissions: 350 },
  { date: "2024-04-12", sells: 292, commissions: 210 },
  { date: "2024-04-13", sells: 342, commissions: 380 },
  { date: "2024-04-14", sells: 137, commissions: 220 },
  { date: "2024-04-15", sells: 120, commissions: 170 },
  { date: "2024-04-16", sells: 138, commissions: 190 },
  { date: "2024-04-17", sells: 446, commissions: 360 },
  { date: "2024-04-18", sells: 364, commissions: 410 },
  { date: "2024-04-19", sells: 243, commissions: 180 },
  { date: "2024-04-20", sells: 89, commissions: 150 },
  { date: "2024-04-21", sells: 137, commissions: 200 },
  { date: "2024-04-22", sells: 224, commissions: 170 },
  { date: "2024-04-23", sells: 138, commissions: 230 },
  { date: "2024-04-24", sells: 387, commissions: 290 },
  { date: "2024-04-25", sells: 215, commissions: 250 },
  { date: "2024-04-26", sells: 75, commissions: 130 },
  { date: "2024-04-27", sells: 383, commissions: 420 },
  { date: "2024-04-28", sells: 122, commissions: 180 },
  { date: "2024-04-29", sells: 315, commissions: 240 },
  { date: "2024-04-30", sells: 454, commissions: 380 },
  { date: "2024-05-01", sells: 165, commissions: 220 },
  { date: "2024-05-02", sells: 293, commissions: 310 },
  { date: "2024-05-03", sells: 247, commissions: 190 },
  { date: "2024-05-04", sells: 385, commissions: 420 },
  { date: "2024-05-05", sells: 481, commissions: 390 },
  { date: "2024-05-06", sells: 498, commissions: 520 },
  { date: "2024-05-07", sells: 388, commissions: 300 },
  { date: "2024-05-08", sells: 149, commissions: 210 },
  { date: "2024-05-09", sells: 227, commissions: 180 },
  { date: "2024-05-10", sells: 293, commissions: 330 },
  { date: "2024-05-11", sells: 335, commissions: 270 },
  { date: "2024-05-12", sells: 197, commissions: 240 },
  { date: "2024-05-13", sells: 197, commissions: 160 },
  { date: "2024-05-14", sells: 448, commissions: 490 },
  { date: "2024-05-15", sells: 473, commissions: 380 },
  { date: "2024-05-16", sells: 338, commissions: 400 },
  { date: "2024-05-17", sells: 499, commissions: 420 },
  { date: "2024-05-18", sells: 315, commissions: 350 },
  { date: "2024-05-19", sells: 235, commissions: 180 },
  { date: "2024-05-20", sells: 177, commissions: 230 },
  { date: "2024-05-21", sells: 82, commissions: 140 },
  { date: "2024-05-22", sells: 81, commissions: 120 },
  { date: "2024-05-23", sells: 252, commissions: 290 },
  { date: "2024-05-24", sells: 294, commissions: 220 },
  { date: "2024-05-25", sells: 201, commissions: 250 },
  { date: "2024-05-26", sells: 213, commissions: 170 },
  { date: "2024-05-27", sells: 420, commissions: 460 },
  { date: "2024-05-28", sells: 233, commissions: 190 },
  { date: "2024-05-29", sells: 78, commissions: 130 },
  { date: "2024-05-30", sells: 340, commissions: 280 },
  { date: "2024-05-31", sells: 178, commissions: 230 },
  { date: "2024-06-01", sells: 178, commissions: 200 },
  { date: "2024-06-02", sells: 470, commissions: 410 },
  { date: "2024-06-03", sells: 103, commissions: 160 },
  { date: "2024-06-04", sells: 439, commissions: 380 },
  { date: "2024-06-05", sells: 88, commissions: 140 },
  { date: "2024-06-06", sells: 294, commissions: 250 },
  { date: "2024-06-07", sells: 323, commissions: 370 },
  { date: "2024-06-08", sells: 385, commissions: 320 },
  { date: "2024-06-09", sells: 438, commissions: 480 },
  { date: "2024-06-10", sells: 155, commissions: 200 },
  { date: "2024-06-11", sells: 92, commissions: 150 },
  { date: "2024-06-12", sells: 492, commissions: 420 },
  { date: "2024-06-13", sells: 81, commissions: 130 },
  { date: "2024-06-14", sells: 426, commissions: 380 },
  { date: "2024-06-15", sells: 307, commissions: 350 },
  { date: "2024-06-16", sells: 371, commissions: 310 },
  { date: "2024-06-17", sells: 475, commissions: 520 },
  { date: "2024-06-18", sells: 107, commissions: 170 },
  { date: "2024-06-19", sells: 341, commissions: 290 },
  { date: "2024-06-20", sells: 408, commissions: 450 },
  { date: "2024-06-21", sells: 169, commissions: 210 },
  { date: "2024-06-22", sells: 317, commissions: 270 },
  { date: "2024-06-23", sells: 480, commissions: 530 },
  { date: "2024-06-24", sells: 132, commissions: 180 },
  { date: "2024-06-25", sells: 141, commissions: 190 },
  { date: "2024-06-26", sells: 434, commissions: 380 },
  { date: "2024-06-27", sells: 448, commissions: 490 },
  { date: "2024-06-28", sells: 149, commissions: 200 },
  { date: "2024-06-29", sells: 103, commissions: 160 },
  { date: "2024-06-30", sells: 446, commissions: 400 },
];

const chartConfig = {
  sells: {
    label: "Ventas",
    color: "#0070f3",
  },
  commissions: {
    label: "Comisiones",
    color: "#ff4081",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const { brandData } = useBrand();
  const primary_color = brandData.primary_color;
  const secondary_color = brandData.secondary_color;
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Ingresos totales</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total para los últimos 3 meses
          </span>
          <span className="@[540px]/card:hidden">Últimos 3 meses</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Últimos 3 meses</ToggleGroupItem>
            <ToggleGroupItem value="30d">Últimos 30 días</ToggleGroupItem>
            <ToggleGroupItem value="7d">Últimos 7 días</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Seleccionar un valor"
            >
              <SelectValue placeholder="Últimos 3 meses" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Últimos 3 meses
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Últimos 30 días
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 días
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSells" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={primary_color} stopOpacity={1.0} />
                <stop
                  offset="95%"
                  stopColor={primary_color}
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillCommissions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={secondary_color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={secondary_color}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="commissions"
              type="natural"
              fill="url(#fillCommissions)"
              stroke={secondary_color}
              stackId="a"
            />
            <Area
              dataKey="sells"
              type="natural"
              fill="url(#fillSells)"
              stroke={primary_color}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
