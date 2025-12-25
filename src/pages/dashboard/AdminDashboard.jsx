import { FaPlus } from "react-icons/fa";
import {
  FaCalendarCheck,
  FaProjectDiagram,
  FaUsers,
  FaTasks,
  FaDollarSign,
  FaChartLine,
  FaUserPlus,
  FaUserTie,
} from "react-icons/fa";


/* ================= ADMIN DASHBOARD ================= */
export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>

      {/* TOP WELCOME CARD */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Admin"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              Welcome Back, Adrian
              <span className="text-gray-400 cursor-pointer">✏️</span>
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              You have{" "}
              <span className="text-orange-500 font-semibold">21</span>{" "}
              Pending Approvals &{" "}
              <span className="text-orange-500 font-semibold">14</span>{" "}
              Leave Requests
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            <FaPlus size={12} /> Add Project
          </button>

          <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            <FaPlus size={12} /> Add Requests
          </button>
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-3 gap-6 pt-4">
        <div className="bg-white p-4 rounded shadow">
          Total Employees
          <h3 className="text-2xl font-bold">120</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          Total Projects
          <h3 className="text-2xl font-bold">45</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          Pending Leaves
          <h3 className="text-2xl font-bold">8</h3>
          
        </div>
      </div>

      {/* MAIN DASHBOARD */}
      <div className="mt-6 grid grid-cols-12 gap-6">

        {/* LEFT STATS GRID */}
        <div className="col-span-12 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard icon={<FaCalendarCheck />} title="Attendance" value="92/99" change="+2.1%" positive />
          <StatCard icon={<FaProjectDiagram />} title="Total Projects" value="90/94" change="-2.1%" />
          <StatCard icon={<FaUsers />} title="Total Clients" value="69/86" change="-11.2%" />
          <StatCard icon={<FaTasks />} title="Total Tasks" value="25/28" change="+11.2%" positive />
          <StatCard icon={<FaDollarSign />} title="Earnings" value="$2144" change="+10.2%" positive />
          <StatCard icon={<FaChartLine />} title="Profit This Week" value="$5,544" change="+2.1%" positive />
          <StatCard icon={<FaUserTie />} title="Job Applicants" value="98" change="+2.1%" positive />
          <StatCard icon={<FaUserPlus />} title="New Hire" value="45/48" change="-11.2%" />

        </div>

        {/* RIGHT DEPARTMENT CHART */}
        <div className="col-span-12 xl:col-span-4 bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Employees By Department</h3>

          <DepartmentBar label="UI/UX" value={80} />
          <DepartmentBar label="Development" value={100} />
          <DepartmentBar label="Management" value={85} />
          <DepartmentBar label="HR" value={25} />
          <DepartmentBar label="Testing" value={60} />
          <DepartmentBar label="Marketing" value={95} />

          <p className="text-sm text-gray-600 mt-6">
            <span className="text-orange-500 font-bold">•</span>{" "}
            Employees increased by{" "}
            <span className="text-green-600 font-semibold">+20%</span>{" "}
            from last week
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 col-span-16 xl:col-span-12 mt-2">
      {/* JOBS APPLICANTS */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="font-semibold">Jobs Applicants</h3>
          <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
            View All
          </button>
        </div>

        {/* Tabs */}
        <div className="flex m-4 bg-gray-200 rounded-lg overflow-hidden">
          <button className="w-1/2 py-2 text-sm">Openings</button>
          <button className="w-1/2 py-2 text-sm bg-orange-500 text-white">
            Applicants
          </button>
        </div>

        {/* List */}
        <div className="px-5 space-y-4 pb-5">
          <Applicant
            name="Brian Villalobos"
            exp="5+ Years"
            role="UI/UX Designer"
            color="bg-teal-600"
          />
          <Applicant
            name="Anthony Lewis"
            exp="4+ Years"
            role="Python Developer"
            color="bg-blue-500"
          />
          <Applicant
            name="Stephan Peralt"
            exp="6+ Years"
            role="Android Developer"
            color="bg-pink-500"
          />
          <Applicant
            name="Doglas Martini"
            exp="2+ Years"
            role="React Developer"
            color="bg-purple-500"
          />
        </div>
      </div>

      {/* EMPLOYEES */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="font-semibold">Employees</h3>
          <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 bg-gray-100 px-5 py-2 text-sm font-medium">
          <span>Name</span>
          <span>Department</span>
        </div>

        <div className="divide-y">
          <Employee name="Anthony Lewis" role="Finance" dept="Finance" color="bg-teal-100 text-teal-700" />
          <Employee name="Brian Villalobos" role="PHP Developer" dept="Development" color="bg-red-100 text-red-600" />
          <Employee name="Stephan Peralt" role="Executive" dept="Marketing" color="bg-blue-100 text-blue-600" />
          <Employee name="Doglas Martini" role="Project Manager" dept="Manager" color="bg-purple-100 text-purple-600" />
          <Employee name="Anthony Lewis" role="UI/UX Designer" dept="UI/UX Design" color="bg-pink-100 text-pink-600" />
        </div>
      </div>

      {/* TODO */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="font-semibold">Todo</h3>
          <div className="flex items-center gap-2">
            <button className="border px-3 py-1 rounded text-sm">Today</button>
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaPlus size={12} />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <TodoItem text="Add Holidays" />
          <TodoItem text="Add Meeting to Client" />
          <TodoItem text="Chat with Adrian" />
          <TodoItem text="Management Call" />
          <TodoItem text="Add Payroll" />
          <TodoItem text="Add Policy for Increment" />
        </div>
      </div>
    </div>
      </div>


    </div>
  );
}

/* ================= STAT CARD ================= */
function StatCard({ icon, title, value, change, positive }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
        {icon}
      </div>

      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="text-xl font-semibold mt-1">
        {value}{" "}
        <span className={`text-sm ml-1 ${positive ? "text-green-600" : "text-red-500"}`}>
          {change}
        </span>
      </h3>

      <p className="text-sm text-gray-400 mt-3 cursor-pointer">View All</p>
    </div>
  );
}

/* ================= DEPARTMENT BAR ================= */
function DepartmentBar({ label, value }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-orange-500 rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
    
  );
}

function Applicant({ name, exp, role, color }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">
            Exp : {exp} · USA
          </p>
        </div>
      </div>
      <span className={`text-white text-xs px-3 py-1 rounded ${color}`}>
        {role}
      </span>
    </div>
  );
}

function Employee({ name, role, dept, color }) {
  return (
    <div className="grid grid-cols-2 items-center px-5 py-3">
      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <span className={`text-xs px-3 py-1 rounded w-fit ${color}`}>
        {dept}
      </span>
    </div>
  );
}

function TodoItem({ text }) {
  return (
    <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
      <input type="checkbox" className="accent-orange-500" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
