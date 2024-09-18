# Online Library System
## Overview
This is a simple React-based application where users can browse books, add new ones, search for specific titles, and explore different categories. It’s designed to be lightweight, user-friendly, and extendable.
 
## Features
- Browse by Category: Books are categorized into Fiction, Non-Fiction, and Academic.
- Add New Books: Easily add books with a rating and category.
- Search Functionality: Quickly search through the collection by title.
- Responsive Design: Works on mobile, tablet, and desktop devices.
- Redux for State Management: Ensures smooth state handling across components.
- Error Handling for Invalid Routes: Takes care of navigating to non-existent pages gracefully.

## Usage
### Browsing Books
- Go to the homepage to see the available book categories.
- Select a category to browse books within it.
- Click on any book to see its details.
### Searching for Books
- Use the search bar to find books by their title quickly.
### Adding New Books
- Navigate to the "Add Book" page.
- Fill in the book’s title, category, and rating, and submit the form to add the book to the collection.

## Redux State Management
The app uses Redux to handle the global state. This ensures that data such as the book list can be accessed and updated consistently throughout the app.

### Key Redux Files:
- bookSlice.js: Contains the logic for adding books and fetching the list of books.
- appStore.js: Configures the Redux store.

## Routing
The app uses React Router for navigating between pages:

- Home (/): Displays the different book categories.
- Browse Books (/BrowseBook): A searchable list of all available books.
- Add Book (/AddBook): A form to add new books.
- Category Books (/books/:category): Displays books within a specific category.
- View Details (/books/viewDetail/:id): Shows detailed info about a specific book.
- 404 Page: Redirects to an error page for invalid routes.
