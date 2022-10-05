import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Likes from './common/Likes';
import Pagenation from './common/Pagenation';
import { getMovies } from '../Services/services/fakeMovieService'

export default class Movies extends Component {
  constructor(props){
    super(props);
    this.state ={
      movies: getMovies(),
      pageSize: 10,
    }
  }

  handlePageChange = page => {
      console.log("page change");
  }

 handleLike = (movie) => {
  const movies = [...this.state.movies];
  const index = movies.indexOf(movie);
  movies[index] = {...movies[index]};
  movies[index].liked = !movies[index].liked;
  this.setState({ movies });
 }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies })
  }
  
  
  render() {
     const { movies } = this.state;
    const renderMovie = movies.map((movie) => {
      return (

        <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}
  </td>
        <td>{movie.dailyRentalRate}
  </td>
  <td><Likes 
  liked={movie.liked}
  onClick={() => this.handleLike(movie)}
  /></td>
  <td><button 
  onClick={() => this.handleDelete(movie)}
  className="btn btn-danger btn-sm"
  >
    Delete</button></td>
      </tr>
      );
    })
   
    if (movies.length === 0 ) return <h4 className='m-3'>There is no movie in the database</h4>;

    return (
      <React.Fragment>
      <h2 className='m-3'>{movies.length > 0 && `Showing ${movies.length} in the database.`} </h2>
        <table className="table">
  <thead>
    <tr >
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    { renderMovie
}
  </tbody>
</table>
  <Pagenation itemCount={ this.state.movies.length }
  pageSize={ this.state.pageSize }
  onPageChange={this.handlePageChange}/>
      </React.Fragment>
    )
  }
}
