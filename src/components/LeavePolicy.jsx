import { FaFileExport, FaPlus } from "react-icons/fa";

const SummaryCard = ({ color, title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow flex overflow-hidden">
      <div className={`w-16 flex items-center justify-center ${color}`}>
        <span className="w-8 h-8 bg-white/30 rounded-full"></span>
      </div>
      <div className="p-5 flex flex-col justify-center">
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
};

export default function Leaves() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Leaves</h1>
          <p className="text-sm text-gray-500 mt-1">
            Home / Employee / <span className="text-gray-800">Leaves</span>
          </p>
        </div>

        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-100">
            <FaFileExport />
            Export
          </button>

          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
            <FaPlus />
            Add Leave
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <SummaryCard
          color="bg-green-500"
          title="Total Present"
          value="128 Days"
        />

        <SummaryCard
          color="bg-pink-500"
          title="Planned Leaves"
          value="12 Days"
        />

        <SummaryCard
          color="bg-yellow-400"
          title="Unplanned Leaves"
          value="04 Days"
        />

        <SummaryCard
          color="bg-cyan-400"
          title="Pending Requests"
          value="03"
        />

        <SummaryCard
          color="bg-purple-500"
          title="Sick Leaves"
          value="05 Days"
        />

        <SummaryCard
          color="bg-red-500"
          title="Casual Leaves"
          value="07 Days"
        />

        <SummaryCard
          color="bg-blue-500"
          title="Maternity Leaves"
          value="60 Days"
        />

        <SummaryCard
          color="bg-indigo-500"
          title="Medical Leaves"
          value="10 Days"
        />

      </div>

    </div>
  );
}