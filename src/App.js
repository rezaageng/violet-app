import "./App.css"
import Home from "./Home"
import { Routes, Route, Link } from "react-router-dom"
import About from "./About"
import AboutMe from "./AboutMe"

function App() {
  return (
    <div class="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/me" element={<AboutMe />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
