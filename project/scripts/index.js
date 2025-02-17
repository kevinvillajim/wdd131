// Mock product data - you would fetch this from an API in a real application
const products = [
	{
		id: 1,
		name: "Ultra Slim Laptop X1",
		price: 999.99,
		oldPrice: 1199.99,
		rating: 4.7,
		reviewCount: 342,
		image: "images/product-laptop.jpg",
		isBestseller: true,
		category: "laptops",
	},
	{
		id: 2,
		name: "Premium Smartphone Z10",
		price: 799.99,
		oldPrice: 899.99,
		rating: 4.9,
		reviewCount: 518,
		image: "images/product-smartphone.jpg",
		isBestseller: true,
		category: "smartphones",
	},
	{
		id: 3,
		name: "Wireless Earbuds Pro",
		price: 149.99,
		oldPrice: 199.99,
		rating: 4.6,
		reviewCount: 283,
		image: "images/product-earbuds.jpg",
		isBestseller: true,
		category: "accessories",
	},
	{
		id: 4,
		name: "Smart Watch Series 5",
		price: 299.99,
		oldPrice: 349.99,
		rating: 4.5,
		reviewCount: 176,
		image: "images/product-smartwatch.jpg",
		isBestseller: true,
		category: "wearables",
	},
	{
		id: 5,
		name: "4K Ultra HD Monitor",
		price: 349.99,
		oldPrice: 399.99,
		rating: 4.8,
		reviewCount: 204,
		image: "images/product-monitor.jpg",
		isBestseller: false,
		category: "accessories",
	},
	{
		id: 6,
		name: "Gaming Console X-Pro",
		price: 499.99,
		oldPrice: 549.99,
		rating: 4.9,
		reviewCount: 412,
		image: "images/product-console.jpg",
		isBestseller: true,
		category: "gaming",
	},
	{
		id: 7,
		name: "Bluetooth Speaker Ultimate",
		price: 129.99,
		oldPrice: 159.99,
		rating: 4.4,
		reviewCount: 138,
		image: "images/product-speaker.jpg",
		isBestseller: false,
		category: "audio",
	},
	{
		id: 8,
		name: "Professional Camera DSLR",
		price: 899.99,
		oldPrice: 999.99,
		rating: 4.7,
		reviewCount: 89,
		image: "images/product-camera.jpg",
		isBestseller: true,
		category: "cameras",
	},
];

document.addEventListener("DOMContentLoaded", () => {
	// Initialize the cart from localStorage or create empty cart
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	updateCartCount(cart);

	// Load bestseller products
	const bestsellersContainer = document.getElementById("bestsellers-container");
	if (bestsellersContainer) {
		loadBestsellerProducts(bestsellersContainer);
	}

	// Handle mobile menu toggle
	const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
	const nav = document.querySelector("nav");

	if (mobileMenuBtn && nav) {
		mobileMenuBtn.addEventListener("click", () => {
			nav.classList.toggle("mobile-menu-open");
			if (nav.classList.contains("mobile-menu-open")) {
				nav.style.display = "block";
			} else {
				nav.style.display = "";
			}
		});
	}

	// Handle newsletter form submission
	const newsletterForm = document.getElementById("newsletter-form");
	if (newsletterForm) {
		newsletterForm.addEventListener("submit", handleNewsletterSubmit);
	}
});

// Load bestseller products into the container
function loadBestsellerProducts(container) {
	// Filter only bestseller products
	const bestsellerProducts = products.filter((product) => product.isBestseller);

	// Generate HTML for each product
	const productsHTML = bestsellerProducts
		.map((product) => {
			// Generate stars based on rating
			const fullStars = Math.floor(product.rating);
			const halfStar = product.rating % 1 >= 0.5;
			const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

			let starsHTML = "";
			for (let i = 0; i < fullStars; i++) {
				starsHTML += '<i class="fas fa-star"></i>';
			}
			if (halfStar) {
				starsHTML += '<i class="fas fa-star-half-alt"></i>';
			}
			for (let i = 0; i < emptyStars; i++) {
				starsHTML += '<i class="far fa-star"></i>';
			}

			// Calculate discount percentage if there's an old price
			let discountBadge = "";
			if (product.oldPrice) {
				const discountPercentage = Math.round(
					(1 - product.price / product.oldPrice) * 100
				);
				discountBadge = `<span class="discount-badge">-${discountPercentage}%</span>`;
			}

			// Return product card HTML using template literal
			return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    ${discountBadge}
                    <img src="${product.image}" alt="${
				product.name
			}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        $${product.price.toFixed(2)}
                        ${
													product.oldPrice
														? `<span class="old-price">$${product.oldPrice.toFixed(
																2
														  )}</span>`
														: ""
												}
                    </div>
                    <div class="product-rating">
                        ${starsHTML}
                        <span>(${product.reviewCount})</span>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-product-id="${
													product.id
												}">Add to Cart</button>
                        <button class="add-to-wishlist" data-product-id="${
													product.id
												}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
		})
		.join("");

	// Insert products into container
	container.innerHTML = productsHTML;

	// Add event listeners to "Add to Cart" buttons
	const addToCartButtons = container.querySelectorAll(".add-to-cart");
	addToCartButtons.forEach((button) => {
		button.addEventListener("click", handleAddToCart);
	});

	// Add event listeners to "Add to Wishlist" buttons
	const wishlistButtons = container.querySelectorAll(".add-to-wishlist");
	wishlistButtons.forEach((button) => {
		button.addEventListener("click", handleAddToWishlist);
	});

	// Add event listeners to product cards for navigation
	const productCards = container.querySelectorAll(".product-card");
	productCards.forEach((card) => {
		card.addEventListener("click", (e) => {
			// Only navigate if the click wasn't on a button
			if (!e.target.closest("button")) {
				const productId = card.dataset.productId;
				window.location.href = `product.html?id=${productId}`;
			}
		});
	});
}

// Handle adding product to cart
function handleAddToCart(e) {
	e.stopPropagation(); // Prevent triggering the card click event

	const productId = parseInt(e.target.dataset.productId);
	const product = products.find((p) => p.id === productId);

	if (product) {
		// Get cart from localStorage
		let cart = JSON.parse(localStorage.getItem("cart")) || [];

		// Check if product is already in cart
		const existingProductIndex = cart.findIndex(
			(item) => item.id === productId
		);

		if (existingProductIndex >= 0) {
			// Increase quantity if product already exists
			cart[existingProductIndex].quantity += 1;
		} else {
			// Add new product to cart
			cart.push({
				id: product.id,
				name: product.name,
				price: product.price,
				image: product.image,
				quantity: 1,
			});
		}

		// Save updated cart to localStorage
		localStorage.setItem("cart", JSON.stringify(cart));

		// Update cart count in UI
		updateCartCount(cart);

		// Show success message
		showNotification(`${product.name} added to cart!`);
	}
}

// Handle adding product to wishlist
function handleAddToWishlist(e) {
	e.stopPropagation(); // Prevent triggering the card click event

	const button = e.target.closest(".add-to-wishlist");
	const productId = parseInt(button.dataset.productId);
	const product = products.find((p) => p.id === productId);

	if (product) {
		// Get wishlist from localStorage
		let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

		// Check if product is already in wishlist
		const existingProductIndex = wishlist.findIndex(
			(item) => item.id === productId
		);

		if (existingProductIndex >= 0) {
			// Remove product from wishlist if already there
			wishlist.splice(existingProductIndex, 1);
			button.querySelector("i").classList.remove("fas");
			button.querySelector("i").classList.add("far");
			showNotification(`${product.name} removed from wishlist!`);
		} else {
			// Add new product to wishlist
			wishlist.push({
				id: product.id,
				name: product.name,
				price: product.price,
				image: product.image,
			});
			button.querySelector("i").classList.remove("far");
			button.querySelector("i").classList.add("fas");
			showNotification(`${product.name} added to wishlist!`);
		}

		// Save updated wishlist to localStorage
		localStorage.setItem("wishlist", JSON.stringify(wishlist));
	}
}

// Handle newsletter form submission
function handleNewsletterSubmit(e) {
	e.preventDefault();

	const emailInput = e.target.querySelector('input[type="email"]');
	const email = emailInput.value.trim();

	if (email) {
		// Save to localStorage for demonstration purposes
		const subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

		// Check if email already exists
		if (!subscribers.includes(email)) {
			subscribers.push(email);
			localStorage.setItem("subscribers", JSON.stringify(subscribers));
			showNotification("Thank you for subscribing to our newsletter!");
		} else {
			showNotification("You are already subscribed to our newsletter!");
		}

		// Clear input field
		emailInput.value = "";
	}
}

// Update cart count in the header
function updateCartCount(cart) {
	const cartCount = document.querySelector(".cart-count");
	if (cartCount) {
		const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
		cartCount.textContent = totalItems;
	}
}

// Show notification message
function showNotification(message) {
	// Check if notification container exists, create it if not
	let notificationContainer = document.querySelector(".notification-container");

	if (!notificationContainer) {
		notificationContainer = document.createElement("div");
		notificationContainer.className = "notification-container";
		document.body.appendChild(notificationContainer);
	}

	// Create notification element
	const notification = document.createElement("div");
	notification.className = "notification";
	notification.innerHTML = `
        <p>${message}</p>
        <button class="close-notification"><i class="fas fa-times"></i></button>
    `;

	// Add notification to container
	notificationContainer.appendChild(notification);

	// Add event listener to close button
	notification
		.querySelector(".close-notification")
		.addEventListener("click", () => {
			notification.classList.add("notification-hiding");
			setTimeout(() => {
				notification.remove();
			}, 300);
		});

	// Auto remove after 3 seconds
	setTimeout(() => {
		notification.classList.add("notification-hiding");
		setTimeout(() => {
			notification.remove();
		}, 300);
	}, 3000);

	// Show notification with animation
	setTimeout(() => {
		notification.classList.add("notification-visible");
	}, 10);
}

// Add CSS for notifications
(function addNotificationCSS() {
	const style = document.createElement("style");
	style.textContent = `
        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1100;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .notification {
            background-color: var(--primary-color);
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            max-width: 300px;
            transform: translateX(120%);
            transition: transform 0.3s ease;
        }
        
        .notification-visible {
            transform: translateX(0);
        }
        
        .notification-hiding {
            transform: translateX(120%);
        }
        
        .notification p {
            margin: 0;
        }
        
        .close-notification {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 14px;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        
        .close-notification:hover {
            opacity: 1;
        }
    `;
	document.head.appendChild(style);
})();

// Check if products in the wishlist and update UI accordingly
function updateWishlistUI() {
	const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

	// Find all wishlist buttons
	const wishlistButtons = document.querySelectorAll(".add-to-wishlist");

	wishlistButtons.forEach((button) => {
		const productId = parseInt(button.dataset.productId);
		const isInWishlist = wishlist.some((item) => item.id === productId);

		if (isInWishlist) {
			button.querySelector("i").classList.remove("far");
			button.querySelector("i").classList.add("fas");
		}
	});
}

// Initialize wishlist UI when page loads
document.addEventListener("DOMContentLoaded", () => {
	updateWishlistUI();
});

// Add back-to-top button functionality
function setupBackToTopButton() {
	// Create the button
	const backToTopBtn = document.createElement("button");
	backToTopBtn.className = "back-to-top";
	backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
	document.body.appendChild(backToTopBtn);

	// Add CSS for the button
	const style = document.createElement("style");
	style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: var(--primary-color);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            transition: var(--transition);
            opacity: 0;
            visibility: hidden;
            z-index: 1000;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background-color: var(--primary-dark);
            transform: translateY(-3px);
        }
    `;
	document.head.appendChild(style);

	// Show/hide button based on scroll position
	window.addEventListener("scroll", () => {
		if (window.scrollY > 300) {
			backToTopBtn.classList.add("visible");
		} else {
			backToTopBtn.classList.remove("visible");
		}
	});

	// Scroll to top when clicked
	backToTopBtn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}

document.addEventListener("DOMContentLoaded", setupBackToTopButton);

// Handle lazy loading of images
function setupLazyLoading() {
	if ("IntersectionObserver" in window) {
		const lazyImages = document.querySelectorAll('img[loading="lazy"]');

		const imageObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src || img.src;
					imageObserver.unobserve(img);
				}
			});
		});

		lazyImages.forEach((img) => {
			// Store original src in data-src if not already there
			if (!img.dataset.src && img.src) {
				img.dataset.src = img.src;
				// Use a placeholder image initially for better performance
				img.src =
					'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
			}
			imageObserver.observe(img);
		});
	}
}

document.addEventListener("DOMContentLoaded", setupLazyLoading);
