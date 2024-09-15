import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function BookCard(props){
    return(
       <>
       <div className="Book-Card  flex justify-center flex-col items-center flex-shrink-0  p-5 pl-0 hover:scale-105">

         <img className="Book-Card-img mb-5 bg-cover  h-60 lg:h-64 rounded-md shadow-2xl  " src={`${props.imageid}`} alt="book" />
         <h3 className="Book-Card-Name">{props.title}</h3>
         <h4>{props.rating}<FontAwesomeIcon className="text-sm pl-2" icon={faStar} /></h4>
         
         <Link to ={`/books/viewDetail/${props.bookId}`}>
         <ul>
         <li className="bg-slate-100 hover:shadow-md rounded-md pr-1 pl-1 active:scale-95">View More</li>
         </ul>
         </Link>
         
       
       </div>
       </>
    );
};

export default BookCard;