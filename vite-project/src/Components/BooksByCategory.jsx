import React from 'react';
import { useParams } from 'react-router-dom';
import { BooksDetails } from '../utils/MockData';  
import BookCard from './BookCard';

function BooksByCategory() {
  const { category } = useParams(); 
  const filteredBooks = BooksDetails.filter((book) => book.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="min-h-screen p-6 sm:p-10 lg:pr-20 lg:pl-20">
      <h1 className="text-2xl font-bold mb-6 capitalize">{category} Books</h1>
     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} bookId={book.id} rating={book.rating} title={book.shortName} imageid={book.imageId} />
          ))}
        </div>
    
    </div>
  );
}

export default BooksByCategory;
