import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaBriefcase,
  FaDownload,
  FaPlus,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import {
  SiApple,
  SiPhp,
  SiReact,
  SiLaravel,
  SiAngular,
  SiNodedotjs,
  SiAndroid,
  SiHtml5,
} from "react-icons/si";

/* ---------------- JOB CARD ---------------- */
const JobCard = ({
  title,
  applicants,
  location,
  salary,
  experience,
  Icon,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      {/* TITLE */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <Icon className="text-xl" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-black">
            {applicants} Applicants
          </p>
        </div>
      </div>

      {/* INFO */}
      <div className="space-y-2 text-sm text-black">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt /> {location}
        </div>
        <div className="flex items-center gap-2">
          <FaDollarSign /> {salary} / month
        </div>
        <div className="flex items-center gap-2">
          <FaBriefcase /> {experience} years of experience
        </div>
      </div>

      {/* TAGS */}
      <div className="flex gap-2 mt-4">
        <span className="px-3 py-1 rounded-md text-xs bg-gray-100 text-pink-600">
          Full Time
        </span>
        <span className="px-3 py-1 rounded-md text-xs bg-gray-100 text-gray-700">
          Expert
        </span>
      </div>

      {/* PROGRESS */}
      <div className="mt-4">
        <div className="h-2 w-full bg-gray-200 rounded">
          <div className="h-2 w-1/2 bg-black rounded" />
        </div>
        <p className="text-xs text-black mt-1">
          10 of 25 filled
        </p>
      </div>
    </div>
  );
};

/* ---------------- MAIN PAGE ---------------- */
export default function Jobs() {
  const jobs = [
    {
      title: "Senior IOS Developer",
      applicants: 25,
      location: "New York, USA",
      salary: "30,000 - 35,000",
      experience: 2,
      Icon: SiApple,
    },
    {
      title: "Junior PHP Developer",
      applicants: 25,
      location: "Los Angeles, USA",
      salary: "20,000 - 25,000",
      experience: 4,
      Icon: SiPhp,
    },
    {
      title: "Network Engineer",
      applicants: 25,
      location: "Bristol, UK",
      salary: "30,000 - 35,000",
      experience: 1,
      Icon: SiReact,
    },
    {
      title: "React Developer",
      applicants: 25,
      location: "Birmingham, UK",
      salary: "28,000 - 32,000",
      experience: 3,
      Icon: SiReact,
    },
    {
      title: "Laravel Developer",
      applicants: 25,
      location: "Washington, USA",
      salary: "32,000 - 36,000",
      experience: 1,
      Icon: SiLaravel,
    },
    {
      title: "DevOps Engineer",
      applicants: 25,
      location: "Coventry, UK",
      salary: "25,000 - 35,000",
      experience: 6,
      Icon: SiReact,
    },
    {
      title: "Android Developer",
      applicants: 25,
      location: "Chicago, USA",
      salary: "28,000 - 32,000",
      experience: 5,
      Icon: SiAndroid,
    },
    {
      title: "HTML Developer",
      applicants: 25,
      location: "Carlisle, UK",
      salary: "25,000 - 28,000",
      experience: 3,
      Icon: SiHtml5,
    },
    {
      title: "UI/UX Designer",
      applicants: 25,
      location: "UI/UX Designer",
      salary: "20,000 - 25,000",
      experience: 4,
      Icon: SiReact,
    },
    {
      title: "Senior IOS Developer",
      applicants: 25,
      location: "San Diego, USA",
      salary: "22,000 - 28,000",
      experience: 3,
      Icon: SiApple,
    },
    {
      title: "Angular Developer",
      applicants: 25,
      location: "Sheffield, UK",
      salary: "28,000 - 30,000",
      experience: 2,
      Icon: SiAngular,
    },
    {
      title: "Node js Developer",
      applicants: 25,
      location: "Boston, USA",
      salary: "25,000 - 28,000",
      experience: 3,
      Icon: SiNodedotjs,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Jobs</h1>
          <div className="flex items-center gap-2 text-sm mt-1 text-black">
            <HiHome /> / Administration / Jobs
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <FaDownload /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg">
            <FaPlus /> Post Job
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-wrap gap-3">
        <span className="font-semibold mt-2">Job Grid :</span>
        <select className="border rounded-lg px-3 py-2">
          <option>12/24/2025 - 12/30/2025</option>
        </select>
        <select className="border rounded-lg px-3 py-2">
          <option>Role</option>
        </select>
        <select className="border rounded-lg px-3 py-2">
          <option>Status</option>
        </select>
        <select className="border rounded-lg px-3 py-2">
          <option>Sort By : Last 7 Days</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}