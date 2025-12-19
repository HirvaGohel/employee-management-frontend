import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Dashboard } from './pages/Dashboard.jsx';
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import MainLayout from "./layouts/MainLayout.jsx";
import EmployeesList from "./pages/EmployeesList.jsx";
import AttendanceAdmin from "./pages/AttendanceAdmin.jsx";
import LeaveApprovals from "./pages/LeaveApprovals.jsx";
import ApplyLeave from "./pages/ApplyLeave.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <MainLayout>
              <EmployeesList />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AttendanceAdmin />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
  path="/leave-approvals"
  element={
    <ProtectedRoute>
      <MainLayout>
        <LeaveApprovals />
      </MainLayout>
    </ProtectedRoute>
  }
/>

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
  
export default App;