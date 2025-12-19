import { useState } from "react";

export default function ApplyLeave() {
  const [leave, setLeave] = useState({
    from: "",
    to: "",
    reason: "",
  });

  const handleChange = (e) =>
    setLeave({ ...leave, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Leave Applied Successfully");
    setLeave({ from: "", to: "", reason: "" });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Apply Leave</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="date"
            label="From Date"
            name="from"
            value={leave.from}
            onChange={handleChange}
          />
          <Input
            type="date"
            label="To Date"
            name="to"
            value={leave.to}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Reason</label>
          <textarea
            name="reason"
            value={leave.reason}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
          Submit Leave
        </button>
      </form>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        {...props}
        required
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
