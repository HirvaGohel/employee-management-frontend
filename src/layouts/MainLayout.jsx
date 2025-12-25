import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex relative min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-40 ${
          open ? "block" : "hidden"
        } md:block`}
      >
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar toggleSidebar={() => setOpen(!open)} />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}



