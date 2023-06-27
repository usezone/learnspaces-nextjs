import { ChevronRightIcon } from "@iconicicons/react";

const Clusters = () => {
  return (
    <div className="w-6/12 p-2">
      <div
        className="
					bg-black/50 rounded-3xl h-[13vh] p-4 flex items-center cursor-pointer
					hover:bg-black/40
				"
      >
        <div className="avatar placeholder mr-2">
          <div className="rounded-full w-14 bg-black font-bold text-neutral-content">
            <span>S</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold text-white">Science</p>
          <p className="text-xs mt-1">Catch up on all your classes</p>
        </div>
        <span className="ml-auto">
          <ChevronRightIcon height={30} width={30} />
        </span>
      </div>
    </div>
  );
};

export default Clusters;
