import Chat from "./Chat";
import ChannelChat from "./ChannelChat";
import { HashtagIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const UserList = () => {
  return (
    <div className="w-full">
      <input id="notes-drawer" type="checkbox" className="drawer-toggle" />
      {/* <div className="flex flex-col pt-3 px-3 w-full">{children}</div> */}

      <ul className="w-full text-neutral-content font-medium space-y-3">
        <form action="/" className="input-group mb-7">
          <span className="bg-base-100">
            <MagnifyingGlassIcon />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="bg-base-100 h-12 outline-none w-full placeholder:font-bold"
          />
        </form>
        <p className="font-bold mb-2 text-gray-400 uppercase text-xs flex items-center space-x-2">
          <HashtagIcon height={16} />
          <span>Channels</span>
        </p>
        <ChannelChat />
        <p className="font-bold mb-2 text-gray-400 uppercase text-xs mt-3 flex items-center space-x-2">
          <span>Direct Messages</span>
        </p>
        <Chat />
      </ul>
    </div>
  );
};

export default UserList;
