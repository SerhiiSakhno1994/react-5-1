import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as bookShelfAPI from '../services/bookshelf-api';
// import { Link } from 'react-router-dom';

export default function AuthorSubView({ authors }) {
  const { authorId } = useParams();
  // const [authors, setAuthors] = useState(null);

  const author =
    authors && authors.find(author => author.id === Number(authorId));

  // useEffect(() => {
  //   bookShelfAPI.fetchAuthors().then(setAuthors);
  // }, []);

  return (
    <>
      {author && <h2>{author.name}</h2>}
      {author && (
        <ul>
          {author.books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
