import React, { useState, useEffect, useMemo } from 'react'
import {
	ShoppingBag,
	ShoppingCart,
	Search,
	Heart,
	Star,
	Truck,
	ShieldCheck,
	RotateCcw,
	Zap,
	Plus,
	Minus,
	X,
	Eye,
	Sparkles,
	Clock,
	ChevronRight,
	Check,
	SlidersHorizontal,
	Mail,
	CheckCircle2,
	Ticket,
	History,
	Tag,
	Trash2,
	FileText,
	QrCode,
	Camera,
	Loader2,
	CheckCircle,
	ArrowRight
} from 'lucide-react'

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
	{ id: 'semua', label: 'Semua Produk', icon: Sparkles },
	{ id: 'Elektronik', label: 'Elektronik', icon: Zap },
	{ id: 'Gadget', label: 'Gadget', icon: Eye },
	{ id: 'Fashion', label: 'Fashion', icon: ShoppingBag },
	{ id: 'Sepatu', label: 'Sepatu', icon: Star },
	{ id: 'Aksesoris', label: 'Aksesoris', icon: SlidersHorizontal }
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

// Helper Local Storage Safe Access
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

// Helper format Rupiah
const formatRupiah = (number) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0
	}).format(number)
}

function Content() {
	// LOCAL STORAGE PERSISTED STATES
	const [cart, setCart] = useState(() => getStorageItem('shop_cart', []))
	const [wishlist, setWishlist] = useState(() => getStorageItem('shop_wishlist', []))
	const [vouchers, setVouchers] = useState(() => getStorageItem('shop_vouchers', DEFAULT_VOUCHERS))
	const [appliedVoucher, setAppliedVoucher] = useState(() => getStorageItem('shop_applied_voucher', null))
	const [orderHistory, setOrderHistory] = useState(() => getStorageItem('shop_orders', []))

	// UI STATES
	const [activeCategory, setActiveCategory] = useState('semua')
	const [searchQuery, setSearchQuery] = useState('')
	const [sortBy, setSortBy] = useState('populer')
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [selectedColor, setSelectedColor] = useState('')
	const [modalQty, setModalQty] = useState(1)
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [isHistoryOpen, setIsHistoryOpen] = useState(false)
	const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false)
	const [inputVoucherCode, setInputVoucherCode] = useState('')
	const [toast, setToast] = useState(null)
	const [emailSubscription, setEmailSubscription] = useState('')
	const [isSubscribed, setIsSubscribed] = useState(false)

	// QR CODE PAYMENT MODAL STATES
	const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
	const [paymentStage, setPaymentStage] = useState('qr') // 'qr' | 'scanning' | 'success'
	const [pendingOrder, setPendingOrder] = useState(null)

	// Countdown Timer State for Flash Sale
	const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 })

	// SAVE STATES TO LOCAL STORAGE ON UPDATE
	useEffect(() => {
		setStorageItem('shop_cart', cart)
	}, [cart])

	useEffect(() => {
		setStorageItem('shop_wishlist', wishlist)
	}, [wishlist])

	useEffect(() => {
		setStorageItem('shop_vouchers', vouchers)
	}, [vouchers])

	useEffect(() => {
		setStorageItem('shop_applied_voucher', appliedVoucher)
	}, [appliedVoucher])

	useEffect(() => {
		setStorageItem('shop_orders', orderHistory)
	}, [orderHistory])

	// Flash Sale Timer Effect
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
				if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 }
				if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
				return prev
			})
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	// Toast Alert Helper
	const showToast = (message) => {
		setToast(message)
		setTimeout(() => {
			setToast(null)
		}, 3000)
	}

	// Toggle Wishlist
	const toggleWishlist = (productId) => {
		setWishlist((prev) => {
			const exists = prev.includes(productId)
			if (exists) {
				showToast('Dihapus dari favorit')
				return prev.filter((id) => id !== productId)
			} else {
				showToast('Disimpan ke favorit (Local Storage)!')
				return [...prev, productId]
			}
		})
	}

	// Add to Cart
	const addToCart = (product, quantity = 1, color = '') => {
		const chosenColor = color || (product.colors ? product.colors[0] : '')
		setCart((prevCart) => {
			const existingIndex = prevCart.findIndex(
				(item) => item.id === product.id && item.color === chosenColor
			)
			if (existingIndex > -1) {
				const updated = [...prevCart]
				updated[existingIndex].quantity += quantity
				return updated
			} else {
				return [...prevCart, { ...product, quantity, color: chosenColor }]
			}
		})
		showToast(`"${product.name}" masuk keranjang!`)
	}

	// Update Cart Qty
	const updateCartQty = (index, delta) => {
		setCart((prevCart) => {
			const updated = [...prevCart]
			const newQty = updated[index].quantity + delta
			if (newQty <= 0) {
				return updated.filter((_, i) => i !== index)
			} else {
				updated[index].quantity = newQty
				return updated
			}
		})
	}

	// Remove Item from Cart
	const removeCartItem = (index) => {
		setCart((prevCart) => prevCart.filter((_, i) => i !== index))
		showToast('Item dihapus dari keranjang')
	}

	// Calculations
	const totalCartItems = useMemo(() => {
		return cart.reduce((acc, item) => acc + item.quantity, 0)
	}, [cart])

	const subtotalCartPrice = useMemo(() => {
		return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
	}, [cart])

	const voucherDiscountAmount = useMemo(() => {
		if (!appliedVoucher) return 0
		if (subtotalCartPrice < (appliedVoucher.minSpend || 0)) return 0
		return Math.min(appliedVoucher.discount, subtotalCartPrice)
	}, [appliedVoucher, subtotalCartPrice])

	const finalCartPrice = useMemo(() => {
		return Math.max(0, subtotalCartPrice - voucherDiscountAmount)
	}, [subtotalCartPrice, voucherDiscountAmount])

	// Handle Voucher Application
	const applyVoucherCode = (codeToApply) => {
		const cleanCode = codeToApply.trim().toUpperCase()
		const found = vouchers.find((v) => v.code === cleanCode)

		if (!found) {
			showToast('Kode voucher tidak ditemukan!')
			return
		}

		if (found.isUsed) {
			showToast('Voucher ini sudah pernah digunakan!')
			return
		}

		if (subtotalCartPrice < found.minSpend) {
			showToast(`Min. belanja ${formatRupiah(found.minSpend)} untuk voucher ini!`)
			return
		}

		setAppliedVoucher(found)
		showToast(`Voucher "${found.code}" berhasil dipasang! (Diskon ${formatRupiah(found.discount)})`)
		setInputVoucherCode('')
	}

	const removeAppliedVoucher = () => {
		setAppliedVoucher(null)
		showToast('Voucher dilepas')
	}

	// INITIATE PAYMENT -> OPEN QR MODAL
	const initiatePayment = () => {
		if (cart.length === 0) return

		const newOrder = {
			id: `ORD-${Date.now().toString().slice(-6)}`,
			date: new Date().toLocaleDateString('id-ID', {
				day: 'numeric',
				month: 'short',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			}),
			items: [...cart],
			subtotal: subtotalCartPrice,
			discount: voucherDiscountAmount,
			total: finalCartPrice,
			voucherCode: appliedVoucher ? appliedVoucher.code : null,
			status: 'Selesai'
		}

		setPendingOrder(newOrder)
		setPaymentStage('qr')
		setIsCartOpen(false)
		setIsPaymentModalOpen(true)
	}

	// SIMULATE PHOTO / SCAN QR CODE
	const handleScanQRCode = () => {
		setPaymentStage('scanning')

		// Simulate 1.6 seconds scanning laser delay
		setTimeout(() => {
			setPaymentStage('success')

			if (pendingOrder) {
				// Save order to Local Storage
				setOrderHistory((prev) => [pendingOrder, ...prev])

				// Mark used voucher
				if (appliedVoucher) {
					setVouchers((prev) =>
						prev.map((v) => (v.code === appliedVoucher.code ? { ...v, isUsed: true } : v))
					)
					setAppliedVoucher(null)
				}

				// Clear cart
				setCart([])
				showToast(`Pembayaran ${pendingOrder.id} Berhasil & Tersimpan!`)
			}
		}, 1600)
	}

	// Clear Order History
	const clearOrderHistory = () => {
		if (window.confirm('Apakah Anda yakin ingin menghapus seluruh riwayat pesanan?')) {
			setOrderHistory([])
			showToast('Riwayat pesanan dibersihkan')
		}
	}

	// Filter & Sort Logic
	const filteredProducts = useMemo(() => {
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
	}, [activeCategory, searchQuery, sortBy])

	// Handle Quick View Modal Open
	const openQuickView = (product) => {
		setSelectedProduct(product)
		setSelectedColor(product.colors ? product.colors[0] : '')
		setModalQty(1)
	}

	const handleSubscribe = (e) => {
		e.preventDefault()
		if (emailSubscription.trim()) {
			setIsSubscribed(true)
			const newVoucherCode = 'NEWSLETTER100K'

			if (!vouchers.some((v) => v.code === newVoucherCode)) {
				const newsletterVoucher = {
					code: newVoucherCode,
					discount: 100000,
					title: 'Voucher Pelanggan Email',
					description: 'Voucher Diskon Rp 100.000 dari Langganan Newsletter',
					minSpend: 200000,
					isUsed: false
				}
				setVouchers((prev) => [newsletterVoucher, ...prev])
			}

			showToast('Voucher NEWSLETTER100K diklaim & disimpan di Local Storage!')
			setEmailSubscription('')
		}
	}

	// Generate QR Code URL
	const qrCodeUrl = useMemo(() => {
		if (!pendingOrder) return ''
		const qrData = `QRIS:MINISTORE:${pendingOrder.id}:TOTAL:${pendingOrder.total}`
		return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
			qrData
		)}`
	}, [pendingOrder])

	return (
		<main className="shop-content">
			{/* TOAST ALERT */}
			{toast && (
				<div className="shop-toast animate-slide-in">
					<CheckCircle2 size={18} />
					<span>{toast}</span>
				</div>
			)}

			{/* TOP QUICK BAR */}
			<div className="ls-quick-bar">
				<div className="ls-info-tag">
					<span className="dot-active"></span> Data Tersimpan di <strong>Local Storage</strong>
				</div>
				<div className="ls-actions">
					<button onClick={() => setIsVoucherModalOpen(true)} className="btn-ls-action">
						<Ticket size={16} /> Voucher Saya ({vouchers.filter((v) => !v.isUsed).length})
					</button>
					<button onClick={() => setIsHistoryOpen(true)} className="btn-ls-action highlight">
						<History size={16} /> Riwayat Pesanan ({orderHistory.length})
					</button>
				</div>
			</div>

			{/* HERO BANNER SECTION */}
			<section className="shop-hero">
				<div className="hero-grid">
					<div className="hero-text-content">
						<span className="hero-badge">
							<Sparkles size={14} /> Flash Deal Diskon s.d 50%
						</span>
						<h1 className="hero-title">
							Temukan Gaya & <span className="highlight-text">Teknologi Impianmu</span>
						</h1>
						<p className="hero-description">
							Koleksi gadget terkini, fashion branded, dan aksesoris eksklusif dengan garansi resmi dan pengiriman super cepat ke seluruh Indonesia.
						</p>

						<div className="hero-cta-group">
							<a href="#produk-list" className="btn-primary-lg">
								<ShoppingBag size={20} /> Belanja Sekarang
							</a>
							<a href="#flash-sale" className="btn-secondary-lg">
								<Zap size={20} /> Lihat Flash Sale
							</a>
						</div>

						{/* Hero Features list */}
						<div className="hero-stats">
							<div className="stat-item">
								<span className="stat-num">15k+</span>
								<span className="stat-label">Pelanggan Puas</span>
							</div>
							<div className="stat-divider"></div>
							<div className="stat-item">
								<span className="stat-num">4.9 / 5.0</span>
								<span className="stat-label">Rating Toko</span>
							</div>
							<div className="stat-divider"></div>
							<div className="stat-item">
								<span className="stat-num">100%</span>
								<span className="stat-label">Original Guaranteed</span>
							</div>
						</div>
					</div>

					<div className="hero-visual">
						<div className="hero-card-glow"></div>
						<div className="hero-image-wrapper">
							<img
								src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
								alt="Hero Featured Product"
								className="hero-main-img"
							/>
							<div className="floating-tag tag-price">
								<span className="tag-title">Headphones Pro</span>
								<span className="tag-val">Rp 1.499.000</span>
							</div>
							<div className="floating-tag tag-rating">
								<Star size={16} fill="#F59E0B" color="#F59E0B" />
								<span>4.9 (248 Ulasan)</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* VALUE PROPOSITION BAR */}
			<section className="value-props">
				<div className="prop-card">
					<div className="prop-icon-box blue">
						<Truck size={24} />
					</div>
					<div>
						<h4>Gratis Ongkir</h4>
						<p>Min. belanja Rp 150rb</p>
					</div>
				</div>
				<div className="prop-card">
					<div className="prop-icon-box green">
						<ShieldCheck size={24} />
					</div>
					<div>
						<h4>Garansi 100% Original</h4>
						<p>Jaminan produk resmi</p>
					</div>
				</div>
				<div className="prop-card">
					<div className="prop-icon-box purple">
						<RotateCcw size={24} />
					</div>
					<div>
						<h4>30 Hari Retur</h4>
						<p>Tukar barang tanpa ribet</p>
					</div>
				</div>
				<div className="prop-card">
					<div className="prop-icon-box orange">
						<Zap size={24} />
					</div>
					<div>
						<h4>Pengiriman Cepat</h4>
						<p>Dikirim dalam 24 jam</p>
					</div>
				</div>
			</section>

			{/* FLASH SALE SECTION */}
			<section id="flash-sale" className="flash-sale-section">
				<div className="flash-header">
					<div className="flash-title">
						<div className="flash-badge-icon">
							<Zap size={22} color="#FFF" />
						</div>
						<h2>Flash Sale Hari Ini</h2>
						<p className="flash-subtitle">Penawaran terbatas dengan harga miring!</p>
					</div>

					<div className="countdown-box">
						<span className="timer-label"><Clock size={16} /> Berakhir Dalam:</span>
						<div className="timer-digits">
							<span className="digit">{String(timeLeft.hours).padStart(2, '0')}</span> :
							<span className="digit">{String(timeLeft.minutes).padStart(2, '0')}</span> :
							<span className="digit">{String(timeLeft.seconds).padStart(2, '0')}</span>
						</div>
					</div>
				</div>

				<div className="flash-grid">
					{FLASH_SALE_ITEMS.map((item) => (
						<div key={item.id} className="flash-card">
							<span className="flash-discount-badge">-{item.discount}%</span>
							<img src={item.image} alt={item.name} className="flash-card-img" />
							<div className="flash-card-body">
								<h3 className="flash-item-title">{item.name}</h3>
								<div className="flash-prices">
									<span className="price-now">{formatRupiah(item.price)}</span>
									<span className="price-old">{formatRupiah(item.originalPrice)}</span>
								</div>

								{/* Progress Bar Stok */}
								<div className="stock-progress">
									<div className="progress-bar">
										<div
											className="progress-fill"
											style={{ width: `${(item.sold / item.total) * 100}%` }}
										></div>
									</div>
									<span className="stock-text">Terjual {item.sold}/{item.total}</span>
								</div>

								<button
									onClick={() =>
										addToCart({
											id: item.id,
											name: item.name,
											price: item.price,
											image: item.image
										})
									}
									className="btn-flash-buy"
								>
									<ShoppingCart size={16} /> Beli Sekarang
								</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CATEGORY & SEARCH TOOLBAR SECTION */}
			<section id="produk-list" className="catalog-section">
				<div className="section-header">
					<h2>Koleksi Produk Terbaik</h2>
					<p>Jelajahi berbagai pilihan produk sesuai kebutuhanmu</p>
				</div>

				{/* CATEGORIES BUTTON TABS */}
				<div className="categories-bar">
					{CATEGORIES.map((cat) => {
						const Icon = cat.icon
						const isActive = activeCategory === cat.id
						return (
							<button
								key={cat.id}
								onClick={() => setActiveCategory(cat.id)}
								className={`cat-btn ${isActive ? 'active' : ''}`}
							>
								<Icon size={16} />
								<span>{cat.label}</span>
							</button>
						)
					})}
				</div>

				{/* SEARCH & SORT TOOLBAR */}
				<div className="filter-toolbar">
					<div className="search-box">
						<Search size={18} className="search-icon" />
						<input
							type="text"
							placeholder="Cari produk, kategori, atau deskripsi..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						{searchQuery && (
							<button onClick={() => setSearchQuery('')} className="btn-clear-search">
								<X size={16} />
							</button>
						)}
					</div>

					<div className="sort-box">
						<SlidersHorizontal size={16} />
						<span>Urutkan:</span>
						<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
							<option value="populer">Paling Populer</option>
							<option value="harga-rendah">Harga: Rendah ke Tinggi</option>
							<option value="harga-tinggi">Harga: Tinggi ke Rendah</option>
							<option value="rating">Rating Tertinggi</option>
						</select>
					</div>
				</div>

				{/* PRODUCT GRID */}
				{filteredProducts.length > 0 ? (
					<div className="product-grid">
						{filteredProducts.map((product) => {
							const isFavorited = wishlist.includes(product.id)
							return (
								<div key={product.id} className="product-card">
									{/* Top Badges */}
									<div className="card-top-badges">
										<span className={`badge-pill ${product.badgeType}`}>
											{product.badge}
										</span>
										<button
											onClick={() => toggleWishlist(product.id)}
											className={`btn-fav ${isFavorited ? 'active' : ''}`}
											aria-label="Tambah Favorit"
										>
											<Heart
												size={18}
												fill={isFavorited ? '#EF4444' : 'none'}
												color={isFavorited ? '#EF4444' : '#6B7280'}
											/>
										</button>
									</div>

									{/* Product Image */}
									<div className="product-img-container">
										<img
											src={product.image}
											alt={product.name}
											className="product-img"
										/>
										<button
											onClick={() => openQuickView(product)}
											className="btn-quick-view"
										>
											<Eye size={16} /> Lihat Cepat
										</button>
									</div>

									{/* Product Info */}
									<div className="product-info">
										<span className="product-cat">{product.category}</span>
										<h3 className="product-title" title={product.name}>
											{product.name}
										</h3>

										{/* Rating */}
										<div className="rating-row">
											<Star size={15} fill="#F59E0B" color="#F59E0B" />
											<span className="rating-score">{product.rating}</span>
											<span className="reviews-count">({product.reviewsCount} ulasan)</span>
										</div>

										{/* Pricing */}
										<div className="product-price-row">
											<div className="price-block">
												<span className="current-price">{formatRupiah(product.price)}</span>
												{product.originalPrice && (
													<span className="old-price">
														{formatRupiah(product.originalPrice)}
													</span>
												)}
											</div>
										</div>

										{/* Add to Cart Button */}
										<button
											onClick={() => addToCart(product)}
											className="btn-add-cart"
										>
											<ShoppingCart size={18} /> + Keranjang
										</button>
									</div>
								</div>
							)
						})}
					</div>
				) : (
					<div className="empty-state">
						<Search size={48} className="empty-icon" />
						<h3>Produk tidak ditemukan</h3>
						<p>Coba kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
						<button
							onClick={() => {
								setActiveCategory('semua')
								setSearchQuery('')
							}}
							className="btn-reset"
						>
							Reset Filter
						</button>
					</div>
				)}
			</section>

			{/* CUSTOMER REVIEWS / TESTIMONIAL SECTION */}
			<section className="testimonials-section">
				<div className="section-header">
					<h2>Apa Kata Pelanggan Kami?</h2>
					<p>Kepercayaan pelanggan adalah kebanggaan utama bagi kami</p>
				</div>

				<div className="reviews-grid">
					<div className="review-card">
						<div className="review-stars">
							{[...Array(5)].map((_, i) => (
								<Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
							))}
						</div>
						<p className="review-text">
							"Pengiriman sangat cepat! Headphones Pro yang saya beli suaranya mantap banget, peredam bisingnya sangat efektif untuk kerja remote. 10/10!"
						</p>
						<div className="reviewer-info">
							<div className="avatar">AD</div>
							<div>
								<h5>Ahmad Dhani</h5>
								<span className="verified-tag">✓ Pembeli Terverifikasi</span>
							</div>
						</div>
					</div>

					<div className="review-card">
						<div className="review-stars">
							{[...Array(5)].map((_, i) => (
								<Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
							))}
						</div>
						<p className="review-text">
							"Produk 100% original bergaransi resmi. Kualitas kemasan sangat aman dengan bubble wrap tebal. Pasti akan order lagi di sini!"
						</p>
						<div className="reviewer-info">
							<div className="avatar">SN</div>
							<div>
								<h5>Siti Nurhaliza</h5>
								<span className="verified-tag">✓ Pembeli Terverifikasi</span>
							</div>
						</div>
					</div>

					<div className="review-card">
						<div className="review-stars">
							{[...Array(5)].map((_, i) => (
								<Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
							))}
						</div>
						<p className="review-text">
							"Keyboard ergonomisnya enak banget buat ngetik seharian. CS ramah dan responsif saat saya tanya garansi retur. Recommended seller!"
						</p>
						<div className="reviewer-info">
							<div className="avatar">BP</div>
							<div>
								<h5>Budi Pratama</h5>
								<span className="verified-tag">✓ Pembeli Terverifikasi</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* NEWSLETTER BANNER SECTION */}
			<section className="newsletter-section">
				<div className="newsletter-card">
					<div className="newsletter-content">
						<div className="newsletter-icon">
							<Mail size={32} />
						</div>
						<h3>Dapatkan Voucher Diskon Rp 100.000!</h3>
						<p>
							Daftarkan email Anda untuk berlangganan info promo eksklusif dan klaim kode voucher <strong>NEWSLETTER100K</strong> yang otomatis tersimpan di Local Storage.
						</p>

						{isSubscribed ? (
							<div className="subscribe-success">
								<CheckCircle2 size={20} />
								<span>Voucher <strong>NEWSLETTER100K</strong> telah ditambahkan ke Voucher Saya!</span>
							</div>
						) : (
							<form onSubmit={handleSubscribe} className="newsletter-form">
								<input
									type="email"
									required
									placeholder="Masukkan alamat email Anda..."
									value={emailSubscription}
									onChange={(e) => setEmailSubscription(e.target.value)}
								/>
								<button type="submit" className="btn-subscribe">
									Klaim Voucher <ChevronRight size={18} />
								</button>
							</form>
						)}
					</div>
				</div>
			</section>

			{/* QUICK VIEW PRODUCT MODAL */}
			{selectedProduct && (
				<div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
					<div className="modal-card" onClick={(e) => e.stopPropagation()}>
						<button
							className="modal-close-btn"
							onClick={() => setSelectedProduct(null)}
						>
							<X size={20} />
						</button>

						<div className="modal-body">
							<div className="modal-img-col">
								<img src={selectedProduct.image} alt={selectedProduct.name} />
							</div>

							<div className="modal-info-col">
								<span className="product-cat">{selectedProduct.category}</span>
								<h2>{selectedProduct.name}</h2>

								<div className="rating-row">
									<Star size={16} fill="#F59E0B" color="#F59E0B" />
									<span className="rating-score">{selectedProduct.rating}</span>
									<span>({selectedProduct.reviewsCount} Ulasan Pembeli)</span>
								</div>

								<div className="modal-price-row">
									<span className="current-price">{formatRupiah(selectedProduct.price)}</span>
									{selectedProduct.originalPrice && (
										<span className="old-price">
											{formatRupiah(selectedProduct.originalPrice)}
										</span>
									)}
								</div>

								<p className="modal-desc">{selectedProduct.description}</p>

								{/* Color Picker */}
								{selectedProduct.colors && (
									<div className="color-selector">
										<label>Pilihan Warna:</label>
										<div className="color-options">
											{selectedProduct.colors.map((color) => (
												<button
													key={color}
													onClick={() => setSelectedColor(color)}
													className={`color-btn ${
														selectedColor === color ? 'selected' : ''
													}`}
												>
													{color}
												</button>
											))}
										</div>
									</div>
								)}

								{/* Qty Selector & Action */}
								<div className="modal-action-row">
									<div className="qty-picker">
										<button
											onClick={() => setModalQty(Math.max(1, modalQty - 1))}
											disabled={modalQty <= 1}
										>
											<Minus size={14} />
										</button>
										<span>{modalQty}</span>
										<button onClick={() => setModalQty(modalQty + 1)}>
											<Plus size={14} />
										</button>
									</div>

									<button
										onClick={() => {
											addToCart(selectedProduct, modalQty, selectedColor)
											setSelectedProduct(null)
										}}
										className="btn-modal-add"
									>
										<ShoppingCart size={18} /> Tambah Ke Keranjang
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* VOUCHER SAYA MODAL */}
			{isVoucherModalOpen && (
				<div className="modal-overlay" onClick={() => setIsVoucherModalOpen(false)}>
					<div className="modal-card max-w-md" onClick={(e) => e.stopPropagation()}>
						<div className="modal-header-simple">
							<div className="flex-align-gap">
								<Ticket size={20} color="#6366F1" />
								<h3>Voucher Saya (Local Storage)</h3>
							</div>
							<button onClick={() => setIsVoucherModalOpen(false)} className="modal-close-btn-inline">
								<X size={18} />
							</button>
						</div>

						<div className="voucher-modal-content">
							<div className="input-voucher-row">
								<input
									type="text"
									placeholder="Ketik kode voucher..."
									value={inputVoucherCode}
									onChange={(e) => setInputVoucherCode(e.target.value)}
								/>
								<button onClick={() => applyVoucherCode(inputVoucherCode)} className="btn-apply">
									Gunakan
								</button>
							</div>

							<div className="voucher-list">
								{vouchers.map((v) => (
									<div key={v.code} className={`voucher-item-card ${v.isUsed ? 'used' : ''}`}>
										<div className="voucher-left">
											<Tag size={20} className="tag-icon" />
											<div>
												<h4 className="v-code">{v.code}</h4>
												<p className="v-desc">{v.description}</p>
												<span className="v-min">Potongan: {formatRupiah(v.discount)}</span>
											</div>
										</div>
										<div className="voucher-right">
											{v.isUsed ? (
												<span className="badge-used">Terpakai</span>
											) : (
												<button
													onClick={() => {
														applyVoucherCode(v.code)
														setIsVoucherModalOpen(false)
														setIsCartOpen(true)
													}}
													className="btn-use-v"
												>
													Pakai
												</button>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* RIWAYAT PESANAN MODAL */}
			{isHistoryOpen && (
				<div className="modal-overlay" onClick={() => setIsHistoryOpen(false)}>
					<div className="modal-card max-w-lg" onClick={(e) => e.stopPropagation()}>
						<div className="modal-header-simple">
							<div className="flex-align-gap">
								<History size={20} color="#6366F1" />
								<h3>Riwayat Transaksi ({orderHistory.length})</h3>
							</div>
							<div className="flex-align-gap">
								{orderHistory.length > 0 && (
									<button onClick={clearOrderHistory} className="btn-clear-history" title="Hapus Riwayat">
										<Trash2 size={16} /> Hapus
									</button>
								)}
								<button onClick={() => setIsHistoryOpen(false)} className="modal-close-btn-inline">
									<X size={18} />
								</button>
							</div>
						</div>

						<div className="history-modal-content">
							{orderHistory.length > 0 ? (
								<div className="history-list">
									{orderHistory.map((order) => (
										<div key={order.id} className="history-order-card">
											<div className="order-card-header">
												<div>
													<span className="order-id">{order.id}</span>
													<span className="order-date">• {order.date}</span>
												</div>
												<span className="order-status-badge">✓ {order.status}</span>
											</div>

											<div className="order-items-summary">
												{order.items.map((it, idx) => (
													<div key={idx} className="order-item-mini-row">
														<img src={it.image} alt={it.name} className="order-thumb" />
														<div className="order-item-text">
															<span className="it-name">{it.name}</span>
															<span className="it-qty-price">
																{it.quantity}x @ {formatRupiah(it.price)} {it.color ? `(${it.color})` : ''}
															</span>
														</div>
													</div>
												))}
											</div>

											<div className="order-card-footer">
												<div className="order-price-breakdown">
													{order.discount > 0 && (
														<span className="order-discount-text">
															Diskon Voucher: -{formatRupiah(order.discount)}
														</span>
													)}
													<span className="order-total-text">
														Total Bayar: <strong>{formatRupiah(order.total)}</strong>
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							) : (
								<div className="empty-history-view">
									<FileText size={48} className="empty-icon" />
									<p>Belum ada riwayat pesanan yang tersimpan.</p>
									<span className="subtext">
										Setiap kali Anda menyelesaikan pembayaran QR Code, pesanan akan otomatis tersimpan di <strong>Local Storage</strong> browser ini.
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			)}

			{/* QR CODE PAYMENT MODAL (SCAN / FOTO QRIS) */}
			{isPaymentModalOpen && pendingOrder && (
				<div className="modal-overlay" onClick={() => setIsPaymentModalOpen(false)}>
					<div className="modal-card max-w-md" onClick={(e) => e.stopPropagation()}>
						<div className="modal-header-simple">
							<div className="flex-align-gap">
								<QrCode size={20} color="#6366F1" />
								<h3>Pembayaran QRIS</h3>
							</div>
							<button onClick={() => setIsPaymentModalOpen(false)} className="modal-close-btn-inline">
								<X size={18} />
							</button>
						</div>

						<div className="qr-payment-content">
							{paymentStage === 'qr' && (
								<>
									<div className="qr-order-summary">
										<span className="qr-order-id">ID Transaksi: {pendingOrder.id}</span>
										<span className="qr-order-total">Total: {formatRupiah(pendingOrder.total)}</span>
									</div>

									{/* QR CODE BOX WITH LASER EFFECT */}
									<div className="qr-code-box">
										<img src={qrCodeUrl} alt="QR Code Pembayaran" className="qr-image" />
										<div className="qr-qris-badge">QRIS RESMI</div>
									</div>

									<p className="qr-instruction">
										Ambil foto atau scan Kode QR di atas menggunakan aplikasi <strong>GoPay, OVO, DANA, ShopeePay, atau m-Banking</strong> Anda.
									</p>

									{/* SCAN SIMULATION TRIGGER */}
									<button onClick={handleScanQRCode} className="btn-scan-trigger">
										<Camera size={20} /> Ambil Foto / Pindai Kode QR
									</button>
								</>
							)}

							{paymentStage === 'scanning' && (
								<div className="scanning-stage-view">
									<div className="scanning-animation-box">
										<img src={qrCodeUrl} alt="QR Code Pembayaran" className="qr-image blurred" />
										<div className="scan-laser-line"></div>
									</div>
									<div className="scanning-text">
										<Loader2 size={24} className="spin-icon" />
										<span>Memproses foto & memverifikasi pembayaran...</span>
									</div>
								</div>
							)}

							{paymentStage === 'success' && (
								<div className="payment-success-view">
									<div className="success-icon-wrapper">
										<CheckCircle size={64} color="#10B981" />
									</div>
									<h2>Pembayaran Berhasil! 🎉</h2>
									<p>
										Transaksi <strong>{pendingOrder.id}</strong> sejumlah <strong>{formatRupiah(pendingOrder.total)}</strong> telah berhasil dikonfirmasi.
									</p>
									<span className="success-ls-tag">✓ Pesanan otomatis tersimpan di Local Storage</span>

									<div className="success-actions">
										<button
											onClick={() => {
												setIsPaymentModalOpen(false)
												setIsHistoryOpen(true)
											}}
											className="btn-view-history"
										>
											<History size={18} /> Lihat Riwayat Transaksi
										</button>
										<button
											onClick={() => setIsPaymentModalOpen(false)}
											className="btn-continue-shopping"
										>
											Selesai & Belanja Lagi <ArrowRight size={18} />
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}

			{/* FLOATING CART BUTTON & DRAWER */}
			<div className="floating-cart-wrapper">
				<button
					onClick={() => setIsCartOpen(!isCartOpen)}
					className="floating-cart-btn"
					aria-label="Keranjang Belanja"
				>
					<ShoppingCart size={24} />
					{totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
				</button>
			</div>

			{/* CART DRAWER */}
			{isCartOpen && (
				<div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
					<div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
						<div className="drawer-header">
							<div className="drawer-title">
								<ShoppingBag size={20} />
								<h3>Keranjang Belanja ({totalCartItems})</h3>
							</div>
							<button onClick={() => setIsCartOpen(false)} className="drawer-close">
								<X size={20} />
							</button>
						</div>

						{cart.length > 0 ? (
							<>
								<div className="drawer-items">
									{cart.map((item, index) => (
										<div key={`${item.id}-${index}`} className="cart-item-row">
											<img src={item.image} alt={item.name} className="cart-item-img" />
											<div className="cart-item-details">
												<h4>{item.name}</h4>
												{item.color && <span className="item-color">Warna: {item.color}</span>}
												<span className="item-price">{formatRupiah(item.price)}</span>

												<div className="cart-item-actions">
													<div className="mini-qty">
														<button onClick={() => updateCartQty(index, -1)}>
															<Minus size={12} />
														</button>
														<span>{item.quantity}</span>
														<button onClick={() => updateCartQty(index, 1)}>
															<Plus size={12} />
														</button>
													</div>
													<button
														onClick={() => removeCartItem(index)}
														className="btn-remove-item"
													>
														Hapus
													</button>
												</div>
											</div>
										</div>
									))}

									{/* VOUCHER SECTION IN CART */}
									<div className="cart-voucher-section">
										<div className="voucher-section-title">
											<Ticket size={16} />
											<span>Gunakan Voucher Promo</span>
										</div>

										{appliedVoucher ? (
											<div className="applied-voucher-banner">
												<div className="av-text">
													<span className="av-code">{appliedVoucher.code}</span>
													<span className="av-disc">-{formatRupiah(voucherDiscountAmount)}</span>
												</div>
												<button onClick={removeAppliedVoucher} className="btn-remove-v">
													<X size={14} />
												</button>
											</div>
										) : (
											<div className="apply-v-input-group">
												<input
													type="text"
													placeholder="Masukkan kode voucher..."
													value={inputVoucherCode}
													onChange={(e) => setInputVoucherCode(e.target.value)}
												/>
												<button onClick={() => applyVoucherCode(inputVoucherCode)}>
													Pakai
												</button>
											</div>
										)}
									</div>
								</div>

								<div className="drawer-footer">
									<div className="free-shipping-progress">
										<span>
											{subtotalCartPrice >= 150000
												? '🎉 Selamat! Anda mendapatkan Gratis Ongkir'
												: `Tambah ${formatRupiah(150000 - subtotalCartPrice)} lagi untuk Gratis Ongkir`}
										</span>
									</div>

									{appliedVoucher && (
										<div className="subtotal-breakdown">
											<span>Subtotal: {formatRupiah(subtotalCartPrice)}</span>
											<span className="text-discount">Voucher: -{formatRupiah(voucherDiscountAmount)}</span>
										</div>
									)}

									<div className="subtotal-row">
										<span>Total Pembayaran:</span>
										<span className="subtotal-price">{formatRupiah(finalCartPrice)}</span>
									</div>

									<button onClick={initiatePayment} className="btn-checkout">
										Bayar dengan QR Code <ChevronRight size={18} />
									</button>
								</div>
							</>
						) : (
							<div className="empty-cart-view">
								<ShoppingCart size={48} className="empty-cart-icon" />
								<p>Keranjang belanja Anda masih kosong</p>
								<button onClick={() => setIsCartOpen(false)} className="btn-shop-now">
									Mulai Belanja Now
								</button>
							</div>
						)}
					</div>
				</div>
			)}

			{/* FOOTER SECTION */}
			<footer className="shop-footer">
				<div className="footer-grid">
					<div className="footer-brand-col">
						<div className="footer-logo">
							Mini<span>Store</span>
						</div>
						<p>
							Destinasi belanja online terpercaya untuk produk fashion, elektronik, dan lifestyle berkualitas terbaik di Indonesia.
						</p>
					</div>

					<div className="footer-links-col">
						<h4>Kategori Popular</h4>
						<ul>
							<li><a href="#produk-list" onClick={() => setActiveCategory('Elektronik')}>Elektronik</a></li>
							<li><a href="#produk-list" onClick={() => setActiveCategory('Gadget')}>Gadget & Smartwatch</a></li>
							<li><a href="#produk-list" onClick={() => setActiveCategory('Fashion')}>Fashion & Outwear</a></li>
							<li><a href="#produk-list" onClick={() => setActiveCategory('Sepatu')}>Sepatu Running</a></li>
						</ul>
					</div>

					<div className="footer-links-col">
						<h4>Layanan Pelanggan</h4>
						<ul>
							<li><a href="#bantuan">Pusat Bantuan</a></li>
							<li><a href="#retur">Kebijakan Garansi & Retur</a></li>
							<li><a href="#ongkir">Cek Tarif Pengiriman</a></li>
							<li><a href="#faq">Pertanyaan Umum (FAQ)</a></li>
						</ul>
					</div>

					<div className="footer-contact-col">
						<h4>Hubungi Kami</h4>
						<p>Email: support@ministore.id</p>
						<p>WhatsApp: +62 812-3456-7890</p>
						<p>Jam Operasional: Senin - Minggu (08:00 - 22:00 WIB)</p>
					</div>
				</div>

				<div className="footer-bottom">
					<p>© 2026 MiniStore Online Shop. Pembayaran QR Code & Data tersimpan di Local Storage.</p>
				</div>
			</footer>
		</main>
	)
}

export default Content
