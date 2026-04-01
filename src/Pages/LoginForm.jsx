"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted");
    };
    function goToSignup() {
        window.location.href = "/";
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:bg-black">
            {/* CARD */}
            <div className="mx-auto w-full max-w-lg rounded-2xl p-8 bg-white/90 backdrop-blur-md shadow-2xl dark:bg-neutral-900">
                {/* LOGO */}
                <div className="flex justify-center mb-8">
                    <img
                        src="/Images/FLICKSY-Logo.jpeg"
                        alt="Flicksy Logo"
                        className="h-14"
                    />
                </div>

                {/* HEADER */}
                <h2 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-200">
                    Welcome back
                </h2>

                <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
                    Log in to your Flicksy account.
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    {/* EMAIL OR USERNAME */}
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email or Username</Label>
                        <Input
                            id="email"
                            placeholder="Enter your email or username"
                            type="text"
                            className="focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50"
                        />
                    </LabelInputContainer>

                    {/* PASSWORD */}
                    <LabelInputContainer className="mb-6">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="••••••••"
                            type="password"
                            className="focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50"
                        />
                    </LabelInputContainer>

                    {/* LOGIN BUTTON */}
                    <button
                        className="h-12 w-full rounded-lg bg-black text-white font-semibold hover:bg-neutral-900 hover:scale-[1.01] transition-all"
                        type="submit">
                        Log in →
                    </button>

                    {/* DIVIDER */}
                    <div className="flex items-center my-8">
                        <div className="flex-1 h-px bg-neutral-300"></div>
                        <span className="px-4 text-[11px] tracking-wider text-neutral-500">
                            OR CONTINUE WITH
                        </span>
                        <div className="flex-1 h-px bg-neutral-300"></div>
                    </div>

                    {/* SOCIAL LOGIN */}
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

                    {/* SIGNUP LINK */}
                    <p className="text-center text-sm text-neutral-600 mt-6">
                        Don't have an account?{" "}
                        <span className="text-black font-semibold cursor-pointer hover:text-neutral-700 hover:underline"
                        onClick={goToSignup}
                        >
                            Sign up
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
