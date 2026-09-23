import { useState } from 'react'

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

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <style>{`
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
          <button className="nav-action" type="button" aria-label="Search"><SearchIcon /></button>
          <button className="nav-action" type="button" aria-label="Shopping bag"><BagIcon /></button>
          <button className="nav-action" type="button" aria-label="Account"><UserIcon /></button>
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
    </>
  );
}

export default Navbar;