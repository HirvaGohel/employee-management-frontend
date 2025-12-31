import { FaCog } from "react-icons/fa";

export default function RightSidebar() {
  return (
    <div className="space-y-5">
      
      {/* Team Birthday */}
      <div className="relative bg-[#263238] rounded-xl shadow text-white p-6 text-center overflow-hidden">
        
        {/* Background Curve */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent rounded-xl box-sizing:border-box" />

        <h2 className="text-lg font-semibold mb-5 relative z-10">
          Team Birthday
        </h2>

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="w-20 h-20 rounded-full mx-auto mb-3 relative z-10"
        />

        <h3 className="font-semibold relative z-10">
          Andrew Jermia
        </h3>
        <p className="text-sm text-gray-300 mb-4 relative z-10">
          IOS Developer
        </p>

        <button className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium relative z-10 hover:opacity-90">
          Send Wishes
        </button>
      </div>

      {/* Leave Policy */}
      <div className="bg-[#3B6F7E] rounded-xl shadow p-5 flex justify-between items-center text-white">
        <div>
          <h3 className="font-bold text-lg">Leave Policy</h3>
          <p className="text-sm opacity-90">
            Last Updated : Today
          </p>
        </div>

        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium">
          View All
        </button>
      </div>

      {/* Next Holiday */}
      <div className="bg-yellow-500 rounded-xl shadow p-5 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-white">
            Next Holiday
          </h3>
          <p className="text-white text-sm">
            Diwali, 15 Sep 2025
          </p>
        </div>

        <button className="bg-white px-4 py-2 rounded-lg text-sm font-medium">
          View All
        </button>
      </div>
    </div>
  );
}