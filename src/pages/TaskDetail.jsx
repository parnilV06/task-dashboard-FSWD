import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function TaskDetail() {
  const { id } = useParams();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch task");
        }
        return res.json();
      })
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching task:", error);
        setTask(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="p-8 text-slate-500">Loading task details...</p>;
  }

  if (!task) {
    return <p className="p-8 text-rose-600">Task not found!</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/tasks"
          className="text-slate-600 hover:text-slate-900 transition-colors mb-6 inline-flex items-center gap-2"
        >
          ← Back to Tasks
        </Link>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="text-3xl font-semibold text-slate-900 capitalize">
              {task.title}
            </h1>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                task.completed
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>
          </div>

          <div className="mt-8 space-y-4 text-base">
            <p className="text-slate-600">
              <strong>Task ID:</strong> {task.id}
            </p>

            <p className="text-slate-600">
              <strong>User ID:</strong> {task.userId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
