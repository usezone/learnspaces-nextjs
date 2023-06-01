import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../lib/supabaseClient";
import * as emoji from "emoji-api";

interface EmojiData {
  emoji: string;
  name: string;
  codepoints: string;
}

export interface User {
  id: string;
  aud: string;
  confirmation_sent_at?: string;
  recovery_sent_at?: string;
  email_change_sent_at?: string;
  new_email?: string;
  new_phone?: string;
  invited_at?: string;
  action_link?: string;
  email?: string;
  phone?: string;
  created_at: string;
  confirmed_at?: string;
  email_confirmed_at?: string;
  phone_confirmed_at?: string;
  last_sign_in_at?: string;
  role?: string;
  updated_at?: string;
}
const MessageLayout = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState<User>();
  const [emojiCard, setEmojiCard] = useState<boolean>(false);
  const [emojis, setEmojis] = useState<EmojiData[]>([]);

  useEffect(() => {
    const emojiList = setEmojis(emoji.emojis);
  }, [emojis]);

  // Generate a UUID if the user is not authenticated
  const senderId = user ? user.id : uuidv4();
  const roomId = uuidv4();
  const messageId = uuidv4();

  const openEmoji = () => {
    setEmojiCard(!emojiCard);
  };

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
    <div>
      <ChatHeader />
      <MessageInput
        openEmoji={openEmoji}
        emojiCard={emojiCard}
        emojis={emojis}
        inputValue={inputValue}
        handleKeyDown={handleKeyDown}
        handleInputChange={handleInputChange}
      >
        <div
          emojiCard={emojiCard}
          roomId={roomId}
          senderId={senderId}
          user={user}
        >
          {children}
        </div>
      </MessageInput>
    </div>
  );
};

export default MessageLayout;
