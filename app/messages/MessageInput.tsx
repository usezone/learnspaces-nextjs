import { Microphone } from "iconsax-react";
import { PlusCircleIcon, EmojiHappyIcon } from "@iconicicons/react";

type EmojiData = {
  emoji: string;
  name: string;
}[];

type MessageInputProps = {
  children: React.ReactNode;
  inputValue: string;
  handleKeyDown: React.KeyboardEventHandler;
  handleInputChange: React.FormEventHandler;
  openEmoji: () => void;
  emojiCard: boolean;
  emojis: EmojiData;
};

const MessageInput = ({
  children,
  inputValue,
  handleKeyDown,
  handleInputChange,
  openEmoji,
  emojiCard,
  emojis,
}: MessageInputProps) => {
  console.log("The list of emojis", emojis);
  return (
    <div className="p-5">
      {children}
      {emojiCard && (
        <>
          <div className="modal-box w-[20rem] h-[14rem]">
            <h3 className="font-bold text-lg">Emojis</h3>
            <ul className="py-4 text-white font-bold">
              {emojis.map((emoji) => (
                // console.log(emoj.emoji);
                <li className="text-white" value={emoji.name} id={emoji.name}>
                  {emoji.emoji}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div className="flex w-full bg-base-100 rounded-md px-1 items-center mx-auto z-50">
        <button className="btn btn-ghost bg-white/5 btn-square">
          <PlusCircleIcon />
        </button>
        <input
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          type="text"
          className="input h-14 input-lg w-full bg-transparent outline-0 focus:outline-0 placeholder:text-base text-base placeholder:text-gray-400"
          placeholder="Message"
        />
        <span className="flex p-1 space-x-2">
          <button className="btn btn-ghost btn-square bg-white/5">
            <EmojiHappyIcon onClick={openEmoji} />
          </button>
          <button className="btn btn-ghost btn-square bg-white/5">
            <Microphone />
          </button>
        </span>
      </div>
    </div>
  );
};

export default MessageInput;
