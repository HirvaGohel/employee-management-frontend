import { span } from "framer-motion/client";
import {
  FaEllipsisV,
  FaCalendarAlt,
  FaTasks,
} from "react-icons/fa";

const projects = [
  {
    title: "Office Management",
    leader: "Anthony Lewis",
    role: "Project Leader",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    deadline: "14/01/2024",
    tasksDone: 6,
    tasksTotal: 10,
    timeSpent: 65,
    timeTotal: 120,
  },
  {
    title: "Office Management",
    leader: "Anthony Lewis",
    role: "Project Leader",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    deadline: "14/01/2024",
    tasksDone: 6,
    tasksTotal: 10,
    timeSpent: 65,
    timeTotal: 120,
  },
];

export default function Projects() {
  return (
    <div className="bg-white rounded-xl shadow p-6 d-flex flex-column ">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 d-flex">
        <h2 className="text-lg font-bold text-gray-900">Projects</h2>
        <select className="border rounded-lg px-2 py-1 text-sm outline-none">
          <option>Ongoing Projects</option>
          <option>Completed Projects</option>
        </select>
      </div>

      {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 si:overflow-y-auto" style={{maxHeight: '50%', width: '50%'}}>
  {projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))}
</div>

    </div>
  );
}

/* PROJECT CARD */
function ProjectCard({ project }) {
  const taskPercent =
    (project.tasksDone / project.tasksTotal) * 100;

  return (
    <div className="border rounded-xl p-5 relative grid gap-4 mb-6 justify-content-between">
      
      {/* Title */}
      <div className="flex justify-between items-start mb-4 d-flex">
        <h3 className="font-semibold text-gray-900">
          {project.title}
        </h3>
        <FaEllipsisV className="text-gray-400 cursor-pointer " />
      </div>

      {/* Leader */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={project.avatar}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">
            {project.leader}
          </p>
          <p className="text-sm text-gray-500">
            {project.role}
          </p>
        </div>
      </div>

      {/* Deadline */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
          <FaCalendarAlt />
        </div>
        <div>
          <p className="font-medium text-gray-900">
            {project.deadline}
          </p>
          <p className="text-sm text-gray-500">Deadline</p>
        </div>
      </div>

      {/* Tasks */}
      <div className="border rounded-lg p-3 mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <FaTasks />
          </div>
          <span>
            Tasks :{" "}
            <strong>
              {project.tasksDone}/{project.tasksTotal}
            </strong>
          </span>
        </div>

        {/* Members */}
        <div className="flex items-center -space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            className="w-7 h-7 rounded-full border"
          />
          <img
            src="https://randomuser.me/api/portraits/men/13.jpg"
            className="w-7 h-7 rounded-full border"
          />
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs border">
            +2
          </span>
        </div>
      </div>

      {/* Time Spent */}
      <div className="bg-gray-200 rounded-lg p-3 flex justify-between text-sm">
        <span className="text-gray-700">Time Spent</span>
        <span className="font-semibold text-gray-900">
          {project.timeSpent}/{project.timeTotal} Hrs
        </span>
      </div>

      {/* Progress */}
      <div className="h-1 bg-gray-200 rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${taskPercent}%` }}
        />
      </div>
    </div>
  );
}