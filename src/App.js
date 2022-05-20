import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Appbar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
// import AuthorSubView from './views/AuthorSubView';
import BooksView from './views/BooksView';
import BookDetailsView from './views/BookDetailsView';
import NotFoundView from './views/NotFoundView';
import TableView from './views/TableView';

function App() {
  return (
    <Container>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/authors/*" element={<AuthorsView />} />
        {/* <Route path=":authorId" element={<AuthorSubView />} />
        </Route> */}
        <Route path="/books" element={<BooksView />} />
        <Route path="/books/:bookId" element={<BookDetailsView />} />
        <Route path="/table" element={<TableView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
  );
}

export default App;
