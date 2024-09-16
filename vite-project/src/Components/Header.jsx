import React from "react";
import NavTab from "./NavTab";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return(
        <>
         <div className="header-container shadow-lg h-20 lg:h-28 sm:h-24 p-6 sm:p-10 lg:pr-20 lg:pl-20 lg:mb-5 flex align-middle items-center justify-between">
            <div className="title">
            <span className="title-1 bg-cyan-950 p-1 text-white font-bold sm:text-xl lg:text-2xl">ONLINE</span>
            <span className="title-2 border-4 border-cyan-950 pr-2 pl-2 sm:text-xl lg:text-2xl">Library</span>
            </div>
            <div className="NavTabs-1 max-lg:hidden  "><NavTab /></div>
        </div>
        <div className="NavTabs-2 lg:hidden "><NavTab /></div>
        </> 
    )
};

export default Header;