import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { fetchMovieCast } from '../../services/fetch-movie-cast';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(({ data }) => {
      setCast(data.cast);
    });
  }, [movieId]);
  
  return (
    <div>
      <ul className={css.list}>
        {cast.length ? cast.map(item => {
          return <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              className={css.image} />

            <p>{item.name}</p>

            <p>Character: {item.character}</p>
          </li>
        }) : <p>No known cast</p>}
      </ul>
    </div>
  );
}

export default MovieCast;
