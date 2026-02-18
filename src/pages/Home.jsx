// Import useState and useEffect from react
import { useState, useEffect } from "react";

export default function Home() {
  // State for advice text
  const [advice, setAdvice] = useState("");

  // State for loading status
  const [loading, setLoading] = useState(true);

  // Run once when component mounts
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Personal productivity
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-slate-900">
          Welcome to your task dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
          Track what matters, keep your focus, and check in on daily advice to
          keep momentum.
        </p>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-slate-800">Daily Advice</h2>

          {/* Conditional rendering */}
          {loading ? (
            <p className="mt-3 text-slate-500">Loading...</p>
          ) : (
            <p className="mt-3 text-lg text-slate-700 italic">"{advice}"</p>
          )}
        </div>
      </div>
    </div>
  );
}
