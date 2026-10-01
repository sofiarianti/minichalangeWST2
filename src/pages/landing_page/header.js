function SearchIcon() {
  return `
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `
}

function BagIcon() {
  return `
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  `
}

function UserIcon() {
  return `
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  `
}

function MenuIcon(isOpen) {
  return `
    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${isOpen ? '<path d="M18 6 6 18M6 6l12 12" />' : '<path d="M4 12h16M4 6h16M4 18h16" />'}
    </svg>
  `
}

function ThemeIcon(isDark) {
  return `
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${
        isDark
          ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'
          : '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
      }
    </svg>
  `
}

function Header(container) {
  let isMenuOpen = false
  let isLoginOpen = false
  let isLoggedIn = localStorage.getItem('lumiere-login') === 'true'
  let isDark = localStorage.getItem('lumiere-theme') === 'dark'
  let toastTimeout = null

  // Setup initial theme attribute for DaisyUI + CSS
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')

  const initGoogleTranslate = () => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return
      new window.google.translate.TranslateElement(
        { pageLanguage: 'id', includedLanguages: 'id,en,fr,ja,ko,zh-CN', autoDisplay: false },
        'google_translate_element'
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
  }

  const render = () => {
    container.innerHTML = `
      <header class="navbar bg-base-100 border-b border-base-200 sticky top-0 z-40 px-4 lg:px-12 py-1 min-h-14 shadow-sm transition-colors duration-200">
        <div class="navbar-start gap-4">
          <a class="text-2xl font-serif font-bold tracking-widest text-[#0F3040] flex items-center gap-1" href="/" aria-label="Lumiere home">
            LUMI<span class="text-[#8B5E3C] italic">È</span>RE
          </a>
        </div>

        <div class="navbar-center hidden md:flex">
          <ul class="menu menu-horizontal px-1 gap-4 font-semibold text-sm tracking-wide uppercase">
            <li><a href="/" class="hover:text-[#A56F63] transition-colors">Home</a></li>
            <li><a href="#produk-list" class="hover:text-[#A56F63] transition-colors">Shop</a></li>
            <li><a href="#flash-sale" class="hover:text-[#A56F63] transition-colors">New Arrival</a></li>
            <li><a href="#about" class="hover:text-[#A56F63] transition-colors">About</a></li>
          </ul>
        </div>

        <div class="navbar-end gap-2">
          <!-- Google Translate -->
          <div class="hidden sm:flex items-center text-xs">
            <div id="google_translate_element"></div>
          </div>

          <!-- Theme Toggle -->
          <button
            id="theme-toggle-btn"
            class="btn btn-ghost btn-circle btn-sm"
            type="button"
            aria-label="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
          >
            ${ThemeIcon(isDark)}
          </button>

          <!-- User Account Button -->
          <button
            id="user-toggle-btn"
            class="btn btn-ghost btn-circle btn-sm text-base-content"
            type="button"
            aria-label="${isLoggedIn ? 'Open account' : 'Open login'}"
          >
            ${UserIcon()}
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            id="menu-toggle-btn"
            class="btn btn-ghost btn-circle btn-sm md:hidden"
            type="button"
            aria-label="${isMenuOpen ? 'Close menu' : 'Open menu'}"
          >
            ${MenuIcon(isMenuOpen)}
          </button>
        </div>
      </header>

      <!-- Mobile Dropdown Menu -->
      ${
        isMenuOpen
          ? `
        <div class="md:hidden bg-base-100 border-b border-base-200 px-6 py-4 space-y-3 transition-all duration-200">
          <a href="/" class="block font-medium hover:text-primary py-1">Home</a>
          <a href="#produk-list" class="block font-medium hover:text-primary py-1">Shop</a>
          <a href="#flash-sale" class="block font-medium hover:text-primary py-1">New Arrival</a>
          <a href="#about" class="block font-medium hover:text-primary py-1">About</a>
        </div>
      `
          : ''
      }

      <!-- Login Modal -->
      ${
        isLoginOpen
          ? `
        <div class="modal modal-open bg-black/50 backdrop-blur-sm" id="login-overlay">
          <div class="modal-box relative max-w-sm rounded-2xl p-6 shadow-2xl bg-base-100">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3" id="login-close-btn">&times;</button>
            ${
              isLoggedIn
                ? `
                <h3 class="font-serif text-2xl font-bold mb-2">Welcome Back!</h3>
                <p class="text-sm text-base-content/70 mb-6">Kamu sudah berhasil login sebagai pengguna Lumière.</p>
                <button class="btn btn-error btn-block text-white" id="logout-btn" type="button">Logout</button>
              `
                : `
                <h3 class="font-serif text-2xl font-bold mb-1">Welcome Back</h3>
                <p class="text-xs text-base-content/60 mb-6">Masuk untuk melanjutkan pengalaman belanjamu.</p>
                <form class="space-y-4" id="login-form">
                  <div class="form-control">
                    <label class="label py-1"><span class="label-text text-xs font-semibold uppercase">Email</span></label>
                    <input type="email" id="login-email" class="input input-bordered w-full text-sm" placeholder="user@lumiere.com" required />
                  </div>
                  <div class="form-control">
                    <label class="label py-1"><span class="label-text text-xs font-semibold uppercase">Password</span></label>
                    <input type="password" id="login-password" class="input input-bordered w-full text-sm" placeholder="••••••••" required />
                  </div>
                  <div id="login-error-container"></div>
                  <button class="btn btn-primary btn-block text-white font-medium uppercase tracking-wider text-xs" type="submit">Login</button>
                </form>
                <div class="divider my-3 text-xs">DEMO CREDENTIALS</div>
                <p class="text-center text-xs text-base-content/60 bg-base-200 py-2 rounded-lg font-mono">user@lumiere.com / lumiere123</p>
              `
            }
          </div>
        </div>
      `
          : ''
      }

      <div id="header-toast-container"></div>
    `

    attachEvents()
    initGoogleTranslate()
  }

  const showToast = (message) => {
    const toastEl = container.querySelector('#header-toast-container')
    if (toastEl) {
      toastEl.innerHTML = `
        <div class="toast toast-bottom toast-end z-50">
          <div class="alert alert-success text-white text-sm shadow-lg flex items-center gap-2">
            <span>✓ ${message}</span>
          </div>
        </div>
      `
      if (toastTimeout) clearTimeout(toastTimeout)
      toastTimeout = setTimeout(() => {
        toastEl.innerHTML = ''
      }, 3500)
    }
  }

  const attachEvents = () => {
    const themeBtn = container.querySelector('#theme-toggle-btn')
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        isDark = !isDark
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
        localStorage.setItem('lumiere-theme', isDark ? 'dark' : 'light')
        render()
      })
    }

    const userBtn = container.querySelector('#user-toggle-btn')
    if (userBtn) {
      userBtn.addEventListener('click', () => {
        isLoginOpen = true
        render()
      })
    }

    const menuBtn = container.querySelector('#menu-toggle-btn')
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen
        render()
      })
    }

    const overlay = container.querySelector('#login-overlay')
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          isLoginOpen = false
          render()
        }
      })
    }

    const closeBtn = container.querySelector('#login-close-btn')
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        isLoginOpen = false
        render()
      })
    }

    const logoutBtn = container.querySelector('#logout-btn')
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        isLoggedIn = false
        localStorage.removeItem('lumiere-login')
        isLoginOpen = false
        render()
      })
    }

    const loginForm = container.querySelector('#login-form')
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = container.querySelector('#login-email')?.value || ''
        const password = container.querySelector('#login-password')?.value || ''
        const errContainer = container.querySelector('#login-error-container')

        if (email === 'user@lumiere.com' && password === 'lumiere123') {
          isLoggedIn = true
          localStorage.setItem('lumiere-login', 'true')
          isLoginOpen = false
          render()
          showToast('Login berhasil. Selamat datang di Lumière!')
        } else if (errContainer) {
          errContainer.innerHTML = '<p class="text-xs text-error font-medium">Email atau password belum sesuai.</p>'
        }
      })
    }
  }

  render()
}

export default Header
