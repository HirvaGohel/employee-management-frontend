import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarCheck,
  FaSignOutAlt,
} from "react-icons/fa";
import { getUser, logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const user = getUser();
  const navigate = useNavigate();


  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      {/* User Info */}
      <div className="mb-8 text-center">
        <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto flex items-center justify-center text-xl">
          {user?.name?.charAt(0)}
        </div>
        <h3 className="mt-3 font-bold">{user?.name}</h3>
        <p className="text-xs text-gray-400">{user?.email}</p>
      </div>

      {/* Menu */}
      <nav className="space-y-3">
        <MenuItem icon={<FaTachometerAlt />} text="Dashboard" onClick={() => navigate("/dashboard")} />
        <MenuItem icon={<FaUsers />} text="Employees" onClick={() => navigate("/employees")} />
        <MenuItem icon={<FaCalendarCheck />} text="Attendance" onClick={() => navigate("/attendance")} />
        <MenuItem icon={<FaCalendarCheck />} text="Leave Approvals" onClick={() => navigate("/leave-approvals")} />

        <button
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
          className="flex items-center gap-3 text-red-400 mt-6"
        >
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
}

function MenuItem({ icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 w-full text-left hover:text-blue-400"
    >
      {icon} {text}
    </button>
  );
}