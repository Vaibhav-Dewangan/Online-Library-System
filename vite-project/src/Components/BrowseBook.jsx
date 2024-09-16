import React, { useState } from "react";
import { BooksDetails } from "../utils/MockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons';
import BookCard from "./BookCard";
import {useSelector} from "react-redux";
import { useEffect } from "react";

function BrowseBook(props){

  const booksFromRedux = useSelector((state) => state.books.books); 
  const [NewAddedBookCss, setNewAddedBookCss] = useState("Non-Fiction-Container pt-10 w-full  max-sm:pb-0  text-cyan-950 bg-slate-100 hidden")
  const [newBooksDetails, setNewBooksDetails] = useState([...BooksDetails]);

  useEffect(() => {
    if (booksFromRedux.length !== 0) {
      setNewBooksDetails([...BooksDetails, ...booksFromRedux]);
      setNewAddedBookCss(
        "Non-Fiction-Container pt-10 w-full max-sm:pb-0 text-cyan-950 bg-slate-100"
      );
    }
  }, [booksFromRedux]);
 
  const Fiction = newBooksDetails.filter(book => book.category === "Fiction");

  const NonFiction = newBooksDetails.filter(book => book.category === "Non-Fiction");

  const Academic = newBooksDetails.filter(book => book.category === "Academic");

  const Popular = newBooksDetails.filter(book => book.rating >= 4.5);
    
    const[searchInput, setSearchInput] = useState('');
    const[searchFilter, setSearchFilter] = useState([]);

    function SearchInputOnChange(e){
        const value = e.target.value;
        setSearchInput(value);

        if (value.trim() === '') {
            setSearchFilter([]);
            return;
        }

        const filtered = newBooksDetails.filter((book)=>
            book.shortName.toLowerCase().includes(value.toLowerCase()) 
            );
            setSearchFilter(filtered);
           

    };

    function handleSearchClick(){

        const filtered = newBooksDetails.filter((book)=>
        book.shortName.toLowerCase().includes(searchInput.toLowerCase()) 
        );
        setSearchFilter(filtered);

    };

    return(
        <div className="min-h-screen mt-3 sm:mt-8 ">
            <section className="flex flex-row justify-center p-6 gap-5 bg-slate-50">

                <input onChange={SearchInputOnChange} className="shadow-inner w-60 sm:w-96 sm:p-2 border-2 border-slate-800 rounded-full p-1 text-center" type="text" placeholder="Search Book By Name"  value={searchInput} />
                <button onClick={handleSearchClick} className="hover:scale-110"><FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} /></button>

            </section>
            
            {searchInput.trim() === '' ? (
            <>
            {/* New Added Books Section */}
            {booksFromRedux.length !== 0 && (
              <section id="ReduxBook" className="Non-Fiction-Container pt-10 w-full max-sm:pb-0 text-cyan-950 bg-slate-100">
                <h2 className="font-bold lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20"> New Added Books </h2>
                <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto">
                  {booksFromRedux.map((Book) => (
                    <BookCard key={Book.id} bookId={Book.id} rating={Book.rating} title={Book.shortName} imageid={Book.imageId} />
                  ))}
                </div>
              </section>
            )}

            {/* Fiction Books Section */}
            <section id="Fiction" className="Fiction-Container pt-10 w-full max-sm:pb-0 text-cyan-950 box-border">
              <h2 className="font-bold lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20">Fiction Books</h2>
              <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto">
                {Fiction.map((FictionBook) => (
                  <BookCard key={FictionBook.id} bookId={FictionBook.id} rating={FictionBook.rating} title={FictionBook.shortName} imageid={FictionBook.imageId} />
                ))}
              </div>
            </section>
            </>

            ) : (
              
            <>
            {/* Fiction Section at the top when search input is not empty */}
            <section id="Fiction" className="Fiction-Container pt-10 w-full max-sm:pb-0 text-cyan-950 box-border">
              <h2 className="font-bold lg:text-xl pr-6 pl-6 sm:pl-10 lg:pr-20 lg:pl-20">Search Results</h2>
              <div className="Card-1 flex gap-5 p-6 sm:pl-10 sm:pr-10 lg:pr-20 lg:pl-20 lg:gap-10 overflow-x-auto">
                {searchFilter.length > 0 ? (
                  searchFilter.map((search) => (
                    <BookCard key={search.id} bookId={search.id} rating={search.rating} title={search.shortName} imageid={search.imageId}/>
                  ))
                ) : (
                 <p>No books found for the search query</p>
                )}
              </div>
            </section>
            </>
            )}

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



        </div>
    );
};

export default BrowseBook;