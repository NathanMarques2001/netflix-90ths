import { NavBar } from '../components/NavBar';
import { MovieList } from '../components/MovieList';
import { Footer } from '../components/Footer';

export function Main() {
  return (
    <div>
      <NavBar />
      <MovieList />
      <Footer />
    </div>
  );
}
