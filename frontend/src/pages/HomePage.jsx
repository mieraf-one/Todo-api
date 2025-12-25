import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { getRequest, patchRequest, postRequest, deleteRequest } from "../utils/reqWithAuth";
import { useAuth } from "../hooks/useAuth";

function HomePage() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const { logout } = useAuth();

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
      setTitle('');
      setContent('');
    }
  }

  const deleteTodo = async (id) => {
          try {
              await deleteRequest(`/api/todos/${id}/`);
              navigate(-1);
          } catch (err) {
              // pass for now
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
      {/* Header Section */}
      <header className="app-header">
        <div className="header-content">
          <div className="user-info">
            <div className="user-avatar">B</div>
            <div className="user-details">
              <h2 className="user-greeting">Hello</h2>
            </div>
          </div>
          <div className="stats">
            <div className="stat-card">
              <span className="stat-number">{todos.length}</span>
              <span className="stat-label">Total Tasks</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{(todos.filter((todo) => todo.is_done)).length}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Quick Actions</h3>
            <button className="sidebar-btn active">
              <span className="btn-icon">📝</span>
              <span>All Tasks</span>
              <span className="badge">{todos.length}</span>
            </button>
            <button className="sidebar-btn">
              <span className="btn-icon">✅</span>
              <span>Completed</span>
              <span className="badge">{(todos.filter((todo) => todo.is_done)).length}</span>
            </button>
            <button className="sidebar-btn">
              <span className="btn-icon">📅</span>
              <span>Upcoming</span>
              <span className="badge">{(todos.filter((todo) => !todo.is_done)).length}</span>
            </button>
          </div>
        </aside>

        {/* Main Todo Area */}
        <div className="todo-main">
          {/* Search and Filter Bar */}
          <div className="action-bar">
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search todos..."
                onChange={(e) => console.log('Search:', e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <select 
                className="filter-select"
                onChange={(e) => console.log('Filter:', e.target.value)}
              >
                <option value="all">All Tasks</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
              
              <select 
                className="filter-select"
                onChange={(e) => console.log('Sort:', e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>

          {/* Todo List */}
          <div className="todos-container">
            <div className="todos-header">
              <h2>My Tasks</h2>
              <span className="todos-count">{todos.length} tasks</span>
            </div>

            <div className="todos-list">
              {todos.map((todo) =>  (
                
             <div 
                className="todo-item active"
                onClick={() => console.log('Navigate to detail 1')}
                key={todo.id}
                >
                <div className="todo-checkbox">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={todo.is_done}
                      onChange={(e) => {
                        e.stopPropagation();
                        isDone(e, todo.id);
                      }}
                      className="hidden-checkbox"
                    />
                    <div className="custom-checkbox">
                      <div className="checkmark">✓</div>
                    </div>
                  </label>
                </div>
                
                <div className="todo-content">
                  <div className="todo-header">
                    <h3 className="todo-title">{todo.is_done ? <s>{todo.title}</s> : <p style={{display: "inline"}}>{todo.title}</p>}</h3>
                    <div className="todo-actions">
                      <button 
                        className="action-btn edit"
                        onClick={(e) => {e.stopPropagation(); navigate(`/detail/${todo.id}`)}}
                      >
                        ✏️
                      </button>
                      <button 
                        className="action-btn delete"
                        onClick={(e) => {e.stopPropagation(); deleteTodo(todo.id)}}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                    {todo.is_done ? <s className="todo-description">{todo.content}</s> : <p style={{display: "inline"}} className="todo-description">{todo.content}</p>}
                </div>
              </div>
              ))}

              {/* Empty State */}
              <div className="empty-state" style={{display: 'none'}}>
                <div className="empty-icon">📝</div>
                <h3>No tasks yet</h3>
                <p>Add your first task to get started!</p>
              </div>
            </div>
          </div>

          {/* Todo Form */}
          <div className="form-container">
            <div className="form-header">
              <h2>Add New Task</h2>
              <div className="form-indicators">
                <span className="char-count">{0}/50</span>
              </div>
            </div>
            
            <form className="todo-form" onSubmit={(e) => {addTodo(e);}}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Task Title *
                    <span className="required-indicator"></span>
                  </label>
                  <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="todo-input"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                    required
                  />
                </div>
                
                
              </div>

              <div className="form-group">
                <label className="form-label">
                  Description *
                  <span className="required-indicator"></span>
                </label>
                <textarea
                  placeholder="Add more details about this task..."
                  className="todo-textarea"
                  value={content}
                  onChange={(e) => {setContent(e.target.value)}}
                  rows="3"
                  required
                />
              </div>
 

              <div className="form-actions">
                <button 
                  className="todo-btn primary"
                  type="submit"
                  onClick={() => console.log('Add todo clicked')}
                >
                  <span className="btn-icon">➕</span>
                  Add Task
                </button>
                
                <button 
                  className="todo-btn secondary"
                  type="button"
                  onClick={() => console.log('Clear form clicked')}
                >
                  Clear All
                </button>
              </div>
            </form>
          </div>

          
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <button 
            className="logout-btn"
            onClick={logout}
          >
            <span className="logout-icon">🚪</span>
            Logout
          </button>
          
          <div className="footer-info">
            <span className="app-version">v1.0.0</span>
            <span className="app-stats">{ (((todos.filter((todo) => todo.is_done)).length / todos.length ) * 100).toFixed(2)}% complete</span>
          </div>
        </div>
      </footer>
    </div>
  );


}


export default HomePage;