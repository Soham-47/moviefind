import { useState } from 'react'
import MovieCard from './moviecard'
import './App.css'
import { useEffect } from 'react'
import SearchIcon from './assets/search.svg'
const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=94f866ba"


function App() {

      const [searchTerm, setSearchTerm] = useState("");
       const[movies,setMovies]=useState([])
       const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json()
        setMovies(data.Search)
       }

       useEffect
       (()=>{
        searchMovies(searchTerm)
       }
      )


      return (
        <div className="app">
          <h1>MovieLand</h1>
    
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
    
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      );
    };

export default App
