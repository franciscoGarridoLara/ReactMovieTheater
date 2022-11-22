import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../css/slider.css";

function Slide(props) {
  const DEFAULT_POSTER_URL = "https://image.tmdb.org/t/p/original/";
  

  const handleOnClick = () =>{
    console.log(`Ver info de pelicula con id: ${props.movie.id}`);
  }

  return (
    <SwiperSlide className="movie-slide">
      <img src={DEFAULT_POSTER_URL + props.movie.poster_path} onClick={handleOnClick}/>
      
    </SwiperSlide>
  );
}

export default Slide;
