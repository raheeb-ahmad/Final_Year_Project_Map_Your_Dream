import React from 'react';
import './SideBar.css';

const sidebar = () => (
  <nav className="navbar">
    <div className="logo">🇲🇦🇵 🇾🇴🇺🇷 🇩🇷🇪🇦🇲</div>
    <ul className="nav-links">
      <li><a href="/">ʜᴏᴍᴇ</a></li>
      <li><a href="/pricing">ᴘʀɪᴄɪɴɢ</a></li>
      <li><a href="/about">ᴀʙᴏᴜᴛ</a></li>
      <li><a href="/features">ꜰᴇᴀᴛᴜʀᴇꜱ</a></li>
      <li><a href="/contact">ᴄᴏɴᴛᴀᴄᴛ</a></li>
    </ul>
    <div className="gr__circle__top"> h</div>
    {/* <div className='gr__circle__bottom'></div> */}
    <div className="login">
      <a href="/login">LogIn</a>
      <button type="button" className="rounded-button"><a href="/register">SignUp</a></button>
    </div>
  </nav>
);

export default sidebar;
