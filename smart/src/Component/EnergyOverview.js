import React from "react";
import "../css/EnergyOverview.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const energyData = [
  { day: "Mon", usage: 300 },
  { day: "Tue", usage: 280 },
  { day: "Wed", usage: 220 },
  { day: "Thu", usage: 210 },
  { day: "Fri", usage: 150 },
  { day: "Sat", usage: 140 },
  { day: "Sun", usage: 400 },
  { day: "Mon", usage: 240 },
  { day: "Tue", usage: 240 },
  { day: "Wed", usage: 100 },
];

const tips = [
  {
    icon: "🎯",
    title: "Reduce Peak Usage",
    subtitle: "Cost Saving",
    description: "Shift heavy appliance use to off-peak hours to lower your bill.",
    action: "View Report",
  },
  {
    icon: "🏠",
    title: "Optimize AC Settings",
    subtitle: "Efficiency",
    description: "Set your AC to 24 degree C for optimal energy efficiency.",
    action: "Apply Setting",
  },
  {
    icon: "💡",
    title: "Upgrade Lighting",
    subtitle: "Recommendation",
    description: "Switch LED bulbs to save up to 80% on lighting costs",
    action: "Setting",
  },
];

const EnergyOverview = () => {
  return (
    <div className="energy-overview">
      <h2 className="energy-title">Energy Overview</h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9333ea" stopOpacity={1} />
                <stop offset="100%" stopColor="#a855f7" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="tips-grid">
        {tips.map((tip, idx) => (
          <div key={idx} className="tip-card">
            <div>
              <div className="tip-icon">{tip.icon}</div>
              <p className="tip-subtitle">{tip.subtitle}</p>
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-description">{tip.description}</p>
            </div>
            <button className="tip-button">{tip.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyOverview;
