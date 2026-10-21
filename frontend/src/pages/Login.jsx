
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(
    location.state?.email || ""
  );
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const normalEmail = email.trim().toLowerCase();

    if (!normalEmail || !password) {
      setError("Please enter your email and password.");
      return;
    }

    let users = [];

    try {
      users = JSON.parse(localStorage.getItem("adaptiq_users") || "[]");
    } catch {
      setError("Unable to read saved accounts. Please try again.");
      return;
    }

    const user = users.find(
      (savedUser) =>
        savedUser.email === normalEmail &&
        savedUser.password === password
    );

    if (!user) {
      setError("Incorrect email or password. Please try again.");
      return;
    }

    localStorage.setItem("adaptiq_logged_in", "true");
    localStorage.setItem("adaptiq_current_user", JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email
    }));

    const assessmentComplete =
      localStorage.setItem("adaptiq_logged_in", "true");

navigate(
  localStorage.getItem("adaptiq_assessment_complete") === "true"
    ? "/dashboard"
    : "/assessment"
);
  }

  return (
    <main className="login-page">
      <nav className="login-nav">
        <Link to="/" className="login-logo">
          AdaptIQ<span>.</span>
        </Link>

        <p>
          New here?
          <Link to="/register"> Create account</Link>
        </p>
      </nav>

      <section className="login-content">
        <div className="login-intro">
          <p className="login-eyebrow">WELCOME BACK</p>

          <h1>
            Your journey.
            <br />
            <em>Your way.</em>
          </h1>

          <p className="login-description">
            Pick up where you left off and keep building a learning
            routine that works for you.
          </p>

          <div className="login-image">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85"
              alt="Study notes and books on a desk"
            />
          </div>
        </div>

        <section className="login-form-section">
          <div className="login-form-heading">
            <p className="login-eyebrow">YOUR SPACE IS WAITING</p>
            <h2>Log in</h2>
            <p>Enter your details to continue learning.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="login-email">Email address</label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
                autoComplete="email"
              />
            </div>

            <div className="login-field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                autoComplete="current-password"
              />
            </div>

            <label className="login-show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(event) => setShowPassword(event.target.checked)}
              />
              Show password
            </label>

            {error && (
              <p className="login-message" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="login-submit">
              Continue learning <span>↗</span>
            </button>
          </form>

          <p className="login-register-link">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </section>
      </section>

      <footer className="login-footer">
        <span>ADAPTIQ · LEARN YOUR WAY</span>
        <Link to="/">Back to home ↗</Link>
      </footer>
    </main>
  );
}

export default Login;
