import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/stateful-button";
import { useNavigate } from "react-router-dom";

function PostDetails() {
    const [caption, setCaption] = useState("");
    const location = useLocation()
    const navigate = useNavigate();
    const image = location.state?.image
    const handlePost = ()=>{
    const post = {
        id: Date.now(),
        image: image,
        caption: caption,
    };
    const oldPosts = JSON.parse(localStorage.getItem("posts")) || []
    const updatedPosts = [post,...oldPosts]
    localStorage.setItem("posts",JSON.stringify(updatedPosts))
    navigate("/home");
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10">
            <h1 className="text-2xl font-bold mb-10">Add Caption</h1>

            <div className="flex gap-10 bg-white p-8 rounded-xl shadow-md">
                {/* Image Preview */}
                <div className="w-[320px] h-[320px] bg-gray-200 flex items-center justify-center rounded-lg">
                    {image ? (
                        <img
                            src={image}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    ) : (
                        <p>No Image Selected</p>
                    )}
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-4 w-[350px]">
                    {/* Caption */}
                    <textarea
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Write a caption..."
                        className="w-full h-[120px] border rounded-lg p-3 resize-none outline-none"
                    />

                    {/* Tag People */}
                    <button className="flex justify-between items-center border rounded-lg px-3 py-2 hover:bg-gray-50">
                        <span>🏷 Tag People</span>
                        <span>+</span>
                    </button>

                    {/* Location */}
                    <input
                        type="text"
                        placeholder="📍 Add Location"
                        className="border rounded-lg px-3 py-2 outline-none"
                    />

                    {/* Accessibility */}
                    <button className="flex justify-between items-center border rounded-lg px-3 py-2 hover:bg-gray-50">
                        <span>♿ Accessibility</span>
                        <span>▾</span>
                    </button>

                    {/* Advanced Settings */}
                    <button className="flex justify-between items-center border rounded-lg px-3 py-2 hover:bg-gray-50">
                        <span>⚙ Advanced Settings</span>
                        <span>▾</span>
                    </button>

                    {/* Share Button */}
                    <Button className="w-full mt-2 bg-green-500 hover:ring-green-500"
                    onClick = {handlePost}
                    >
                        Post
                    </Button>
                    {/* <button className="bg-black text-white py-2 rounded-lg mt-2">
                        Share
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default PostDetails;
