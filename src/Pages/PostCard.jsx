import {useState} from 'react'
import {FaHeart, FaRegComment, FaShare} from "react-icons/fa"
// import CreatePost from "./CreatePost"
// import  PostDetails from './PostDetails';

function PostCard({image,caption}) {

    const [liked, setLiked] = useState(false);

  return (
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[600px]">
          <img
              src={image}
              className="w-full rounded-lg h-[420px] object-cover"
          />

          <div className="flex items-center gap-5 text-2xl mt-2">
              <button
              onClick={()=>setLiked(!liked)}
              >
                  <FaHeart className="text-xl cursor-pointer hover:text-red-500 text-[24px]" color={liked ? "red":""}/>
              </button>
              <button>
                  <FaRegComment className="text-xl cursor-pointer hover:text-gray-600 text-[24px]" />
              </button>
              <button>
                  <FaShare className="text-xl cursor-pointer hover:text-gray-600 text-[24px]" />
              </button>
          </div>

          <p className="mt-2 text-sm">{caption}</p>
      </div>
  );
}

export default PostCard