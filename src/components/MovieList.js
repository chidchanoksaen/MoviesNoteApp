import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const [movies] = useState([
    {
      id: 1,
      title: 'Toy Story 1',
      image: 'https://upload.wikimedia.org/wikipedia/th/1/13/Toy_Story.jpg',
      description: 'การ์ตูนของเล่นที่มีชีวิต ต้องดู',
      rating: 9.3,
      created_at: '1994-09-22',
    },
    {
      id: 2,
      title: 'ยอดนักสืบจิ๋วโคนัน',
      image: 'https://im.uniqlo.com/global-cms/spa/res9b24a754cc76ff8bae075d483f2c5516fr.jpg',
      description: 'ยอดนักสืบจิ๋วโคนัน the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      rating: 9.2,
      created_at: '1972-03-24',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      image: 'https://example.com/dark_knight.jpg',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      rating: 9.0,
      created_at: '2008-07-18',
    },
  ]);

  return (
    <div>
      <h1>Movie List</h1>
      <Link to="/add-movie" className="add-movie-button">+ Add Movie</Link>
      <div className="movie-container">
        {movies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <h2>{movie.title}</h2>
            <p>รายละเอียด</p>
            <div style={{height : "80px"}}>
            <p>{movie.description}</p>
            </div>
            <p>คะแนน : {movie.rating}</p>
            <img src={movie.image} alt={movie.title} />
            <p style={{fontSize: "12px"}}>วันที่สร้าง : {new Date(movie.created_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
