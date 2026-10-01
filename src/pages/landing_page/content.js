import confetti from 'canvas-confetti'

// Mock Products Data
const INITIAL_PRODUCTS = [
	{
		id: 1,
		name: 'Wireless Noise-Canceling Headphones Pro',
		category: 'Elektronik',
		price: 1499000,
		originalPrice: 2299000,
		rating: 4.9,
		reviewsCount: 248,
		badge: 'HOT',
		badgeType: 'danger',
		image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
		description: 'Headphone nirkabel premium dengan teknologi peredam bising aktif (ANC), daya tahan baterai hingga 30 jam, dan kualitas suara Hi-Res Audio.',
		stock: 15,
		colors: ['Hitam Matte', 'Perak Metalik', 'Biru Navy']
	},
	{
		id: 2,
		name: 'Smartwatch Series X Titanium Edition',
		category: 'Gadget',
		price: 2899000,
		originalPrice: 3500000,
		rating: 4.8,
		reviewsCount: 192,
		badge: 'DISKON 17%',
		badgeType: 'warning',
		image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
		description: 'Jam tangan pintar layar AMOLED Always-On dengan pelacak detak jantung, GPS presisi tinggi, dan ketahanan air hingga 50 meter.',
		stock: 8,
		colors: ['Titanium Grey', 'Midnight Black', 'Ocean Blue']
	},
	{
		id: 3,
		name: 'Ergonomic Wireless Mechanical Keyboard',
		category: 'Elektronik',
		price: 899000,
		originalPrice: 1250000,
		rating: 4.9,
		reviewsCount: 310,
		badge: 'TERLARIS',
		badgeType: 'success',
		image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
		description: 'Keyboard mekanikal dengan switch kustom yang empuk, koneksi tri-mode (Bluetooth, 2.4Ghz, Type-C), dan RGB backlighting yang elegan.',
		stock: 22,
		colors: ['Retro White', 'Cyberpunk', 'Minimalist Black']
	},
	{
		id: 4,
		name: 'Jaket Parka Outdoor Waterproof',
		category: 'Fashion',
		price: 450000,
		originalPrice: 650000,
		rating: 4.7,
		reviewsCount: 145,
		badge: 'NEW',
		badgeType: 'info',
		image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
		description: 'Jaket outdoor tahan air dan angin dengan bahan taslan tebal namun breathable. Dilengkapi dengan kantong multifungsi dan kupluk lepas-pasang.',
		stock: 18,
		colors: ['Army Green', 'Black Charcoal', 'Dark Ochre']
	},
	{
		id: 5,
		name: 'Sneakers Running Ultra Cushion',
		category: 'Sepatu',
		price: 799000,
		originalPrice: 1199000,
		rating: 4.8,
		reviewsCount: 215,
		badge: 'SALE',
		badgeType: 'danger',
		image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
		description: 'Sepatu lari ringan dengan busa Ultra-Cushion untuk kenyamanan maksimal saat berolahraga maupun aktivitas sehari-hari.',
		stock: 12,
		colors: ['Crimson Red', 'Pure White', 'Electric Blue']
	},
	{
		id: 6,
		name: 'Tas Ransel Laptop Modern Minimalis',
		category: 'Aksesoris',
		price: 329000,
		originalPrice: 499000,
		rating: 4.9,
		reviewsCount: 178,
		badge: 'BESTSELLER',
		badgeType: 'success',
		image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
		description: 'Tas ransel berdesain modern dengan slot khusus laptop 15.6 inch, port charger USB eksternal, dan kompartemen terorganisir.',
		stock: 30,
		colors: ['Oxford Grey', 'Matte Black', 'Navy Blue']
	},
	{
		id: 7,
		name: 'Kacamata Anti Radiasi Classic Frame',
		category: 'Aksesoris',
		price: 189000,
		originalPrice: 299000,
		rating: 4.6,
		reviewsCount: 94,
		badge: 'POPULER',
		badgeType: 'warning',
		image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
		description: 'Kacamata dengan lensa Blue-Light Blocker untuk melindungi mata dari paparan layar komputer dan smartphone.',
		stock: 40,
		colors: ['Black Gold', 'Transparent Amber', 'Silver Clear']
	},
	{
		id: 8,
		name: 'Smart Speaker Voice Assistant Ambient',
		category: 'Gadget',
		price: 649000,
		originalPrice: 899000,
		rating: 4.7,
		reviewsCount: 112,
		badge: 'NEW',
		badgeType: 'info',
		image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
		description: 'Speaker pintar dengan kontrol suara pintar, kualitas bass dalam, dan lampu LED ambient yang dapat berorientasi musik.',
		stock: 14,
		colors: ['Chalk White', 'Charcoal Black']
	}
]

// Categories List
const CATEGORIES = [
	{ id: 'semua', label: 'Semua Produk', icon: '✨' },
	{ id: 'Elektronik', label: 'Elektronik', icon: '⚡' },
	{ id: 'Gadget', label: 'Gadget', icon: '📱' },
	{ id: 'Fashion', label: 'Fashion', icon: '🛍️' },
	{ id: 'Sepatu', label: 'Sepatu', icon: '👟' },
	{ id: 'Aksesoris', label: 'Aksesoris', icon: '👓' }
]

// Flash Sale Mock Items
const FLASH_SALE_ITEMS = [
	{
		id: 101,
		name: 'TWS Earbuds Bass Boost Pro',
		price: 299000,
		originalPrice: 699000,
		discount: 57,
		rating: 4.9,
		sold: 84,
		total: 100,
		image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80'
	},
	{
		id: 102,
		name: 'Powerbank Fast Charge 20.000mAh',
		price: 199000,
		originalPrice: 450000,
		discount: 55,
		rating: 4.8,
		sold: 92,
		total: 100,
		image: 'https://images.unsplash.com/photo-1609592424074-ed27e699b0c2?auto=format&fit=crop&w=600&q=80'
	},
	{
		id: 103,
		name: 'Lampu Meja LED Smart Touch',
		price: 149000,
		originalPrice: 320000,
		discount: 53,
		rating: 4.7,
		sold: 65,
		total: 80,
		image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=600&q=80'
	}
]

// Default Vouchers
const DEFAULT_VOUCHERS = [
	{
		code: 'NEWUSER100K',
		discount: 100000,
		title: 'Voucher Pengguna Baru',
		description: 'Potongan Rp 100.000 tanpa minimal belanja',
		minSpend: 0,
		isUsed: false
	},
	{
		code: 'DISKON50K',
		discount: 50000,
		title: 'Voucher Promo Hemat',
		description: 'Diskon Rp 50.000 min. belanja Rp 300.000',
		minSpend: 300000,
		isUsed: false
	},
	{
		code: 'FLASHSALE25K',
		discount: 25000,
		title: 'Voucher Flash Sale',
		description: 'Diskon Rp 25.000 untuk semua produk',
		minSpend: 100000,
		isUsed: false
	}
]

// Local Storage Helper
const getStorageItem = (key, defaultValue) => {
	try {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : defaultValue
	} catch (error) {
		console.error(`Error reading ${key} from localStorage:`, error)
		return defaultValue
	}
}

const setStorageItem = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value))
	} catch (error) {
		console.error(`Error writing ${key} to localStorage:`, error)
	}
}

// Format Rupiah Helper
const formatRupiah = (number) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0
	}).format(number)
}

function Content(container) {
	// Persistent LocalStorage State
	let cart = getStorageItem('shop_cart', [])
	let wishlist = getStorageItem('shop_wishlist', [])
	let vouchers = getStorageItem('shop_vouchers', DEFAULT_VOUCHERS)
	let appliedVoucher = getStorageItem('shop_applied_voucher', null)
	let orderHistory = getStorageItem('shop_orders', [])

	// Interactive UI State
	let activeCategory = 'semua'
	let searchQuery = ''
	let sortBy = 'populer'
	let selectedProduct = null
	let selectedColor = ''
	let modalQty = 1
	let isCartOpen = false
	let isHistoryOpen = false
	let isVoucherModalOpen = false
	let inputVoucherCode = ''
	let toastMessage = null
	let toastTimeout = null
	let emailSubscription = ''

	// QR Code Payment Modal State
	let isPaymentModalOpen = false
	let paymentStage = 'qr' // 'qr' | 'scanning' | 'success'
	let pendingOrder = null

	// Timer state
	let secondsTotal = 5 * 3600 + 42 * 60 + 18
	let timerInterval = null

	const saveAll = () => {
		setStorageItem('shop_cart', cart)
		setStorageItem('shop_wishlist', wishlist)
		setStorageItem('shop_vouchers', vouchers)
		setStorageItem('shop_applied_voucher', appliedVoucher)
		setStorageItem('shop_orders', orderHistory)
	}

	const startTimer = () => {
		if (timerInterval) clearInterval(timerInterval)
		timerInterval = setInterval(() => {
			if (secondsTotal > 0) {
				secondsTotal--
				updateTimerDisplay()
			}
		}, 1000)
	}

	const updateTimerDisplay = () => {
		const h = Math.floor(secondsTotal / 3600)
		const m = Math.floor((secondsTotal % 3600) / 60)
		const s = secondsTotal % 60
		const pad = (n) => String(n).padStart(2, '0')

		const hEl = container.querySelector('#timer-h')
		const mEl = container.querySelector('#timer-m')
		const sEl = container.querySelector('#timer-s')

		if (hEl) hEl.textContent = pad(h)
		if (mEl) mEl.textContent = pad(m)
		if (sEl) sEl.textContent = pad(s)
	}

	const showToast = (message) => {
		toastMessage = message
		const toastEl = container.querySelector('#content-toast')
		if (toastEl) {
			toastEl.innerHTML = `
				<div class="shop-toast animate-slide-in">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
					<span>${message}</span>
				</div>
			`
		}
		if (toastTimeout) clearTimeout(toastTimeout)
		toastTimeout = setTimeout(() => {
			const el = container.querySelector('#content-toast')
			if (el) el.innerHTML = ''
		}, 3000)
	}

	// Calculations
	const getSubtotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
	const getDiscount = () => {
		const subtotal = getSubtotal()
		if (!appliedVoucher || subtotal < (appliedVoucher.minSpend || 0)) return 0
		return Math.min(appliedVoucher.discount, subtotal)
	}
	const getFinalPrice = () => Math.max(0, getSubtotal() - getDiscount())
	const getTotalCartCount = () => cart.reduce((acc, item) => acc + item.quantity, 0)

	// Filter & Sort Logic
	const getFilteredProducts = () => {
		let result = [...INITIAL_PRODUCTS]

		if (activeCategory !== 'semua') {
			result = result.filter((p) => p.category === activeCategory)
		}

		if (searchQuery.trim() !== '') {
			const query = searchQuery.toLowerCase()
			result = result.filter(
				(p) =>
					p.name.toLowerCase().includes(query) ||
					p.category.toLowerCase().includes(query) ||
					p.description.toLowerCase().includes(query)
			)
		}

		if (sortBy === 'harga-rendah') {
			result.sort((a, b) => a.price - b.price)
		} else if (sortBy === 'harga-tinggi') {
			result.sort((a, b) => b.price - a.price)
		} else if (sortBy === 'rating') {
			result.sort((a, b) => b.rating - a.rating)
		}

		return result
	}

	const render = () => {
		const products = getFilteredProducts()
		const subtotal = getSubtotal()
		const discount = getDiscount()
		const finalTotal = getFinalPrice()
		const cartCount = getTotalCartCount()

		container.innerHTML = `
			<main class="shop-content">
				<!-- TOAST -->
				<div id="content-toast"></div>

				<!-- TOP QUICK BAR -->
				<div class="ls-quick-bar">
					<div class="ls-info-tag">
						<span class="dot-active"></span> Data Tersimpan di <strong>Local Storage</strong>
					</div>
					<div class="ls-actions">
						<button id="open-vouchers-btn" class="btn-ls-action">
							🎫 Voucher Saya (${vouchers.filter((v) => !v.isUsed).length})
						</button>
						<button id="open-history-btn" class="btn-ls-action highlight">
							📜 Riwayat Pesanan (${orderHistory.length})
						</button>
						<button id="open-cart-floating-btn" class="btn-ls-action cart-btn-badge">
							🛒 Keranjang (${cartCount})
						</button>
					</div>
				</div>

				<!-- HERO BANNER -->
				<section class="shop-hero">
					<div class="hero-grid">
						<div class="hero-text-content">
							<span class="hero-badge">✨ Flash Deal Diskon s.d 50%</span>
							<h1 class="hero-title">
								Temukan Gaya & <span class="highlight-text">Teknologi Impianmu</span>
							</h1>
							<p class="hero-description">
								Koleksi gadget terkini, fashion branded, dan aksesoris eksklusif dengan garansi resmi dan pengiriman super cepat ke seluruh Indonesia.
							</p>

							<div class="hero-cta-group">
								<a href="#produk-list" class="btn-primary-lg">🛍️ Belanja Sekarang</a>
								<a href="#flash-sale" class="btn-secondary-lg">⚡ Lihat Flash Sale</a>
							</div>

							<div class="hero-stats">
								<div class="stat-item">
									<span class="stat-num">15k+</span>
									<span class="stat-label">Pelanggan Puas</span>
								</div>
								<div class="stat-divider"></div>
								<div class="stat-item">
									<span class="stat-num">4.9 / 5.0</span>
									<span class="stat-label">Rating Toko</span>
								</div>
								<div class="stat-divider"></div>
								<div class="stat-item">
									<span class="stat-num">100%</span>
									<span class="stat-label">Original Guaranteed</span>
								</div>
							</div>
						</div>

						<div class="hero-visual">
							<div class="hero-card-glow"></div>
							<div class="hero-image-wrapper">
								<img
									src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
									alt="Hero Featured Product"
									className="hero-main-img"
								/>
								<div class="floating-tag tag-price">
									<span class="tag-title">Headphones Pro</span>
									<span class="tag-val">Rp 1.499.000</span>
								</div>
								<div class="floating-tag tag-rating">
									★ <span>4.9 (248 Ulasan)</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- VALUE PROPOSITION BAR -->
				<section class="value-props">
					<div class="prop-card">
						<div class="prop-icon-box blue">🚚</div>
						<div>
							<h4>Gratis Ongkir</h4>
							<p>Min. belanja Rp 150rb</p>
						</div>
					</div>
					<div class="prop-card">
						<div class="prop-icon-box green">🛡️</div>
						<div>
							<h4>Garansi 100% Original</h4>
							<p>Jaminan produk resmi</p>
						</div>
					</div>
					<div class="prop-card">
						<div class="prop-icon-box purple">🔄</div>
						<div>
							<h4>30 Hari Retur</h4>
							<p>Tukar barang tanpa ribet</p>
						</div>
					</div>
					<div class="prop-card">
						<div class="prop-icon-box orange">⚡</div>
						<div>
							<h4>Pengiriman Cepat</h4>
							<p>Dikirim dalam 24 jam</p>
						</div>
					</div>
				</section>

				<!-- FLASH SALE SECTION -->
				<section id="flash-sale" class="flash-sale-section">
					<div class="flash-header">
						<div class="flash-title-wrap">
							<span class="flash-icon-animated">⚡</span>
							<h2>Flash Sale Hari Ini</h2>
							<div class="countdown-timer">
								<span class="time-box" id="timer-h">05</span> :
								<span class="time-box" id="timer-m">42</span> :
								<span class="time-box" id="timer-s">18</span>
							</div>
						</div>
					</div>

					<div class="flash-grid">
						${FLASH_SALE_ITEMS.map(
							(item) => `
							<div class="flash-card">
								<div class="flash-badge">-${item.discount}%</div>
								<img src="${item.image}" alt="${item.name}" class="flash-img" />
								<div class="flash-body">
									<h3>${item.name}</h3>
									<div class="price-wrap">
										<span class="flash-price">${formatRupiah(item.price)}</span>
										<span class="flash-orig-price">${formatRupiah(item.originalPrice)}</span>
									</div>
									<div class="progress-wrap">
										<div class="progress-bar" style="width: ${(item.sold / item.total) * 100}%"></div>
									</div>
									<div class="sold-text">Terjual ${item.sold}/${item.total}</div>
									<button class="btn-flash-buy" data-id="${item.id}">Beli Sekarang</button>
								</div>
							</div>
						`
						).join('')}
					</div>
				</section>

				<!-- PRODUCTS SECTION -->
				<section id="produk-list" class="products-section">
					<div class="products-header">
						<h2>Katalog Produk</h2>
						<div class="filter-controls">
							<!-- Search Input -->
							<div class="search-box">
								🔍
								<input
									type="text"
									id="search-input"
									placeholder="Cari produk..."
									value="${searchQuery}"
								/>
							</div>

							<!-- Sort Select -->
							<select id="sort-select" class="sort-dropdown">
								<option value="populer" ${sortBy === 'populer' ? 'selected' : ''}>Paling Populer</option>
								<option value="harga-rendah" ${sortBy === 'harga-rendah' ? 'selected' : ''}>Harga Terendah</option>
								<option value="harga-tinggi" ${sortBy === 'harga-tinggi' ? 'selected' : ''}>Harga Tertinggi</option>
								<option value="rating" ${sortBy === 'rating' ? 'selected' : ''}>Rating Tertinggi</option>
							</select>
						</div>
					</div>

					<!-- Categories Bar -->
					<div class="categories-bar">
						${CATEGORIES.map(
							(cat) => `
							<button
								class="category-btn ${activeCategory === cat.id ? 'active' : ''}"
								data-cat="${cat.id}"
							>
								${cat.icon} ${cat.label}
							</button>
						`
						).join('')}
					</div>

					<!-- Products Grid -->
					${
						products.length === 0
							? `
						<div class="empty-products">
							<p>Produk tidak ditemukan untuk pencarian "${searchQuery}"</p>
						</div>
					`
							: `
						<div class="products-grid">
							${products
								.map((p) => {
									const isFav = wishlist.includes(p.id)
									return `
									<div class="product-card">
										<div class="product-image-container">
											${p.badge ? `<span class="product-badge badge-${p.badgeType}">${p.badge}</span>` : ''}
											<button class="btn-wishlist ${isFav ? 'active' : ''}" data-wishlist-id="${p.id}" title="Favorit">
												${isFav ? '❤️' : '🤍'}
											</button>
											<img src="${p.image}" alt="${p.name}" class="product-img" />
											<button class="btn-quickview" data-quick-id="${p.id}">Lihat Detail</button>
										</div>
										<div class="product-info">
											<span class="product-category">${p.category}</span>
											<h3 class="product-name">${p.name}</h3>
											<div class="product-rating">
												⭐ ${p.rating} <span class="reviews-count">(${p.reviewsCount})</span>
											</div>
											<div class="product-price-row">
												<div>
													<span class="current-price">${formatRupiah(p.price)}</span>
													${p.originalPrice ? `<span class="old-price">${formatRupiah(p.originalPrice)}</span>` : ''}
												</div>
												<button class="btn-add-cart" data-cart-id="${p.id}">+ Keranjang</button>
											</div>
										</div>
									</div>
								`
								})
								.join('')}
						</div>
					`
					}
				</section>

				<!-- NEWSLETTER -->
				<section class="newsletter-section" id="about">
					<div class="newsletter-card">
						<h2>Dapatkan Voucher Rp 100.000!</h2>
						<p>Berlangganan newsletter kami dan dapatkan penawaran eksklusif serta voucher diskon langsung ke email Anda.</p>
						<form id="newsletter-form" class="newsletter-form">
							<input
								type="email"
								id="newsletter-email"
								placeholder="Masukkan alamat email Anda..."
								required
							/>
							<button type="submit" class="btn-subscribe">Klaim Voucher</button>
						</form>
					</div>
				</section>

				<!-- CART SIDEBAR MODAL -->
				${
					isCartOpen
						? `
					<div class="modal-backdrop" id="cart-backdrop">
						<div class="cart-drawer">
							<div class="drawer-header">
								<h3>🛒 Keranjang Belanja (${cartCount})</h3>
								<button id="close-cart-btn" class="close-drawer-btn">&times;</button>
							</div>

							<div class="drawer-body">
								${
									cart.length === 0
										? `
									<div class="empty-cart-view">
										<p>Keranjang Anda masih kosong</p>
									</div>
								`
										: `
									<div class="cart-items-list">
										${cart
											.map(
												(item, index) => `
											<div class="cart-item">
												<img src="${item.image}" alt="${item.name}" />
												<div class="cart-item-details">
													<h4>${item.name}</h4>
													${item.color ? `<span class="item-color">Warna: ${item.color}</span>` : ''}
													<span class="item-price">${formatRupiah(item.price)}</span>
													<div class="qty-controls">
														<button data-cart-qty-index="${index}" data-delta="-1">-</button>
														<span>${item.quantity}</span>
														<button data-cart-qty-index="${index}" data-delta="1">+</button>
													</div>
												</div>
												<button data-cart-remove-index="${index}" class="btn-remove-item">🗑️</button>
											</div>
										`
											)
											.join('')}
									</div>

									<!-- VOUCHER PROMO BOX -->
									<div class="voucher-input-box">
										<input type="text" id="voucher-input-code" placeholder="Kode Voucher..." value="${inputVoucherCode}" />
										<button id="apply-voucher-btn">Gunakan</button>
									</div>

									${
										appliedVoucher
											? `
										<div class="applied-voucher-tag">
											<span>🎉 Voucher ${appliedVoucher.code} (-${formatRupiah(discount)})</span>
											<button id="remove-voucher-btn">&times;</button>
										</div>
									`
											: ''
									}

									<div class="cart-summary">
										<div class="summary-row">
											<span>Subtotal</span>
											<span>${formatRupiah(subtotal)}</span>
										</div>
										${
											discount > 0
												? `
											<div class="summary-row discount">
												<span>Diskon Voucher</span>
												<span>-${formatRupiah(discount)}</span>
											</div>
										`
												: ''
										}
										<div class="summary-row total">
											<span>Total Pembayaran</span>
											<span>${formatRupiah(finalTotal)}</span>
										</div>
										<button id="checkout-btn" class="btn-checkout">Bayar Sekarang (QRIS)</button>
									</div>
								`
								}
							</div>
						</div>
					</div>
				`
						: ''
				}

				<!-- QUICK VIEW PRODUCT MODAL -->
				${
					selectedProduct
						? `
					<div class="modal-backdrop" id="quickview-backdrop">
						<div class="modal-card">
							<button id="close-quickview-btn" class="modal-close">&times;</button>
							<div class="quickview-grid">
								<img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="quickview-img" />
								<div class="quickview-info">
									<span class="product-category">${selectedProduct.category}</span>
									<h2>${selectedProduct.name}</h2>
									<div class="product-rating">⭐ ${selectedProduct.rating}</div>
									<p class="quickview-desc">${selectedProduct.description}</p>
									<div class="quickview-price">${formatRupiah(selectedProduct.price)}</div>

									${
										selectedProduct.colors
											? `
										<div class="color-selection">
											<label>Pilih Warna:</label>
											<div class="color-options">
												${selectedProduct.colors
													.map(
														(color) => `
													<button
														class="color-btn ${selectedColor === color ? 'active' : ''}"
														data-select-color="${color}"
													>
														${color}
													</button>
												`
													)
													.join('')}
											</div>
										</div>
									`
											: ''
									}

									<div class="quickview-qty-row">
										<div class="qty-picker">
											<button id="qv-qty-minus">-</button>
											<span>${modalQty}</span>
											<button id="qv-qty-plus">+</button>
										</div>
										<button id="qv-add-to-cart" class="btn-primary-lg">Tambah ke Keranjang</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				`
						: ''
				}

				<!-- QR PAYMENT MODAL -->
				${
					isPaymentModalOpen && pendingOrder
						? `
					<div class="modal-backdrop" id="payment-backdrop">
						<div class="modal-card payment-modal">
							<button id="close-payment-btn" class="modal-close">&times;</button>
							${
								paymentStage === 'qr'
									? `
								<h3>Scan QRIS Pembayaran</h3>
								<p class="order-id-sub">No. Pesanan: <strong>${pendingOrder.id}</strong></p>
								<div class="qr-container">
									<img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent('QRIS:' + pendingOrder.id)}" alt="QR Code" />
								</div>
								<div class="payment-amount">${formatRupiah(pendingOrder.total)}</div>
								<p class="scan-instructions">Gunakan aplikasi M-Banking atau E-Wallet pilihanmu untuk me-scan QRIS di atas.</p>
								<button id="simulate-scan-btn" class="btn-primary-lg">Simulasi Scan & Bayar</button>
							`
									: paymentStage === 'scanning'
									? `
								<div class="payment-status-view">
									<div class="spinner"></div>
									<h3>Memproses Pembayaran...</h3>
									<p>Mohon tunggu sebentar</p>
								</div>
							`
									: `
								<div class="payment-status-view success">
									<div class="success-icon">🎉</div>
									<h3>Pembayaran Berhasil!</h3>
									<p>Pesanan <strong>${pendingOrder.id}</strong> sedang diproses.</p>
									<button id="finish-payment-btn" class="btn-primary-lg">Selesai & Lihat Riwayat</button>
								</div>
							`
							}
						</div>
					</div>
				`
						: ''
				}

				<!-- ORDER HISTORY MODAL -->
				${
					isHistoryOpen
						? `
					<div class="modal-backdrop" id="history-backdrop">
						<div class="modal-card">
							<div class="modal-header">
								<h3>📜 Riwayat Pesanan Saya</h3>
								<button id="close-history-btn" class="modal-close">&times;</button>
							</div>
							<div class="modal-body">
								${
									orderHistory.length === 0
										? `<p>Belum ada riwayat pesanan</p>`
										: `
									<div class="orders-list">
										${orderHistory
											.map(
												(ord) => `
											<div class="order-card">
												<div class="order-header-row">
													<strong>${ord.id}</strong>
													<span class="order-date">${ord.date}</span>
												</div>
												<div class="order-items">
													${ord.items
														.map(
															(it) => `
														<div>${it.name} (x${it.quantity})</div>
													`
														)
														.join('')}
												</div>
												<div class="order-total-row">
													<span>Total: <strong>${formatRupiah(ord.total)}</strong></span>
													<span class="order-status-tag">${ord.status}</span>
												</div>
											</div>
										`
											)
											.join('')}
									</div>
									<button id="clear-history-btn" class="btn-secondary-lg red-text">Bersihkan Riwayat</button>
								`
								}
							</div>
						</div>
					</div>
				`
						: ''
				}

				<!-- VOUCHER LIST MODAL -->
				${
					isVoucherModalOpen
						? `
					<div class="modal-backdrop" id="voucher-backdrop">
						<div class="modal-card">
							<div class="modal-header">
								<h3>🎫 Voucher Saya</h3>
								<button id="close-voucher-btn" class="modal-close">&times;</button>
							</div>
							<div class="modal-body">
								<div class="vouchers-list">
									${vouchers
										.map(
											(v) => `
										<div class="voucher-card ${v.isUsed ? 'used' : ''}">
											<div class="voucher-info">
												<h4>${v.title}</h4>
												<p>${v.description}</p>
												<span class="voucher-code-tag">${v.code}</span>
											</div>
											<button
												class="btn-use-voucher"
												data-voucher-code="${v.code}"
												${v.isUsed ? 'disabled' : ''}
											>
												${v.isUsed ? 'Terpakai' : 'Gunakan'}
											</button>
										</div>
									`
										)
										.join('')}
								</div>
							</div>
						</div>
					</div>
				`
						: ''
				}
			</main>
		`

		attachEvents()
		updateTimerDisplay()
	}

	const attachEvents = () => {
		// Category Buttons
		container.querySelectorAll('.category-btn').forEach((btn) => {
			btn.addEventListener('click', () => {
				activeCategory = btn.getAttribute('data-cat')
				render()
			})
		})

		// Search Input
		const searchInput = container.querySelector('#search-input')
		if (searchInput) {
			searchInput.addEventListener('input', (e) => {
				searchQuery = e.target.value
				render()
				const input = container.querySelector('#search-input')
				if (input) {
					input.focus()
					input.setSelectionRange(searchQuery.length, searchQuery.length)
				}
			})
		}

		// Sort Select
		const sortSelect = container.querySelector('#sort-select')
		if (sortSelect) {
			sortSelect.addEventListener('change', (e) => {
				sortBy = e.target.value
				render()
			})
		}

		// Wishlist Toggle
		container.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const id = parseInt(btn.getAttribute('data-wishlist-id'))
				if (wishlist.includes(id)) {
					wishlist = wishlist.filter((item) => item !== id)
					showToast('Dihapus dari favorit')
				} else {
					wishlist.push(id)
					showToast('Disimpan ke favorit!')
				}
				saveAll()
				render()
			})
		})

		// Add to Cart from product grid
		container.querySelectorAll('[data-cart-id]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const id = parseInt(btn.getAttribute('data-cart-id'))
				const prod = INITIAL_PRODUCTS.find((p) => p.id === id)
				if (prod) {
					const existingIndex = cart.findIndex((i) => i.id === id)
					if (existingIndex > -1) {
						cart[existingIndex].quantity++
					} else {
						cart.push({ ...prod, quantity: 1, color: prod.colors ? prod.colors[0] : '' })
					}
					showToast(`"${prod.name}" masuk keranjang!`)
					saveAll()
					render()
				}
			})
		})

		// Flash sale buy buttons
		container.querySelectorAll('.btn-flash-buy').forEach((btn) => {
			btn.addEventListener('click', () => {
				const id = parseInt(btn.getAttribute('data-id'))
				const item = FLASH_SALE_ITEMS.find((f) => f.id === id)
				if (item) {
					const existingIndex = cart.findIndex((i) => i.id === item.id)
					if (existingIndex > -1) {
						cart[existingIndex].quantity++
					} else {
						cart.push({ ...item, quantity: 1, color: '' })
					}
					showToast(`"${item.name}" Flash Sale masuk keranjang!`)
					saveAll()
					isCartOpen = true
					render()
				}
			})
		})

		// Quick view open
		container.querySelectorAll('[data-quick-id]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const id = parseInt(btn.getAttribute('data-quick-id'))
				const prod = INITIAL_PRODUCTS.find((p) => p.id === id)
				if (prod) {
					selectedProduct = prod
					selectedColor = prod.colors ? prod.colors[0] : ''
					modalQty = 1
					render()
				}
			})
		})

		// Quick View Controls
		const closeQV = container.querySelector('#close-quickview-btn')
		if (closeQV) {
			closeQV.addEventListener('click', () => {
				selectedProduct = null
				render()
			})
		}

		container.querySelectorAll('[data-select-color]').forEach((btn) => {
			btn.addEventListener('click', () => {
				selectedColor = btn.getAttribute('data-select-color')
				render()
			})
		})

		const minusQV = container.querySelector('#qv-qty-minus')
		if (minusQV) {
			minusQV.addEventListener('click', () => {
				if (modalQty > 1) {
					modalQty--
					render()
				}
			})
		}

		const plusQV = container.querySelector('#qv-qty-plus')
		if (plusQV) {
			plusQV.addEventListener('click', () => {
				modalQty++
				render()
			})
		}

		const qvAdd = container.querySelector('#qv-add-to-cart')
		if (qvAdd) {
			qvAdd.addEventListener('click', () => {
				if (selectedProduct) {
					const existingIndex = cart.findIndex(
						(i) => i.id === selectedProduct.id && i.color === selectedColor
					)
					if (existingIndex > -1) {
						cart[existingIndex].quantity += modalQty
					} else {
						cart.push({ ...selectedProduct, quantity: modalQty, color: selectedColor })
					}
					showToast(`"${selectedProduct.name}" masuk keranjang!`)
					saveAll()
					selectedProduct = null
					render()
				}
			})
		}

		// Floating & Quickbar Cart button
		const openCartBtn = container.querySelector('#open-cart-floating-btn')
		if (openCartBtn) {
			openCartBtn.addEventListener('click', () => {
				isCartOpen = true
				render()
			})
		}

		// Cart Drawer controls
		const closeCartBtn = container.querySelector('#close-cart-btn')
		if (closeCartBtn) {
			closeCartBtn.addEventListener('click', () => {
				isCartOpen = false
				render()
			})
		}

		// Update Cart Qty
		container.querySelectorAll('[data-cart-qty-index]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const idx = parseInt(btn.getAttribute('data-cart-qty-index'))
				const delta = parseInt(btn.getAttribute('data-delta'))
				const newQty = cart[idx].quantity + delta
				if (newQty <= 0) {
					cart.splice(idx, 1)
				} else {
					cart[idx].quantity = newQty
				}
				saveAll()
				render()
			})
		})

		// Remove Cart Item
		container.querySelectorAll('[data-cart-remove-index]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const idx = parseInt(btn.getAttribute('data-cart-remove-index'))
				cart.splice(idx, 1)
				saveAll()
				showToast('Item dihapus dari keranjang')
				render()
			})
		})

		// Apply Voucher
		const applyVoucherBtn = container.querySelector('#apply-voucher-btn')
		if (applyVoucherBtn) {
			applyVoucherBtn.addEventListener('click', () => {
				const codeInput = container.querySelector('#voucher-input-code')
				const code = codeInput ? codeInput.value.trim().toUpperCase() : ''
				if (!code) {
					showToast('Silakan masukkan kode voucher!')
					return
				}
				const found = vouchers.find((v) => v.code === code)
				if (!found) {
					showToast(`Voucher "${code}" tidak ditemukan!`)
					return
				}
				if (found.isUsed) {
					showToast(`Voucher "${code}" sudah pernah digunakan!`)
					return
				}
				if (getSubtotal() < found.minSpend) {
					showToast(`Min. belanja ${formatRupiah(found.minSpend)} untuk voucher ini!`)
					return
				}
				appliedVoucher = found
				saveAll()
				showToast(`🎉 Voucher "${found.code}" berhasil dipasang!`)
				render()
			})
		}

		// Remove Applied Voucher
		const removeVoucherBtn = container.querySelector('#remove-voucher-btn')
		if (removeVoucherBtn) {
			removeVoucherBtn.addEventListener('click', () => {
				appliedVoucher = null
				saveAll()
				showToast('Voucher dilepas')
				render()
			})
		}

		// Checkout -> Open Payment Modal
		const checkoutBtn = container.querySelector('#checkout-btn')
		if (checkoutBtn) {
			checkoutBtn.addEventListener('click', () => {
				if (cart.length === 0) return
				pendingOrder = {
					id: `ORD-${Date.now().toString().slice(-6)}`,
					date: new Date().toLocaleDateString('id-ID', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
						hour: '2-digit',
						minute: '2-digit'
					}),
					items: [...cart],
					subtotal: getSubtotal(),
					discount: getDiscount(),
					total: getFinalPrice(),
					status: 'Selesai'
				}
				paymentStage = 'qr'
				isCartOpen = false
				isPaymentModalOpen = true
				render()
			})
		}

		// QR Payment Modal Controls
		const closePaymentBtn = container.querySelector('#close-payment-btn')
		if (closePaymentBtn) {
			closePaymentBtn.addEventListener('click', () => {
				isPaymentModalOpen = false
				render()
			})
		}

		const simulateScanBtn = container.querySelector('#simulate-scan-btn')
		if (simulateScanBtn) {
			simulateScanBtn.addEventListener('click', () => {
				paymentStage = 'scanning'
				render()
				setTimeout(() => {
					paymentStage = 'success'
					if (pendingOrder) {
						orderHistory.unshift(pendingOrder)
						if (appliedVoucher) {
							vouchers = vouchers.map((v) =>
								v.code === appliedVoucher.code ? { ...v, isUsed: true } : v
							)
							appliedVoucher = null
						}
						cart = []
						saveAll()

						// Trigger canvas-confetti!
						try {
							confetti({
								particleCount: 100,
								spread: 70,
								origin: { y: 0.6 }
							})
						} catch (e) {
							console.log('Confetti error:', e)
						}
					}
					render()
				}, 1600)
			})
		}

		const finishPaymentBtn = container.querySelector('#finish-payment-btn')
		if (finishPaymentBtn) {
			finishPaymentBtn.addEventListener('click', () => {
				isPaymentModalOpen = false
				isHistoryOpen = true
				render()
			})
		}

		// History Modal
		const openHistoryBtn = container.querySelector('#open-history-btn')
		if (openHistoryBtn) {
			openHistoryBtn.addEventListener('click', () => {
				isHistoryOpen = true
				render()
			})
		}

		const closeHistoryBtn = container.querySelector('#close-history-btn')
		if (closeHistoryBtn) {
			closeHistoryBtn.addEventListener('click', () => {
				isHistoryOpen = false
				render()
			})
		}

		const clearHistoryBtn = container.querySelector('#clear-history-btn')
		if (clearHistoryBtn) {
			clearHistoryBtn.addEventListener('click', () => {
				if (confirm('Bersihkan seluruh riwayat pesanan?')) {
					orderHistory = []
					saveAll()
					render()
				}
			})
		}

		// Voucher Modal
		const openVouchersBtn = container.querySelector('#open-vouchers-btn')
		if (openVouchersBtn) {
			openVouchersBtn.addEventListener('click', () => {
				isVoucherModalOpen = true
				render()
			})
		}

		const closeVoucherBtn = container.querySelector('#close-voucher-btn')
		if (closeVoucherBtn) {
			closeVoucherBtn.addEventListener('click', () => {
				isVoucherModalOpen = false
				render()
			})
		}

		container.querySelectorAll('[data-voucher-code]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const code = btn.getAttribute('data-voucher-code')
				inputVoucherCode = code
				isVoucherModalOpen = false
				isCartOpen = true
				render()
			})
		})

		// Newsletter Form
		const newsForm = container.querySelector('#newsletter-form')
		if (newsForm) {
			newsForm.addEventListener('submit', (e) => {
				e.preventDefault()
				const emailInput = container.querySelector('#newsletter-email')
				const email = emailInput ? emailInput.value.trim() : ''
				if (email) {
					const code = 'NEWSLETTER100K'
					if (!vouchers.some((v) => v.code === code)) {
						vouchers.unshift({
							code,
							discount: 100000,
							title: 'Voucher Pelanggan Email',
							description: 'Diskon Rp 100.000 dari Langganan Newsletter',
							minSpend: 200000,
							isUsed: false
						})
						saveAll()
					}
					showToast('Voucher NEWSLETTER100K diklaim & disimpan!')
					render()
				}
			})
		}
	}

	render()
	startTimer()
}

export default Content
