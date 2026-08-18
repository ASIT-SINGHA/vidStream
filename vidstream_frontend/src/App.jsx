import React from "react";
import { Route, Routes } from "react-router";
import DeshBoard from "./pages/DeshBoard.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import LogOut from "./pages/LogOut.jsx";
import Container from "./components/ui/Container.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/ui/Navbar.jsx";
import AuthLayout from "./components/layout/AuthLayout.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import VideoDetails from "./pages/VideoDetails.jsx";
import VideoUpload from "./pages/VideoUpload.jsx";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        //public route
        <route element={AuthLayout}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
        </route>
        // private route
        <route element={MainLayout}>
          <Route path="/" element={<Home />} />
          <Route path="/deshboard" element={<DeshBoard />} />
          <Route path="/video-upload" element={<VideoUploadUpload />} />
          <Route path="/video-details" element={<VideoDetailsDetails />} />
        </route>
      </Routes>
    </Container>
  );
}

export default App;
