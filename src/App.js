import "./App.css"
import Home from "./Home"
import { Routes, Route, Link } from "react-router-dom"
import About from "./About"

function App() {
  return (
    <div class="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
