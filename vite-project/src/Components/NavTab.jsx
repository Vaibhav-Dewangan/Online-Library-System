import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faPlus  } from '@fortawesome/free-solid-svg-icons';

function NavTab(){
    return(
        <div className="Nav-container bg-slate-100  p-1 pr-6 pl-6 sm:pr-10 sm:pl-10 lg:pr-20 lg:pl-20">

             <ul className="Nav-list flex justify-between items-center sm:justify-start sm:gap-14 ">

               <Link to="/">
               <li className="hover:scale-105"><FontAwesomeIcon className="sm:pr-2 max-sm:hidden" icon={faHouse} />Home</li>
               </Link>

               <Link to="/BrowseBook">
               <li className="hover:scale-105"><FontAwesomeIcon className="sm:pr-2 max-sm:hidden" icon={faMagnifyingGlass} />Browse Books</li>
               </Link>

               <Link to="/AddBook">
               <li className="hover:scale-105"><FontAwesomeIcon className="sm:pr-2 max-sm:hidden" icon={faPlus} />Add Book</li>
               </Link>
              

             </ul>

        </div>
       
    )
};
export default NavTab;