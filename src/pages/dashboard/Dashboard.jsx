import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

export default function Dashboard() {
  // TEMP (later from login / redux / api)
  const role = "admin"; // or "employee"

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {role === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
}