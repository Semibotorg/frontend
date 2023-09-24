import React from "react";
import Image from "next/image";
import Link from "next/link";
import semibotImg from "../../../public/logo/semibot.png";

export function Navbar() {
  return (
    <nav className="flex justify-between flex-row items-center z-10 max-w-7xl relative p-8 m-auto">
      <div className="flex items-center flex-row no-underline gap-3 list-none">
        <Image className="rounded-full transition-all delay-100 hover:scale-110 cursor-pointer" width={40} src={semibotImg} alt="logo" />
        <hr className="opacity-60 h-8 border-l-2 border-nav mx-3" />
        <Link
          className="text-gray-400 text-base hover:text-white transition ease-linear  font-medium max-lg:text-xs"
          href={"#"}
        >
          Support
        </Link>
        <Link
          className="text-gray-400 text-base hover:text-white transition ease-linear  font-medium max-lg:text-xs"
          href={"#"}
        >
          Vote
        </Link>
      </div>
    </nav>
  );
}
