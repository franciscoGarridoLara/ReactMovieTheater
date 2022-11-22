import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../components/Slide";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../css/slider.css";

function Slider(props) {
  const [movies, setMovies] = useState([]);
  const DEFAULT_POSTER_URL = "https://image.tmdb.org/t/p/original/";

  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${props.genre.id}&with_watch_monetization_types=flatrate`
    );
    const movies = await data.json();
    console.log(movies.results);
    setMovies(movies.results);
  };

  const showMovieInfo = (id) => {
    console.log(`La pelicula seleccionada tiene el id: ${id}`);
  }


  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2 className="h2-genre">{props.genre.name}</h2>
      <Swiper
        // install Swiper modules
        modules={[]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {movies.map((m) => {
          return (
            // <Slide poster_path={m.poster_path} className="swiper-slide">

            // </Slide>
            <SwiperSlide className="movie-slide" key={m.id} >
              <Slide movie={m}></Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
