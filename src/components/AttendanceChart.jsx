import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: "Mon", hours: 8 },
  { day: "Tue", hours: 7 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 8 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white p-5 rounded shadow mt-6">
      <h2 className="font-bold mb-4">Weekly Attendance</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}