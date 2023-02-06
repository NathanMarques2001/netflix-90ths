import { NavBar } from '../components/NavBar';
import { MovieList } from '../components/MovieList';
import { Footer } from '../components/Footer';

export function Main() {
  return (
    <div className="page">
      {<NavBar />}
      <MovieList />
      <Footer />
    </div>
  );
}
