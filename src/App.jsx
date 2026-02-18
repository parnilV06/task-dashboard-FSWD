// Import necessary components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";

function App() {
  return (
    // Wrap everything in BrowserRouter
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Navbar */}
        <Navbar />

        <main className="pb-12">
          {/* Routes */}
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />

            {/* Tasks list page */}
            <Route path="/tasks" element={<Tasks />} />

            {/* Task detail page (dynamic route) */}
            <Route path="/tasks/:id" element={<TaskDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
