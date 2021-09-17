import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useProjectsState } from "../../AppContext";
import Title from "./Title";

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490,
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590,
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350,
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480,
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460,
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380,
//   },
// ];

export default function Chart() {
  const theme = useTheme();
  const projects = useProjectsState();

  // const dataProject = projects
  //   .map(({ name: projectName, assets }) => {
  //     return assets.map(({ name: assetName, quantity, from }) => ({
  //       projectName,
  //       [assetName]: quantity,
  //       quantity,
  //       month: new Date(from).getMonth() + 1,
  //     }));
  //   })
  //   .flat().reduce((res, val) => {

  //     return res;
  //   }, []);

  const dataProject = projects.map(({ name: projectName, assets }) => {
    return assets.map(({ name: assetName, quantity, from }) => ({
      projectName,
      [assetName]: quantity,
      quantity,
      month: new Date(from).getMonth() + 1,
    }));
  });

  console.log(dataProject);

  return (
    <>
      <Title>Today</Title>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={dataProject}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="projectName"
            scale="band"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="DR304" stackId="DR304" fill="#8884d8" />
          <Bar dataKey="AZ10111" stackId="AZ10111" fill="#82ca9d" />
          <Line type="monotone" dataKey="month" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}
