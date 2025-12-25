import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProfileCard from "../pages/MyProfile";
import LeaveCard from "../pages/LeaveApprovals";
import BirthdayCard from "../pages/TeamBirthday";
import PerformanceCard from "../components/PerformanceCard";
import SkillsCard from "../components/SkillsCard";
import TeamMembers from "../components/TeamMembers";
import Project from "../components/Project";

export default function EmployeeDashboard() {
  return (
        <div className="p-4 space-y-6">
          <h1 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">
            Employee Dashboard
          </h1>
   <div className="grid grid-cols-3 gap-6">
            <ProfileCard />
            <LeaveCard />
            <BirthdayCard />
          </div>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
            <PerformanceCard />
            <SkillsCard />
            </div>
            <TeamMembers />
            </div>
          <div className="mt-6 grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            <Project />
          </div>
        </div>
  );
}