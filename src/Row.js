import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl, largeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [currentTrailer, setCrrentTrailer] = useState("");

    useEffect(() => {
       async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
       }

       fetchData();
    }, [fetchUrl]);
    
    const opts = {
        height:"390",
        width: "100%",
        playerVars: {
            autoplay:1
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl && currentTrailer !== trailerUrl) {
            setTrailerUrl('');
        }
        movieTrailer(movie?.title || "")
            .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
            setCrrentTrailer(trailerUrl);
        }).catch(error => console.log(error))
        
    }
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters"
                id={title}>
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${largeRow} && row_posterLarge`} 
                        src={`${base_url}${largeRow
                            ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}
                <div className="row_arrowRight">
                    <ArrowForwardIosIcon onClick={()=> {
                        document.getElementById(title).scrollLeft += 800;
                    }}/>
                </div>

                <div className="row_arrowLeft">
                    <ArrowBackIosIcon onClick={()=> {
                        document.getElementById(title).scrollLeft -= 800;
                    }}/>
                </div>
            </div>

            {trailerUrl &&<Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
