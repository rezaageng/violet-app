import { Link } from "react-router-dom"
export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <il>
        <li>
          <Link to="article-1">Article 1</Link>
        </li>
        <li>
          <Link to="article-2">Article 2</Link>
        </li>
        <li>
          <Link to="article-3">Article 3</Link>
        </li>
      </il>
    </>
  )
}
