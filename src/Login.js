import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  function loginHandler(event) {
    event.preventDefault()

    const checkLogin = true
    if (checkLogin) {
      navigate("/dashboard")
    }
  }

  return (
    <form onSubmit={loginHandler}>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" />
      <button>Login</button>
    </form>
  )
}
