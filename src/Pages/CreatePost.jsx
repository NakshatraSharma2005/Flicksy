import { FileUpload } from "@/components/ui/file-upload";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatePost() {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    const handleFile = (files) => {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl font-bold">Upload Your Post</h1>

            <FileUpload onChange={handleFile} />

            <button
                onClick={() =>
                    navigate("/PostDetails", {
                        state: { image },
                    })
                }
                className="px-6 py-2 bg-black text-white rounded-lg">
                Next
            </button>
        </div>
    );
}

export default CreatePost;
