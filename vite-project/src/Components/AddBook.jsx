import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputCss = "bg-slate-100 p-1 shadow-inner rounded-md";
    const inputDivCss = "inputData flex flex-col sm:w-96 gap-2 pb-2";
   
    const [bookDetails, setBookDetails] = useState({
        id: '',
        name: '',
        shortName: '',
        rating: '',
        category: '',
        genre: '',
        author: '',
        description: '',
        imageId: ''
      });

      function handleChange(event) {
        const { name, value } = event.target;
        setBookDetails(prevDetails => ({ ...prevDetails, [name]: value }));
       
      }

      function validateForm() {
        const newErrors = {};
        if (!bookDetails.name) newErrors.name = "Title is required";
        if (!bookDetails.shortName) newErrors.shortName = "Short Title is required";
        if (!bookDetails.genre) newErrors.genre = "Genre is required";
        if (!bookDetails.author) newErrors.author = "Author is required";
        if (!bookDetails.description) newErrors.description = "Description is required";
        if (!bookDetails.imageId) newErrors.imageId = "Image URL is required";
        return newErrors;
    }

    function handleSubmit(e) {
      e.preventDefault();
      
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        return;
      }
      const newBook = { ...bookDetails, id: Date.now().toString() };
        console.log('New Book details:', newBook);
        dispatch(addBook(newBook));
      
        navigate('/BrowseBook');
    }
      
    return (

    <div className="AddBookContainer sm:flex sm:flex-row sm:justify-center ">

    <form onSubmit={handleSubmit} className="p-6 mt-5 max-sm:max-w-96 sm:p-10 ">
    
      <div className={inputDivCss}>
        <label>Title: </label>
        <input className={inputCss} type="text" name="name" value={bookDetails.name} onChange={handleChange} required />
      </div>
    
      <div className={inputDivCss}>
        <label>Short Title: </label>
        <input className={inputCss} type="text" name="shortName" value={bookDetails.shortName} onChange={handleChange} required />
      </div>
    
      <div className={inputDivCss}>
        <label>Rating: </label>
        <input className={inputCss} type="text" name="rating" value={bookDetails.rating} onChange={handleChange} />
      </div>
     
      <div className={inputDivCss}>  
        <label>Genre: </label>
        <input className={inputCss} type="text" name="genre" value={bookDetails.genre} onChange={handleChange} required />
      </div>
    
      <div className="flex flex-col sm:w-96 gap-2 pb-2">
        <label>Categories: </label>
          
          <div className="inputData flex flex-row justify-between gap-3 sm:w-96 sm:pr-2">
            <div className="flex gap-1">
            <input type="radio" name="category" value="Fiction" checked={bookDetails.category === "Fiction"} onChange={handleChange} />
            <label>Fiction</label>
          </div>
        
         <div className="flex gap-1">
            <input type="radio" name="category" value="Non-Fiction" checked={bookDetails.category === "Non-Fiction"} onChange={handleChange} />
            <label>Non-fiction</label>
          </div>
         
          <div className="flex gap-1">
            <input type="radio" name="category" value="Academic" checked={bookDetails.category === "Academic"} onChange={handleChange} />
            <label>Academic</label>
          </div>
    
          </div>
      </div>
      
      <div className={inputDivCss}>
        <label>Author: </label>
        <input className={inputCss} type="text" name="author" value={bookDetails.author} onChange={handleChange} required />
      </div>
    
      <div className={inputDivCss}>
        <label>Description: </label>
        <textarea className={inputCss} name="description" value={bookDetails.description} onChange={handleChange} required />
      </div>
  
      <div className={inputDivCss}>
        <label>Image URL: </label>
        <input className={inputCss} type="text" name="imageId" value={bookDetails.imageId} onChange={handleChange} required />
      </div>
     
      <div className="flex justify-center sm:w-96 gap-2 pb-2">
        <button className="mt-6 sm:w-96 active:scale-95 hover:scale-105 bg-slate-900 text-white p-1 pr-3 pl-3 rounded-md " type="submit">Add Book</button>
      </div>
    
    </form>

    <div className=" w-full max-w-3xl max-sm:hidden mt-16 h-96  m-10 flex justify-start items-center  bg-[url('/welcome.JPEG')] bg-cover bg-center rounded-md ">
      
      <ul className="welcome-message flex flex-col p-6 mt-6 text-3xl gap-1 text-cyan-950 sm:p-10 lg:pr-20 lg:pl-20  ">
           <li className="font-bold sm:text-4xl lg:text-6xl">A SOFA,</li>
           <li className="font-bold sm:text-4xl lg:text-6xl">A GOOD</li>
           <li className="font-bold sm:text-4xl lg:text-6xl">BOOK,</li>
           <li className="bg-sky-950 sm:text-4xl lg:text-6xl rounded-sm text-white p-1 w-max">AND YOU.</li>
      </ul>
    
    </div>

  </div>
  );
};

export default AddBook;