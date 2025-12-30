import { FaCalendarAlt, FaDownload, FaFileAlt, FaChevronUp } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

export default function EmployeeAttendance() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Employee Attendance
          </h1>

          <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
            <HiHome />
            <span>/</span>
            <span>Employee</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">
              Employee Attendance
            </span>
          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* Calendar Button */}
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-100">
            <FaCalendarAlt className="text-gray-600" />
          </button>

          {/* Export Dropdown */}
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
            <FaDownload />
            <span>Export</span>
          </button>

          {/* Report Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            <FaFileAlt />
            <span>Report</span>
          </button>

          {/* Collapse */}
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-100">
            <FaChevronUp />
          </button>
        </div>
      </div>
    </div>
  );
}