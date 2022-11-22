import React from 'react'
import '../css/movie-card.css'

function MovieCard() {
  return (
    <div className='movie-card'>
      <div className='left-side'>
        <div className='left-side-header'>
          <div className='left-side-left-side-header'>

          </div>
          <div className='right-side-left-side-header'>

          </div>
        </div>
        <div className='main-left-side'>
          <img className='movie-poster' src='https://image.tmdb.org/t/p/original/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg'></img>
        </div>
      </div>
      <div className='right-side'>
        <div className='right-side-header'>
          <h3>Title</h3>
        </div>
        <div className='movie-video'>

        </div>
        <div className='movie-description'>

        </div>
      </div>
    </div>
  )
}

export default MovieCard