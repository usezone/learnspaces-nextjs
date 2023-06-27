import NewContactProfile from "./new-contact-profile";

const NewContact = () => {
  return (
    <>
      <input type="checkbox" id="contactsModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col h-80 p-0">
          <div className="flex border-b w-full bg-black/20 border-white/5 backdrop-blur px-3 sticky z-50 top-0">
            <input
              type="text"
              className="input bg-transparent input-lg w-full rounded-b-none outline-0 focus:outline-0 z-50"
              placeholder="Search"
            />
            <kbd className="kbd kbd-md my-auto">esc</kbd>
          </div>
          <div className="p-3">
            <NewContactProfile />
            <NewContactProfile />
            <NewContactProfile />
            <NewContactProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewContact;
