import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import Feed from "@/Pages/Feed"


function Home() {

        //     const location = useLocation();

        // const ProfileImage = location.state?.ProfileImage;

    return (
        <SidebarProvider>
            <div className="flex w-full min-h-screen">
                <AppSidebar />

                <div className="flex-1">
                    <Navbar />

                    <Feed />
                </div>
            </div>
        </SidebarProvider>
    );
}

export default Home;
