import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '/src/pages/home'
import { Details } from '/src/pages/movie-details';
import { Showcase } from '/src/pages/movies-showcase';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie-details" element ={<Details/>}/>
        <Route path="/movies-showcase" element ={<Showcase/>}/>
      </Routes>
    </Router>
  )
}

export default App
