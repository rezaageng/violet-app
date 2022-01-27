import "./App.css"
import Home from "./Home"
import { Routes, Route, Link } from "react-router-dom"
import About from "./About"
import AboutMe from "./AboutMe"
import Blog from "./Blog"
import BlogDetail from "./BlogDetail"
import NotFound from "./NotFound"
function App() {
  return (
    <div class="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="me" element={<AboutMe />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
