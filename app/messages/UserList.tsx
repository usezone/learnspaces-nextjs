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
        <div className="flex justify-self-auto btn-ghost p-3 rounded-lg cursor-pointer">
          <div className="avatar object-fill online placeholder">
            <div className="rounded-full h-14 w-14">Z</div>
          </div>

          <div className="chat-details my-auto ml-3">
            <h3 className="font-bold text-white">Precious Kayili</h3>
            <h3 className="font-semibold text-gray-400 text-sm truncate w-[95%]">
              Wow! Amazing Work!
            </h3>
          </div>

          <div className="chat-details my-auto ml-auto">
            <h3 className="font-bold text-sm text-gray-400">12:05</h3>
            <div className="text-xs w-5 text-center flex rounded-full items-center justify-center p-1 font-bold ml-auto mt-1 h-5 bg-primary">
              <p>3</p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default UserList;
