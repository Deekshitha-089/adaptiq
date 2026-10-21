import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <main className="app-home">
      <div className="app-home__content">
        <p className="app-home__eyebrow">YOUR PERSONAL LEARNING COMPANION</p>

        <h1>
          Welcome to <span>AdaptIQ</span>
        </h1>

        <p className="app-home__description">
          Learn your way. Discover your strengths. Build your future.
        </p>

        <button
          className="app-home__button"
          onClick={() => alert("Your AdaptIQ journey starts here!")}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="*"
        element={<h1 className="not-found">Page not found</h1>}
      />
    </Routes>
  );
}
