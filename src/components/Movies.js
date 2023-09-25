import React from "react";

const Movies = ({movie}) => {
   
  return (
      <div className="col-md-3  my-2">
        <div className="card">
          <img
            src={movie.Image}
            className="card-img-top"
            alt="Card Image"
          />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p>{movie.Released}</p>
            <p className="card-text">
             {movie.Description}
            </p>
            <a href="#" className="btn btn-primary">
             Watch Now
            </a>
          </div>
        </div>
      </div>
   
  );
};

export default Movies;
