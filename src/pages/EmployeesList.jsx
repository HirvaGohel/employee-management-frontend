import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUserPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Employee",
    value: "10",
    icon: <FaUsers />,
    bg: "bg-gray-900",
  },
  {
    title: "Active",
    value: "10",
    icon: <FaUserCheck />,
    bg: "bg-green-500",
  },
  {
    title: "InActive",
    value: "02",
    icon: <FaUserTimes />,
    bg: "bg-red-500",
  },
  {
    title: "New Joiners",
    value: "01",
    icon: <FaUserPlus />,
    bg: "bg-blue-500",
  },
];

const employees = [
  {
    id: "Emp-001",
    name: "Anthony Lewis",
    role: "Finance",
    email: "anthony@example.com",
    phone: "(123) 4567 890",
    designation: "Finance",
    date: "12 Sep 2024",
    status: "Active",
  },
  {
    id: "Emp-002",
    name: "Brian Villalobos",
    role: "Developer",
    email: "brian@example.com",
    phone: "(179) 7382 829",
    designation: "Developer",
    date: "24 Oct 2024",
    status: "Active",
  },
  {
    id: "Emp-003",
    name: "Harvey Smith",
    role: "Developer",
    email: "harvey@example.com",
    phone: "(184) 2719 738",
    designation: "Developer",
    date: "18 Feb 2024",
    status: "Active",
  },
  {
    id: "Emp-008",
    name: "Rebecca Smith",
    role: "Executive",
    email: "smith@example.com",
    phone: "(162) 8920 713",
    designation: "Executive",
    date: "22 Feb 2024",
    status: "Inactive",
  },
];

export default function EmployeeList() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Employee</h1>
        <p className="text-sm text-gray-500">
          Home / Employee / Employee List
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-black">{item.title}</p>
              <h2 className="text-xl font-bold">{item.value}</h2>
            </div>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${item.bg}`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* ================= TABLE CARD ================= */}
      <div className="bg-white rounded-xl shadow-sm">

        {/* Top Filters */}
        <div className="p-4 border-b flex flex-wrap gap-3 items-center justify-between">
          <h2 className="font-semibold">Plan List</h2>

          <div className="flex gap-3 flex-wrap">
            <input
              type="date"
              className="border rounded-md px-3 py-1 text-sm"
            />
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>Designation</option>
            </select>
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>Select Status</option>
            </select>
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>Sort By : Last 7 Days</option>
            </select>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm w-64">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search in HRMS"
              className="outline-none w-full"
            />
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">Emp ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Designation</th>
                <th className="p-3 text-left">Joining Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{emp.id}</td>

                  <td className="p-3">
                    <p className="font-medium">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.role}</p>
                  </td>

                  <td className="p-3">{emp.email}</td>
                  <td className="p-3">{emp.phone}</td>

                  <td className="p-3">
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>{emp.designation}</option>
                    </select>
                  </td>

                  <td className="p-3">{emp.date}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs text-white ${
                        emp.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>

                  <td className="p-3 text-center flex justify-center gap-3">
                    <FaEdit className="text-gray-500 cursor-pointer hover:text-blue-500" />
                    <FaTrash className="text-gray-500 cursor-pointer hover:text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
        {/* ================= PAGINATION ================= */}
        <div className="p-4 flex justify-end gap-2">
          <button className="p-2 border rounded">
            <FaChevronLeft />
          </button>
          <button className="px-3 py-1 bg-black text-white rounded">
            1
          </button>
          <button className="p-2 border rounded">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}