import React from "react";

function Footer(){
    return(
        <footer className="mt-20 sm:mt-28 lg:mt-36">

            <div className="h-20 bg-slate-200"></div>

            <div className="bg-slate-900 xl:h-60  xl:pt-20 lg:h-60  lg:pt-16 sm:h-60  sm:pt-16 h-44  pt-10 text-white text-justify ">
            
            <p className=" md:mr-20 md:ml-20 mr-10 ml-10"> Copyright [2024] [ Online Library ]. All rights reserved.</p>
            <br />
            <p className=" md:mr-20 md:ml-20 sm:mr-10 sm:ml-10 max-sm:invisible"> The content, design, and code of this todo list webpage are protected by international copyright laws. You may not reproduce, distribute, or display any part of this webpage without prior written permission from [ Online Library ].</p>
           
            </div>
        </footer>
       
    )
}

export default Footer;