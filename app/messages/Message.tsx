import { useEffect, useState } from "react";
import avatar from "../../assets/avatars/gMyfIhZY_400x400.jpg";
import me from "../../assets/avatars/me.jpeg";
import supabase from "../../lib/supabaseClient";
import MessageLayout from "./MessageLayout";



const Message = ({roomId, senderId, user, emojiCard}) => {
  const [messages, setMessages] = useState([]);
  
  console.log(user?.email);
  
  useEffect(() => {
    // Fetch existing messages from the database
    async function fetchMessages() {
      const { data: messages, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) return console.log("Error fetching messages:", error.message);
      else return setMessages(messages);
    }
    fetchMessages();
  }, [roomId]);

  // console.log(user);

  return (
    <MessageLayout>

    <div className="flex flex-col flex-1 overflow-y-auto pb-14">
      <div className="bg-gray-200 w-fit max-w-[20rem] font-medium p-4 rounded-2xl rounded-tl-md mb-3 mt-2 ml-4">
        <p className="font-medium text-sm text-neutral">
          Thanks! if you can just drop me an update when your day ends and I can
          rChatHeadereview it all tomorrow 🤟
        </p>
      </div>
      {messages.map((message) => (
        <div
        key={message.id}
        className={message.sender_id === user.id ? "bg-primary self-end w-fit max-w-[20rem] font-medium p-4 rounded-2xl rounded-tr-md mb-4 mx-2" : "bg-gray-200 text-neutral self-start w-fit max-w-[20rem] font-medium p-4 rounded-2xl rounded-tr-md mb-4 mx-2"}
        >
          {/* <p className={senderId === user.id ? "font-medium text-sm text-white" : "font-medium text-sm text-neutral"}>
          </p> */}
            {message.message}
        
            
        </div>
        
      ))}
    </div>
      </MessageLayout>
  );
};

export default Message;
