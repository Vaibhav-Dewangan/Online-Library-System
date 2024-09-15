import React from "react";
import './WelcomePage.css';

function WelcomePage(){
    return(
        <div className="Welcome-page bg-slate-100 w-screen h-80 lg:h-96 flex items-center max-lg:mt-5" >
        <ul className="welcome-message flex flex-col p-6 mt-6 text-3xl gap-1 text-cyan-950 sm:p-10 lg:pr-20 lg:pl-20  ">
           <li className="font-bold sm:text-4xl lg:text-5xl">A SOFA,</li>
           <li className="font-bold sm:text-4xl lg:text-5xl">A GOOD</li>
           <li className="font-bold sm:text-4xl lg:text-5xl">BOOK,</li>
           <li className="bg-sky-950 sm:text-4xl lg:text-5xl rounded-sm text-white p-1 w-max">AND YOU.</li>
           <li className="text-sm mt-4 rounded-sm lg:text-xl  bg-slate-50 p-1">Welcome to Your Online Library</li>
        </ul>
       </div>
    );
};

export default WelcomePage;