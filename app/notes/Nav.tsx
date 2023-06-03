import { HeadphonesIcon } from "@iconicicons/react";
import { Cross1Icon, ReloadIcon } from "@radix-ui/react-icons";
import { Spotify, UserAdd } from "iconsax-react";
import React from "react";

const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="navbar">
        <div className="navbar-start">
          <div className="menu menu-horizontal space-x-1">
            <li>
              <button className="btn btn-ghost p-0 btn-circle rounded-full normal-case text-base bg-base-100 bg-white/10">
                <Cross1Icon />
              </button>
            </li>
            <li className="text-md hover:bg-transparent">
              <span className="flex hover:bg-transparent text-white font-bold">
                <span>Basic Example of Tiptap</span>
              </span>
            </li>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal space-x-2">
            <button
              className="btn btn-ghost p-1 lg:btn-md btn-circle rounded-full text-base bg-base-100 bg-white/10"
              title="Study Session"
            >
              <HeadphonesIcon />
            </button>
            <label
              htmlFor="ShareNote"
              className="btn btn-primary p-1 lg:btn-md btn-circle rounded-full text-base"
            >
              <UserAdd />
            </label>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Nav;
