"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { sidebarContent } from "@/content/sidebar";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}
export function Sidebar({ sidebar, setSidebar }: Props) {
  const params = useParams();
  const pathname = usePathname();
  return (
    <>
      <div className="overflow-hidden h-screen z-40 relative">
        <div className="flex h-full gap-14">
          <div
            className={`overflow-auto relative h-full min-h-screen min-w-sidebar ${
              sidebar ? "max-md:w-full max-md:translate-x-0" : "max-md:translate-x-[-270px]"
            } w-sidebar z-50 bg-sidebar scrollbar-hide  transition ease-linear max-md:fixed`}
          >
            <div className="flex flex-col p-5 pt-8 pb-8 gap-6 ">
              <div className="flex flex-row justify-between items-center">
                <Link href="/">
                  <div className="flex items-center flex-row gap-4 justify-center mb-10 select-none cursor-pointer">
                    <Image
                      src={`/logo/semibot.png`}
                      alt="Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-white uppercase text-2xl font-bold">
                      Semibot
                    </span>
                  </div>
                </Link>
                <div className="mb-10 hidden max-md:flex">
                  <button
                    onClick={() => setSidebar(false)}
                    className="rounded-full w-9 h-9 bg-sidebar-btn-nav flex items-center justify-center active:scale-90 ease-linear transition-transform"
                  >
                    <FontAwesomeIcon
                      color="#FFFFFF"
                      width={16}
                      className="text-lg"
                      icon={faXmark}
                    />
                  </button>
                </div>
              </div>
              <div className="flex justify-center select-none flex-col">
                {sidebarContent.map((content) => (
                  <>
                    <Link
                      className={`flex items-centerjustify-between rounded-md mb-2 py-2 px-3 w-full transition ease-linear cursor-pointer ${
                        pathname == `/dashboard/${params.id}${content.route}`
                          ? "bg-sidebar-btn text-white"
                          : "hover:text-white text-dashboard"
                      }`}
                      onClick={() => setSidebar(false)}
                      href={`/dashboard/${params.id}${content.route}`}
                    >
                      <div className="flex flex-1 whitespace-nowrap items-center text-ellipsis cursor-pointer gap-4 text-sm font-medium">
                        {pathname ==
                        `/dashboard/${params.id}${content.route}` ? (
                          <content.icon width={24} />
                        ) : (
                          <content.iconOutlined width={24} />
                        )}
                        <span className="font-medium text-sm">
                          {content.text}
                        </span>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
