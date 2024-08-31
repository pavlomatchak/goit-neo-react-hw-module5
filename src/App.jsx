import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation/Navigation';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/movie-details-page/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/movie-cast/MovieCast'));
const MovieReviews = lazy(() => import('./components/movie-reviews/MovieReviews'));
const MoviesPage = lazy(() => import('./pages/movies-page/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/not-found-page/NotFoundPage'));

function App() {
  return (
    <>
      <Navigation />

      <div className='container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />

              <Route path="reviews" element={<MovieReviews />} />
            </Route>

            <Route path="/movies" element={<MoviesPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
