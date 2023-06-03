import { UserAdd } from "iconsax-react";

const ShareNote = () => {
  return (
    <>
      <input type="checkbox" id="ShareNote" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col h-80 max-w-3xl p-0">
          <div className="input-group w-full border-white/10 px-3 space-x-1 bg-black/10">
            <label htmlFor="search" className="label">
              <span className="btn-circle">
                <UserAdd />
              </span>
            </label>
            <input
              type="text"
              id="search"
              autoComplete="off"
              className="input input-lg w-full bg-transparent px-0 rounded-b-none outline-0 focus:outline-0 placeholder:text-sm text-sm placeholder:text-gray-400"
              placeholder="Search username..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareNote;
