import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from './instance'


function Banner({fetchUrl}) {
    // console.log(fetchUrl);
const [movie,setMovie]=useState()
const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData=async ()=>{
        const {data}=await instance.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])
 
  return (
    <div style={{height:"600px",backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:"cover",backgroundAttachment:"fixed"}}>
        <div className="banner_content">
            <h1>{movie?.name}</h1>
            <button type="button" class="btn btn-danger">Play <i class="ri-play-circle-line"></i></button>
            <button type="button" class="btn btn-outline-primary">More info <i class="ri-arrow-down-circle-line"></i></button>
            <h2>{movie?.overview?.slice(0.200)}...</h2>
           
        </div>
    </div>
  )
}

export default Banner