import Navbar from "@/components/Navbar"


function PostLayout({ children }) {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 overflow-y-auto flex justify-center">
                {children}
            </div>
        </div>
    );
}

export default PostLayout;
