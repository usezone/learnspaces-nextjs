import { ChevronRightIcon } from "@iconicicons/react";

const RecentActivity = () => {
  return (
    <div
      className="
				flex items-center rounded-2xl w-full mt-3 cursor-pointer p-2 bg-black/10 border border-white/5
				hover:bg-white/5
			"
    >
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
  );
};

export default RecentActivity;
