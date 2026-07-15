import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import DeshBoard from "./pages/DeshBoard.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import LogOut from "./pages/LogOut.jsx";
import Container from "./components/Container.jsx"




function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route  path="/" element={ < DeshBoard />}/>
        <Route  path="/signup" element={ < SignUp />}/>
        <Route  path="/login" element={ < LogIn />}/>
        <Route  path="/logout" element={ < LogOut />}/>
      </Routes>
    </Container>
  );
}

export default App;
