import "./LoginPage.css";

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-header">
          <h1 id="login-title" className="login-title">Welcome back</h1>
          <p className="login-subtitle">Log in to organize your tasks.</p>
        </header>

        <form className="login-form">
          <label className="login-field">
            <span>Username</span>
            <input name="username" placeholder="Your username" type="text" autoComplete="username" required />
          </label>

          <label className="login-field">
            <span>Password</span>
            <input name="password" placeholder="Your password" type="password" autoComplete="current-password" required />
          </label>

          <button className="submit-button" type="submit">Log in</button>
        </form>

        <div className="register-prompt">
          <span>You don't have an account?</span>
          <button className="register-button" type="button">Register</button>
        </div>
      </section>
    </main>
  );
}
