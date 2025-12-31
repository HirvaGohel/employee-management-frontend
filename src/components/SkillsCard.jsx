const skills = [
  { name: "Figma", percent: 95, color: "border-pink-500" },
  { name: "HTML", percent: 85, color: "border-green-500" },
  { name: "CSS", percent: 70, color: "border-purple-500" },
  { name: "WordPress", percent: 61, color: "border-blue-500" },
  { name: "JavaScript", percent: 58, color: "border-gray-700" },
];

export default function SkillsCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-lg">My Skills</h3>
        <span className="text-sm text-black">2024</span>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{skill.name}</p>
              <p className="text-sm text-black">Updated recently</p>
            </div>
            <div
              className={`w-12 h-12 rounded-full border-4 ${skill.color} flex items-center justify-center text-sm font-semibold`}
            >
              {skill.percent}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
