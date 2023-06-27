import { ChevronRightIcon, SearchIcon } from "@iconicicons/react";

const Explore = () => {
  return (
    <div className="p-5 bg-black/50 rounded-lg">
      <button className="w-full flex normal-case mr-auto rounded-full bg-white/5 border border-white/5 items-center font-semibold text-sm item p-3">
        <SearchIcon />
        <span className="ml-3 sm:hidden lg:block hidden">
          Search your space
        </span>
      </button>
      <div className="flex items-center rounded-lg mt-3 cursor-pointer hover:bg-white/10 p-2">
        <div className="avatar placeholder mr-2">
          <div className="rounded-xl w-14 bg-primary font-bold text-neutral-content">
            <span>Z</span>
          </div>
        </div>
        <div>
          <p className="font-bold text-xs">Cluster</p>
          <p className="text-sm font-extrabold text-white">
            Intro to Programming
          </p>
        </div>
        <span className="ml-auto">
          <ChevronRightIcon height={28} width={28} />
        </span>
      </div>
    </div>
  );
};

export default Explore;
