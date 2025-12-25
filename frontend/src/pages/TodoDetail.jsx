import { useEffect, useState } from "react";
import "./TodoDetail.css";
import { deleteRequest, getRequest, patchRequest } from "../utils/reqWithAuth";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from '../components/LoadingSpinner'

function TodoDetail() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await patchRequest(`/api/todos/${id}/`, {title, content})

        } catch (err) {
            // pass for now
        } finally {
          setLoading(false);
        }
    }

    const isDone = async (id) => {
        try {
          setLoading(true);
          const res = await patchRequest(`/api/todos/${id}/`, {"is_done": true});
          fetchTodos();

        } catch (err) {
        // pass for now
        } finally {
          setLoading(false);
        }
    }

    const deleteTodo = async () => {
        try {
            await deleteRequest(`/api/todos/${id}/`);
            navigate(-1);
        } catch (err) {
            // pass for now
        }
    }

    const getTodo = async () => {
        try {
            setLoading(true);
            const res = await getRequest(`/api/todos/${id}/`);
            setTitle(res.title);
            setContent(res.content);

        } catch (error) {
            // pass for now
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
    <div className="todo-detail-container">
      {/* Background Gradient */}
      <div className="detail-background"></div>
      
      {/* Main Card */}
      <div className="detail-card">
        {/* Header with Navigation */}
        <header className="detail-header">
          <button 
            className="back-nav-btn"
            onClick={() => { navigate(-1); }}
          >
            <span className="back-icon">←</span>
            <span className="back-text">Back</span>
          </button>
          
          <div className="header-title-section">
            <h1 className="detail-main-title">Task Details</h1>
          </div>
          
          <div className="header-actions">
            
          </div>
        </header>

        <form 
          className="detail-form"
          onSubmit={(e) => { 
            update(e); 
          }}
        >
           {loading ? <LoadingSpinner text="Loading..."/> :
           <> 
           <div className="form-section">
            <div className="section-header">
              <label className="detail-label">
                Task Title
                <span className="required-asterisk">*</span>
              </label>
              <div className="char-counter">
                <span className="current-chars">0</span>
                <span className="max-chars">/ 100</span>
              </div>
            </div>
            
            <input
              type="text"
              className="detail-input"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
              required
            />
          </div>

          <div className="form-section">
            <div className="section-header">
              <label className="detail-label">
                Description
                <span className="required-asterisk">*</span>
              </label>
              <div className="char-counter">
                <span className="current-chars">{content.length}</span>
                <span className="max-chars">/ 500</span>
              </div>
            </div>
            
            <textarea
              className="detail-textarea"
              placeholder="Add detailed description, notes, or instructions..."
              rows="5"
              value={content}
              onChange={(e) => { setContent(e.target.value); }}
              required
            />
          </div></>
           }
          

          {/* Action Buttons */}
          <div className="detail-actions">
            <button 
              className="update-btn primary"
              type="submit"
              onClick={() => console.log('Update clicked')}
            >
              <span className="btn-icon">💾</span>
              Save Changes
            </button>
            
            <div className="secondary-actions">
              <button 
                className="update-btn secondary"
                type="button"
                onClick={() => {isDone(id); navigate(-1);}}
              >
                <span className="btn-icon">✅</span>
                Mark Complete
              </button>
              
              <button 
                className="delete-btn"
                type="button"
                onClick={deleteTodo}
              >
                <span className="btn-icon">🗑️</span>
                Delete Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoDetail;
