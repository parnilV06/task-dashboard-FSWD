// Import useState and useEffect from react
import { useState, useEffect } from "react";

// Import Link from react-router-dom
import { Link } from "react-router-dom";

// Import TaskCard component
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  // State for tasks list
  const [tasks, setTasks] = useState([]);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // Fetch tasks when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">Your Tasks</h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Review what needs attention and jump into task details.
          </p>
        </div>

        {!loading && (
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600 shadow-sm">
            {tasks.length} tasks loaded
          </span>
        )}
      </div>

      {/* Conditional rendering */}
      {loading ? (
        <p className="mt-6 text-slate-500">Loading tasks...</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <Link key={task.id} to={`/tasks/${task.id}`}>
              <TaskCard task={task} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
