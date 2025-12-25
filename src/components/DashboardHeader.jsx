import { FaChevronUp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

export default function DashboardHeader() {
  return (
    <div className="bg-white rounded-xl shadow px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Employee Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Dashboard <span className="mx-1">/</span>
          <span className="text-gray-700 font-medium">
            Employee Dashboard
          </span>
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
          <FiDownload /> Export
        </button>

        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
          <AiOutlineCalendar /> 2024
        </button>

        <button className="border p-2 rounded-lg hover:bg-gray-100">
          <FaChevronUp />
        </button>
      </div>
    </div>
  );
}