const ChannelChat = () => {
  return (
    <div className="flex justify-self-auto btn-ghost p-3 rounded-lg cursor-pointer">
      <div className="avatar object-fill placeholder">
        <div className="rounded-lg h-14 w-14">Z</div>
      </div>

      <div className="chat-details my-auto ml-3">
        <h3 className="font-bold text-white">Alt School Design</h3>
        <h3 className="font-semibold text-gray-400 text-sm truncate w-auto">
          Precious: Yh I get it
        </h3>
      </div>

      <div className="chat-details my-auto ml-auto">
        <h3 className="font-bold text-sm text-gray-400">16:08</h3>
        <div className="text-xs w-5 text-center flex rounded-full items-center justify-center p-1 font-bold ml-auto mt-1 h-5 bg-primary">
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelChat;
