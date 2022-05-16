import { useState, useEffect } from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import AuthorSubView from './AuthorSubView';

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Автори" />
      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`/authors/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Routes>
        <Route />
        <Route
          path={`:authorId`}
          element={authors && <AuthorSubView authors={authors} />}
        />
      </Routes>
      {/* <Outlet /> */}
    </>
  );
}
