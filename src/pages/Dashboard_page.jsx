import { OverlayTrigger, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table'
import userpic from '/img/userpic.png'

import {
  ResponsiveContainer,
  BarChart,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Label,
  Tooltip,
  PieChart, Pie, Cell,
  LabelList
} from "recharts";



const data1 = [
  { year: "2010-11", value: 200 },
  { year: "2011-12", value: 400 },
  { year: "2012-13", value: 600 },
  { year: "2013-14", value: 1300 },
  { year: "2014-15", value: 1600 },
  { year: "2015-16", value: 2000 },
  { year: "2016-17", value: 2500 },
  { year: "2017-18", value: 3000 },
  { year: "2018-19", value: 3500 },
  { year: "2019-20", value: 4000 }
];
const data2 = [
  { year: 1, profit: 3, trend: 2.5 },
  { year: 2, profit: 6, trend: 6 },
  { year: 3, profit: 8, trend: 8.5 },
  { year: 4, profit: 10, trend: 9.5 },
  { year: 5, profit: 9, trend: 9 },
  { year: 6, profit: 7, trend: 7 }
];
const data3 = [
  { name: 'History', value: 26 },
  { name: 'Literature', value: 15 },
  { name: 'Science', value: 19 },
  { name: 'Spanish', value: 16 },

  { name: 'Mathematics', value: 24 }
];

const COLORS = ['#4CAF50', '#F44336', '#E91E63', '#FFC107', '#2196F3'];

// 🎯 Render label exactly like image (subject name on top, % below)
const renderCustomLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={16}
      fontWeight="bold"
      fill="#222" // dark color for better visibility
      fontFamily="Arial, sans-serif"
    >
      <tspan x={x} dy="-0.6em">{data3[index].name}</tspan>
      <tspan x={x} dy="1.2em">{(percent * 100).toFixed(0)}%</tspan>
    </text>
  );
};
export default function Dashboard_page() {




  return (

    <>
      <section className='innerheader'>
        <div class="container-fluid topbar">
          <div class="innerrow">
            <div class="innertopbar">
              <h4>Dashboard (KPIs)</h4>
              <div className='btnright'>

                <button type="button" className='canclebtn'>Close</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='dashboardkpi'>
        <div className='top filter'>
          <div className='daterange'>
            <span>Date Filter</span>
            <select class="select datefilter">
              <option>All Time</option>
              <option vlaue="1">Jan</option>
              <option vlaue="2">Feb</option>
            </select>
          </div>
          <div className='channaltype'>
            <span>Channal Filter</span>
            <select class="select channalfilter">
              <option>All </option>
              <option vlaue="1">Doc</option>
              <option vlaue="2">Reg</option>
            </select>
          </div>
        </div>

        <div className='dataquerybox'>
          <div className='box databox'>
            <h5>Total Interactions</h5>
            <p>99999</p>
          </div>

          <div className='box databox'>
            <h5>Successful resolutions rate</h5>
            <p>2548</p>
          </div>

          <div className='box databox'>
            <h5>Unsolved queries</h5>
            <p>9854</p>
          </div>

          <div className='box databox'>
            <h5>Top 3 intents</h5>
            <ul>
              <li>125</li>
              <li>34</li>
              <li>676</li>
            </ul>
          </div>

          <div className='box databox'>
            <h5>Top 3 unmatched queries</h5>
            <ul>
              <li>125</li>
              <li>34</li>
              <li>676</li>
            </ul>
          </div>

          <div className='box databox'>
            <h5>Average Session duration</h5>
            <p>99999 Sec / 9999 min</p>
          </div>
        </div>


        <div className='chartpart'>
          <div className='chartsection'>
            <div className='chartone'>

              <div style={{ width: 600, height: 350, marginLeft: 30 }}>
                <h2 style={{ textAlign: "center", marginBottom: 10 }}>Interaction volume</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data1} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: "Year", position: "bottom", offset: 0 }} />
                    <YAxis
                      label={{
                        value: "Value (in ₹)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                      domain={[0, 4500]}
                      ticks={[0, 1000, 2000, 3000, 4000, 4500]}
                    />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3498db" barSize={90} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='charttwo'>
              <div style={{ width: "600", height: 350 }}>
                <h2 style={{ textAlign: "center" }}>Resolution Trend</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={data2} margin={{ top: 20, right: 40, bottom: 20, left: 10 }}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <XAxis dataKey="year">
                      <Label value="Years" position="bottom" offset={10} />
                    </XAxis>
                    <YAxis
                      label={{ value: "Profit, in millions", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />

                    {/* Blue Bars */}
                    <Bar dataKey="profit" fill="#1976d2" name="Profit" barSize={120}>
                      <LabelList dataKey="profit" position="top" fill="#000" />
                    </Bar>

                    {/* Dotted Trend Line */}
                    <Line
                      type="monotone"
                      dataKey="trend"
                      stroke="#8884d8"
                      strokeDasharray="5 5"
                      name="Poly. (Profit)"
                      dot={false}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='chartthree'>
            <div style={{ background: "#f3f3f3", padding: "20px", borderRadius: "8px", width: "fit-content" }}>
              <h2 style={{ textAlign: "center" }}>Interaction volume Channel-wise</h2>
              <PieChart width={400} height={400}>
                <Pie
                  data={data3}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={200}
                  dataKey="value"
                  label={renderCustomLabel}
                  labelLine={false}
                >
                  {data3.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>








      </section>

    </>

  );
}
