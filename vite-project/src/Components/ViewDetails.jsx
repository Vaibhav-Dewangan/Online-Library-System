import React from "react";
import { useParams, Link } from "react-router-dom";
import { BooksDetails } from "../utils/MockData";

function ViewDetails() {
    const { id } = useParams();
    const book = BooksDetails.find(book => book.id === parseInt(id));

    if (!book) return <p className="h-screen mt-5 pl-6 sm:pl-10 lg:pl-20 text-red-500 lg:text-xl">Book not found</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <div className="flex flex-col sm:flex-row items-center">
                {/* Book Image */}
                <div className="w-full sm:w-1/3">
                    <img
                        src={book.imageId}
                        alt={book.name}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </div>

                {/* Book Details */}
                <div className="sm:ml-6 mt-6 sm:mt-0 w-full sm:w-2/3">
                    <h1 className="text-2xl font-bold text-gray-800">{book.name}</h1>
                    <h2 className="text-xl text-gray-600 mt-2">{book.author}</h2>
                    <p className="text-sm text-gray-500 italic mt-1">{book.genre}</p>
                    <div className="flex items-center mt-4">
                        <span className="text-yellow-500 font-bold">{book.rating}★</span>
                        <span className="ml-2 text-gray-600">Category: {book.category}</span>
                    </div>
                    <p className="mt-4 text-gray-700">{book.description}</p>

                    {/* Button to go back */}
                    <div className="mt-6 flex flex-row gap-5">
                        <Link to={`/books/${book.category}`} className="flex flex-row gap-2 p-1" ><p className="text-red-500 font-bold ">Back to List</p></Link>
                        <Link to="/BrowseBook" className="flex flex-row gap-2 p-1" ><p className="text-red-500 font-bold ">Browse Books</p></Link>
                    </div>
    
                </div>
            </div>
        </div>
    );
}

export default ViewDetails;
