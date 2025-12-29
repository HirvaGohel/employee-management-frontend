import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const AdminExtraSections = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* ================= SCHEDULES ================= */}
      <div className="bg-white rounded-xl border p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Schedules</h2>
          <button className="text-sm bg-gray-100 px-4 py-1 rounded-md">
            View All
          </button>
        </div>

        {/* Card */}
        {[
          {
            role: "UI / UX Designer",
            title: "Interview Candidates - UI/UX Designer",
            time: "01:00 PM - 02:20 PM",
          },
          {
            role: "IOS Developer",
            title: "Interview Candidates - IOS Developer",
            time: "02:00 PM - 04:20 PM",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 mb-4"
          >
            <span className="text-xs bg-slate-700 text-white px-2 py-1 rounded">
              {item.role}
            </span>

            <h3 className="font-semibold mt-2">{item.title}</h3>

            <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
              <FaCalendarAlt />
              Thu, 15 Feb 2025
              <FaClock />
              {item.time}
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border" src="https://randomuser.me/api/portraits/men/32.jpg" />
                <img className="w-7 h-7 rounded-full border" src="https://randomuser.me/api/portraits/women/44.jpg" />
                <span className="w-7 h-7 flex items-center justify-center bg-orange-500 text-white text-xs rounded-full">
                  +3
                </span>
              </div>

              <button className="bg-orange-500 text-white text-sm px-4 py-1 rounded-md">
                Join Meeting
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RECENT ACTIVITIES ================= */}
      <div className="bg-white rounded-xl border p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Recent Activities</h2>
          <button className="text-sm bg-gray-100 px-4 py-1 rounded-md">
            View All
          </button>
        </div>

        {[
          { name: "Matt Morgan", action: "Added New Project", highlight: "HRMS Dashboard", time: "05:30 PM" },
          { name: "Jay Ze", action: "Commented on Uploaded Document", time: "05:00 PM" },
          { name: "Mary Donald", action: "Approved Task Projects", time: "05:30 PM" },
          { name: "George David", action: "Requesting Access to Module Tickets", time: "06:00 PM" },
          { name: "Aaron Zeen", action: "Downloaded App Reports", time: "06:30 PM" },
          { name: "Hendry Daniel", action: "Completed New Project HMS", time: "05:30 PM" },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={`https://randomuser.me/api/portraits/men/${index + 30}.jpg`}
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.action}{" "}
                  {item.highlight && (
                    <span className="text-orange-500">{item.highlight}</span>
                  )}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>

      {/* ================= BIRTHDAYS ================= */}
      <div className="bg-white rounded-xl border p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Birthdays</h2>
          <button className="text-sm bg-gray-100 px-4 py-1 rounded-md">
            View All
          </button>
        </div>

        {[
          { title: "Today", name: "Andrew Jermia", role: "IOS Developer" },
          { title: "Tomorrow", name: "Mary Zeen", role: "UI/UX Designer" },
          { title: "Tomorrow", name: "Antony Lewis", role: "Android Developer" },
          { title: "25 Jan 2025", name: "Doglas Martini", role: ".Net Developer" },
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
            <div className="flex justify-between items-center border rounded-lg p-3">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={`https://randomuser.me/api/portraits/women/${index + 40}.jpg`}
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <button className="bg-slate-700 text-white px-4 py-1 rounded-md text-sm">
                Send
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminExtraSections;