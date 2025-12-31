import React from "react";

const projectData = [
  {
    title: "Office Management",
    desc: "An office management app project streamlines administrative tasks by integrating tools for scheduling...",
    leader: "Anthony Lewis",
    role: "Project Leader",
    deadline: "14 Jan 2024",
    tasks: "6/10",
    extra: "+1",
  },
  {
    title: "Clinic Management",
    desc: "A clinic management project streamlines patient records, appointments, and billing processes...",
    leader: "Sophie Headrick",
    role: "Project Leader",
    deadline: "15 Jan 2024",
    tasks: "7/10",
    extra: "+2",
  },
  {
    title: "Educational Platform",
    desc: "An educational platform project provides a centralized space for delivering online courses...",
    leader: "Cameron Drake",
    role: "Project Leader",
    deadline: "16 Jan 2024",
    tasks: "5/10",
    extra: "+2",
  },
  {
    title: "Chat & Call Mobile App",
    desc: "A chat and call mobile app enables users to send messages, make voice and video calls...",
    leader: "Doris Crowley",
    role: "Project Leader",
    deadline: "17 Jan 2024",
    tasks: "6/10",
    extra: "+2",
  },
   {
    title: "Office Management",
    desc: "An office management app project streamlines administrative tasks by integrating tools for scheduling...",
    leader: "Anthony Lewis",
    role: "Project Leader",
    deadline: "14 Jan 2024",
    tasks: "6/10",
    extra: "+1",
  },
  {
    title: "Clinic Management",
    desc: "A clinic management project streamlines patient records, appointments, and billing processes...",
    leader: "Sophie Headrick",
    role: "Project Leader",
    deadline: "15 Jan 2024",
    tasks: "7/10",
    extra: "+2",
  },
  {
    title: "Educational Platform",
    desc: "An educational platform project provides a centralized space for delivering online courses...",
    leader: "Cameron Drake",
    role: "Project Leader",
    deadline: "16 Jan 2024",
    tasks: "5/10",
    extra: "+2",
  },
  {
    title: "Chat & Call Mobile App",
    desc: "A chat and call mobile app enables users to send messages, make voice and video calls...",
    leader: "Doris Crowley",
    role: "Project Leader",
    deadline: "17 Jan 2024",
    tasks: "6/10",
    extra: "+2",
  },
   {
    title: "Office Management",
    desc: "An office management app project streamlines administrative tasks by integrating tools for scheduling...",
    leader: "Anthony Lewis",
    role: "Project Leader",
    deadline: "14 Jan 2024",
    tasks: "6/10",
    extra: "+1",
  },
  {
    title: "Clinic Management",
    desc: "A clinic management project streamlines patient records, appointments, and billing processes...",
    leader: "Sophie Headrick",
    role: "Project Leader",
    deadline: "15 Jan 2024",
    tasks: "7/10",
    extra: "+2",
  },
  {
    title: "Educational Platform",
    desc: "An educational platform project provides a centralized space for delivering online courses...",
    leader: "Cameron Drake",
    role: "Project Leader",
    deadline: "16 Jan 2024",
    tasks: "5/10",
    extra: "+2",
  },
  {
    title: "Chat & Call Mobile App",
    desc: "A chat and call mobile app enables users to send messages, make voice and video calls...",
    leader: "Doris Crowley",
    role: "Project Leader",
    deadline: "17 Jan 2024",
    tasks: "6/10",
    extra: "+2",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-sm text-black">Employee / Projects Grid</p>
        </div>

        <div className="flex gap-2">
          <button className="border rounded-md px-3 py-2 bg-white">☰</button>
          <button className="border rounded-md px-3 py-2 bg-black text-white">
            ▦
          </button>
          <button className="border rounded-md px-4 py-2 bg-white">
            Export ⌄
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            ＋ Add Project
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center mb-6">
        <h4 className="font-semibold">Projects Grid</h4>
        <div className="flex gap-3">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Select Status</option>
          </select>
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Sort By : Last 7 Days</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <span className="cursor-pointer text-xl">⋮</span>
            </div>

            <p className="text-sm text-black mt-2">{item.desc}</p>

            <hr className="my-4" />

            <div className="flex justify-between text-sm">
              <div>
                <p className="font-medium">{item.leader}</p>
                <span className="text-black">{item.role}</span>
              </div>
              <div>
                <p className="font-medium">Deadline</p>
                <span className="text-black">{item.deadline}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm">
                Tasks : {item.tasks}
              </span>
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
                {item.extra}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-10">
        <button className="bg-black text-white px-6 py-2 rounded-md flex items-center gap-2">
          ⟳ Load More
        </button>
      </div>
    </div>
  );
}