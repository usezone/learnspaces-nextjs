const Chat = () => {
  return (
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
  );
};

export default Chat;
