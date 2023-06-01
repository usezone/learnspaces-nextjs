import { ChevronDownIcon, ChevronRightIcon } from "@iconicicons/react";

const SpaceAndProfileDetails = () => {
  return (
    <>
      <div className="bg-black/50 border-b border-white/5 rounded-t-lg p-1">
        <div className="flex items-center rounded-lg cursor-pointer hover:bg-white/10 p-2">
          <div className="avatar placeholder mr-2">
            <div className="rounded-full w-14 bg-black font-bold text-neutral-content">
              <span>Z</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xs">Your Profile</p>
            <p className="text-sm font-extrabold text-white">Precious Kayili</p>
          </div>
          <span className="ml-auto">
            <ChevronRightIcon />
          </span>
        </div>
      </div>
      <div className="bg-black/50 border-b border-white/5 rounded-b-lg p-1">
        <div className="flex items-center rounded-lg cursor-pointer hover:bg-white/10 p-2">
          <div className="avatar placeholder mr-3">
            <div className="rounded-xl w-14 bg-primary font-bold text-neutral-content">
              <span>Z</span>
            </div>
          </div>
          <div>
            <p className="font-medium text-xs">Space</p>
            <p className="text-sm font-extrabold text-white">Zone Academy</p>
          </div>
          <span className="ml-auto">
            <ChevronDownIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default SpaceAndProfileDetails;
