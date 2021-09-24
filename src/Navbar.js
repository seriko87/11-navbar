import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const refNav = useRef(null);
  const refLinks = useRef(null);

  const handleBars = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  useEffect(() => {
    const linksHeight = refLinks.current.getBoundingClientRect().height;
    if (nav) {
      refNav.current.style.height = `${linksHeight}px`;
    } else {
      refNav.current.style.height = `0px`;
    }
  }, [nav]);
  return (
    <header>
      <div className='logo-bar'>
        <img src={logo} alt='Coding Addict' />
        <button className='bars' onClick={handleBars}>
          <FaBars />
        </button>
      </div>

      <div className='nav' ref={refNav}>
        <ul ref={refLinks} className='ul_list'>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url} className='nav_text'>
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='social'>
        {social.map((item) => {
          return (
            <a
              href={item.url}
              key={item.id}
              className='social_icon'
              target='_blank'
              rel='noreferrer'
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
