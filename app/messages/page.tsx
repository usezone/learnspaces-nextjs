"use client";

import UserList from "./UserList";
import Message from "./Message";
import NewContact from "./NewContact";
import { IconEdit } from "@tabler/icons-react";

type MessagesProps = {
  roomId: any;
  senderId: any;
  user: any;
  emojiCard: any;
};

const Messages = ({ roomId, senderId, user }: MessagesProps) => {
  return (
    <div className="flex flex-wrap bg-base-300">
      <div className="w-full lg:w-4/12 overflow-y-auto bg-black/20 lg:border-r border-white/5 p-5 h-screen">
        <div className="flex items-center">
          <h3 className="text-lg font-bold text-white mr-auto">Messages</h3>
          <NewContact />
          <label
            htmlFor="contactsModal"
            className="ml-auto btn btn-circle btn-ghost"
          >
            <IconEdit />
          </label>
        </div>
        <div className="flex items-center justify-center mt-5 w-full">
          <UserList />
        </div>
      </div>
      <div className="w-full lg:w-8/12 overflow-y-auto bg-black/40 h-screen">
        <Message roomId={roomId} senderId={senderId} user={user} />
      </div>
    </div>
  );
};

export default Messages;
