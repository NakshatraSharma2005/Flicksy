import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import PostDetails from "./Pages/PostDetails";
import SignupForm from "./Pages/SignupForm"
import LoginForm from "./Pages/LoginForm";
import ProfileSetup from "./Pages/UploadProfilePhoto"


function App() {
    return (
        <Routes>
            {/* signup page */}
            <Route path="/" element={<SignupForm />} />

            {/* Profile photo and bio */}
            <Route path="/UploadProfilePhoto" element={<ProfileSetup />} />

            {/* Login Page */}
            <Route path="/login" element={<LoginForm />} />

            {/* normal app */}
            <Route path="/home" element={<Home />} />

            {/* create post full page */}
            <Route path="/create-post" element={<CreatePost />} />

            {/* next page */}
            <Route path="/PostDetails" element={<PostDetails />} />
        </Routes>
    );
}

export default App;
