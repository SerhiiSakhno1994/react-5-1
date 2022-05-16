import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      <PageHeading text={`Книга ${bookId}`} />

      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>
            Автор :
            <Link to={`/authors/${book.author.id}`}>{book.author.name}</Link>
          </p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
