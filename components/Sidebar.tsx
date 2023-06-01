"use client";
import Link from "next/link";
import ZapIcon from "@/icons/ZapIcon";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  InboxIcon,
  DocumentTextIcon,
  BellIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

export const pages = [
  {
    icon: HomeIcon,
    name: "Feed",
    path: "/feed",
  },
  {
    icon: MagnifyingGlassIcon,
    name: "Search",
  },
  {
    icon: InboxIcon,
    name: "Messages",
    color: "bg-emerald-500",
    path: "/messages",
  },
  {
    icon: DocumentTextIcon,
    name: "Notes",
    path: "/notes",
  },
  {
    icon: BellIcon,
    name: "Notifications",
  },
];
const Sidebar = () => {
  return (
    <ul className="flex flex-col h-screen justify-between border-r border-white/5">
      <ul className="border-b border-white/5 menu menu-vertical">
        <li>
          <Link href="/">
            <ZapIcon />
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col items-center space-y-5">
        {pages.map((page) => (
          <li
            className="tooltip tooltip-right tooltip-secondary"
            data-tip={page.name}
            key={page.name}
          >
            {page.path ? (
              <Link
                className="btn btn-md btn-ghost btn-square"
                // activeClassName="btn-active"
                href={page.path}
              >
                <page.icon height={22} width={22} />
              </Link>
            ) : (
              <button className="btn btn-md btn-ghost btn-square">
                <page.icon height={22} width={22} />
              </button>
            )}
          </li>
        ))}
      </ul>

      <ul className="p-1 flex flex-col items-center space-y-3">
        <li
          className="tooltip tooltip-right tooltip-secondary"
          data-tip="preciouskayili"
        >
          <Link
            className="btn btn-md btn-ghost btn-square transition-all"
            // activeClassName="btn-active"
            href="/"
          >
            <div className="avatar placeholder">
              <div className="rounded-md w-10 bg-primary font-bold text-neutral-content">
                <span>Z</span>
              </div>
            </div>
          </Link>
        </li>
        <li
          className="tooltip tooltip-right tooltip-secondary"
          data-tip="Settings"
        >
          <Link
            className="btn btn-md btn-ghost btn-square transition-all"
            color="#fff"
            // activeClassName="btn-active"
            href="/settings"
          >
            <Cog8ToothIcon height={22} width={22} />
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default Sidebar;
