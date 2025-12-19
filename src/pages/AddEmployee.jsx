import { useState } from "react";
import MainLayout from "../layout/MainLayout";

export default function AddEmployee() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Employee Added Successfully");
    setForm({ name: "", email: "", role: "", department: "" });
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Employee</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 space-y-5"
        >
          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Email Address" name="email" value={form.email} onChange={handleChange} />

          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Role" name="role" value={form.role} onChange={handleChange} />
            <Input label="Department" name="department" value={form.department} onChange={handleChange} />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
            Add Employee
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        {...props}
        required
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
