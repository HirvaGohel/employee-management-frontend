import { FaArrowUp, FaArrowDown, FaClock } from "react-icons/fa";

const StatCard = ({ icon, value, label, percent, up }) => (
  <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-3">
    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
      {icon}
    </div>

    <h2 className="text-2xl font-bold">
      {value}
    </h2>

    <p className="text-gray-500 text-sm">{label}</p>

    <div className="flex items-center gap-2 text-sm">
      <span
        className={`w-6 h-6 flex items-center justify-center rounded-full ${
          up ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}
      >
        {up ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
      </span>
      <span className="text-gray-600">{percent}</span>
    </div>
  </div>
);

export default function AttendanceDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

        {/* LEFT ATTENDANCE CARD */}
        <div className="xl:col-span-1 bg-orange-50 border border-orange-200 rounded-xl p-6 flex flex-col items-center gap-5">
          <div className="text-center">
            <p className="text-gray-500">Attendance</p>
            <h3 className="text-lg font-semibold">
              08:35 AM, 11 Mar 2025
            </h3>
          </div>

          {/* CIRCLE */}
          <div className="relative w-40 h-40">
            <svg className="w-full h-full rotate-[-90deg]">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#22c55e"
                strokeWidth="10"
                fill="none"
                strokeDasharray="440"
                strokeDashoffset="120"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500">Total Hours</p>
              <h3 className="font-bold text-lg">5:45:32</h3>
            </div>
          </div>

          <span className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Production : 3.45 hrs
          </span>

          <p className="text-sm text-orange-600 flex items-center gap-2">
            <FaClock /> Punch In at 10.00 AM
          </p>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
            Punch Out
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="xl:col-span-3 flex flex-col gap-6">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
              icon={<FaClock />}
              value="8.36 / 9"
              label="Total Hours Today"
              percent="5% This Week"
              up
            />
            <StatCard
              icon={<FaClock />}
              value="10 / 40"
              label="Total Hours Week"
              percent="7% Last Week"
              up
            />
            <StatCard
              icon={<FaClock />}
              value="75 / 98"
              label="Total Hours Month"
              percent="8% Last Month"
              up={false}
            />
            <StatCard
              icon={<FaClock />}
              value="16 / 28"
              label="Overtime this Month"
              percent="6% Last Month"
              up={false}
            />
          </div>

          {/* TIMELINE */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-gray-500">Total Working hours</p>
                <h3 className="font-bold text-xl">12h 36m</h3>
              </div>
              <div>
                <p className="text-gray-500 text-green-600">Productive Hours</p>
                <h3 className="font-bold text-xl">08h 36m</h3>
              </div>
              <div>
                <p className="text-gray-500 text-yellow-500">Break hours</p>
                <h3 className="font-bold text-xl">22m 15s</h3>
              </div>
              <div>
                <p className="text-gray-500 text-blue-600">Overtime</p>
                <h3 className="font-bold text-xl">02h 15m</h3>
              </div>
            </div>

            {/* BAR */}
            <div className="flex items-center gap-2">
              <div className="h-6 bg-green-500 rounded-lg w-[20%]"></div>
              <div className="h-6 bg-yellow-400 rounded-lg w-[5%]"></div>
              <div className="h-6 bg-green-500 rounded-lg w-[30%]"></div>
              <div className="h-6 bg-yellow-400 rounded-lg w-[15%]"></div>
              <div className="h-6 bg-green-500 rounded-lg w-[20%]"></div>
              <div className="h-6 bg-blue-500 rounded-lg w-[5%]"></div>
              <div className="h-6 bg-blue-500 rounded-lg w-[5%]"></div>
            </div>

            {/* TIME SCALE */}
            <div className="flex justify-between text-xs text-gray-500 mt-4">
              {[
                "06:00","07:00","08:00","09:00","10:00","11:00",
                "12:00","01:00","02:00","03:00","04:00","05:00",
                "06:00","07:00","08:00","09:00","10:00","11:00"
              ].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}