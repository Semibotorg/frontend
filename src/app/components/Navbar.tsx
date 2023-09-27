"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import semibotImg from "../../../public/logo/semibot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [isMenu, setMenu] = useState(false);
  return (
    <div className="w-full">
      <nav
        className={`flex ${
          isMenu ? "pointer-events-none" : ""
        } justify-between flex-row items-center z-10 max-w-7xl relative p-8 m-auto mb-12`}
      >
        <div className="flex items-center flex-row no-underline gap-3 list-none">
          <Link href={"/"}>
          <Image
            className="rounded-full transition-all delay-75 hover:scale-110 cursor-pointer"
            width={40}
            src={semibotImg}
            alt="logo"
          />
          </Link>
          <hr className="opacity-60 h-8 border-l-2 border-nav mx-3 max-lg:hidden" />
          <Link
            className="text-gray-400 text-base hover:text-white transition ease-linear  font-medium max-lg:hidden"
            href={"#"}
          >
            Support
          </Link>
          <Link
            className="text-gray-400 text-base hover:text-white transition ease-linear  font-medium max-lg:hidden"
            href={"#"}
          >
            Vote
          </Link>
        </div>

        <div className="flex items-center flex-row no-underline list-none gap-5 max-lg:hidden">
          <button className="bg-discord hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex items-center flex-row gap-3 pl-4 pr-4 pt-2 pb-2 rounded-md">
            <FontAwesomeIcon
              color="#FFFFFF"
              width={23}
              className="text-lg"
              icon={faDiscord}
            />
            <span className="text-sm">Login using Discord</span>
          </button>
        </div>

        {/* Responsive navbar */}
        <div className="hidden max-lg:flex">
          <button
            onClick={() => setMenu(!isMenu)}
            className="rounded-full w-9 h-9 bg-bars flex items-center justify-center active:scale-90 ease-linear transition-transform"
          >
            <FontAwesomeIcon
              color="#FFFFFF"
              width={16}
              className="text-lg"
              icon={faBars}
            />
          </button>
        </div>
      </nav>

      <div
        className={`hidden max-lg:flex rounded-xl transition ease-out transform fixed z-20 h-full justify-center w-full bg-navResponsive ${
          isMenu ? "translate-y-0" : "translate-y-3/4 scale-y-0"
        }`}
      >
        <div className="w-full p-8">
          <div className="flex items-center flex-row-reverse justify-between mb-6">
            <div>
            <button
              onClick={() => setMenu(false)}
              className="rounded-full w-9 h-9 bg-navResponsiveHover flex items-center justify-center active:scale-90 ease-linear transition-transform"
            >
              <FontAwesomeIcon
                color="#FFFFFF"
                width={16}
                className="text-lg"
                icon={faXmark}
              />
            </button>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Nav Menu</h1>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              className="text-white font-semibold transition ease-linear hover:bg-navResponsiveHover pb-2 pt-2 pl-3 pr-3 rounded-lg"
              href="#"
            >
              Support
            </Link>
            <Link
              className="text-white font-semibold transition ease-linear hover:bg-navResponsiveHover pb-2 pt-2 pl-3 pr-3 rounded-lg"
              href="#"
            >
              Vote
            </Link>
          </div>
                    <div className="flex justify-center">
            <button className="bg-discord mt-8 w-full hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-4 pr-4 pt-2 pb-2 rounded-md">
              <FontAwesomeIcon
                color="#FFFFFF"
                width={23}
                className="text-lg"
                icon={faDiscord}
              />
              <span className="text-sm">Login using Discord</span>
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
