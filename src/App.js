import "./App.css";

import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
     e.preventDefault()

     const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
     };

     await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
     });

     setTitle("");
     setTime("");
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>Sistema de Reservas de Laboratórios</h1>
      </div>
      <div className="form-todo">
        <h2>Universidade Federal do Maranhão</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Informe seu email institucional</label>
            <input 
            type="text" 
            name="title" 
            placeholder="Email do discente" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title || ""} 
            required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Informe sua matricula</label>
            <input 
            type="text" 
            name="time" 
            placeholder="Matricula do discente" 
            onChange={(e) => setTime(e.target.value)} 
            value={time || ""} 
            required
            />
          </div>
        <input type="submit" value="Fazer Cadastro" />
        <input type="submit" value="Ja tenho conta" />
        </form>
      </div>
      <div className="list-todo">
        <h2>BICT</h2>
        {todos.length === 0 && <p>Aplicação em construção !</p>}
      </div>
    </div>
  );
}

export default App;
