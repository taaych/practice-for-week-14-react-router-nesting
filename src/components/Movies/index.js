import { Route, NavLink, useParams, useRouteMatch, Switch } from 'react-router-dom';
import { movies } from '../../data/movieData';
import MovieDetails from '../MovieDetails';

function Movies({ id, title, description }) {
  // const { id, title, description } = movies;
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </NavLink>
        ))}
      </nav>
      
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;