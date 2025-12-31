import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCalendarCheck,
  FaSignOutAlt,
  FaAngleDown,
  FaAirFreshener,
  FaAffiliatetheme,
  FaPauseCircle,
  FaPaw,
  FaProjectDiagram,
} from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { Fa1, FaAvianex, FaPause } from "react-icons/fa6";

const menuLink =
  "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition";

const activeLink =
  "bg-gray-200 font-semibold";

export default function Sidebar() {
  const [openDashboard, setOpenDashboard] = useState(true);

  return (
    <aside className="w-64 min-h-screen bg-white border-r p-4 sticky top-0">
      
      {/* LOGO */}
      <h1 className="text-xl font-bold mb-6 text-center">DREAMLEO</h1>

      {/* MAIN MENU */}
      <p className="text-xs text-gray-400 uppercase mb-2">
        Main Menu
      </p>

      {/* DASHBOARD (COLLAPSIBLE) */}
      <div
        onClick={() => setOpenDashboard(!openDashboard)}
        className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 cursor-pointer"
      >
        <div className="flex items-center gap-3 font-medium">
          <FaHome />
          Dashboard
        </div>
        <ChevronDown
          size={18}
          className={`${openDashboard ? "rotate-180" : ""} transition`}
        />
      </div>

      {/* DASHBOARD SUB MENU */}
      {openDashboard && (
        <div className="mt-2 space-y-1">
          <NavLink
            to="/admindashboard"
            className={({ isActive }) =>
              `pl-6 py-2 block text-sm rounded cursor-pointer
              ${
                isActive
                  ? "border-l-4 bg-orange-50"
                  : "text-gray-600 hover:bg--100"
              }`
            }
          >
            AdminDashboard
          </NavLink>
            
          <NavLink
            to="/employeedashboard"
            className={({ isActive }) =>
              `pl-6 py-2 block text-sm rounded cursor-pointer
              ${
                isActive
                  ? "border-l-4 bg-orange-50"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            EmployeeDashboard
          </NavLink>

        </div>
      )}

      {/* OTHER MENU */}
      <div className="mt-2 space-y-1">
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            `${menuLink} ${isActive ? activeLink : ""}`
          }
        >
          <FaUsers />
          Employees
        </NavLink>

        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `${menuLink} ${isActive ? activeLink : ""}`
          }
        >
          <FaCalendarCheck />
          Attendance
        </NavLink>

        <NavLink
          to="/leave"
          className={({ isActive }) =>
            `${menuLink} ${isActive ? activeLink : ""}`
          }
        >
          <FaSignOutAlt />
          Leave
        </NavLink>
        
        <NavLink
          to="/holidays"
          className={({ isActive }) =>
            `${menuLink} ${isActive ? activeLink : ""}`
          }
        >
          <FaAvianex />
          Holidays
        </NavLink>

         <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `${menuLink} ${isActive ? activeLink : ""}`
          }
        >
          <FaAffiliatetheme />
          Jobs
        </NavLink> 

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${menuLink} ${isActive ? activeLink : ""}`
          }
        >
          <FaProjectDiagram />
          Projects
        </NavLink>

      </div>
    </aside>
  );
}

