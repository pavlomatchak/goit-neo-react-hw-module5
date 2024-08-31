import axios from 'axios';
import { API_TOKEN } from '../../config';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import css from './MoviesPage.module.css';
import MoviesList from '../../components/movies-list/MoviesList';

const MoviesPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasSearched, setHasSearched] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function searchMovies() {
      const options = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
        params: {
          query,
        },
      };

      try {
        const { data } = await axios.get('https://api.themoviedb.org/3/search/movie', options);
        setSearchResult(data.results);
      } catch (err) {
        console.error(err);
      }
    }
  
    setHasSearched(true);
    searchMovies();
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;
    if (value.length) {
      setSearchParams({ query: value });
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={css.form}>
        <input type="text" name="query" className={css.input} required defaultValue={query} />

        <button type="submit">Search</button>
      </form>

      <MoviesList movies={searchResult} />

      {hasSearched && !searchResult.length && <p>No results found</p>}
    </div>
  );
};

export default MoviesPage;
