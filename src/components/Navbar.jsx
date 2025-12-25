import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  const [punchedIn, setPunchedIn] = useState(false);
  const [time, setTime] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);

  const handlePunch = () => {
    setPunchedIn(!punchedIn);
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-50">

      {/* LEFT – Search */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search in HRMS..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-orange-400"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 relative">

        {/* Punch Button */}
        <button
          onClick={handlePunch}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
            ${punchedIn
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
            }`}
        >
          <FaRegClock />
          {punchedIn ? "Punch Out" : "Punch In"}
        </button>

        {/* Time */}
        {time && (
          <span className="text-xs text-gray-500">
            {punchedIn ? "In:" : "Out:"} {time}
          </span>
        )}

        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          onClick={() => setOpenProfile(!openProfile)}
          className="w-9 h-9 rounded-full cursor-pointer"
        />

        {/* PROFILE DROPDOWN */}
        {openProfile && (
          <div className="absolute right-0 top-14 w-64 bg-white rounded-xl shadow-lg border">

            {/* User Info */}
            <div className="flex items-center gap-3 p-4 border-b">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Kevin Larry</p>
                <p className="text-xs text-gray-500">warren@example.com</p>
              </div>
            </div>

            {/* Menu */}
            <ul className="p-2 text-sm">
              <li
                onClick={() => navigate("/profile")}
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
              >
                <FaUser /> My Profile
              </li>

              <li className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <FaRegClock /> Activity Log
              </li>

              <li className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <FaCog /> Settings
              </li>

              <li className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <FaRegClock /> Status
              </li>

              <li className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <FaRegClock /> My Account
              </li>

              <li className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <FaRegClock /> Knowledge Base
              </li>

              <li className="border-t mt-2 pt-2">
                <div
                  onClick={() => navigate("/")}
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-red-100 text-red-600 cursor-pointer"
                >
                  <FaSignOutAlt /> Logout
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}