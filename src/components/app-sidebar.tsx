"use client";
import { Switch } from "@/components/ui/switch";
import * as React from "react";
// import SignupForm from "@/Pages/SignupForm"

import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useTheme } from "next-themes";
import { useLocation } from "react-router-dom";


// const data = {
//     user: {
//         name: "Salmaan Khan",
//         email: "m@example.com",
//         avatar: {},
//     },
//     navMain: [
//         {
//             title: "Settings",
//             url: "#",
//             icon: Settings2,
//         },
//     ],
//     navSecondary: [
//         {
//             title: "Support",
//             url: "#",
//             icon: LifeBuoy,
//         },
//         {
//             title: "Feedback",
//             url: "#",
//             icon: Send,
//         },
//     ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = useLocation();

    const ProfileImage = location.state?.ProfileImage;
    const firstname = location.state?.firstname;
    const bio = location.state?.bio;
    const { theme, setTheme } = useTheme();

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
                    <img
                        src={ProfileImage}
                        className="h-16 w-16 rounded-full "
                        alt="Profile"
                    />
                    <span className="text-sm font-semibold">{firstname}</span>
                    {/* const firstname = localStorage.getItem("firstname") */}
                    <span className="text-xs text-muted-foreground">{bio}</span>
                </div>
            </SidebarHeader>
            <SidebarContent className="flex flex-col h-full px-3">
                <div className="flex flex-col gap-3 text-sm">
                    <div
                        href="#"
                        className="flex items-center gap-2 hover:bg-muted rounded-md px-3 py-2">
                        👤 Profile
                    </div>
                    <div
                        href="#"
                        className="flex items-center gap-2 hover:bg-muted rounded-md px-3 py-2">
                        <span>🌞 Light</span>
                        <Switch
                            checked={theme === "dark"}
                            onCheckedChange={(checked) =>
                                setTheme(checked ? "dark" : "light")
                            }
                        />
                        <span>🌙 Dark</span>
                    </div>

                    <div
                        href="#"
                        className="flex items-center gap-2 hover:bg-muted rounded-md px-3 py-2">
                        ❓ Help
                    </div>

                    <div
                        href="#"
                        className="flex items-center gap-2 hover:bg-muted rounded-md px-3 py-2">
                        📩 Feedback
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 text-sm pb-4">
                    <a
                        href="#"
                        className="flex items-center gap-2 hover:bg-muted rounded-md px-3 py-2">
                        ⚙️ Settings
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-2 hover:bg-muted rounded-md px-3 py-2 text-red-500">
                        🚪 Logout
                    </a>
                </div>
            </SidebarContent>
            {/* <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter> */}
        </Sidebar>
    );
}
