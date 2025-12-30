import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Profile from "./pages/Profile";
import EmployeesList from "./pages/EmployeesList";
import MyAttendance from "./pages/MyAttendance";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import LeavePolicy from "./components/LeavePolicy";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import Holidays from "./components/Holidays";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<MainLayout><EmployeeDashboard /></MainLayout>} />
      <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
      <Route path="/employees" element={<MainLayout><EmployeesList /></MainLayout>} />
      <Route path="/attendance" element={<MainLayout><MyAttendance /></MainLayout>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leave" element={<MainLayout><LeavePolicy /></MainLayout>} />
      <Route path="/admindashboard" element={<MainLayout><AdminDashboard /></MainLayout>} />
      <Route path="/employeedashboard" element={<MainLayout><EmployeeDashboard /></MainLayout>} />
      <Route path="/holidays" element={<MainLayout><Holidays /></MainLayout>} />
    </Routes>
  );
}