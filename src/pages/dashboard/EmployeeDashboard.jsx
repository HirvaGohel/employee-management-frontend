export default function EmployeeDashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Employee Dashboard</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          My Attendance
        </div>

        <div className="bg-white p-4 rounded shadow">
          My Projects
        </div>
      </div>
    </div>
  );
}