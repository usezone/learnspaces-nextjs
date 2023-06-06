import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../lib/supabaseClient";
import { IconMoodHappy, IconPhoto } from "@tabler/icons-react";
import { IconGif } from "@tabler/icons-react";
import Chat from "./Chat";

const MessageLayout = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState();

  // Generate a UUID if the user is not authenticated
  const senderId = user ? user.id : uuidv4();
  const roomId = uuidv4();
  const messageId = uuidv4();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.currentTarget.value);
  }

  // Function to insert a new message
  async function addMessage() {
    const { data, error } = await supabase
      .from("messages")
      .insert({ room_id: roomId, sender_id: senderId, message: inputValue });

    if (error) {
      console.log(error);
    } else {
      console.log("Message inserted successfully:", inputValue);
    }
  }

  async function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" && inputValue) {
      await addMessage();
      setInputValue("");
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const { data: user } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Chat />
        <div className="p-5">{children}</div>
      </div>
      <div className="relative bottom-0 left-0 w-full bg-base-100 px-1">
        <div className="flex  items-center justify-between p-2">
          <div className="flex p-1 space-x-2">
            <button className="btn btn-ghost btn-sm btn-square">
              <IconPhoto />
            </button>
            <button className="btn btn-ghost btn-sm btn-square">
              <IconGif />
            </button>
            <button className="btn btn-ghost btn-sm btn-square">
              <IconMoodHappy />
            </button>
          </div>
          <input
            value={inputValue}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            type="text"
            className="input h-14 input-lg w-full bg-transparent outline-0 focus:outline-0 placeholder:text-base text-base placeholder:text-gray-400"
            placeholder="Message"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageLayout;
