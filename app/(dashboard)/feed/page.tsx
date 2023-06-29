import CreatePost from "./create-post";
import Post from "./post";
import Explore from "./explore";
import SpaceAndProfileDetails from "./space-details";

export default function Feed() {
  return (
    <div className="p-3 mx-auto flex rounded-lg h-screen overflow-y-auto">
      <div className="hidden lg:flex lg:flex-col lg:w-3/12 pr-3 sticky top-0 h-screen">
        <SpaceAndProfileDetails />
      </div>
      <div className="mx-auto sm:10/12 md:w-9/12 lg:w-5/12">
        <CreatePost />
        {[1, 2, 3, 4, 5].map((i) => (
          <Post key={i} />
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-col w-4/12 pl-3 sticky top-0 h-screen">
        <Explore />
      </div>
    </div>
  );
}
