import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [theme, setTheme] = useState("dark");

  // 🌗 Auto theme detect
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  // 🔐 LOGIN LOGIC (Backend Ready)
  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email,
      role,
      token: "FAKE_JWT_TOKEN",
    };

    if (remember) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
    }

    // 🎯 Redirect by role
    role === "admin"
      ? navigate("/admin-dashboard")
      : navigate("/dashboard");
  };

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:text-white">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_60%)]"></div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-md p-8 rounded-2xl 
          bg-white/10 backdrop-blur-xl shadow-2xl border border-white/10"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Secure Login
          </h2>

          {/* Role Switch */}
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={() => setRole("admin")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              ${role === "admin" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              <FaUserShield /> Admin
            </button>

            <button
              onClick={() => setRole("employee")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              ${role === "employee" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              <FaUserTie /> Employee
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-gray-900/70 border border-gray-700 px-4 py-3 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg bg-gray-900/70 border border-gray-700 px-4 py-3 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                Remember me
              </label>

              <button type="button" className="hover:text-blue-400">
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium text-white shadow-lg"
            >
              Login as {role}
            </motion.button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-6">
            Employee Management System
          </p>
        </motion.div>
      </div>
    </div>
  );
}