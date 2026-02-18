// Import Link from react-router-dom
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
          Task Dashboard
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="text-blue-100 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="text-blue-100 hover:text-white transition-colors"
          >
            Tasks
          </Link>
        </div>
      </div>
    </nav>

  );
}
