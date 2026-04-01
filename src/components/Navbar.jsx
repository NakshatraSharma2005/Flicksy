import { SidebarTrigger } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import {
    FaSearch,
    FaPlusCircle,
    FaBell,
    FaRegCommentDots,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

// import CreatePost from "../Pages/CreatePost";
import { useSidebar } from "@/components/ui/sidebar";
function Navbar({setPage}) {
    const { open } = useSidebar();
    const navigate = useNavigate();
    const location = useLocation();

    const ProfileImage = location.state?.ProfileImage;
    return (
        <>
            <nav className="w-full h-20 bg-[rgb(17,68,79)] flex items-center justify-between px-4 sticky top-0">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                    <SidebarTrigger className="text-white hover:bg-white/10 rounded-md" />
                    <img
                        src="/Images/FLICKSY-Logo.jpeg"
                        alt="Flicksy Logo"
                        className="h-20"
                    />
                </div>
                <div className="text-center leading-tight">
                    <span className="text-white font-semibold text-base tracking-wide">
                        Hey Nakshatra
                    </span>
                    <br />
                    <span className="text-white/60 text-xs tracking-wide">
                        What’s new today?
                    </span>
                </div>
                <div className="flex items-center gap-8">
                    <FaSearch
                        size={20}
                        className="cursor-pointer"
                        color="white"
                    />
                    <FaPlusCircle
                        size={20}
                        className="cursor-pointer"
                        color="white"
                        onClick={() => navigate("/create-post")}
                    />
                    <FaBell
                        size={20}
                        className="cursor-pointer"
                        color="white"
                    />
                    <FaRegCommentDots
                        size={20}
                        className="cursor-pointer"
                        color="white"
                    />

                    <div
                        className={`overflow-hidden transition-all duration-500 hover:scale-110 transition ${
                            open
                                ? "w-0 opacity-0 ml-0"
                                : "w-10 opacity-100 ml-2"
                        }`}>
                        <img
                            src={ProfileImage}
                            className="rounded-full h-11 w-11"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
