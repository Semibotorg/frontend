"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import semibotImg from "../../public/logo/semibot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { userSlice } from "../redux/slices/userSlice";
import { nav } from "@/content/nav";
import { Loader } from "./Loader";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname()
  const dispatch = useDispatch();
  const userRedux = useSelector((state: RootState) => state.user);
  const loadingRedux = useSelector((state: RootState) => state.loading);
  const [menuNav, setMenuNav] = useState(false);
  const router = useRouter();
  async function LoginDiscord() {
    window.open(
      `${process.env.BACKEND_API_URL}/auth/login`,
      "_blank",
      `toolbar=no, location=no, directories=no,
    status=no, menubar=no, scrollbars=no, resizable=no,
    copyhistory=no, width=800, height=1200,
    top=${window.screen.height / 2 - 600 / 2}, left=${
        window.screen.width / 2 - 450 / 2
      }`
    );

    window.addEventListener("message", async (message) => {
      if (message.origin !== process.env.BACKEND_API_ORIGIN)
        return console.log("Invalid Origin");
      const data = JSON.parse(message.data);
      localStorage.token = data.token;
      const user = await getUser(localStorage.token);

      if (user) return dispatch(userSlice.actions.addUser(user));
    });
  }
  function Logout() {
    localStorage.removeItem("token");
    router.push("/");
    window.location.reload();
  }

  const [isMenu, setMenu] = useState(false);
  console.log({pathname})
  return !( /^\/dashboard\/\d+/.test(pathname))  && (
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
          {nav.map((content) => (
            <Link
              key={content.title}
              className="text-gray-400 text-base hover:text-white transition ease-linear  font-medium max-lg:hidden"
              href={content.href}
            >
              {content.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center flex-row no-underline list-none gap-5 max-lg:hidden">
          {userRedux?.id && !loadingRedux ? (
            <div className="rounded-full">
              <Image
                onClick={() => setMenuNav(!menuNav)}
                className="w-12 h-12 p-1 rounded-full ring-2 via-violet-600 cursor-pointer"
                src={
                  userRedux.avatar?.startsWith("a_")
                    ? `https://cdn.discordapp.com/avatars/${userRedux.id}/${userRedux.avatar}.gif`
                    : `https://cdn.discordapp.com/avatars/${userRedux.id}/${userRedux.avatar}.png`
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
                      onClick={Logout}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition ease rounded-md hover:bg-guildDashboardBtn cursor-pointer"
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : !loadingRedux ? (
            <button
              onClick={LoginDiscord}
              className="bg-discord hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex items-center flex-row gap-3 pl-4 pr-4 pt-2 pb-2 rounded-md"
            >
              <FontAwesomeIcon
                color="#FFFFFF"
                width={23}
                className="text-lg"
                icon={faDiscord}
              />
              <span className="text-sm">Login using Discord</span>
            </button>
          ) : (
            <Loader />
          )}
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
            {nav.map((content) => (
              <Link
                key={content.title}
                className="text-white font-semibold transition ease-linear hover:bg-navResponsiveHover pb-2 pt-2 pl-3 pr-3 rounded-lg"
                href={content.href}
              >
                {content.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            {!userRedux && !loadingRedux ? (
              <button
                onClick={LoginDiscord}
                className="bg-discord mt-8 w-full hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-4 pr-4 pt-2 pb-2 rounded-md"
              >
                <FontAwesomeIcon
                  color="#FFFFFF"
                  width={23}
                  className="text-lg"
                  icon={faDiscord}
                />
                <span className="text-sm">Login using Discord</span>
              </button>
            ) : !loadingRedux ? (
              <button
                onClick={Logout}
                className="bg-red-500 mt-8 w-full hover:bg-red-600 transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-4 pr-4 pt-2 pb-2 rounded-md"
              >
                <span className="text-sm">Logout</span>
              </button>
            ) : (
              <Loader />
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
