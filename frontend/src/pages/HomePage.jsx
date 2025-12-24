import authService from "../utils/authService";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { getRequest, patchRequest, postRequest } from "../utils/reqWithAuth";
import { useAuth } from "../hooks/useAuth";

function HomePage() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const addTodo = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await postRequest('/api/todos/', { title, content })
        fetchTodos();
    } catch (error) {
      // pass for now
    } finally {
      setLoading(false);
    }
  }

  const isDone = async (e, id) => {
    try {
      const res = await patchRequest(`/api/todos/${id}/`, {"is_done": e.target.checked});
      fetchTodos();

    } catch (err) {
      // pass for now
    }
  }

  const fetchTodos = async () => {
      try {
        const res = await getRequest('/api/todos/');
        console.log(res);
        setTodos(res);

    } catch (error) {
      // pass for now
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div className="todo-app">
      <h1 className="app-title">Todo</h1>

      {/* Todo Form */}
      <form className="todo-form" onSubmit={(e) => {addTodo(e)}}>
        <input
          type="text"
          placeholder="Title"
          className="todo-input"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
          required
        />

        <textarea
          placeholder="Content"
          className="todo-textarea"
          value={content}
          onChange={(e) => {setContent(e.target.value)}}
          required
        />

        <button className="todo-btn" type="submit" disabled={loading}>
          {loading ? "Adding Todo..." : "Add Todo"}
        </button>
      </form>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo) => (
            <li className="todo-item" key={todo.id} onClick={() => {navigate(`/detail/${todo.id}`)}}>
              <input type="checkbox" checked={todo.is_done} onChange={(e) => {isDone(e, todo.id);}}/>
              <div className="todo-text">
                {todo.is_done ?
                  <div>
                    <h3><s>{todo.title}</s></h3>
                    <p><s>{todo.content}</s></p>
                  </div>
                   : 
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                  </div>
                }
              </div>
            </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}


export default HomePage;