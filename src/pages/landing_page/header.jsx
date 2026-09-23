import { useEffect, useState } from 'react'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8.5h14l-1 11H6l-1-11Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  )
}

function MenuIcon({ isOpen }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {isOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

function ThemeIcon({ isDark }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {isDark ? (
        <path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />
      ) : (
        <>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
      )}
    </svg>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('lumiere-login') === 'true'
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('lumiere-theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('lumiere-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return
      new window.google.translate.TranslateElement(
        { pageLanguage: 'id', includedLanguages: 'id,en,fr,ja,ko,zh-CN', autoDisplay: false },
        'google_translate_element',
      )
    }

    if (!document.querySelector('script[data-google-translate]')) {
      const script = document.createElement('script')
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      script.dataset.googleTranslate = 'true'
      document.body.appendChild(script)
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit()
    }
  }, [])

  useEffect(() => {
    if (!toastMessage) return undefined

    const timeoutId = setTimeout(() => setToastMessage(''), 3500)
    return () => clearTimeout(timeoutId)
  }, [toastMessage])

  const handleLogin = (event) => {
    event.preventDefault()

    if (email === 'user@lumiere.com' && password === 'lumiere123') {
      setIsLoggedIn(true)
      localStorage.setItem('lumiere-login', 'true')
      setLoginError('')
      setIsLoginOpen(false)
      setPassword('')
      setToastMessage('Login berhasil. Selamat datang di Lumière!')
      return
    }

    setLoginError('Email atau password belum sesuai.')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('lumiere-login')
    setIsLoginOpen(false)
  }

  return (
    <>
      <style>{`
        :root[data-theme='light'] {
          --text: #6b6375;
          --text-h: #08060d;
          --bg: #fff;
          --border: #e5e4e7;
        }

        :root[data-theme='dark'] {
          --text: #c1b9b0;
          --text-h: #f5f0e9;
          --bg: #161513;
          --border: #37332f;
        }

        body {
          background: var(--bg);
          transition: background 180ms ease, color 180ms ease;
        }

        .navbar {
          --ink: #1f2933;
          --muted: #7d858b;
          --line: #e8e4de;
          --accent: #c96b4b;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 22px clamp(22px, 5vw, 68px);
          color: var(--ink);
          background: #fdfcf9;
          border-bottom: 1px solid var(--line);
          transition: color 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        :root[data-theme='dark'] .navbar {
          --ink: #f5f0e9;
          --muted: #aaa39c;
          --line: #37332f;
          --accent: #e98b67;
          background: #201f1d;
        }

        .brand {
          color: var(--ink);
          text-decoration: none;
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1;
        }

        .brand em {
          color: var(--accent);
          font-style: normal;
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: clamp(18px, 3vw, 38px);
          margin-left: auto;
        }

        .main-nav a {
          position: relative;
          text-decoration: none;
          color: var(--muted);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          transition: color 180ms ease;
        }

        .main-nav a::after {
          position: absolute;
          right: 0;
          bottom: -8px;
          left: 0;
          height: 2px;
          content: '';
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 180ms ease;
        }

        .main-nav a:hover,
        .main-nav a:focus-visible {
          color: var(--ink);
        }

        .main-nav a:hover::after,
        .main-nav a:focus-visible::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-action,
        .menu-toggle {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: none;
          border-radius: 50%;
          color: var(--ink);
          background: transparent;
          cursor: pointer;
          transition: color 180ms ease, background 180ms ease;
        }

        .nav-action:hover,
        .nav-action:focus-visible,
        .menu-toggle:hover,
        .menu-toggle:focus-visible {
          color: var(--accent);
          background: #f3ece5;
          outline: none;
        }

        .nav-action svg,
        .menu-toggle svg {
          width: 19px;
          height: 19px;
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.7;
        }

        .translate-wrap {
          position: relative;
          display: flex;
          align-items: center;
          width: 118px;
          height: 32px;
          border: 1px solid var(--line);
          border-radius: 15px;
          background: transparent;
        }

        .translate-wrap::after {
          position: absolute;
          top: 50%;
          right: 10px;
          width: 6px;
          height: 6px;
          content: '';
          border-right: 1px solid var(--muted);
          border-bottom: 1px solid var(--muted);
          pointer-events: none;
          transform: translateY(-65%) rotate(45deg);
        }

        #google_translate_element,
        .translate-wrap .goog-te-gadget {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          color: transparent !important;
          font-size: 0;
          line-height: 1 !important;
        }

        .translate-wrap .goog-te-combo,
        .translate-wrap .goog-te-gadget select {
          width: 100%;
          height: 30px;
          margin: 0 !important;
          padding: 0 27px 0 12px;
          border: 0;
          outline: 0;
          appearance: none;
          -webkit-appearance: none;
          color: var(--muted);
          background: transparent;
          cursor: pointer;
          font: 600 10px/30px sans-serif;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .translate-wrap .goog-te-gadget span,
        .translate-wrap .goog-logo-link {
          display: none !important;
        }

        .login-overlay {
          position: fixed;
          z-index: 20;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(20, 18, 16, 0.48);
        }

        .login-card {
          position: relative;
          width: min(100%, 390px);
          padding: 34px;
          border: 1px solid var(--line);
          border-radius: 18px;
          color: var(--ink);
          background: var(--bg);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.2);
          text-align: left;
        }

        .login-close {
          position: absolute;
          top: 14px;
          right: 14px;
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border: 0;
          border-radius: 50%;
          color: var(--muted);
          background: transparent;
          cursor: pointer;
          font-size: 22px;
        }

        .login-close:hover,
        .login-close:focus-visible {
          color: var(--accent);
          background: var(--accent-bg);
        }

        .login-card h2 {
          margin: 0 0 6px;
          color: var(--ink);
          font-family: Georgia, serif;
          font-size: 28px;
        }

        .login-card > p {
          margin: 0 0 24px;
          color: var(--muted);
          font-size: 14px;
        }

        .login-form {
          display: grid;
          gap: 16px;
        }

        .login-form label {
          display: grid;
          gap: 7px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .login-form input {
          box-sizing: border-box;
          width: 100%;
          padding: 12px 13px;
          border: 1px solid var(--line);
          border-radius: 8px;
          color: var(--ink);
          background: transparent;
          font: inherit;
          font-size: 14px;
        }

        .login-form input:focus {
          border-color: var(--accent);
          outline: 2px solid var(--accent-border);
          outline-offset: 1px;
        }

        .login-submit,
        .logout-button {
          width: 100%;
          padding: 12px 16px;
          border: 0;
          border-radius: 8px;
          color: #fff;
          background: var(--accent);
          cursor: pointer;
          font: 600 13px/1.2 sans-serif;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .login-submit:hover,
        .logout-button:hover {
          filter: brightness(0.92);
        }

        .login-error {
          margin: -4px 0 0;
          color: #bd4e42;
          font-size: 13px;
        }

        .login-toast {
          position: fixed;
          z-index: 30;
          right: 24px;
          bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: min(360px, calc(100vw - 48px));
          padding: 14px 18px;
          border: 1px solid rgba(75, 145, 93, 0.25);
          border-radius: 10px;
          color: #285b35;
          background: #eef8ef;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
          font-size: 14px;
          animation: toast-in 220ms ease-out;
        }

        .login-toast::before {
          content: '\\2713';
          display: grid;
          width: 21px;
          height: 21px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: #4b915d;
          font-size: 12px;
          font-weight: 700;
        }

        :root[data-theme='dark'] .login-toast {
          border-color: rgba(126, 200, 139, 0.3);
          color: #d0f0d5;
          background: #1e3825;
        }

        @keyframes toast-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .login-demo {
          margin-top: 18px !important;
          margin-bottom: 0 !important;
          padding-top: 14px;
          border-top: 1px solid var(--line);
          font-size: 12px !important;
          line-height: 1.6;
        }

        :root[data-theme='dark'] .translate-wrap .goog-te-gadget select {
          color: var(--muted);
        }

        .menu-toggle {
          display: none;
        }

        @media (max-width: 720px) {
          .navbar {
            flex-wrap: wrap;
            gap: 0;
            padding: 20px;
          }

          .menu-toggle {
            display: grid;
          }

          .nav-actions {
            margin-left: auto;
          }

          .nav-actions .nav-action:first-child {
            display: none;
          }

          .translate-wrap {
            display: none;
          }

          .main-nav {
            display: ${isMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
            width: 100%;
            margin: 24px 0 4px;
            padding-top: 22px;
            border-top: 1px solid var(--line);
          }
        }
      `}</style>

      <header className="navbar">
        <a className="brand" href="/" aria-label="Lumiere home">LUMI<em>È</em>RE</a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/new-arrival">New Arrival</a>
          <a href="/about">About</a>
        </nav>

        <div className="nav-actions">
          <div className="translate-wrap" aria-label="Choose language">
            <div id="google_translate_element" />
          </div>
          <button
            className="nav-action"
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            onClick={() => setIsDark((dark) => !dark)}
          >
            <ThemeIcon isDark={isDark} />
          </button>
          <button className="nav-action" type="button" aria-label="Search"><SearchIcon /></button>
          <button className="nav-action" type="button" aria-label="Shopping bag"><BagIcon /></button>
          <button
            className="nav-action"
            type="button"
            aria-label={isLoggedIn ? 'Open account' : 'Open login'}
            aria-pressed={isLoginOpen}
            onClick={() => setIsLoginOpen(true)}
          >
            <UserIcon />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </header>

      {isLoginOpen && (
        <div className="login-overlay" role="presentation" onClick={(event) => {
          if (event.target === event.currentTarget) setIsLoginOpen(false)
        }}>
          <section className="login-card" role="dialog" aria-modal="true" aria-labelledby="login-title">
            <button className="login-close" type="button" aria-label="Close login" onClick={() => setIsLoginOpen(false)}>
              &times;
            </button>
            {isLoggedIn ? (
              <>
                <h2 id="login-title">Welcome back</h2>
                <p>Kamu sudah login sebagai pengguna Lumière.</p>
                <button className="logout-button" type="button" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <h2 id="login-title">Welcome back</h2>
                <p>Masuk untuk melanjutkan pengalaman belanjamu.</p>
                <form className="login-form" onSubmit={handleLogin}>
                  <label>
                    Email
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nama@email.com" required />
                  </label>
                  <label>
                    Password
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Masukkan password" required />
                  </label>
                  {loginError && <p className="login-error" role="alert">{loginError}</p>}
                  <button className="login-submit" type="submit">Login</button>
                </form>
                <p className="login-demo">Demo login: user@lumiere.com / lumiere123</p>
              </>
            )}
          </section>
        </div>
      )}

      {toastMessage && <div className="login-toast" role="status">{toastMessage}</div>}
    </>
  );
}

export default Navbar;