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
		badgeType: 'badge-error text-white',
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
		badgeType: 'badge-warning text-gray-900',
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
		badgeType: 'badge-success text-white',
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
		badgeType: 'badge-info text-white',
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
		badgeType: 'badge-error text-white',
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
		badgeType: 'badge-success text-white',
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
		badgeType: 'badge-warning text-gray-900',
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
		badgeType: 'badge-info text-white',
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
	let cart = getStorageItem('shop_cart', [])
	let wishlist = getStorageItem('shop_wishlist', [])
	let vouchers = getStorageItem('shop_vouchers', DEFAULT_VOUCHERS)
	let appliedVoucher = getStorageItem('shop_applied_voucher', null)
	let orderHistory = getStorageItem('shop_orders', [])

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

	let isPaymentModalOpen = false
	let paymentStage = 'qr'
	let pendingOrder = null

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

	let clockInterval = null
	const updateLiveClock = () => {
		const clockEl = container.querySelector('#live-clock-display')
		if (clockEl) {
			const now = new Date()
			const hours = String(now.getHours()).padStart(2, '0')
			const minutes = String(now.getMinutes()).padStart(2, '0')
			const seconds = String(now.getSeconds()).padStart(2, '0')
			clockEl.textContent = `${hours}:${minutes}:${seconds} WIB`
		}
	}

	const startLiveClock = () => {
		updateLiveClock()
		if (clockInterval) clearInterval(clockInterval)
		clockInterval = setInterval(updateLiveClock, 1000)
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
				<div class="toast toast-bottom toast-end z-50">
					<div class="alert alert-success text-white shadow-xl flex items-center gap-2 text-sm font-medium">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
						<span>${message}</span>
					</div>
				</div>
			`
		}
		if (toastTimeout) clearTimeout(toastTimeout)
		toastTimeout = setTimeout(() => {
			const el = container.querySelector('#content-toast')
			if (el) el.innerHTML = ''
		}, 3000)
	}

	const getSubtotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
	const getDiscount = () => {
		const subtotal = getSubtotal()
		if (!appliedVoucher || subtotal < (appliedVoucher.minSpend || 0)) return 0
		return Math.min(appliedVoucher.discount, subtotal)
	}
	const getFinalPrice = () => Math.max(0, getSubtotal() - getDiscount())
	const getTotalCartCount = () => cart.reduce((acc, item) => acc + item.quantity, 0)

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
			<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-8 space-y-6">
				<div id="content-toast"></div>

				<!-- QUICK ACCESS BAR -->
				<div class="flex flex-wrap items-center justify-between gap-4 px-5 py-3 bg-base-100/90 backdrop-blur-md rounded-2xl border border-base-200 shadow-xs">
					<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20 shadow-2xs">
						<svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><polyline points="12 6 12 12 16 14" stroke-width="2" stroke-linecap="round"/></svg>
						<span id="live-clock-display" class="font-mono text-xs font-extrabold tracking-wider text-emerald-800 dark:text-emerald-300">00:00:00 WIB</span>
					</div>

					<div class="flex items-center gap-2.5 flex-wrap">
						<button id="open-vouchers-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-900 dark:text-amber-200 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/5 hover:from-amber-500/25 border border-amber-500/30 shadow-2xs transition-all duration-200 hover:-translate-y-0.5">
							<svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
							<span>Voucher Saya</span>
							<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xs">${vouchers.filter((v) => !v.isUsed).length}</span>
						</button>

						<button id="open-history-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-indigo-900 dark:text-indigo-200 bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-blue-500/5 hover:from-blue-500/25 border border-indigo-500/30 shadow-2xs transition-all duration-200 hover:-translate-y-0.5">
							<svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
							<span>Riwayat Pesanan</span>
							<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-600 text-white shadow-xs">${orderHistory.length}</span>
						</button>

						<button id="open-cart-floating-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#A56F63] via-[#b87c70] to-[#8e5c52] shadow-md shadow-[#A56F63]/30 hover:shadow-lg hover:shadow-[#A56F63]/40 border border-white/20 transition-all duration-200 hover:-translate-y-0.5">
							<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
							<span>Keranjang</span>
							<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-900 shadow-xs">${cartCount}</span>
						</button>
					</div>
				</div>

				<!-- HERO BANNER -->
				<section class="hero bg-gradient-to-br from-[#A56F63]/5 via-base-100 to-[#464858]/5 rounded-3xl p-8 lg:p-14 border border-base-200/80 shadow-sm relative overflow-hidden">
					<div class="hero-content flex-col lg:flex-row gap-12 p-0 max-w-none items-center">
						<div class="space-y-6 lg:w-1/2 text-left">
							<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F3040]/20 text-[#0F3040] border border-[#0F3040]/20">
								<span class="inline-block w-2 h-2 rounded-full bg-[#0F3040] animate-ping"></span>
								✨ Flash Deal Diskon s.d 50%
							</div>
							
							<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#0F3040]">
								Temukan Gaya & <span class="text-[#8B5E3C]">Teknologi Impianmu</span>
							</h1>
							
							<p class="text-base-content/70 text-base sm:text-lg leading-relaxed max-w-xl">
								Koleksi gadget terkini, fashion branded, dan aksesoris eksklusif dengan garansi resmi dan pengiriman super cepat ke seluruh Indonesia.
							</p>

							<div class="flex flex-wrap items-center gap-4 pt-2">
								<a href="#produk-list" class="btn bg-[#0B1849] hover:bg-[#8e5c52] text-white px-8 h-12 min-h-12 border-none rounded-2xl font-bold shadow-lg shadow-[#A56F63]/25 hover:-translate-y-0.5 transition-all">
									🛍️ Belanja Sekarang
								</a>
								<a href="#flash-sale" class="btn btn-outline text-[#464858] hover:bg-[#A56F63]/10 hover:text-[#A56F63] hover:border-[#A56F63] h-12 min-h-12 px-6 rounded-2xl font-semibold hover:-translate-y-0.5 transition-all">
									⚡ Lihat Flash Sale
								</a>
							</div>

							<div class="grid grid-cols-3 gap-6 pt-6 border-t border-base-200/80">
								<div>
									<div class="text-2xl lg:text-3xl font-black text-[#0F3040]">15k+</div>
									<div class="text-xs font-medium text-base-content/60 mt-0.5">Pelanggan Puas</div>
								</div>
								<div>
									<div class="text-2xl lg:text-3xl font-black text-[#D99B21]">4.9 ★</div>
									<div class="text-xs font-medium text-base-content/60 mt-0.5">Rating Toko</div>
								</div>
								<div>
									<div class="text-2xl lg:text-3xl font-black text-[#0F3040]">100%</div>
									<div class="text-xs font-medium text-base-content/60 mt-0.5">Garansi Original</div>
								</div>
							</div>
						</div>

						<div class="lg:w-1/2 relative flex justify-center w-full">
							<div class="relative w-full max-w-md group">
								<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#A56F63]/20 to-[#464858]/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
								<div class="relative rounded-3xl overflow-hidden shadow-2xl border border-base-200 bg-base-100">
									<img
										src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
										alt="Headphones Pro"
										class="w-full h-80 lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<div class="absolute bottom-4 left-4 right-4 sm:right-auto bg-base-100/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-base-200/80">
										<div class="text-xs font-medium text-base-content/60 uppercase tracking-wider">Headphones Pro ANC</div>
										<div class="text-xl font-black text-[#A56F63] mt-0.5">Rp 1.499.000</div>
									</div>
									<div class="absolute top-4 right-4 bg-base-100/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-base-200/80 text-xs font-bold text-[#A56F63] flex items-center gap-1.5">
										⭐ <span>4.9 (248 Ulasan)</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- VALUE PROPOSITION BAR -->
				<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<!-- Card 1: Gratis Ongkir -->
					<div class="card p-5 flex flex-row items-center gap-4 rounded-2xl bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-base-100 border border-blue-500/30 hover:border-blue-500/60 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
						<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/30 flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25v11.25M14.25 7.5H4.875c-.621 0-1.125.504-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125h9.375"/></svg>
						</div>
						<div>
							<h4 class="font-extrabold text-sm text-blue-950 dark:text-blue-200">Gratis Ongkir</h4>
							<p class="text-xs font-semibold text-blue-700/80 dark:text-blue-300/80">Min. belanja Rp 150rb</p>
						</div>
					</div>

					<!-- Card 2: Garansi Original -->
					<div class="card p-5 flex flex-row items-center gap-4 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-base-100 border border-emerald-500/30 hover:border-emerald-500/60 shadow-xs hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
						<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/30 flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
						</div>
						<div>
							<h4 class="font-extrabold text-sm text-emerald-950 dark:text-emerald-200">Garansi 100% Original</h4>
							<p class="text-xs font-semibold text-emerald-700/80 dark:text-emerald-300/80">Jaminan produk resmi</p>
						</div>
					</div>

					<!-- Card 3: 30 Hari Retur -->
					<div class="card p-5 flex flex-row items-center gap-4 rounded-2xl bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-base-100 border border-purple-500/30 hover:border-purple-500/60 shadow-xs hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
						<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/30 flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>
						</div>
						<div>
							<h4 class="font-extrabold text-sm text-purple-950 dark:text-purple-200">30 Hari Retur</h4>
							<p class="text-xs font-semibold text-purple-700/80 dark:text-purple-300/80">Tukar barang tanpa ribet</p>
						</div>
					</div>

					<!-- Card 4: Pengiriman Cepat -->
					<div class="card p-5 flex flex-row items-center gap-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-base-100 border border-amber-500/30 hover:border-amber-500/60 shadow-xs hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
						<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30 flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
						</div>
						<div>
							<h4 class="font-extrabold text-sm text-amber-950 dark:text-amber-200">Pengiriman Cepat</h4>
							<p class="text-xs font-semibold text-amber-700/80 dark:text-amber-300/80">Dikirim dalam 24 jam</p>
						</div>
					</div>
				</section>

				<!-- FLASH SALE SECTION -->
				<section id="flash-sale" class="space-y-6">
					<div class="flex flex-wrap items-center justify-between gap-4 border-b border-base-200 pb-4">
						<div class="flex items-center gap-3">
							<span class="text-3xl animate-bounce">⚡</span>
							<h2 class="text-2xl font-bold">Flash Sale Hari Ini</h2>
						</div>
						<div class="flex items-center gap-2 bg-error/10 text-error px-4 py-2 rounded-xl font-mono text-sm font-bold">
							<span>Berakhir dalam:</span>
							<span id="timer-h" class="bg-error text-white px-2 py-0.5 rounded-lg">05</span>:
							<span id="timer-m" class="bg-error text-white px-2 py-0.5 rounded-lg">42</span>:
							<span id="timer-s" class="bg-error text-white px-2 py-0.5 rounded-lg">18</span>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						${FLASH_SALE_ITEMS.map(
							(item) => `
							<div class="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
								<figure class="relative h-48 overflow-hidden bg-base-200">
									<span class="absolute top-3 left-3 badge badge-error text-white font-bold text-xs shadow-md">-${item.discount}%</span>
									<img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
								</figure>
								<div class="card-body p-5 space-y-3">
									<h3 class="font-bold text-base line-clamp-1">${item.name}</h3>
									<div class="flex items-baseline gap-2">
										<span class="text-lg font-bold text-primary">${formatRupiah(item.price)}</span>
										<span class="text-xs text-base-content/50 line-through">${formatRupiah(item.originalPrice)}</span>
									</div>
									<div class="space-y-1">
										<progress class="progress progress-error w-full" value="${item.sold}" max="${item.total}"></progress>
										<div class="text-xs text-base-content/60 font-medium">Terjual ${item.sold} dari ${item.total}</div>
									</div>
									<button class="btn btn-error text-white btn-block rounded-xl font-bold btn-flash-buy" data-id="${item.id}">Beli Sekarang</button>
								</div>
							</div>
						`
						).join('')}
					</div>
				</section>

				<!-- CATALOG SECTION -->
				<section id="produk-list" class="space-y-6 pt-4">
					<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-base-200 pb-4">
						<div>
							<h2 class="text-3xl font-extrabold tracking-tight text-[#464858]">Katalog Produk</h2>
							<p class="text-sm text-base-content/60">Pilih dari koleksi produk terbaik kami</p>
						</div>

						<div class="flex items-center gap-3 flex-wrap">
							<div class="form-control">
								<input
									type="text"
									id="search-input"
									class="input input-bordered input-sm rounded-xl w-full sm:w-64"
									placeholder="🔍 Cari produk..."
									value="${searchQuery}"
								/>
							</div>

							<select id="sort-select" class="select select-bordered select-sm rounded-xl">
								<option value="populer" ${sortBy === 'populer' ? 'selected' : ''}>Paling Populer</option>
								<option value="harga-rendah" ${sortBy === 'harga-rendah' ? 'selected' : ''}>Harga Terendah</option>
								<option value="harga-tinggi" ${sortBy === 'harga-tinggi' ? 'selected' : ''}>Harga Tertinggi</option>
								<option value="rating" ${sortBy === 'rating' ? 'selected' : ''}>Rating Tertinggi</option>
							</select>
						</div>
					</div>

					<!-- Categories -->
					<div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
						${CATEGORIES.map(
							(cat) => `
							<button
								class="btn btn-sm rounded-xl whitespace-nowrap category-btn ${activeCategory === cat.id ? 'bg-[#A56F63] text-white border-none' : 'btn-ghost border border-base-300 hover:text-[#A56F63]'}"
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
						<div class="text-center py-16 bg-base-200/50 rounded-3xl border border-dashed border-base-300">
							<p class="text-base-content/60 font-medium">Produk tidak ditemukan untuk pencarian "${searchQuery}"</p>
						</div>
					`
							: `
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							${products
								.map((p) => {
									const isFav = wishlist.includes(p.id)
									return `
									<div class="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
										<figure class="relative h-56 overflow-hidden bg-base-200">
											${p.badge ? `<span class="absolute top-3 left-3 badge ${p.badgeType} shadow-md">${p.badge}</span>` : ''}
											<button class="absolute top-3 right-3 btn btn-circle btn-sm bg-base-100/80 backdrop-blur border-none hover:scale-110 transition-transform" data-wishlist-id="${p.id}" title="Favorit">
												${isFav ? '❤️' : '🤍'}
											</button>
											<img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
											<button class="absolute bottom-3 left-3 right-3 btn btn-sm bg-base-100/90 backdrop-blur border-none font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" data-quick-id="${p.id}">
												👁️ Lihat Detail
											</button>
										</figure>
										<div class="card-body p-5 space-y-2">
											<span class="text-xs font-bold text-[#A56F63] uppercase tracking-wider">${p.category}</span>
											<h3 class="font-bold text-base text-[#464858] line-clamp-1">${p.name}</h3>
											<div class="text-xs text-amber-500 font-semibold flex items-center gap-1">
												⭐ ${p.rating} <span class="text-base-content/40 font-normal">(${p.reviewsCount} Ulasan)</span>
											</div>
											<div class="flex items-center justify-between pt-2 border-t border-base-200">
												<div>
													<div class="text-base font-extrabold text-[#A56F63]">${formatRupiah(p.price)}</div>
													${p.originalPrice ? `<div class="text-xs text-base-content/40 line-through">${formatRupiah(p.originalPrice)}</div>` : ''}
												</div>
												<button class="btn bg-[#A56F63] hover:bg-[#8e5c52] border-none btn-sm text-white rounded-xl shadow-md" data-cart-id="${p.id}">
													+ Keranjang
												</button>
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

				<!-- NEWSLETTER SECTION -->
				<section id="about" class="bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-8 lg:p-12 text-center space-y-6 shadow-xl">
					<div class="max-w-2xl mx-auto space-y-4">
						<h2 class="text-3xl font-extrabold">Dapatkan Voucher Rp 100.000!</h2>
						<p class="text-white/80 text-sm">Berlangganan newsletter kami dan dapatkan penawaran eksklusif serta voucher diskon langsung ke email Anda.</p>
						<form id="newsletter-form" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
							<input
								type="email"
								id="newsletter-email"
								class="input text-base-content w-full rounded-xl"
								placeholder="Masukkan alamat email..."
								required
							/>
							<button type="submit" class="btn btn-warning text-gray-900 font-bold rounded-xl whitespace-nowrap">Klaim Voucher</button>
						</form>
					</div>
				</section>

				<!-- CART DRAWER MODAL -->
				${
					isCartOpen
						? `
					<div class="modal modal-open bg-black/50 backdrop-blur-sm" id="cart-backdrop">
						<div class="modal-box max-w-md w-full p-6 rounded-2xl bg-base-100 relative">
							<button id="close-cart-btn" class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">&times;</button>
							<h3 class="font-bold text-xl mb-4">🛒 Keranjang Belanja (${cartCount})</h3>

							${
								cart.length === 0
									? `
								<div class="text-center py-12 space-y-3">
									<div class="text-4xl">🛍️</div>
									<p class="text-base-content/60 text-sm font-medium">Keranjang Anda masih kosong</p>
								</div>
							`
									: `
								<div class="space-y-4 max-h-96 overflow-y-auto pr-1">
									${cart
										.map(
											(item, index) => `
										<div class="flex items-center gap-3 p-3 bg-base-200/50 rounded-xl border border-base-300">
											<img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg" />
											<div class="flex-1 min-w-0">
												<h4 class="font-bold text-sm truncate">${item.name}</h4>
												${item.color ? `<div class="text-xs text-base-content/60">Warna: ${item.color}</div>` : ''}
												<div class="text-sm font-bold text-primary">${formatRupiah(item.price)}</div>
												<div class="flex items-center gap-2 mt-1">
													<button class="btn btn-xs btn-circle btn-outline" data-cart-qty-index="${index}" data-delta="-1">-</button>
													<span class="text-xs font-bold">${item.quantity}</span>
													<button class="btn btn-xs btn-circle btn-outline" data-cart-qty-index="${index}" data-delta="1">+</button>
												</div>
											</div>
											<button class="btn btn-ghost btn-sm text-error" data-cart-remove-index="${index}">🗑️</button>
										</div>
									`
										)
										.join('')}
								</div>

								<div class="space-y-3 pt-4 border-t border-base-200 mt-4">
									<div class="flex gap-2">
										<input type="text" id="voucher-input-code" class="input input-bordered input-sm flex-1 uppercase text-xs" placeholder="Kode Voucher..." value="${inputVoucherCode}" />
										<button id="apply-voucher-btn" class="btn btn-sm btn-outline">Gunakan</button>
									</div>

									${
										appliedVoucher
											? `
										<div class="alert alert-success py-2 text-white text-xs flex justify-between rounded-xl">
											<span>🎉 Voucher ${appliedVoucher.code} (-${formatRupiah(discount)})</span>
											<button id="remove-voucher-btn" class="btn btn-xs btn-circle btn-ghost">&times;</button>
										</div>
									`
											: ''
									}

									<div class="space-y-1.5 text-sm">
										<div class="flex justify-between text-base-content/60">
											<span>Subtotal</span>
											<span>${formatRupiah(subtotal)}</span>
										</div>
										${
											discount > 0
												? `
											<div class="flex justify-between text-success font-medium">
												<span>Diskon Voucher</span>
												<span>-${formatRupiah(discount)}</span>
											</div>
										`
												: ''
										}
										<div class="flex justify-between font-extrabold text-base pt-2 border-t border-base-200">
											<span>Total Pembayaran</span>
											<span class="text-primary">${formatRupiah(finalTotal)}</span>
										</div>
									</div>

									<button id="checkout-btn" class="btn btn-primary text-white btn-block rounded-xl font-bold shadow-lg">
										Bayar Sekarang (QRIS)
									</button>
								</div>
							`
							}
						</div>
					</div>
				`
						: ''
				}

				<!-- QUICK VIEW MODAL -->
				${
					selectedProduct
						? `
					<div class="modal modal-open bg-black/50 backdrop-blur-sm" id="quickview-backdrop">
						<div class="modal-box max-w-2xl w-full p-6 rounded-3xl bg-base-100 relative">
							<button id="close-quickview-btn" class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">&times;</button>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="w-full h-64 object-cover rounded-2xl shadow-lg" />
								<div class="space-y-4">
									<span class="badge badge-primary uppercase text-xs font-bold">${selectedProduct.category}</span>
									<h2 class="text-xl font-bold">${selectedProduct.name}</h2>
									<div class="text-xs text-amber-500 font-semibold">⭐ ${selectedProduct.rating}</div>
									<p class="text-xs text-base-content/70 leading-relaxed">${selectedProduct.description}</p>
									<div class="text-2xl font-extrabold text-primary">${formatRupiah(selectedProduct.price)}</div>

									${
										selectedProduct.colors
											? `
										<div class="space-y-1">
											<label class="text-xs font-bold uppercase text-base-content/60">Pilih Warna:</label>
											<div class="flex flex-wrap gap-2">
												${selectedProduct.colors
													.map(
														(color) => `
													<button
														class="btn btn-xs rounded-lg ${selectedColor === color ? 'btn-primary text-white' : 'btn-outline'}"
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

									<div class="flex items-center gap-3 pt-2">
										<div class="flex items-center border border-base-300 rounded-xl px-2 py-1 gap-2">
											<button id="qv-qty-minus" class="btn btn-xs btn-ghost">-</button>
											<span class="font-bold text-sm px-2">${modalQty}</span>
											<button id="qv-qty-plus" class="btn btn-xs btn-ghost">+</button>
										</div>
										<button id="qv-add-to-cart" class="btn btn-primary text-white flex-1 rounded-xl font-bold">
											+ Keranjang
										</button>
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
					<div class="modal modal-open bg-black/50 backdrop-blur-sm" id="payment-backdrop">
						<div class="modal-box max-w-sm text-center p-6 rounded-3xl bg-base-100 relative space-y-4">
							<button id="close-payment-btn" class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">&times;</button>
							${
								paymentStage === 'qr'
									? `
								<h3 class="text-xl font-bold">Scan QRIS Pembayaran</h3>
								<p class="text-xs text-base-content/60">No. Pesanan: <strong class="font-mono">${pendingOrder.id}</strong></p>
								<div class="p-4 bg-white rounded-2xl shadow-inner inline-block mx-auto border border-base-300">
									<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('QRIS:' + pendingOrder.id)}" alt="QR Code" class="w-48 h-48 mx-auto" />
								</div>
								<div class="text-2xl font-extrabold text-primary">${formatRupiah(pendingOrder.total)}</div>
								<p class="text-xs text-base-content/60">Gunakan aplikasi M-Banking atau E-Wallet pilihanmu untuk me-scan QRIS di atas.</p>
								<button id="simulate-scan-btn" class="btn btn-primary text-white btn-block rounded-xl font-bold shadow-lg">Simulasi Scan & Bayar</button>
							`
									: paymentStage === 'scanning'
									? `
								<div class="py-8 space-y-4">
									<span class="loading loading-spinner loading-lg text-primary"></span>
									<h3 class="text-lg font-bold">Memproses Pembayaran...</h3>
									<p class="text-xs text-base-content/60">Mohon tunggu sebentar</p>
								</div>
							`
									: `
								<div class="py-6 space-y-4">
									<div class="text-5xl animate-bounce">🎉</div>
									<h3 class="text-2xl font-bold text-success">Pembayaran Berhasil!</h3>
									<p class="text-xs text-base-content/70">Pesanan <strong class="font-mono">${pendingOrder.id}</strong> sedang diproses.</p>
									<button id="finish-payment-btn" class="btn btn-primary text-white btn-block rounded-xl font-bold">Selesai & Lihat Riwayat</button>
								</div>
							`
							}
						</div>
					</div>
				`
						: ''
				}

				<!-- HISTORY MODAL -->
				${
					isHistoryOpen
						? `
					<div class="modal modal-open bg-black/50 backdrop-blur-sm" id="history-backdrop">
						<div class="modal-box max-w-lg w-full p-6 rounded-3xl bg-base-100 relative space-y-4">
							<button id="close-history-btn" class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">&times;</button>
							<h3 class="text-xl font-bold">📜 Riwayat Pesanan Saya</h3>
							${
								orderHistory.length === 0
									? `<p class="text-center text-sm text-base-content/60 py-8">Belum ada riwayat pesanan</p>`
									: `
								<div class="space-y-3 max-h-80 overflow-y-auto pr-1">
									${orderHistory
										.map(
											(ord) => `
										<div class="p-4 bg-base-200/50 rounded-2xl border border-base-300 space-y-2 text-left">
											<div class="flex justify-between items-center text-xs">
												<strong class="font-mono text-primary">${ord.id}</strong>
												<span class="text-base-content/60">${ord.date}</span>
											</div>
											<div class="text-xs space-y-1 border-t border-b border-base-200 py-2">
												${ord.items.map((it) => `<div>• ${it.name} (x${it.quantity})</div>`).join('')}
											</div>
											<div class="flex justify-between items-center text-xs font-bold">
												<span>Total: <span class="text-primary">${formatRupiah(ord.total)}</span></span>
												<span class="badge badge-success text-white badge-sm">${ord.status}</span>
											</div>
										</div>
									`
										)
										.join('')}
								</div>
								<button id="clear-history-btn" class="btn btn-ghost text-error btn-block btn-sm">Bersihkan Riwayat</button>
							`
							}
						</div>
					</div>
				`
						: ''
				}

				<!-- VOUCHERS MODAL -->
				${
					isVoucherModalOpen
						? `
					<div class="modal modal-open bg-black/50 backdrop-blur-sm" id="voucher-backdrop">
						<div class="modal-box max-w-md w-full p-6 rounded-3xl bg-base-100 relative space-y-4">
							<button id="close-voucher-btn" class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">&times;</button>
							<h3 class="text-xl font-bold">🎫 Voucher Saya</h3>
							<div class="space-y-3">
								${vouchers
									.map(
										(v) => `
									<div class="p-4 bg-base-200/50 rounded-2xl border border-base-300 flex items-center justify-between gap-3 ${v.isUsed ? 'opacity-50' : ''}">
										<div class="space-y-1 text-left">
											<h4 class="font-bold text-sm">${v.title}</h4>
											<p class="text-xs text-base-content/60">${v.description}</p>
											<span class="badge badge-outline badge-sm font-mono">${v.code}</span>
										</div>
										<button
											class="btn btn-sm ${v.isUsed ? 'btn-disabled' : 'btn-primary text-white'} rounded-xl"
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
				`
						: ''
				}
			</main>
		`

		attachEvents()
		updateTimerDisplay()
	}

	const attachEvents = () => {
		container.querySelectorAll('.category-btn').forEach((btn) => {
			btn.addEventListener('click', () => {
				activeCategory = btn.getAttribute('data-cat')
				render()
			})
		})

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

		const sortSelect = container.querySelector('#sort-select')
		if (sortSelect) {
			sortSelect.addEventListener('change', (e) => {
				sortBy = e.target.value
				render()
			})
		}

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

		const openCartBtn = container.querySelector('#open-cart-floating-btn')
		if (openCartBtn) {
			openCartBtn.addEventListener('click', () => {
				isCartOpen = true
				render()
			})
		}

		const closeCartBtn = container.querySelector('#close-cart-btn')
		if (closeCartBtn) {
			closeCartBtn.addEventListener('click', () => {
				isCartOpen = false
				render()
			})
		}

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

		container.querySelectorAll('[data-cart-remove-index]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const idx = parseInt(btn.getAttribute('data-cart-remove-index'))
				cart.splice(idx, 1)
				saveAll()
				showToast('Item dihapus dari keranjang')
				render()
			})
		})

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

		const removeVoucherBtn = container.querySelector('#remove-voucher-btn')
		if (removeVoucherBtn) {
			removeVoucherBtn.addEventListener('click', () => {
				appliedVoucher = null
				saveAll()
				showToast('Voucher dilepas')
				render()
			})
		}

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

		const closePaymentBtn = container.querySelector('#close-payment-btn')
		if (closePaymentBtn) {
			closePaymentBtn.addEventListener('click', () => {
				isPaymentModalOpen = false
				render()
			})
		}

		const triggerCelebrationConfetti = () => {
			try {
				// Central Burst
				confetti({
					particleCount: 120,
					spread: 100,
					origin: { y: 0.5 },
					colors: ['#A56F63', '#464858', '#F59E0B', '#10B981', '#EC4899', '#3B82F6']
				})

				// Left Cannon
				setTimeout(() => {
					confetti({
						particleCount: 70,
						angle: 60,
						spread: 60,
						origin: { x: 0, y: 0.65 }
					})
				}, 250)

				// Right Cannon
				setTimeout(() => {
					confetti({
						particleCount: 70,
						angle: 120,
						spread: 60,
						origin: { x: 1, y: 0.65 }
					})
				}, 450)
			} catch (e) {
				console.log('Confetti error:', e)
			}
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
					}
					render()

					// Trigger multi-stage celebration confetti AFTER success modal is rendered!
					setTimeout(() => {
						triggerCelebrationConfetti()
					}, 100)
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
	startLiveClock()
}

export default Content
