import {
  DotsVerticalIcon,
  InformationIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@iconicicons/react";

const ChatHeader = () => {
  return (
    <div>
      <div className="w-full h-20 rounded-lg flex items-center backdrop-blur-lg px-5 py-3 sticky z-50 top-0">
        <div className="avatar object-fill placeholder">
          <div className="rounded-full h-14 w-14">Z</div>
        </div>

        <div className="chat-details my-auto ml-3">
          <h3 className="font-bold text-white">Alt School Design</h3>
          <p className="font-medium text-gray-400 text-sm truncate">
            click here for contact info
          </p>
        </div>

        <div className="ml-auto flex space-x-3">
          <button className="btn btn-ghost bg-black/5 btn-md btn-circle">
            <VideoCameraIcon />
          </button>
          <button className="btn btn-ghost bg-black/5 btn-md btn-circle">
            <PhoneIcon />
          </button>
          <button className="btn btn-ghost bg-black/5 btn-md btn-circle">
            <InformationIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
