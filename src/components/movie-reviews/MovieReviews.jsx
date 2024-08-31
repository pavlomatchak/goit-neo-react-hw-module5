import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './MovieReviews.module.css';
import { fetchMovieReviews } from '../../services/fetch-movie-reviews';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ data }) => {
      setReviews(data.results);
    });
  }, [movieId]);

  function formatDate(date) {
    const d = new Date(date);

    return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`;
  }
  
  return (
    <div>
      <ul className={css.list}>
        {reviews.length ? reviews.map(item => {
          return <li key={item.id}>
            <p>Author: {item.author}</p>

            <p>Posted: {formatDate(item.created_at)}</p>

            <p>{item.content}</p>
          </li>
        }) : <p>{'We don\'t have any reviews for this movie'}</p>}
      </ul>
    </div>
  );
}

export default MovieReviews;
