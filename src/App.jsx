import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.png";
import "./App.css";
import Navbar from "./components/Navbar";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <TvShows /> */}
    </div>
  );
}

export default App;
