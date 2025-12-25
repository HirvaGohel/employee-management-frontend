import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaHeadset,
  FaUserCircle,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // ✅ ADD

  return (
    <div className="relative">
      {/* Profile Icon */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-45 bg-white rounded-xl shadow-lg border z-50">

          {/* User Info */}
          <div className="flex items-center gap-3 p-4 border-b">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Kevin Larry</h4>
              <p className="text-sm text-gray-500">warren@example.com</p>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="py-2 text-sm text-gray-700">
            <MenuItem
              icon={<FaUser />}
              label="My Profile"
              onClick={() => {
                navigate("/profile"); // ✅ GO TO PROFILE PAGE
                setOpen(false);
              }}
            />

            <MenuItem icon={<FaCog />} label="Settings" />
            <MenuItem icon={<FaHeadset />} label="Status" />
            <MenuItem icon={<FaUserCircle />} label="My Account" />
            <MenuItem icon={<FaBook />} label="Knowledge Base" />
          </ul>

          {/* Logout */}
          <div className="border-t">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-gray-100"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Menu Item */
function MenuItem({ icon, label, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100"
      >
        {icon}
        {label}
      </button>
    </li>
  );
}