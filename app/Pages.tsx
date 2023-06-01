import { ChevronRightIcon } from "@iconicicons/react";
import Link from "next/link";
import React from "react";

type PagesProps = {
  Icon: React.ElementType
  color: string
  name: string
  path: string
  notification?: string
}

const Pages = ({ Icon, color, name, path, notification }: PagesProps) => {
  return (
    <Link href={path} className="w-full lg:4/12 xl:w-3/12 p-2">
      <div className="flex items-center rounded-2xl cursor-pointer p-2 bg-black/10 border border-white/5 hover:bg-white/5">
        <div className="avatar placeholder h-14 mr-3">
          <div
            className={`rounded-2xl font-bold ${color} text-neutral-content`}
          >
            <Icon />
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-xs font-medium text-white/50">
            {notification ? notification : ""}
          </p>
        </div>
        <span className="ml-auto">
          <ChevronRightIcon height={28} width={28} />
        </span>
      </div>
    </Link>
  );
};

export default Pages;
