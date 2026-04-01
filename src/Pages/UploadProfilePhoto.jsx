"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ProfileSetup() {
    const navigate = useNavigate();
    const [ProfileImage, setProfileImage] = useState(null);
    const location = useLocation();
    const firstname = location.state?.firstname;
    const email = location.state?.email;

    const [bio, setBio] = useState("");

    const handleFile = (files) => {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Bio:", bio);
        const user = JSON.parse(localStorage.getItem("user")) || {};
        const updatedUser = { ...user, ProfileImage, bio };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        navigate("/home", { state: updatedUser });
    };

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
                    Complete your profile
                </h2>

                <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
                    Add a profile photo and bio so people can recognize you.
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    {/* PROFILE PHOTO */}
                    <div className="mb-6">
                        <Label className="text-sm font-medium">
                            Profile Photo
                        </Label>

                        <div className="mt-2">
                            <FileUpload onChange={handleFile} />
                        </div>
                    </div>

                    {/* BIO */}
                    <div className="mb-6">
                        <Label className="text-sm font-medium">Bio</Label>

                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell people about yourself..."
                            className="mt-2 w-full h-28 rounded-lg border border-neutral-300 bg-gray-50 p-3 text-sm outline-none focus:ring-2 focus:ring-black resize-none"
                        />
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="h-12 w-full rounded-lg bg-black text-white font-semibold hover:bg-neutral-900 hover:scale-[1.01] transition-all"
                        // onClick={()=>navigate("/home", {state:{ProfileImage}})}
                    >
                        Continue →
                    </button>
                </form>
            </div>
        </div>
    );
}
