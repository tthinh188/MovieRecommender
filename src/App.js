import './App.css';
import Row from "./Row";
import requests from "./requests"
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row largeRow={true} title="Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

// de7cd0e29e057c040cfa63ce9a6a60ea

// https://api.themoviedb.org/3/movie/550?api_key=de7cd0e29e057c040cfa63ce9a6a60ea

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdjZDBlMjllMDU3YzA0MGNmYTYzY2U5YTZhNjBlYSIsInN1YiI6IjYwMzUwYzc1OTdlYWI0MDAzZmQyMGMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ts5jpgkxDRtwT1k04Gfsx7eL4WLWRdxwBT5zb8Twk14