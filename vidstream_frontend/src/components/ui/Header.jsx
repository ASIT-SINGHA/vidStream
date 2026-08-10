import React, { useEffect } from "react";
import myLogo from "../../assets/images/vid_logo.jpeg";
import SearchBar from "./SearchBar";
import { Link } from "react-router";
import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Header() {

  useEffect(()=>{
    const response = axios.get(`${API_BASE_URL}/api/v1/users/get-user`)
    
  },[])

  return (
    <>
      <div className="flex justify-between">
        <Link to="/">
          <img
            src={myLogo}
            alt="vidStream logo"
            className="w-24 h-8 rounded-md"
            
          />
        </Link>

        <SearchBar />
        <div className="size-12 ">
          <button onClick={()=>setIsOpen(!isOpen)}>
            <img
              className="size-12"
              src="image/profile_pic.png"
              alt="profile_pic"
            />
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Header;
