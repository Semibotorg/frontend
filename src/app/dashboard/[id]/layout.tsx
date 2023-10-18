"use client"
import { useState } from "react";
import { Sidebar } from "@/components";
import { DashboardHeader } from "@/components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex grow h-screen w-screen bg-dark-700 fixed top-0 z-10 transition-all">
      <Sidebar setSidebar={setSidebar} sidebar={sidebar}/>
      <div className=" max-w-full flex flex-col grow relative !overflow-hidden">
      <DashboardHeader setSidebar={setSidebar}/>
      <div className=" overflow-y-auto px-6 lg:px-10 py-10 relative">
      {children}
      </div>
      </div>
    </div>
  );
}
