// src/app/user-stats/page.js
'use client';

import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

export default function UserStatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/user-states')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      const { count, emails } = payload[0].payload;
      console.log("payload",payload)
      return (
        <div className="bg-white p-3 border shadow rounded text-black text-sm">
          <p className="font-semibold">Date: {label}</p>
          <p>Registrations: {count}</p>
          <p className="mt-1">Emails:</p> 
          <ul className="list-disc list-inside">
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Registrations Over Time</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
