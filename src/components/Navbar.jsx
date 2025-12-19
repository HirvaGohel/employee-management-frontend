import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import { getUser } from "../utils/auth";

export default function Navbar({ toggleSidebar }) {
  const user = getUser();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6 shadow-sm">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={toggleSidebar}
        >
          <FaBars size={18} />
        </button>

        <h1 className="text-base md:text-lg font-semibold text-gray-800">
          Employee Management
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        
        {/* Notification */}
        <button className="relative text-gray-600 hover:text-blue-600">
          <FaBell size={18} />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <FaUserCircle size={22} className="text-gray-600" />
          <div className="hidden sm:block text-sm leading-tight">
            <p className="font-medium text-gray-800">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}