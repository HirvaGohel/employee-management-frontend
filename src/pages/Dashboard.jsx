import AttendanceChart from "../components/AttendanceChart";
export const Dashboard = () => { 
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <AttendanceChart />
    </div>
  );
}
