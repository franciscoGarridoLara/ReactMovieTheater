import React, {useState, useEffect} from 'react'
import Slider from '../components/Slider'
import Logo from '../components/Logo'
import Header from '../components/Header'


function Hub() {
  const [genres, setGenres] = useState([]);

  const getGenres = async (name) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`
    );
    const genres = await data.json();
    setGenres(genres.genres);
  };
  
  
  useEffect(() => {
    getGenres();
  },[]);


  return (
    <div>
        <Header></Header>
        {genres.map((g) => {
        return (
          <Slider genre={g} key={g.id}></Slider>
        );
      })}
    </div>
  )
}

export default Hub