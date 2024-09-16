import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import BrowseBook from './Components/BrowseBook.jsx'
import ErrorElement from './Components/ErrorElememt.jsx'
import AddBook from './Components/AddBook.jsx'
import Body from './Components/Body.jsx'
import BooksByCategory from './Components/BooksByCategory.jsx'
import ViewDetails from './Components/ViewDetails.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:"",
        element:<Body/>
      },
      {
        path:"/BrowseBook",
        element:<BrowseBook />
      },
      {
        path:"/AddBook",
        element:<AddBook />
      },
      {
        path: "/books/:category",  
        element: <BooksByCategory />,
      },
      {
        path:"/books/viewDetail/:id",
        element: <ViewDetails/>
      },
      {
        path:"/"

      },
     
    ],
    errorElement:<ErrorElement />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
