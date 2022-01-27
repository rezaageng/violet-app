import { useState } from "react"
import "./App.css"

function App() {
  const [activity, setActivity] = useState("")
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState({})
  const [message, setMessage] = useState("")

  function generateId() {
    return Date.now()
  }

  function saveTodo(event) {
    event.preventDefault()

    if (!activity) {
      return setMessage("There's no TODO")
    }

    setMessage("")

    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity,
      }

      const editIndex = todos.findIndex((todo) => todo.id === edit.id)

      const updatedTodos = [...todos]
      updatedTodos[editIndex] = updatedTodo

      setTodos(updatedTodos)
      return cancelEdit()
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ])

    setActivity("")
  }

  function removeTodo(todoId) {
    const filtered = todos.filter((todo) => todo.id !== todoId)

    setTodos(filtered)

    if (edit.id) {
      cancelEdit()
    }
  }

  function editTodo(todo) {
    setActivity(todo.activity)
    setEdit(todo)
  }

  function cancelEdit() {
    setEdit({})
    setActivity("")
  }

  function doneTodo(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    }

    const editIndex = todos.findIndex((index) => index.id === todo.id)

    const updatedTodos = [...todos]
    updatedTodos[editIndex] = updatedTodo

    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>Todo</h1>
      <p className="message">{message}</p>
      <form onSubmit={saveTodo}>
        <input
          type="text"
          placeholder="what should i do...?"
          value={activity}
          onChange={(event) => setActivity(event.target.value)}
        />
        <button type="submit">{edit.id ? "save" : "submit"}</button>
        {edit.id && <button onClick={cancelEdit}>cancel</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodo.bind(this, todo)}
                />
                {todo.activity}
                {todo.done ? "(done)" : "(not finished yet)"}
                <button onClick={removeTodo.bind(this, todo.id)}>remove</button>
                <button onClick={editTodo.bind(this, todo)}>edit</button>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Let's do something</p>
      )}
    </>
  )
}

export default App
