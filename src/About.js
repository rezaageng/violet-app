import { Link, Outlet } from "react-router-dom"

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is about page</p>
      <Link to="/about/me">About me</Link>
      <Outlet />
    </>
  )
}
