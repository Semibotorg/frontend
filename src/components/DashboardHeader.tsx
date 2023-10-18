"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}
export function DashboardHeader({setSidebar}: Props) {
  const [menuNav, setMenuNav] = useState(false);
  return (
    <nav className="bg-sidebar flex justify-between items-center h-[80px] px-6 lg:px-10 sticky z-30 top-0 right-0">
      <div className="">
        <div className="hidden max-md:flex">
          <button
            onClick={() => setSidebar(true)}
            className="rounded-full w-9 h-9 bg-sidebar-btn-nav flex items-center justify-center active:scale-90 ease-linear transition-transform"
          >
            <FontAwesomeIcon
              color="#FFFFFF"
              width={16}
              className="text-lg"
              icon={faBars}
            />
          </button>
        </div>
      </div>

      <div className="rounded-full">
        <Image
          onClick={() => setMenuNav(!menuNav)}
          className="w-12 h-12 p-1 rounded-full ring-2 via-violet-600 cursor-pointer"
          src={
            "https://cdn.discordapp.com/avatars/558922015105351701/e1c78bf477e05fd7925d43985bba3b9d.png"
          }
          width={40}
          height={40}
          alt="image profile"
        />

        {menuNav && (
          <div
            style={{ transform: "translate(-122px, 10px)" }}
            className="z-10 p-2 absolute bg-guild rounded-lg shadow w-44"
          >
            <div className="py-1">
              <div
                onClick={() => console.log("logout")}
                className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition ease rounded-md hover:bg-guildDashboardBtn cursor-pointer"
              >
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
