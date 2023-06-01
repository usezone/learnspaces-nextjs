import { EllipsisVerticalIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Post = () => {
  return (
    <div className="card bg-black/30 mt-5 mb-5 p-5 rounded-lg">
      <div className="flex items-center">
        <div className="avatar placeholder object-fill">
          <div className="rounded-full bg-amber-700 h-12 w-12 mr-3">Z</div>
        </div>
        <div>
          <p className="font-bold text-sm text-white">Precious Kayili</p>
          <p className="text-xs text-white/60 flex items-center text-secondary font-medium">
            <span className="mr-1">
              <ClockIcon className="w-4" />
            </span>{" "}
            4 hours ago
          </p>
        </div>

        <div className="ml-auto">
          <button className="btn btn-ghost btn-circle text-secondary">
            <EllipsisVerticalIcon width={22} />
          </button>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <p className="mb-5 text-white text-sm leading-relaxed">
          Take a look at our vision for the new design concept for cosmetics
          website. Called Besty Glow! 🙆 Thanks for your likes and comments!💫
        </p>

        <Image
          className="w-full h-96 object-contain bg-black/10"
          src="/post.png"
          width="720"
          height="1080"
          alt="Post"
        />
      </div>

      <div className="flex items-center w-full">
        <div className="avatar object-fill placeholder">
          <div className="rounded-full h-12 w-12 mr-3">Z</div>
        </div>
        <textarea
          placeholder="What do you think?"
          className="w-full text-left h-14 textarea"
        />
      </div>
    </div>
  );
};

export default Post;
