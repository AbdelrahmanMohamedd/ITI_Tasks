import React ,{useState} from 'react';
import Movie from './Movie';
import {v4 as uuid} from 'uuid';


const Movies = () =>{
    const IncrementAge = (MovieId)=>{
        setMovies((oldMovies)=>oldMovies.map((Movie)=>Movie.id===MovieId?{...Movie,age:Movie.age+1}:{...Movie}));
    }
    const  [MoviesArr,setMovies] = useState([
        {MovieID:uuid(),MovieName:"Taitanic",MovieProduceYear:1999},
        {MovieID:uuid(),MovieName:"FastFeriuos",MovieProduceYear:2012},
        {MovieID:uuid(),MovieName:"Fantastic4",MovieProduceYear:2001},
        {MovieID:uuid(),MovieName:"SpiderMan",MovieProduceYear:2010}
        ]);
    console.log(MoviesArr);
    return MoviesArr.map((Moviee)=><Movie key={Moviee.MovieID}  {...Moviee} Inc={IncrementAge}></Movie>)
}

export default Movies;