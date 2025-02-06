"use client";

import { useEffect, useState } from "react";

export default function VideoFrame() {
    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

        if (!TMDB_API_KEY || !YOUTUBE_API_KEY) {
            console.error("API key is missing!");
            return;
        }

        // TMDB에서 인기 영화 가져오기
        fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${TMDB_API_KEY}`,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.results.length > 0) {
                    const movieTitle = json.results[0].title;
                    searchYouTube(movieTitle, YOUTUBE_API_KEY);
                }
            })
            .catch((err) => console.error("TMDB Fetch Error:", err));
    }, []);

    const searchYouTube = (query: string, apiKey: string) => {
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            query + " trailer"
        )}&key=${apiKey}&maxResults=1&type=video`;

        fetch(searchUrl)
            .then((res) => res.json())
            .then((json) => {
                if (json.items.length > 0) {
                    setVideoId(json.items[0].id.videoId);
                }
            })
            .catch((err) => console.error("YouTube Fetch Error:", err));
    };

    return (
        <div className="video">
            {videoId ? (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1`}
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                ></iframe>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
