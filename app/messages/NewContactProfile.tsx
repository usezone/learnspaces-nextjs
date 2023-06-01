const NewContactProfile = () => {
  return (
    <div className="flex justify-self-auto hover:bg-black/30 p-2 rounded-lg cursor-pointer">
      <div className="avatar object-fill online placeholder">
        <div className="rounded-full bg-primary h-10 w-10">Z</div>
      </div>

      <div className="chat-details my-auto ml-3">
        <h3 className="font-bold text-white">Precious Kayili</h3>
      </div>
    </div>
  );
};

export default NewContactProfile;
