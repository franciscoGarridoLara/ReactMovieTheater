import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Slider from "./components/Slider";
import Hub from "./pages/Hub";
import Login from "./pages/Login";
import Pages from "./pages/Pages"
import "./css/main.css";
import MovieCard from "./components/MovieCard";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
