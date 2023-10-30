import './Row.css'
import React, { useEffect, useState } from 'react'
import instance from './instance'

function Row({title,fetchUrl,isPresent}) {

  const [allMovies,setAllMovies]=useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
    /* console.log(props); */
   /*  console.log(fetchUrl); */
   const fetchdata= async()=>{
    const {data} = await instance.get(fetchUrl)
    // console.log(data.results);
    setAllMovies(data.results)
   }
   console.log(allMovies);

   useEffect(()=>{
    fetchdata()
   },[])
  return ( 
    <div className='row'>
        <h1>{title}</h1>
        <div className='movie-row'>
          {
            allMovies?.map(item=>(
              <img className={`movie ${isPresent && 'movie_poster'}`} src={`${base_url}${isPresent?item.poster_path:item.backdrop_path}`} alt="no image" />
            )
              
            )
          }
        </div>
    </div>
  )
}

export default Row