"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import DocumentIcon from "../icons/DocumentIcon";
import HomeIcon from "../icons/HomeIcon";
import MessageIcon from "../icons/MessageIcon";
import SettingsIcon from "../icons/SettingsIcon";
import Link from "next/link";
import Clusters from "./clusters";
import RecentActivity from "./recent-activity";
import Pages from "./pages";
import { useState } from "react";

const pages = [
  {
    Icon: HomeIcon,
    name: "Feed",
    description: "Catch up on your classes",
    color: "bg-primary",
    path: "/feed",
    notification: "99+ new post",
    theme: "primary",
  },
  {
    Icon: MessageIcon,
    name: "Messages",
    description: "Catch up on your classes",
    color: "bg-emerald-500",
    path: "/messages",
    notification: "0 unreads",
    theme: "emerald-500",
  },
  {
    Icon: DocumentIcon,
    name: "Notes",
    description: "Catch up on your classes",
    color: "bg-gradient-to-br from-blue-500 to-purple-500",
    path: "/notes",
    theme: "purple-500",
  },
  {
    Icon: SettingsIcon,
    name: "Settings",
    description: "Catch up on your classes",
    color: "bg-gray-700",
    path: "/settings",
    theme: "gray-700",
  },
];

export default function Home() {
  const [theme, setTheme] = useState("primary");

  return (
    <>
      <div className="w-full flex flex-col h-screen justify-between lg:mt-0">
        <div
          className={`h-[40vh] bg-gradient-to-b from-primary/80 via-primary/5 transition-all duration-500 to-black/50 overflow-y-auto`}
        >
          <div className="flex sticky items-center top-0 px-8 pb-3 pt-6 z-50">
            <h3 className="flex flex-col">
              <span className="text-xs font-bold">Hello,</span>
              <span className="text-base text-white font-bold">
                Precious Kayili
              </span>
            </h3>

            <div className="avatar placeholder ml-auto">
              <div className="rounded-full w-14 bg-primary font-bold text-neutral-content">
                <span>Z</span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap pb-5 px-8">
            {pages.map((page) => (
              <Link
                onMouseEnter={() => setTheme(page.theme)}
                onMouseLeave={() => setTheme("primary")}
                href={page.path}
                className="w-full lg:4/12 xl:w-3/12 p-2"
              >
                <div className="flex items-center rounded-2xl cursor-pointer p-2 bg-black/10 border border-white/5 hover:bg-white/5">
                  <div className="avatar placeholder h-14 mr-3">
                    <div
                      className={`rounded-2xl font-bold ${page.color} text-neutral-content`}
                    >
                      <page.Icon />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{page.name}</p>
                    <p className="text-xs font-medium text-white/50">
                      {page.notification ? page.notification : ""}
                    </p>
                  </div>
                  <span className="ml-auto">
                    <ChevronRightIcon height={20} width={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-[60vh] bg-black/50 overflow-y-scroll">
          <div className="sticky top-0 px-8 pb-6 pt-6 backdrop-blur border-b border-white/5 z-50">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-white">Clusters</h3>
              <Link className="text-xs flex items-center text-primary" href="/">
                View all
                <span>
                  <ChevronRightIcon />
                </span>
              </Link>
            </div>
          </div>

          <div className="px-8 py-0">
            <div className="flex flex-wrap mt-5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Clusters key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
