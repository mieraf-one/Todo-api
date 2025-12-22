import "./HomePage.css";

function HomePage() {
  return (
    <div className="app dark">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="logo">
          <div className="logo-icon">✓</div>
          <h1>TaskMaster</h1>
        </div>

        <div className="nav-items">
          <button className="nav-btn">
            <span>📥</span>
            Inbox
            <span className="count">4</span>
          </button>

          <button className="nav-btn active">
            <span>📅</span>
            Today
            <span className="count">12</span>
          </button>

          <button className="nav-btn">
            <span>🗓</span>
            Upcoming
          </button>

          <p className="section-title">Projects</p>

          <button className="nav-btn">
            <span className="dot orange" />
            Marketing Launch
          </button>
          <button className="nav-btn">
            <span className="dot purple" />
            Design System
          </button>
          <button className="nav-btn">
            <span className="dot green" />
            Personal
          </button>
        </div>
      </nav>

      {/* Main */}
      <main className="main">
        <header className="header">
          <h2>Good morning, Alex</h2>
          <p>It's Tuesday, October 24. You have 5 tasks pending.</p>
        </header>

        {/* Add task */}
        <div className="add-task">
          <input
            type="text"
            placeholder="Add a new task... e.g. Read book at 8pm"
          />
        </div>

        {/* Tasks */}
        <section className="tasks">
          <h3 className="overdue">⚠ Overdue</h3>

          <div className="task">
            <input type="checkbox" />
            <div className="task-content">
              <span className="task-title">
                Update client presentation with new metrics
              </span>
              <small>Yesterday • Work</small>
            </div>
          </div>

          <h3>Today</h3>

          <div className="task active-task">
            <input type="checkbox" />
            <div className="task-content">
              <span className="task-title">
                Submit quarterly report
              </span>
              <small>Today 2:00 PM • High Priority</small>
            </div>
          </div>

          <div className="task">
            <input type="checkbox" />
            <div className="task-content">
              <span className="task-title">Buy groceries for dinner</span>
              <small>Today 6:00 PM • Personal</small>
            </div>
          </div>
        </section>
      </main>

      {/* Details panel */}
      <aside className="details">
        <h3>Details</h3>
        <textarea defaultValue="Submit quarterly report" />
        <p className="meta">Today • High Priority</p>

        <div className="description">
          Compile the Q3 performance metrics from marketing and sales.
        </div>
      </aside>
    </div>
  );
}


export default HomePage;