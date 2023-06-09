import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
import { ListMovies } from "./home.styled";
import { getTrendingMovies } from "../../shared/services/api";
import css from "./home.module.css";

import { HomeList } from "../HomeList/HomeList";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // const location = useLocation();

  // const [films, setFilms] = useState([]);

  // useEffect(() => {
  //   getTrendingMovies().then((data) => setFilms(data.results));
  // }, []);

  



  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        let data = await getTrendingMovies();

        data = data.map(el => {
          return {
            ...el,
            vote_average: el.vote_average.toFixed(1),
            popularity: el.popularity.toString().substring(0, 2),
          }
        })

        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ListMovies>
        <h1 className={css.title}>Trending today</h1>
        {loading ? "loading..." : <HomeList films={data} />}
      </ListMovies>

      {/* <ListMovies>
        <h2 className={css.title}>Trending movies:</h2>
        {loading
          ? "Loading..."
          : data.map(({ title, id }) => (
              <MovieItem key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={css.movieItem}
                >
                  {title}
                </Link>
              </MovieItem>
            ))}
      </ListMovies> */}
    </>
  );
};

export default Home;
