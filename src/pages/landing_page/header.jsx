function Header() {
	return (
		<header className="site-header">
			<a className="brand" href="#home" aria-label="Beranda">
				Mini<span>Challenge</span>
			</a>

			<nav className="main-nav" aria-label="Navigasi utama">
				<a href="#home">Beranda</a>
				<a href="#tentang">Tentang</a>
				<a href="#kontak">Kontak</a>
			</nav>

			<a className="header-action" href="#mulai">
				Mulai Sekarang
			</a>
		</header>
	)
}

export default Header
