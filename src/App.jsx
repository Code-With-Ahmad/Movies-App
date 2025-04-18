import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import MovieDetail from "./components/MovieDetail";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:movieID" element={<MovieDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
