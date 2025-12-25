import { nav } from "framer-motion/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate();   // ✅ correct hook

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#fff7f2]">
      
      {/* LEFT SECTION */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-b from-black to-black p-10">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 max-w-md text-white">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Empowering people through seamless HR management.
          </h1>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team"
            className="rounded-xl mb-6"
          />

          <p className="text-sm opacity-90">
            Efficiently manage your workforce, streamline operations effortlessly.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">DREAMLEO</h2>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Sign In
          </h3>
          <p className="text-center text-gray-500 mb-8">
            Please enter your details to sign in
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember Me
              </label>
              <span className="text-red-500 cursor-pointer">
                Forgot Password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Sign In
            </button>

            {/* Register */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <span className="text-black cursor-pointer font-medium">
                Create Account
              </span>
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
                Facebook
              </button>
              <button className="flex-1 border py-2 rounded-lg">
                Google
              </button>
              <button className="flex-1 bg-black text-white py-2 rounded-lg">
                Apple
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-gray-600 mt-8">
            Copyright © 2025 - SmartHR
          </p>
        </div>
      </div>
    </div>
  );
}