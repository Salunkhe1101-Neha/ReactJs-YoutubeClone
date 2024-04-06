import React from 'react';
import { useState } from 'react';
import './Head.css'; // Import the CSS file
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../util/appSlice';

function Head() {
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(setSearchText(event.target.value))
  };

  const dispatch=useDispatch();
  const handleSidebar=()=>{
       dispatch(toggleSidebar())
  }

  return (
    <header className="header">
       <div className="w-10 hover:cursor-pointer">
        {/* Your logo image or text goes here */}
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png"
          alt="Sidebar logo"
          onClick={handleSidebar}
        />
      </div>
      <div className="logo">
        {/* Your logo image or text goes here */}
       <a href="">
       <img
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="YouTube Clone"
        />
       </a>
      </div>
      <div className="searchBar">
        {/* Search bar component */}
       <form onSubmit={(event)=>event.preventDefault()}>
       <input 
        type="text" 
        placeholder="Search" 
        className="input" 
        onChange={handleChange}
        />
        <button className="button">Search</button>
       </form>
      </div>
      <div className="top-buttons">
      <button className="top-button">Sign in</button>
      <button className="top-button">Sign up</button>
      <button className="top-button">More options</button>
    </div>
    </header>
  );
}

export default Head;
