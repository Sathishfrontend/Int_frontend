import "./App.css";
import Movies from "./components/Movies";
import MovieDetails from "../src/constants/movie.json";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from "./Redux/movieSlice";

function App() {
  const [searchText, setSearchText] = useState("");
  const detailsOfMovies = useSelector((state) => state.movies);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getMovies(MovieDetails));
  }, [dispatch]);

  const handleMovieChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredItems = detailsOfMovies.filter((item) =>
    item.Title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies"
                onChange={handleMovieChange}
              />
             
            </form>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          {filteredItems.length > 0 ? (
            filteredItems.map((movie) => {
              return <Movies key={movie.id} movie={movie} />;
            })
          ) : (
            <p className="text-center">No Movies to Display</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
