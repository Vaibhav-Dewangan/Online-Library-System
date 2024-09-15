import React from "react";
import { BooksDetails } from "../utils/MockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons';
import BookCard from "./BookCard";

function BrowseBook(props){
    return(
        <div className="min-h-screen mt-3 sm:mt-8 ">
            <section className="flex flex-row  justify-center p-6 gap-5 bg-slate-50">

                <input className="shadow-inner w-60 sm:w-96 sm:p-2 border-2 border-slate-800 rounded-full p-1 text-center" type="text" placeholder="Search Book Name" />
                <button className="hover:scale-110"><FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} /></button>

            </section>
            <section className="Sci-Fi-Container  pt-10 w-full  max-sm:pb-0 text-cyan-950 ">
               <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20">Your Searches</h2>
               <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 scroll-smooth lg:gap-10 overflow-x-auto sm:flex-wrap sm:justify-center max-h-screen overflow-scroll ">

               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               <BookCard imageid="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"/>
               </div>
            </section>

        </div>
    );
};

export default BrowseBook;