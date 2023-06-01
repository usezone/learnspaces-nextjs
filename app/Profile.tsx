import { ChevronUpIcon } from "@iconicicons/react";

const Profile = () => {
  return (
    <div
      className="
				bg-black/50 rounded-3xl h-[13vh] p-4 flex items-center cursor-pointer 
				hover:bg-black/40
			"
    >
      <div className="avatar placeholder mr-2">
        <div className="rounded-full w-14 bg-black font-bold text-neutral-content">
          <span>Z</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-extrabold text-white">Precious Kayili</p>
        <p className="font-semibold text-xs">@preciouskayili</p>
      </div>
      <span className="ml-auto">
        <ChevronUpIcon height={30} width={30} />
      </span>
    </div>
  );
};

export default Profile;
