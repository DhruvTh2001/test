import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance';
import { OverlayTrigger, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import userpic from '/img/userpic.png';

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

const COLORS = ['#4CAF50', '#F44336', '#E91E63', '#FFC107', '#2196F3'];

const Dashboard_page = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    api.get('/dashboard/data')
      .then(res => {
        setDashboardData(res.data);
      })
      .catch(err => {
        console.error("❌ Failed to load dashboard:", err);
      });
  }, []);

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
        fill="#222"
      >
        <tspan x={x} dy="-0.6em">
          {dashboardData?.chart3?.[index]?.name}
        </tspan>
        <tspan x={x} dy="1.2em">
          {(percent * 100).toFixed(0)}%
        </tspan>
      </text>
    );
  };

  return (
    <>
      <section className='innerheader'>
        <div className="container-fluid topbar">
          <div className="innerrow">
            <div className="innertopbar">
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
            <select className="select datefilter">
              <option>All Time</option>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
            </select>
          </div>
          <div className='channaltype'>
            <span>Channel Filter</span>
            <select className="select channalfilter">
              <option>All </option>
              <option value="1">Doc</option>
              <option value="2">Reg</option>
            </select>
          </div>
        </div>

        <div className='dataquerybox'>
          <div className='box databox'>
            <h5>Total Interactions</h5>
            <p>{dashboardData?.total_interactions ?? "..."}</p>
          </div>
          <div className='box databox'>
            <h5>Successful resolutions rate</h5>
            <p>{dashboardData?.success_rate ?? "..."}</p>
          </div>
          <div className='box databox'>
            <h5>Unsolved queries</h5>
            <p>{dashboardData?.unsolved_queries ?? "..."}</p>
          </div>
          <div className='box databox'>
            <h5>Top 3 intents</h5>
            <ul>
              {dashboardData?.top_intents?.map((val, i) => (
                <li key={i}>{val}</li>
              )) || <li>Loading...</li>}
            </ul>
          </div>
          <div className='box databox'>
            <h5>Top 3 unmatched queries</h5>
            <ul>
              {dashboardData?.top_unmatched?.map((val, i) => (
                <li key={i}>{val}</li>
              )) || <li>Loading...</li>}
            </ul>
          </div>
          <div className='box databox'>
            <h5>Average Session duration</h5>
            <p>{dashboardData?.avg_session_duration ?? "..."}</p>
          </div>
        </div>

        <div className='chartpart'>
          <div className='chartsection'>
            <div className='chartone'>
              <div style={{ width: 600, height: 350, marginLeft: 30 }}>
                <h2 style={{ textAlign: "center", marginBottom: 10 }}>Interaction volume</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dashboardData?.chart1 || []} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: "Year", position: "bottom" }} />
                    <YAxis label={{ value: "Value", angle: -90, position: "insideLeft" }} />
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
                  <ComposedChart data={dashboardData?.chart2 || []} margin={{ top: 20, right: 40, bottom: 20, left: 10 }}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <XAxis dataKey="year">
                      <Label value="Years" position="bottom" offset={10} />
                    </XAxis>
                    <YAxis label={{ value: "Profit", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                    <Bar dataKey="profit" fill="#1976d2" name="Profit" barSize={120}>
                      <LabelList dataKey="profit" position="top" fill="#000" />
                    </Bar>
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
                  data={dashboardData?.chart3 || []}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={200}
                  dataKey="value"
                  label={renderCustomLabel}
                  labelLine={false}
                >
                  {(dashboardData?.chart3 || []).map((entry, index) => (
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
};

export default Dashboard_page;