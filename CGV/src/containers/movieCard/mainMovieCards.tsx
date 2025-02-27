"use client"

import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import "../../styles/movie.css";

export default function MainMovieCards() {
    const [ratedMovieList, setRatedMovieList] = useState("");
    
    useEffect(() => {
        const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

        if (!TMDB_API_KEY || !YOUTUBE_API_KEY) {
            console.error("API key is missing!");
            return;
        }

        // TMDB에서 인기 영화 가져오기
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1', {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${TMDB_API_KEY}`,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.results.length > 0) {
                    const filteredMovies = json.results.map(({ id, title, poster_path, vote_average }) => ({
                        id,
                        title,
                        vote_average,
                        poster_path,
                    }));
                    setRatedMovieList(filteredMovies);
                }
            })
            .catch((err) => console.error("TMDB Fetch Error:", err));
    }, []);
    return (
        <div className="main-movie-cards">
            {
                ratedMovieList ? (
                    ratedMovieList.map(({ id, title, poster_path, vote_average }) => (
                        <MovieCard key={id} title={title} image={poster_path} score={vote_average} />
                    ))
                ) : <p>Loading...</p>
            }
        </div>
    )
}