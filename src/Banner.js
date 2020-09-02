import React, { useState, useEffect } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from "./request";
const base_url = "https://image.tmdb.org/t/p/original/";

export default function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTopRates);

            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    function showDots(str,n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                ${base_url}${movies?.backdrop_path}
            )`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner__container">
                <h1 className="banner__title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button active">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__decription">
                   {showDots(movies?.overview, 300)}
                </h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}
