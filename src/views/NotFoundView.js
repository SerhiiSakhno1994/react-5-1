import { Link } from 'react-router-dom';

export default function NotFoundView() {
  return (
    <h1>
      404 Сторінка не знайдена, перейти на <Link to="/">Головна</Link>
    </h1>
  );
}
