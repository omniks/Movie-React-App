import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Search from './components/Search';
import Modal from './components/Modal';

const moviesAPI = 'https://reactjs-cdp.herokuapp.com/movies/'
const searchAPI = 'https://reactjs-cdp.herokuapp.com/movies?search='
const searchTitle = '&searchBy=title'
const searchGenres = '&searchBy=genres'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm ] = useState('');
  const [result, setResult ] = useState('');
  const [modalActive, setModalActive ] = useState(false);
  const [searchRadio, setSearchRadio] = useState('title')

  useEffect(() => {
    fetch(moviesAPI)
     .then((res) => res.json())
     .then((data) => {
       setMovies(data.data)
    });
    
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchRadio === 'title'){
      fetch(searchAPI + searchTerm + searchTitle)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data)
        setResult(data.total)
     });
    }else if(searchRadio === 'genre'){
      fetch(searchAPI + searchTerm + searchGenres)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data)
        setResult(data.total)
     });
    };




  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const openPopup = () => {

      setModalActive(true)

  }



  return (
    
    <div className="app">

      <header>
        <h1>Movie App</h1>
        <form className="search_form" onSubmit={handleOnSubmit}>
           <input className="search" 
            type="search" 
            placeholder="Search Movie" 
            value={searchTerm} 
            onChange={handleOnChange}/>
          <button onSubmit={handleOnSubmit}>Search</button>
        </form>
        <form className="search_by">
          <p>Search By:</p>
          <input
            className="search_radio" 
            type='radio'
            checked={searchRadio === 'title'}  
            value='title'
            id='title' 
            onChange={(e)=>{ setSearchRadio(e.target.value)}}/>
          <label for='title' className="search_label">Title</label>
  
          <input
            className="search_radio"  
            type='radio'
            checked={searchRadio === 'genre'}  
            value='genre'
            id='genre'  
            onChange={(e)=>{ setSearchRadio(e.target.value)}}/>
          <label for='genre' className="search_label">Genre</label>

        </form>
        <div className="result">Result:{result}</div>
      
      </header>
      <div className="movie_container"> 
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie}/>
        )}
      </div>

      
    </div>
   
  );
}

export default App;
