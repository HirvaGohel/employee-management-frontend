import MainLayout from "../layouts/MainLayout";
import { attendance } from "../data/attendance";

export default function Attendance() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">My Attendance</h1>

      <div className="bg-white rounded shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.date}</td>
                <td
                  className={`p-3 font-semibold ${
                    item.status === "Present" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  
  );
}