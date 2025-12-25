import React from "react";
import { leaves } from "../data/leaves";

export default function LeaveCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5" 
         style={{ height: "500px" }}>
      <h3 className="font-semibold mb-4">Leave Details</h3>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <Stat label="Total Leaves" value="16" />
        <Stat label="Taken" value="10" />
        <Stat label="Absent" value="2" />
        <Stat label="Loss of Pay" value="2" />
      </div>

      <button className="mt-5 w-full bg-black text-white py-2 rounded-lg">
        Leave Application
      </button>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}