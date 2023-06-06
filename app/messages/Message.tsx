import { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";
import MessageLayout from "./MessageLayout";

type User = {
  id: string;
  email: string;
};

type Message = {
  senderId: string;
  message: string;
};

type MessageProps = {
  roomId: string;
  senderId: string;
  user: User;
};

const Message = ({ roomId, user }: MessageProps) => {
  const [messages, setMessages] = useState<Message[] | null>(null);

  console.log(user?.email);

  useEffect(() => {
    // Fetch existing messages from the database
    async function fetchMessages() {
      const { data: messages, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        console.log("Error fetching messages:", error.message);
      } else {
        if (messages) {
          const formattedMessages: Message[] = messages.map((msg: any) => ({
            senderId: msg.senderId,
            message: msg.message,
          }));
          setMessages(formattedMessages);
        } else {
          setMessages(null);
        }
      }
    }
    fetchMessages();
  }, [roomId]);

  return (
    <MessageLayout>
      <div className="flex flex-col flex-1 overflow-y-auto pb-14">
        <div className="bg-gray-200 w-fit max-w-[20rem] font-medium p-4 rounded-2xl rounded-tl-md mb-3 mt-2 ml-4">
          <p className="font-medium text-sm text-neutral">
            Thanks! if you can just drop me an update when your day ends and I
            can review it all tomorrow 🤟
          </p>
        </div>
        {messages &&
          messages.map((message, i) => (
            <div
              key={i}
              className={
                message.senderId === user.id
                  ? "bg-primary self-end w-fit max-w-[20rem] font-medium p-4 rounded-2xl rounded-tr-md mb-4 mx-2"
                  : "bg-gray-200 text-neutral self-start w-fit max-w-[20rem] font-medium p-4 rounded-2xl rounded-tr-md mb-4 mx-2"
              }
            >
              {message.message}
            </div>
          ))}
      </div>
    </MessageLayout>
  );
};

export default Message;
