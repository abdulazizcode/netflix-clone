import React  from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Navaigation from "./Navigation";

const App = () => {
    return(
        <div className="app">
            <Navaigation/>
            <Banner/>
            <Row isLargeRow title= "TRENDING  NOW" fetchUrl={requests.fetchTranding}/>
            <Row title= "Top Rated" fetchUrl={requests.fetchTopRates}/>
            <Row title= "Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title= "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title= "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title= "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title= "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default App;