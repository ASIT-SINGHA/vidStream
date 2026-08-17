import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, Add, Person, Notifications } from "@mui/icons-material";
import SearchBar from "./SearchBar.jsx";
import Btn from "./Btn.jsx";
import Sidebar from "./Sidebar.jsx";

function Navbar() {
  const [isSidebarOpen, IsetIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex ">
      <div className="flex">
        <Menu onClick={() => IsetIsSidebarOpen((prev) => !prev)} />
        <Link to="/">
        
          <img
            className="w-18 h-10"
            src="https://res.cloudinary.com/fmvhynvl/image/upload/v1786964410/vid_logo.jpg"
            alt="vidStream-logo"
          />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Btn>
          <Add />
          <span>Create</span>
        </Btn>
        <Btn>
          <Notifications />
        </Btn>
        <Btn>
          <Person />
        </Btn>
        
      </div>
    </nav>
  );
}

export default Navbar;
