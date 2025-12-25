import { FaEyeSlash } from "react-icons/fa";


export default function Profile() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <p className="text-sm text-gray-500">
          Pages / <span className="text-gray-700">Profile</span>
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Section Title */}
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Profile
        </h2>

        {/* Basic Info */}
        <h3 className="font-semibold text-gray-700 mb-4">
          Basic Information
        </h3>

        {/* Profile Photo */}
        <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-lg mb-6">
          <div className="w-16 h-16 rounded-full border flex items-center justify-center text-gray-400">
            IMG
          </div>
          <div>
            <p className="font-medium">Profile Photo</p>
            <p className="text-sm text-gray-500">
              Recommended image size is 40px x 40px
            </p>
            <div className="mt-2 flex gap-2">
              <button className="bg-orange-500 text-white px-4 py-1 rounded">
                Upload
              </button>
              <button className="px-4 py-1 rounded border">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Input Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email" />
          <Input label="Phone" />
        </div>

        {/* Address Section */}
        <h3 className="font-semibold text-gray-700 mb-4 border-t pt-4">
          Address Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Input label="Address" full />
          <Select label="Country" />
          <Select label="State" />
          <Select label="City" />
          <Input label="Postal Code" />
        </div>

        {/* Change Password */}
        <h3 className="font-semibold text-gray-700 mb-4 border-t pt-4">
          Change Password
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <PasswordInput label="Current Password" />
          <PasswordInput label="New Password" />
          <PasswordInput label="Confirm Password" />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-5 py-2 border rounded-lg">
            Cancel
          </button>
          <button className="px-5 py-2 bg-orange-500 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */

function Input({ label, full }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-1 focus:ring-orange-500 outline-none"
        type="text"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <select className="w-full mt-1 px-3 py-2 border rounded-lg text-gray-500">
        <option>Select</option>
      </select>
    </div>
  );
}

function PasswordInput({ label }) {
  return (
    <div className="relative">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type="password"
        className="w-full mt-1 px-3 py-2 border rounded-lg pr-10"
      />
      <FaEyeSlash className="absolute right-3 top-10 text-gray-400 cursor-pointer" />
    </div>
  );
}