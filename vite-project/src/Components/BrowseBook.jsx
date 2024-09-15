import React, { useState } from "react";
import { BooksDetails } from "../utils/MockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons';
import BookCard from "./BookCard";

function BrowseBook(props){
    
    const[searchInput, setSearchInput] = useState('');
    const[searchFilter, setSearchFilter] = useState([]);

    function SearchInputOnChange(e){
        const value = e.target.value;
        setSearchInput(value);

        if (value.trim() === '') {
            setSearchFilter([]);
            return;
        }

        const filtered = BooksDetails.filter((book)=>
            book.shortName.toLowerCase().includes(value.toLowerCase()) || book.category.toLowerCase() === (value.toLowerCase())
            );
            setSearchFilter(filtered);

    };

    function handleSearchClick(){

        const filtered = BooksDetails.filter((book)=>
        book.shortName.toLowerCase().includes(searchInput.toLowerCase()) || book.category.toLowerCase() === (searchInput.toLowerCase())
        );
        setSearchFilter(filtered);

    };

    return(
        <div className="min-h-screen mt-3 sm:mt-8 ">
            <section className="flex flex-row  justify-center p-6 gap-5 bg-slate-50">

                <input onChange={SearchInputOnChange} className="shadow-inner w-60 sm:w-96 sm:p-2 border-2 border-slate-800 rounded-full p-1 text-center" type="text" placeholder="Search Book Name"  value={searchInput} />
                <button onClick={handleSearchClick} className="hover:scale-110"><FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} /></button>

            </section>
            <section className="Sci-Fi-Container  pt-10 w-full  max-sm:pb-0 text-cyan-950 ">
               <h2 className="font-bold  lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20">Your Searches</h2>
               <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 scroll-smooth lg:gap-10 overflow-x-auto sm:flex-wrap sm:justify-center max-h-screen overflow-scroll ">
               
               {searchFilter.map((search)=>{
                return <BookCard key={search.id} bookId={search.id} rating={search.rating} title={search.shortName} imageid={search.imageId} />
                })
               }

               </div>
            </section>

        </div>
    );
};

export default BrowseBook;