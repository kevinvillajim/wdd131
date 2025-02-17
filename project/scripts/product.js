// Product Database
const productsDB = [
	{
		id: 1,
		name: "Premium Laptop Pro",
		category: "laptops",
		price: 1299.99,
		rating: 4.7,
		discount: 10,
		status: "In Stock",
		sku: "TLP-1001",
		reviewCount: 124,
		availability: true,
		shortDescription:
			"The Premium Laptop Pro is a high-performance laptop with the latest technology, designed for professionals who need reliable computing power for demanding tasks.",
		description: `<p>Experience premium performance with our flagship laptop model. The Premium Laptop Pro combines cutting-edge technology with elegant design to deliver an exceptional computing experience.</p>
                     <ul>
                        <li>Latest generation processor for lightning-fast performance</li>
                        <li>High-resolution display with vibrant colors</li>
                        <li>All-day battery life for uninterrupted productivity</li>
                        <li>Premium build quality with aluminum chassis</li>
                        <li>Enhanced cooling system for sustained performance</li>
                     </ul>
                     <p>Whether you're a creative professional working with demanding applications, a business user handling complex data, or simply someone who appreciates top-tier technology, the Premium Laptop Pro is designed to exceed your expectations.</p>`,
		specifications: [
			{
				name: "Processor",
				value: "Intel Core i7-12700H, 14 cores (6P + 8E), up to 4.7GHz",
			},
			{name: "RAM", value: "16GB DDR5 4800MHz (Upgradable to 64GB)"},
			{name: "Storage", value: "512GB NVMe SSD"},
			{
				name: "Display",
				value: "15.6-inch 4K (3840 x 2160) OLED, 400 nits, 100% DCI-P3",
			},
			{name: "Graphics", value: "NVIDIA GeForce RTX 3060 6GB GDDR6"},
			{name: "Battery", value: "90Wh Li-ion, up to 10 hours"},
			{
				name: "Ports",
				value:
					"2x Thunderbolt 4, 2x USB-A 3.2, HDMI 2.1, SD card reader, 3.5mm audio jack",
			},
			{name: "Connectivity", value: "Wi-Fi 6E, Bluetooth 5.2"},
			{name: "Audio", value: "Quad speakers with DTS:X Ultra"},
			{name: "Dimensions", value: "356 x 243 x 19 mm"},
			{name: "Weight", value: "1.9 kg (4.2 lbs)"},
			{name: "Operating System", value: "Windows 11 Pro"},
		],
		images: [
			"images/products/laptop1.jpg",
			"images/products/laptop1-2.jpg",
			"images/products/laptop1-3.jpg",
			"images/products/laptop1-4.jpg",
		],
		variations: {
			colors: [
				{name: "Space Gray", code: "#5f5f5f", selected: true},
				{name: "Silver", code: "#e0e0e0", selected: false},
				{name: "Midnight Blue", code: "#00487c", selected: false},
			],
			storage: [
				{size: "512GB", price: 0, selected: true},
				{size: "1TB", price: 200, selected: false},
				{size: "2TB", price: 400, selected: false},
			],
		},
		reviews: [
			{
				name: "John Smith",
				date: "2024-01-15",
				rating: 5,
				title: "Exceptional performance and build quality",
				content:
					"I've been using this laptop for 3 months now, and it has exceeded all my expectations. The build quality is superb, and it handles all my development work with ease.",
			},
			{
				name: "Sarah Johnson",
				date: "2024-02-03",
				rating: 4,
				title: "Great laptop with minor flaws",
				content:
					"The Premium Laptop Pro has been my daily driver for work. Performance is excellent, but I wish the keyboard had a bit more travel. Battery life is impressive though!",
			},
			{
				name: "David Chen",
				date: "2023-12-20",
				rating: 5,
				title: "Worth every penny",
				content:
					"After comparing several high-end laptops, I chose this one, and I couldn't be happier. The screen is absolutely gorgeous, and everything runs smoothly.",
			},
		],
		relatedProducts: [4, 2, 7, 15], // IDs of related products
	},

	// Simplified entries for other products (expand as needed)
	{
		id: 2,
		name: "UltraPhone 13",
		category: "smartphones",
		price: 899.99,
		rating: 4.9,
		discount: 5,
		status: "In Stock",
		sku: "TUP-2001",
		reviewCount: 203,
		availability: true,
		shortDescription:
			"The latest flagship smartphone with cutting-edge features, stunning display, and all-day battery life.",
		images: ["images/products/phone1.jpg"],
		relatedProducts: [9, 5, 7],
	},

	{
		id: 4,
		name: "Gaming Laptop Extreme",
		category: "laptops",
		price: 1599.99,
		rating: 4.6,
		discount: 8,
		status: "In Stock",
		sku: "TGL-1002",
		reviewCount: 98,
		availability: true,
		shortDescription:
			"Ultimate gaming laptop with top-tier graphics performance, RGB lighting, and advanced cooling system.",
		images: ["images/products/laptop2.jpg"],
		relatedProducts: [1, 7, 12],
	},

	{
		id: 5,
		name: "Smart Watch Pro",
		category: "wearables",
		price: 349.99,
		rating: 4.4,
		discount: 20,
		status: "Low Stock",
		sku: "TSW-3001",
		reviewCount: 76,
		availability: true,
		shortDescription:
			"Advanced smartwatch with health monitoring, GPS, water resistance, and long battery life.",
		images: ["images/products/watch1.jpg"],
		relatedProducts: [13, 2, 10],
	},

	{
		id: 7,
		name: "Gaming Console XS",
		category: "gaming",
		price: 499.99,
		rating: 4.9,
		discount: 0,
		status: "In Stock",
		sku: "TGC-4001",
		reviewCount: 189,
		availability: true,
		shortDescription:
			"Next-generation gaming console offering immersive gameplay, stunning graphics, and lightning-fast load times.",
		images: ["images/products/console1.jpg"],
		relatedProducts: [12, 4, 10],
	},

	{
		id: 9,
		name: "Budget Smartphone",
		category: "smartphones",
		price: 299.99,
		rating: 4.2,
		discount: 5,
		status: "In Stock",
		sku: "TBS-2002",
		reviewCount: 152,
		availability: true,
		shortDescription:
			"Affordable smartphone with great value, offering essential features at an accessible price point.",
		images: ["images/products/phone2.jpg"],
		relatedProducts: [2, 13, 10],
	},

	{
		id: 10,
		name: "Bluetooth Speaker",
		category: "audio",
		price: 79.99,
		rating: 4.0,
		discount: 15,
		status: "In Stock",
		sku: "TAS-5001",
		reviewCount: 67,
		availability: true,
		shortDescription:
			"Portable Bluetooth speaker with 360° sound, waterproof design, and 20-hour battery life.",
		images: ["images/products/speaker1.jpg"],
		relatedProducts: [3, 9, 12],
	},

	{
		id: 12,
		name: "Gaming Headset",
		category: "gaming",
		price: 149.99,
		rating: 4.7,
		discount: 10,
		status: "In Stock",
		sku: "TGH-4002",
		reviewCount: 115,
		availability: true,
		shortDescription:
			"Immersive gaming headset with 7.1 surround sound, noise-cancelling microphone, and RGB lighting.",
		images: ["images/products/headset1.jpg"],
		relatedProducts: [7, 4, 10],
	},

	{
		id: 13,
		name: "Fitness Tracker",
		category: "wearables",
		price: 129.99,
		rating: 4.1,
		discount: 20,
		status: "Low Stock",
		sku: "TFT-3002",
		reviewCount: 84,
		availability: true,
		shortDescription:
			"Track your fitness goals with this versatile fitness tracker featuring heart rate monitoring, sleep tracking, and more.",
		images: ["images/products/tracker1.jpg"],
		relatedProducts: [5, 9, 10],
	},

	{
		id: 15,
		name: "Ultra-Slim Laptop",
		category: "laptops",
		price: 1099.99,
		rating: 4.5,
		discount: 12,
		status: "In Stock",
		sku: "TUL-1003",
		reviewCount: 106,
		availability: true,
		shortDescription:
			"Incredibly thin and light laptop without compromising performance, ideal for on-the-go professionals.",
		images: ["images/products/laptop3.jpg"],
		relatedProducts: [1, 4, 6],
	},
];

// Global variables
let currentProduct;
let selectedQuantity = 1;
let selectedStoragePrice = 0;

// DOM elements
const elements = {
	mainImage: document.getElementById("main-product-image"),
	thumbnailContainer: document.getElementById("thumbnail-container"),
	productName: document.getElementById("product-name"),
	productNameBreadcrumb: document.getElementById("product-name-breadcrumb"),
	productCategoryLink: document.getElementById("product-category-link"),
	discountBadge: document.getElementById("discount-badge"),
	statusBadge: document.getElementById("status-badge"),
	ratingStars: document.getElementById("rating-stars"),
	ratingCount: document.getElementById("rating-count"),
	productSku: document.getElementById("product-sku"),
	productAvailability: document.getElementById("product-availability"),
	originalPriceContainer: document.getElementById("original-price-container"),
	currentPrice: document.getElementById("current-price"),
	productShortDescription: document.getElementById("product-short-description"),
	colorSelectionContainer: document.getElementById("color-selection-container"),
	colorOptions: document.getElementById("color-options"),
	storageSelectionContainer: document.getElementById(
		"storage-selection-container"
	),
	storageOptions: document.getElementById("storage-options"),
	quantityInput: document.getElementById("quantity"),
	addToCartBtn: document.getElementById("add-to-cart-btn"),
	addToWishlistBtn: document.getElementById("add-to-wishlist-btn"),
	descriptionTab: document.getElementById("description-tab"),
	specificationsTab: document.getElementById("specifications-tab"),
	specsTable: document.getElementById("specs-table"),
	reviewsTab: document.getElementById("reviews-tab"),
	reviewsContainer: document.getElementById("reviews-container"),
	reviewCount: document.getElementById("review-count"),
	relatedProductsContainer: document.getElementById(
		"related-products-container"
	),
	tabButtons: document.querySelectorAll(".tab-btn"),
	tabContents: document.querySelectorAll(".tab-content"),
	decreaseQuantityBtn: document.getElementById("decrease-quantity"),
	increaseQuantityBtn: document.getElementById("increase-quantity"),
	reviewForm: document.getElementById("review-form"),
	ratingInput: document.querySelectorAll(".rating-input i"),
	reviewRating: document.getElementById("review-rating"),
};

// Function to get URL parameters
function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, "\\$&");
	const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to initialize the product page
function initProductPage() {
	const productId = getParameterByName("id") || 1; // Default to first product if no ID provided
	const product = productsDB.find((p) => p.id === parseInt(productId));

	if (!product) {
		console.error("Product not found");
		return;
	}

	currentProduct = product;

	// Update the page with product data
	updateProductDetails(product);
	updateProductImages(product);
	updateProductVariations(product);
	updateProductTabs(product);
	updateRelatedProducts(product);

	// Setup event listeners
	setupQuantityControls();
	setupColorSelection();
	setupStorageSelection();
	setupTabNavigation();
	setupAddToCartButton();
	setupAddToWishlistButton();
	setupReviewForm();
}

// Function to update product basic details
function updateProductDetails(product) {
	// Update product name, breadcrumb, and category
	elements.productName.textContent = product.name;
	elements.productNameBreadcrumb.textContent = product.name;
	elements.productCategoryLink.textContent =
		product.category.charAt(0).toUpperCase() + product.category.slice(1);
	elements.productCategoryLink.href = `categories.html?category=${product.category}`;

	// Update badges (discount and status)
	if (product.discount > 0) {
		elements.discountBadge.textContent = `-${product.discount}%`;
		elements.discountBadge.style.display = "inline-block";
	} else {
		elements.discountBadge.style.display = "none";
	}

	elements.statusBadge.textContent = product.status;
	elements.statusBadge.className = "status-badge";
	if (product.status === "In Stock") {
		elements.statusBadge.classList.add("in-stock");
	} else if (product.status === "Low Stock") {
		elements.statusBadge.classList.add("low-stock");
	} else {
		elements.statusBadge.classList.add("out-of-stock");
	}

	// Update rating, SKU, and availability
	updateRatingStars(product.rating);
	elements.ratingCount.textContent = `(${product.reviewCount} reviews)`;
	elements.reviewCount.textContent = `(${product.reviewCount})`;
	elements.productSku.textContent = product.sku;
	elements.productAvailability.textContent = product.availability
		? "In Stock"
		: "Out of Stock";

	// Update price
	const discountedPrice = product.price * (1 - product.discount / 100);
	if (product.discount > 0) {
		elements.originalPriceContainer.innerHTML = `$${product.price.toFixed(2)}`;
		elements.originalPriceContainer.style.display = "block";
	} else {
		elements.originalPriceContainer.style.display = "none";
	}
	elements.currentPrice.textContent = `$${discountedPrice.toFixed(2)}`;

	// Update short description
	elements.productShortDescription.textContent = product.shortDescription;
}

// Function to update rating stars
function updateRatingStars(rating) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;

	elements.ratingStars.innerHTML = "";

	for (let i = 1; i <= 5; i++) {
		let star;
		if (i <= fullStars) {
			star = '<i class="fas fa-star"></i>';
		} else if (i === fullStars + 1 && hasHalfStar) {
			star = '<i class="fas fa-star-half-alt"></i>';
		} else {
			star = '<i class="far fa-star"></i>';
		}
		elements.ratingStars.innerHTML += star;
	}
}

// Function to update product images
function updateProductImages(product) {
	// Set main image
	elements.mainImage.src = product.images[0];
	elements.mainImage.alt = product.name;

	// Set thumbnails
	elements.thumbnailContainer.innerHTML = "";
	product.images.forEach((image, index) => {
		const thumbnail = document.createElement("img");
		thumbnail.src = image;
		thumbnail.alt = `${product.name} - View ${index + 1}`;
		thumbnail.classList.add("thumbnail");
		if (index === 0) thumbnail.classList.add("active");

		thumbnail.addEventListener("click", () => {
			// Update main image when thumbnail is clicked
			elements.mainImage.src = image;

			// Update active thumbnail
			document.querySelectorAll(".thumbnail").forEach((thumb) => {
				thumb.classList.remove("active");
			});
			thumbnail.classList.add("active");
		});

		elements.thumbnailContainer.appendChild(thumbnail);
	});
}

// Function to update product variations (colors, storage)
function updateProductVariations(product) {
	// Update color options
	if (
		product.variations &&
		product.variations.colors &&
		product.variations.colors.length > 0
	) {
		elements.colorSelectionContainer.style.display = "block";
		elements.colorOptions.innerHTML = "";

		product.variations.colors.forEach((color) => {
			const colorOption = document.createElement("div");
			colorOption.classList.add("color-option");
			if (color.selected) colorOption.classList.add("selected");
			colorOption.style.backgroundColor = color.code;
			colorOption.setAttribute("data-color", color.name);
			colorOption.setAttribute("title", color.name);

			colorOption.addEventListener("click", () => {
				// Update selected color
				document.querySelectorAll(".color-option").forEach((option) => {
					option.classList.remove("selected");
				});
				colorOption.classList.add("selected");
			});

			elements.colorOptions.appendChild(colorOption);
		});
	} else {
		elements.colorSelectionContainer.style.display = "none";
	}

	// Update storage options
	if (
		product.variations &&
		product.variations.storage &&
		product.variations.storage.length > 0
	) {
		elements.storageSelectionContainer.style.display = "block";
		elements.storageOptions.innerHTML = "";

		product.variations.storage.forEach((storage) => {
			const storageOption = document.createElement("button");
			storageOption.classList.add("option-btn");
			if (storage.selected) {
				storageOption.classList.add("selected");
				selectedStoragePrice = storage.price;
			}
			storageOption.setAttribute("data-price", storage.price);
			storageOption.textContent = storage.size;

			storageOption.addEventListener("click", () => {
				// Update selected storage and price
				document.querySelectorAll(".option-btn").forEach((option) => {
					option.classList.remove("selected");
				});
				storageOption.classList.add("selected");
				selectedStoragePrice = storage.price;
				updateFinalPrice();
			});

			elements.storageOptions.appendChild(storageOption);
		});
	} else {
		elements.storageSelectionContainer.style.display = "none";
	}
}

// Function to update final price based on quantity and selected options
function updateFinalPrice() {
	const basePrice = currentProduct.price * (1 - currentProduct.discount / 100);
	const totalPrice = (basePrice + selectedStoragePrice) * selectedQuantity;
	elements.currentPrice.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to update product tabs (description, specifications, reviews)
function updateProductTabs(product) {
	// Update description
	if (product.description) {
		elements.descriptionTab.innerHTML = product.description;
	} else {
		elements.descriptionTab.innerHTML =
			"<p>No description available for this product.</p>";
	}

	// Update specifications
	if (product.specifications && product.specifications.length > 0) {
		elements.specsTable.innerHTML = "";
		product.specifications.forEach((spec) => {
			const row = document.createElement("tr");
			row.innerHTML = `
                <td class="spec-name">${spec.name}</td>
                <td class="spec-value">${spec.value}</td>
            `;
			elements.specsTable.appendChild(row);
		});
	} else {
		elements.specsTable.innerHTML =
			'<tr><td colspan="2">No specifications available for this product.</td></tr>';
	}

	// Update reviews
	if (product.reviews && product.reviews.length > 0) {
		elements.reviewsContainer.innerHTML = "";
		product.reviews.forEach((review) => {
			const reviewElement = document.createElement("div");
			reviewElement.classList.add("review-item");

			let stars = "";
			for (let i = 1; i <= 5; i++) {
				if (i <= review.rating) {
					stars += '<i class="fas fa-star"></i>';
				} else {
					stars += '<i class="far fa-star"></i>';
				}
			}

			reviewElement.innerHTML = `
                <div class="review-header">
                    <div class="review-user">
                        <span class="avatar">${review.name.charAt(0)}</span>
                        <span class="name">${review.name}</span>
                    </div>
                    <div class="review-date">${new Date(
											review.date
										).toLocaleDateString()}</div>
                </div>
                <div class="review-rating">${stars}</div>
                <h4 class="review-title">${review.title}</h4>
                <p class="review-content">${review.content}</p>
            `;

			elements.reviewsContainer.appendChild(reviewElement);
		});
	} else {
		elements.reviewsContainer.innerHTML =
			"<p>There are no reviews yet for this product. Be the first to write a review!</p>";
	}
}

// Function to update related products
function updateRelatedProducts(product) {
	if (product.relatedProducts && product.relatedProducts.length > 0) {
		elements.relatedProductsContainer.innerHTML = "";

		product.relatedProducts.forEach((relatedId) => {
			const relatedProduct = productsDB.find((p) => p.id === relatedId);
			if (!relatedProduct) return;

			const productCard = document.createElement("div");
			productCard.classList.add("product-card");

			const discountedPrice =
				relatedProduct.price * (1 - relatedProduct.discount / 100);
			let priceHTML = `<span class="current-price">$${discountedPrice.toFixed(
				2
			)}</span>`;

			if (relatedProduct.discount > 0) {
				priceHTML = `
                    <span class="original-price">$${relatedProduct.price.toFixed(
											2
										)}</span>
                    ${priceHTML}
                `;
			}

			// Create star rating HTML
			let starsHTML = "";
			const fullStars = Math.floor(relatedProduct.rating);
			const hasHalfStar = relatedProduct.rating % 1 >= 0.5;

			for (let i = 1; i <= 5; i++) {
				if (i <= fullStars) {
					starsHTML += '<i class="fas fa-star"></i>';
				} else if (i === fullStars + 1 && hasHalfStar) {
					starsHTML += '<i class="fas fa-star-half-alt"></i>';
				} else {
					starsHTML += '<i class="far fa-star"></i>';
				}
			}

			productCard.innerHTML = `
                <a href="product.html?id=${relatedProduct.id}">
                    <div class="product-image">
                        <img src="${relatedProduct.images[0]}" alt="${
				relatedProduct.name
			}" loading="lazy">
                        ${
													relatedProduct.discount > 0
														? `<span class="discount-badge">-${relatedProduct.discount}%</span>`
														: ""
												}
                    </div>
                    <div class="product-details">
                        <h3 class="product-title">${relatedProduct.name}</h3>
                        <div class="product-price">${priceHTML}</div>
                        <div class="product-rating">
                            <div class="stars">${starsHTML}</div>
                            <span class="rating-count">(${
															relatedProduct.reviewCount
														})</span>
                        </div>
                    </div>
                </a>
                <button class="add-to-cart-btn" data-product-id="${
									relatedProduct.id
								}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            `;

			// Add click event for the "Add to Cart" button
			productCard
				.querySelector(".add-to-cart-btn")
				.addEventListener("click", (e) => {
					e.preventDefault();
					addToCart(relatedProduct.id, 1);
					updateCartCount();
				});

			elements.relatedProductsContainer.appendChild(productCard);
		});
	}
}

// Setup quantity controls
function setupQuantityControls() {
	elements.decreaseQuantityBtn.addEventListener("click", () => {
		if (selectedQuantity > 1) {
			selectedQuantity--;
			elements.quantityInput.value = selectedQuantity;
			updateFinalPrice();
		}
	});

	elements.increaseQuantityBtn.addEventListener("click", () => {
		if (selectedQuantity < 10) {
			selectedQuantity++;
			elements.quantityInput.value = selectedQuantity;
			updateFinalPrice();
		}
	});

	elements.quantityInput.addEventListener("change", () => {
		const quantity = parseInt(elements.quantityInput.value);
		if (quantity >= 1 && quantity <= 10) {
			selectedQuantity = quantity;
		} else {
			elements.quantityInput.value = selectedQuantity;
		}
		updateFinalPrice();
	});
}

// Setup color selection
function setupColorSelection() {
	// This is handled in the updateProductVariations function
}

// Setup storage selection
function setupStorageSelection() {
	// This is handled in the updateProductVariations function
}

// Setup tab navigation
function setupTabNavigation() {
	elements.tabButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const tabId = button.getAttribute("data-tab");

			// Update active tab button
			elements.tabButtons.forEach((btn) => {
				btn.classList.remove("active");
			});
			button.classList.add("active");

			// Update active tab content
			elements.tabContents.forEach((content) => {
				content.classList.remove("active");
			});
			document.getElementById(`${tabId}-tab`).classList.add("active");
		});
	});
}

// Setup add to cart button
function setupAddToCartButton() {
	elements.addToCartBtn.addEventListener("click", () => {
		// Get selected color and storage
		let selectedColor = null;
		const colorOption = document.querySelector(".color-option.selected");
		if (colorOption) {
			selectedColor = colorOption.getAttribute("data-color");
		}

		let selectedStorage = null;
		const storageOption = document.querySelector(".option-btn.selected");
		if (storageOption) {
			selectedStorage = storageOption.textContent;
		}

		// Add to cart with selected options
		addToCart(
			currentProduct.id,
			selectedQuantity,
			selectedColor,
			selectedStorage
		);
		updateCartCount();

		// Show confirmation message
		showAddToCartConfirmation();
	});
}

// Function to add product to cart
function addToCart(productId, quantity, color, storage) {
	// Get existing cart from localStorage or initialize empty array
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	// Check if product already exists in cart
	const existingItemIndex = cart.findIndex(
		(item) =>
			item.id === productId && item.color === color && item.storage === storage
	);

	if (existingItemIndex >= 0) {
		// Update quantity if product already in cart
		cart[existingItemIndex].quantity += quantity;
	} else {
		// Add new item to cart
		cart.push({
			id: productId,
			quantity: quantity,
			color: color,
			storage: storage,
			dateAdded: new Date().toISOString(),
		});
	}

	// Save updated cart to localStorage
	localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to update cart count in header
function updateCartCount() {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	const cartCountElement = document.querySelector(".cart-count");
	cartCountElement.textContent = totalItems;

	if (totalItems > 0) {
		cartCountElement.style.display = "flex";
	} else {
		cartCountElement.style.display = "none";
	}
}

// Function to show add to cart confirmation
function showAddToCartConfirmation() {
	// Create confirmation message
	const confirmation = document.createElement("div");
	confirmation.classList.add("cart-confirmation");
	confirmation.innerHTML = `
        <div class="cart-confirmation-content">
            <i class="fas fa-check-circle"></i>
            <p>${currentProduct.name} has been added to your cart.</p>
            <div class="cart-confirmation-actions">
                <button class="btn secondary-btn continue-shopping">Continue Shopping</button>
                <a href="cart.html" class="btn primary-btn">View Cart</a>
            </div>
        </div>
    `;

	// Add close button
	const closeBtn = document.createElement("button");
	closeBtn.classList.add("cart-confirmation-close");
	closeBtn.innerHTML = '<i class="fas fa-times"></i>';
	closeBtn.addEventListener("click", () => {
		document.body.removeChild(confirmation);
	});
	confirmation
		.querySelector(".cart-confirmation-content")
		.appendChild(closeBtn);

	// Add continue shopping button event
	confirmation
		.querySelector(".continue-shopping")
		.addEventListener("click", () => {
			document.body.removeChild(confirmation);
		});

	// Add to body
	document.body.appendChild(confirmation);

	// Auto remove after 5 seconds
	setTimeout(() => {
		if (document.body.contains(confirmation)) {
			document.body.removeChild(confirmation);
		}
	}, 5000);
}

// Setup add to wishlist button
function setupAddToWishlistButton() {
	elements.addToWishlistBtn.addEventListener("click", () => {
		// Toggle wishlist button state
		elements.addToWishlistBtn.classList.toggle("active");

		// Get existing wishlist from localStorage or initialize empty array
		let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

		if (elements.addToWishlistBtn.classList.contains("active")) {
			// Add to wishlist if not already in it
			if (!wishlist.includes(currentProduct.id)) {
				wishlist.push(currentProduct.id);
				elements.addToWishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
			}
		} else {
			// Remove from wishlist
			wishlist = wishlist.filter((id) => id !== currentProduct.id);
			elements.addToWishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
		}

		// Save updated wishlist to localStorage
		localStorage.setItem("wishlist", JSON.stringify(wishlist));

		// Show confirmation message
		showWishlistConfirmation(
			elements.addToWishlistBtn.classList.contains("active")
		);
	});

	// Check if product is already in wishlist
	const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
	if (wishlist.includes(currentProduct.id)) {
		elements.addToWishlistBtn.classList.add("active");
		elements.addToWishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
	}
}

// Function to show wishlist confirmation
function showWishlistConfirmation(added) {
	// Create confirmation message
	const message = added
		? `${currentProduct.name} has been added to your wishlist.`
		: `${currentProduct.name} has been removed from your wishlist.`;

	const confirmation = document.createElement("div");
	confirmation.classList.add("wishlist-confirmation");
	confirmation.innerHTML = `
        <div class="wishlist-confirmation-content">
            <i class="${added ? "fas fa-heart" : "far fa-heart"}"></i>
            <p>${message}</p>
        </div>
    `;

	// Add to body
	document.body.appendChild(confirmation);

	// Auto remove after 3 seconds
	setTimeout(() => {
		document.body.removeChild(confirmation);
	}, 3000);
}

// Setup review form
function setupReviewForm() {
	// Setup star rating selection
	elements.ratingInput.forEach((star) => {
		star.addEventListener("click", () => {
			const rating = parseInt(star.getAttribute("data-rating"));
			elements.reviewRating.value = rating;

			// Update selected stars
			elements.ratingInput.forEach((s, index) => {
				if (index < rating) {
					s.className = "fas fa-star";
				} else {
					s.className = "far fa-star";
				}
			});
		});

		star.addEventListener("mouseover", () => {
			const rating = parseInt(star.getAttribute("data-rating"));

			// Update hovered stars
			elements.ratingInput.forEach((s, index) => {
				if (index < rating) {
					s.className = "fas fa-star";
				} else {
					s.className = "far fa-star";
				}
			});
		});

		star.addEventListener("mouseout", () => {
			const rating = parseInt(elements.reviewRating.value);

			// Restore selected stars
			elements.ratingInput.forEach((s, index) => {
				if (index < rating) {
					s.className = "fas fa-star";
				} else {
					s.className = "far fa-star";
				}
			});
		});
	});

	// Handle form submission
	elements.reviewForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// Validate rating
		if (elements.reviewRating.value === "0") {
			alert("Please select a rating");
			return;
		}

		// Create new review object
		const newReview = {
			name: elements.reviewForm.querySelector("#review-name").value,
			date: new Date().toISOString().split("T")[0],
			rating: parseInt(elements.reviewRating.value),
			title: elements.reviewForm.querySelector("#review-title").value,
			content: elements.reviewForm.querySelector("#review-content").value,
		};

		// Get existing reviews from localStorage or use product reviews
		let productReviews =
			JSON.parse(localStorage.getItem(`reviews_${currentProduct.id}`)) ||
			currentProduct.reviews ||
			[];

		// Add new review
		productReviews.unshift(newReview);

		// Save to localStorage
		localStorage.setItem(
			`reviews_${currentProduct.id}`,
			JSON.stringify(productReviews)
		);

		// Update UI
		currentProduct.reviews = productReviews;
		currentProduct.reviewCount = productReviews.length;
		updateProductTabs(currentProduct);

		// Clear form
		elements.reviewForm.reset();
		elements.reviewRating.value = "0";
		elements.ratingInput.forEach((star) => {
			star.className = "far fa-star";
		});

		// Show confirmation message
		alert("Your review has been submitted. Thank you for your feedback!");
	});
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	initProductPage();
	updateCartCount();
});
