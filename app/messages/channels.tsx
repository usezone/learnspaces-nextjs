import { UilEllipsisV } from "@iconscout/react-unicons";

const GroupChatHeader = () => {
  return (
    <div className="w-full h-20 bg-base-300 flex items-center px-5 py-3 rounded-bl-xl">
      <div className="avatar object-fill">
        <div className="rounded-full h-14 w-14">
          <img
            src="https://ux.pub/images/0ZV-NU5bwGJyn9pI3ZhsGVLYQx457EbuNZp-WuX_Evc/s:1000:420/mb:500000/ar:1/aHR0cHM6Ly9hc3Nl/dHMudXgucHViLzIw/MjIvMDIvZmlnbWEt/cHJvLXdvcmtzaG9w/LmpwZw"
            alt="Precious"
          />
        </div>
      </div>

      <div className="chat-details my-auto ml-3">
        <h3 className="font-bold text-white">Alt School Design</h3>
        <h3 className="font-semibold text-gray-400 text-sm truncate">
          Prosper Success, Akachukwu,You
        </h3>
      </div>

      <div className="ml-auto">
        <button className="btn btn-ghost btn-circle">
          <UilEllipsisV />
        </button>
      </div>
    </div>
  );
};

export default GroupChatHeader;
