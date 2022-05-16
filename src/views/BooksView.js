import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Link, useRouteMatch } from 'react-router-dom';

import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function BooksView() {
  const [books, setBooks] = useState(null);
  const { pathname } = useLocation();
  // console.log(pathname);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Книги" />
      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${pathname}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
