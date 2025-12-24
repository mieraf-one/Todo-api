import { useEffect, useState } from "react";
import "./TodoDetail.css";
import { deleteRequest, getRequest, patchRequest } from "../utils/reqWithAuth";
import { useNavigate, useParams } from "react-router-dom";

function TodoDetail() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        try {
            await patchRequest(`/api/todos/${id}/`, {title, content})
            navigate('/dashboard');

        } catch (err) {
            // pass for now
        }
    }

    const deleteTodo = async () => {
        try {
            await deleteRequest(`/api/todos/${id}/`);
            navigate('/dashboard');
        } catch (err) {
            // pass for now
        }
    }

    const getTodo = async () => {
        try {
            const res = await getRequest(`/api/todos/${id}/`);
            setTitle(res.title);
            setContent(res.content);

        } catch (error) {
            // pass for now
        }
    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <div className="todo-detail">

            {/* Back Icon */}
            <div className="back-btn" onClick={() => {navigate(-1);}}>
                ←
            </div>

            <h1 className="detail-title">Todo Detail</h1>

            {/* Edit Form */}
            <form className="detail-form" onSubmit={(e) => {update(e);}}>
                <label className="detail-label">Title</label>
                <input
                type="text"
                className="detail-input"
                placeholder="Todo title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                required
                />

                <label className="detail-label">Content</label>
                <textarea
                className="detail-textarea"
                placeholder="Todo content"
                value={content}
                onChange={(e) => {setContent(e.target.value)}}
                required
                />

                <div className="detail-actions">
                <button className="update-btn" type="submit">
                    Update
                </button>

                <button className="delete-btn" type="button" onClick={deleteTodo}>
                    Delete
                </button>
                </div>
            </form>
            </div>

    );
}

export default TodoDetail;
