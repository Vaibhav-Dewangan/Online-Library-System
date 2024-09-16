import React from "react";
import { useState } from "react";
import { BooksDetails } from "../utils/MockData";
import BookCard from "./BookCard";
import WelcomePage from "./Welcome";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect } from "react";
import './body.css';



function Body(){

  const booksFromRedux = useSelector((state) => state.books.books); 

  const [newBooksDetails, setNewBooksDetails] = useState([...BooksDetails]);

  useEffect(() => {
    setNewBooksDetails([...BooksDetails, ...booksFromRedux]);
  }, [booksFromRedux]);
 
  const Fiction = newBooksDetails.filter(book => book.category === "Fiction");

  const NonFiction = newBooksDetails.filter(book => book.category === "Non-Fiction");

  const Academic = newBooksDetails.filter(book => book.category === "Academic");

  const Popular = newBooksDetails.filter(book => book.rating >= 4.5);

  
    return(
        <>
         <WelcomePage />
         <section className="category  pb-0 ">

            <ul className="flex pb-5 p-6 sm:pr-10 sm:pl-10 lg:pr-20 lg:pl-20 flex-row justify-start sm:gap-7 lg:gap-10 gap-5 overflow-x-scroll text-nowrap">
              <Link to="/books/fiction">
              <li className="border-2 active:scale-95 hover:border-yellow-300 hover:scale-105 p-1 pl-3 pr-3 rounded-sm">Fiction</li>
              </Link>
              <Link to="/books/non-fiction">
              <li className="border-2 active:scale-95 hover:border-yellow-300 hover:scale-105 p-1 pl-3 pr-3 rounded-sm">Non-Fiction</li>
              </Link>
              <Link to="/books/academic">
              <li className="border-2 active:scale-95 hover:border-yellow-300 hover:scale-105 p-1 pl-3 pr-3 rounded-sm">Academic</li>
              </Link>
            </ul>
        
         </section>

         <section  className="Popular-Container pt-5 w-full  max-sm:pb-0 text-cyan-950 box-border">
          <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20 ">Popular Books</h2>
          <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto   ">
            
            {Popular.map((PopularBook)=>{
              return <BookCard key={PopularBook.id} bookId={PopularBook.id} rating={PopularBook.rating} title={PopularBook.shortName} imageid={PopularBook.imageId} />
            })}
           
          </div>
         </section>

         <section id="Fiction" className="Fiction-Container pt-10 w-full  max-sm:pb-0 text-cyan-950 box-border">
          <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20 ">Fiction Books</h2>
          <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto   ">
            
            {Fiction.map((FictionBook)=>{
              return <BookCard key={FictionBook.id} bookId={FictionBook.id} rating={FictionBook.rating} title={FictionBook.shortName} imageid={FictionBook.imageId} />
            })}
           
          </div>
         </section>

         <section id="NonFiction" className="Non-Fiction-Container pt-10 w-full  max-sm:pb-0  text-cyan-950 bg-slate-100">
          <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10  lg:pr-20 lg:pl-20">Non-Fiction Books</h2>
          <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto ">
           
          {NonFiction.map((NonFictionBook)=>{
              return <BookCard key={NonFictionBook.id} bookId={NonFictionBook.id} rating={NonFictionBook.rating} title={NonFictionBook.shortName} imageid={NonFictionBook.imageId} />
            })}

          </div>
         </section>

         <section id="Academic" className="Sci-Fi-Container pt-10 w-full  max-sm:pb-0 text-cyan-950">
          <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20">Academic Books</h2>
          <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto ">
            
          {Academic.map((AcademicBook)=>{
              return <BookCard key={AcademicBook.id} bookId={AcademicBook.id} rating={AcademicBook.rating} title={AcademicBook.shortName} imageid={AcademicBook.imageId} />
            })}
            
          </div>
         </section>

        </>
       
    );
};

export default Body;