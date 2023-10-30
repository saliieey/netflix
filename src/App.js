
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div >
     <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPresent={true} title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Doccumentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
