import { useState } from "react";
import { leaves } from "../data/leaves";

export default function LeaveApprovals() {
  const [data, setData] = useState(leaves);

  const updateStatus = (id, status) => {
    setData(data.map(l =>
      l.id === id ? { ...l, status } : l
    ));
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Leave Approvals</h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">Employee</th>
              <th className="p-4">From</th>
              <th className="p-4">To</th>
              <th className="p-4">Reason</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(leave => (
              <tr key={leave.id} className="border-t">
                <td className="p-4">{leave.employee}</td>
                <td className="p-4">{leave.from}</td>
                <td className="p-4">{leave.to}</td>
                <td className="p-4">{leave.reason}</td>
                <td className="p-4 font-semibold">
                  {leave.status}
                </td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => updateStatus(leave.id, "Approved")}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(leave.id, "Rejected")}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
