import { FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";

const members = [
  {
    name: "Alexander Jermai",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Doglas Martini",
    role: "Product Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Esbella",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Daniel Esbella",
    role: "Team Lead",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Stephan Peralt",
    role: "Team Lead",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Andrew Jermia",
    role: "Project Lead",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

export default function TeamMembers() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold text-gray-900">Team Members</h2>
        <button className="text-sm px-4 py-1.5 rounded-lg border hover:bg-gray-100">
          View All
        </button>
      </div>

      {/* Members List */}
      <div className="space-y-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex gap-2">
              <IconButton icon={<FaPhoneAlt />} />
              <IconButton icon={<FaEnvelope />} />
              <IconButton icon={<FaCommentDots />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Icon Button */
function IconButton({ icon }) {
  return (
    <button className="w-9 h-9 flex items-center justify-center rounded-lg border hover:bg-gray-100 text-gray-600">
      {icon}
    </button>
  );
}