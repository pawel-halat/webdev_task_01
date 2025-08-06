import { type FC } from "react";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";
import type { GroupPieChartDataItem } from "./types/group-piechart-data-item";

interface Props {
  data: GroupPieChartDataItem[];
}
export const BarChart: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <RechartsBarChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 55,
        right: 30,
        left: 20,
        bottom: 25,
      }}
      barSize={20}
    >
      <XAxis
        dataKey="name"
        scale="point"
        padding={{ left: 10, right: 10 }}
        tick={{ fontSize: 12 }}
      />
      <YAxis />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
    </RechartsBarChart>
  </ResponsiveContainer>
);
