// "use client";
// import React from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";

// export default function SignupFormDemo() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };
//   return (
//       <div className="shadow-input mx-auto w-full max-w-lg rounded-none bg-white p-4 md:rounded-2xl md:p-8 shadow-xl dark:bg-neutral-900">
//           <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
//               Welcome to Aceternity
//           </h2>
//           <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
//               Login to aceternity if you can because we don&apos;t have a login
//               flow yet
//           </p>

//           <form className="my-8" onSubmit={handleSubmit}>
//               <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
//                   <LabelInputContainer>
//                       <Label htmlFor="firstname">First name</Label>
//                       <Input id="firstname" placeholder="Tyler" type="text" />
//                   </LabelInputContainer>
//                   <LabelInputContainer>
//                       <Label htmlFor="lastname">Last name</Label>
//                       <Input id="lastname" placeholder="Durden" type="text" />
//                   </LabelInputContainer>
//               </div>
//               <LabelInputContainer className="mb-4">
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                       id="email"
//                       placeholder="projectmayhem@fc.com"
//                       type="email"
//                   />
//               </LabelInputContainer>
//               <LabelInputContainer className="mb-4">
//                   <Label htmlFor="password">Password</Label>
//                   <Input id="password" placeholder="••••••••" type="password" />
//               </LabelInputContainer>
//               <LabelInputContainer className="mb-8">
//                   <Label htmlFor="twitterpassword">Your twitter password</Label>
//                   <Input
//                       id="twitterpassword"
//                       placeholder="••••••••"
//                       type="twitterpassword"
//                   />
//               </LabelInputContainer>

//               <button
//                   className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
//                   type="submit">
//                   Sign up &rarr;
//                   <BottomGradient />
//               </button>

//               <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

//               <div className="flex flex-col space-y-4">
//                   <button
//                       className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
//                       type="submit">
//                       <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                       <span className="text-sm text-neutral-700 dark:text-neutral-300">
//                           GitHub
//                       </span>
//                       <BottomGradient />
//                   </button>
//                   <button
//                       className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
//                       type="submit">
//                       <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                       <span className="text-sm text-neutral-700 dark:text-neutral-300">
//                           Google
//                       </span>
//                       <BottomGradient />
//                   </button>
//                   <button
//                       className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
//                       type="submit">
//                       <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                       <span className="text-sm text-neutral-700 dark:text-neutral-300">
//                           OnlyFans
//                       </span>
//                       <BottomGradient />
//                   </button>
//               </div>
//           </form>
//       </div>
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
//       <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex w-full flex-col space-y-2", className)}>
//       {children}
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";


export default function SignupForm() {
    
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstname.trim()) {
            alert("Please enter your first name");
            return;
        }

        if (!email.includes("@")) {
            alert("Enter a valid email");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        navigate("/UploadProfilePhoto", { state: { firstname, email } });
    };

    function goToLogin() {
        navigate("/login");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:bg-black">
            <div className="mx-auto w-full max-w-lg rounded-2xl p-8 bg-white/90 backdrop-blur-md shadow-2xl dark:bg-neutral-900">
                <div className="flex justify-center mb-6">
                    <img
                        src="/Images/FLICKSY-Logo.jpeg"
                        alt="Flicksy Logo"
                        className="h-14 mb-6"
                    />
                </div>

                <h2 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-200">
                    Create your Flicksy account
                </h2>

                <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
                    Join Flicksy and start sharing your moments with the world.
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                id="firstname"
                                placeholder="Your first name"
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </LabelInputContainer>

                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                id="lastname"
                                placeholder="Your last name"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </LabelInputContainer>
                    </div>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="you@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="••••••••"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-6">
                        <Label htmlFor="confirmPassword">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPassword"
                            placeholder="••••••••"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </LabelInputContainer>

                    <button
                        className="h-12 text-[15px] font-semibold w-full rounded-lg bg-black text-white hover:bg-neutral-900 hover:scale-[1.01] transition-all"
                        type="submit">
                        Create Account →
                    </button>

                    <div className="flex items-center my-8">
                        <div className="flex-1 h-px bg-neutral-300"></div>
                        <span className="px-4 text-[11px] tracking-wider text-neutral-500">
                            OR CONTINUE WITH
                        </span>
                        <div className="flex-1 h-px bg-neutral-300"></div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <button
                            className="flex h-11 w-full items-center gap-3 rounded-lg bg-gray-50 border border-gray-200 px-4 font-medium text-black hover:bg-gray-100 transition dark:bg-zinc-900"
                            type="button">
                            <IconBrandGithub className="h-5 w-5" />
                            Continue with GitHub
                        </button>

                        <button
                            className="flex h-11 w-full items-center gap-3 rounded-lg bg-gray-50 border border-gray-200 px-4 font-medium text-black hover:bg-gray-100 transition dark:bg-zinc-900"
                            type="button">
                            <IconBrandGoogle className="h-5 w-5" />
                            Continue with Google
                        </button>

                        <button
                            className="flex h-11 w-full items-center gap-3 rounded-lg bg-gray-50 border border-gray-200 px-4 font-medium text-black hover:bg-gray-100 transition dark:bg-zinc-900"
                            type="button">
                            <IconBrandOnlyfans className="h-5 w-5" />
                            Continue with OnlyFans
                        </button>
                    </div>

                    <p className="text-center text-sm text-neutral-600 mt-6">
                        Already have an account?{" "}
                        <span
                            className="text-black font-semibold hover:underline cursor-pointer"
                            onClick={goToLogin}>
                            Log in
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};