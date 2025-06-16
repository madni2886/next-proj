'use client';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('/api/stats');
      const result = await res.json();
      setData(result);
    };
    fetchStats();
  }, []);

  if (!data) {
    return <p className="text-center text-gray-500">Loading chart data...</p>;
  }

  return (
    <div className="w-full h-96 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Signups by Month</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.signupsByMonth}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
