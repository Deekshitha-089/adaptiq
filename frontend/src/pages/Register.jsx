
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();

    if (!name || !email || !form.password || !form.confirmPassword) {
      setError("Please fill in every field.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    let existingUsers = [];

    try {
      existingUsers = JSON.parse(
        localStorage.getItem("adaptiq_users") || "[]"
      );

      if (!Array.isArray(existingUsers)) {
        existingUsers = [];
      }
    } catch {
      setError("Unable to read saved accounts. Please try again.");
      return;
    }

    const emailExists = existingUsers.some(
      (user) => user.email === email
    );

    if (emailExists) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password: form.password
    };

    try {
      localStorage.setItem(
        "adaptiq_users",
        JSON.stringify([...existingUsers, newUser])
      );
    } catch {
      setError("Unable to save your account in this browser.");
      return;
    }

    navigate("/login", {
      state: { registered: true, email }
    });
  }

  return (
    <main className="register-page">
      <nav className="register-nav">
        <Link to="/" className="register-logo">
          AdaptIQ<span>.</span>
        </Link>

        <p>
          Already a member?
          <Link to="/login"> Log in</Link>
        </p>
      </nav>

      <section className="register-content">
        <div className="register-intro">
          <p className="register-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>

          <h1>
            Make room
            <br />
            to <em>grow.</em>
          </h1>

          <p className="register-description">
            Everyone learns differently. Create your account and discover
            a learning experience that fits the way you think, work, and grow.
          </p>

          <div className="register-image">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85"
              alt="Notebook and writing materials on a desk"
            />
          </div>
        </div>

        <section className="register-form-section">
          <div className="register-form-heading">
            <p className="register-eyebrow">LET'S GET STARTED</p>
            <h2>Create account</h2>
            <p>Just a few details and you're ready to begin.</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="register-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="register-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>

            <div className="register-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password again"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>

            <label className="register-show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(event) => setShowPassword(event.target.checked)}
              />
              Show passwords
            </label>

            {error && (
              <p className="register-message" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="register-submit">
              Create account <span>↗</span>
            </button>

            <p className="register-terms">
              By creating an account, you're starting your personal learning
              journey with AdaptIQ.
            </p>
          </form>
        </section>
      </section>

      <footer className="register-footer">
        <span>ADAPTIQ · LEARN YOUR WAY</span>
        <Link to="/">Back to home ↗</Link>
      </footer>
    </main>
  );
}

export default Register;
