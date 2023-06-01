import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import DocumentIcon from "../icons/DocumentIcon";
import HomeIcon from "../icons/HomeIcon";
import MessageIcon from "../icons/MessageIcon";
import SettingsIcon from "../icons/SettingsIcon";
import Link from "next/link";
import Clusters from "./Clusters";
import RecentActivity from "./RecentActivity";
import Pages from "./Pages";

const pages = [
  {
    Icon: HomeIcon,
    name: "Feed",
    description: "Catch up on your classes",
    color: "bg-primary",
    path: "/feed",
    notification: "99+ new post",
  },
  {
    Icon: MessageIcon,
    name: "Messages",
    description: "Catch up on your classes",
    color: "bg-emerald-500",
    path: "/messages",
    notification: "0 unreads",
  },
  {
    Icon: DocumentIcon,
    name: "Notes",
    description: "Catch up on your classes",
    color: "bg-gradient-to-br from-blue-500 to-purple-500",
    path: "/notes",
  },
  {
    Icon: SettingsIcon,
    name: "Settings",
    description: "Catch up on your classes",
    color: "bg-gray-700",
    path: "/settings",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap overflow-hidden items-center justify-center">
        <div className="hidden bg-black/30 xl:w-3/12 xl:flex h-screen lg:flex-col mb-3 lg:mb-0 lg:justify-between sticky top-0">
          <div className="p-3">
            <button className="w-full flex normal-case mr-auto rounded-xl bg-white/5 backdrop-blur-md border border-white/5 items-center font-semibold text-sm item p-3">
              <MagnifyingGlassIcon width={18} height={18} />
              <span className="ml-2 sm:hidden lg:block hidden">
                Search your space
              </span>
            </button>

            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((i) => (
                <RecentActivity key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-9/12 bg-black/50 flex flex-col h-screen justify-between lg:mt-0">
          <div className="h-auto overflow-y-auto">
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
                <Pages key={page.name} {...page} />
              ))}
            </div>
          </div>
          <div className="h-[calc(75vh-84px)] overflow-y-scroll">
            <div className="sticky top-0 px-8 pb-6 pt-6 backdrop-blur border-b border-white/5 z-50">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg text-white">Clusters</h3>
                <Link
                  className="text-xs flex items-center text-primary"
                  href="/"
                >
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
      </div>
    </>
  );
}
