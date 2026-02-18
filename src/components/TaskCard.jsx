// This component receives 'task' as a prop
export default function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900"
        />

        <div className="flex-1">
          {/* Task title */}
          <h3 className="font-semibold text-slate-900 capitalize">
            {task.title}
          </h3>

          {/* Task status */}
          <p
            className={`text-sm mt-1 ${
              task.completed ? "text-emerald-600" : "text-amber-600"
            }`}
          >
            {task.completed ? "Completed ✓" : "Pending"}
          </p>
        </div>
      </div>
    </div>
  );
}
