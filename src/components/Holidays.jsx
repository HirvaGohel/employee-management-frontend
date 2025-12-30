import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const holidaysData = [
  {
    id: 1,
    title: "New Year's Day",
    date: "1 Jan 2026",
    description: "Celebrating the start of the new year",
    status: "Active",
  },
  {
    id: 2,
    title: "Uttrayan",
    date: "14 Jan 2026",
    description: "Harvest festival celebrated in Gujarat",
    status: "Active",
  },
  {
    id: 3,
    title: "Vasi Uttarayan",
    date: "16 Jan 2026",
    description: "Celebrating the end of winter solstice",
    status: "Active",
  },
    {
    id: 4,
    title: "Dhuleti",
    date: "4 Mar 2026",
    description: "Festival of colors celebrated across India",
    status: "Active",
    },
    {
    id: 5,
    title: "Independence Day",
    date: "15 Aug 2026",
    description: "Celebrating India's independence from British rule",
    status: "Active",
    },
    {
    id: 6,
    title: "Raksha Bandhan", 
    date: "28 Aug 2026",
    description: "Celebrating the bond between siblings",
    status: "Active",
    },
    {
    id: 7,
    title: "Janmashtami",
    date: "4 Sep 2026",
    description: "Celebrating the birth of Lord Krishna",
    status: "Active",
    },
    {
    id: 8,
    title: "Dussehra (Vijayadashami)",
    date: "10 oct 2026",
    description: "Festival of lights celebrated across India",
    status: "Active",
    },
    {
    id: 9,
    title: "Diwali",    
    date: "8 Nov 2026",
    description: "Festival of lights celebrated across India",
    status: "Active",
    },
    {
    id: 10,
    title: "Hindu New Year (Bestu Varas)",
    date: "10 Nov 2026",
    description: "Celebrating the start of the Hindu lunar calendar",
    status: "Active",
    },
    {
    id: 11,
    title: "Bhai Dooj",
    date: "11 nov 2026",
    description: "Celebrating the bond between brothers and sisters",
    status: "Active",
    },
    {
    id: 12,
    title: "Christmas",
    date: "25 Dec 2026",
    description: "Celebrating the birth of Jesus Christ",
    status: "Active",
    } 

];

export default function Holidays() {
  const [search, setSearch] = useState("");

  const filteredHolidays = holidaysData.filter((holiday) =>
    holiday.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Holidays</h1>
          <p className="text-sm text-gray-500">
            Employee / Holidays
          </p>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaPlus />
          Add Holiday
        </button>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-xl shadow-sm">
        {/* CARD HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">Holidays List</h2>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-3 py-1 text-sm"
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Title</th>
                <th className="p-3">Date</th>
                <th className="p-3">Description</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredHolidays.map((holiday) => (
                <tr key={holiday.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 font-medium">{holiday.title}</td>
                  <td className="p-3 text-gray-600">{holiday.date}</td>
                  <td className="p-3 text-gray-600">
                    {holiday.description}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        holiday.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {holiday.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center gap-3 text-gray-500">
                      <FaEdit className="cursor-pointer hover:text-blue-500" />
                      <FaTrash className="cursor-pointer hover:text-red-500" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between p-4 text-sm text-gray-600">
          <p>Showing 1 - {filteredHolidays.length} of {filteredHolidays.length} entries</p>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded">&lt;</button>
            <button className="px-3 py-1 bg-orange-500 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}