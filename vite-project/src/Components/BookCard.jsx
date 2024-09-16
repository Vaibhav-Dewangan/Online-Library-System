import React from "react";
import { Link } from "react-router-dom";

function BookCard(props){
    return(
       <>
       <div className="Book-Card  flex justify-center flex-col items-center flex-shrink-0  p-5 pl-0 hover:scale-105">
         
         <Link to ={`/books/viewDetail/${props.bookId}`}> <img className="Book-Card-img mb-5 bg-cover h-52  sm:h-56 sm:w-36 md:w-40 md:h-60 lg:w-40 lg:h-60 xl:w-40 xl:h-60 rounded-md shadow-2xl  " src={`${props.imageid}`} alt="book" /></Link>
        
         <h3 className="Book-Card-Name">{props.title}</h3>
         <span className="text-yellow-500 font-bold">{props.rating}★</span>
         
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