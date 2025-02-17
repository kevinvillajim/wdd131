
let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 6;
let filters = {
	categories: [],
	minPrice: 0,
	maxPrice: 2000,
	ratings: [],
	discounts: [],
};


const productGrid = document.getElementById("products-grid");
const productsCount = document.getElementById("products-count");
const paginationContainer = document.getElementById("pagination");
const sortSelect = document.getElementById("sort-select");
const categoryFilterInputs = document.querySelectorAll(
	"#category-filter input"
);
const ratingFilterInputs = document.querySelectorAll("#rating-filter input");
const discountFilterInputs = document.querySelectorAll(
	"#discount-filter input"
);
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const applyPriceBtn = document.getElementById("apply-price");
const clearFiltersBtn = document.getElementById("clear-filters");

document.addEventListener("DOMContentLoaded", () => {
	loadFiltersFromLocalStorage();
	applyFilters();
	applySorting(sortSelect.value);
	setupEventListeners();
	displayProducts();
});

function loadFiltersFromLocalStorage() {
	const savedFilters = localStorage.getItem("techBuyFilters");
	if (savedFilters) {
		filters = JSON.parse(savedFilters);

		categoryFilterInputs.forEach((input) => {
			input.checked = filters.categories.includes(input.value);
		});

		ratingFilterInputs.forEach((input) => {
			input.checked = filters.ratings.includes(parseInt(input.value));
		});

		discountFilterInputs.forEach((input) => {
			input.checked = filters.discounts.includes(parseInt(input.value));
		});

		minPriceInput.value = filters.minPrice;
		maxPriceInput.value = filters.maxPrice;
	}
}

function setupEventListeners() {
	// Category filters
	categoryFilterInputs.forEach((input) => {
		input.addEventListener("change", () => {
			updateCategoryFilters();
			applyFilters();
			displayProducts();
		});
	});

	// Rating filters
	ratingFilterInputs.forEach((input) => {
		input.addEventListener("change", () => {
			updateRatingFilters();
			applyFilters();
			displayProducts();
		});
	});

	// Discount filters
	discountFilterInputs.forEach((input) => {
		input.addEventListener("change", () => {
			updateDiscountFilters();
			applyFilters();
			displayProducts();
		});
	});

	// Price range
	applyPriceBtn.addEventListener("click", () => {
		filters.minPrice = parseInt(minPriceInput.value) || 0;
		filters.maxPrice = parseInt(maxPriceInput.value) || 2000;
		saveFiltersToLocalStorage();
		applyFilters();
		displayProducts();
	});

	// Sort dropdown
	sortSelect.addEventListener("change", () => {
		applySorting(sortSelect.value);
		displayProducts();
	});

	// Clear all filters
	clearFiltersBtn.addEventListener("click", () => {
		clearAllFilters();
		applyFilters();
		displayProducts();
	});
}

function updateCategoryFilters() {
	filters.categories = Array.from(categoryFilterInputs)
		.filter((input) => input.checked)
		.map((input) => input.value);
	saveFiltersToLocalStorage();
}

function updateRatingFilters() {
	filters.ratings = Array.from(ratingFilterInputs)
		.filter((input) => input.checked)
		.map((input) => parseInt(input.value));
	saveFiltersToLocalStorage();
}

function updateDiscountFilters() {
	filters.discounts = Array.from(discountFilterInputs)
		.filter((input) => input.checked)
		.map((input) => parseInt(input.value));
	saveFiltersToLocalStorage();
}

function saveFiltersToLocalStorage() {
	localStorage.setItem("techBuyFilters", JSON.stringify(filters));
}

function clearAllFilters() {
	filters = {
		categories: [],
		minPrice: 0,
		maxPrice: 2000,
		ratings: [],
		discounts: [],
	};

	// Reset UI
	categoryFilterInputs.forEach((input) => (input.checked = false));
	ratingFilterInputs.forEach((input) => (input.checked = false));
	discountFilterInputs.forEach((input) => (input.checked = false));
	minPriceInput.value = 0;
	maxPriceInput.value = 2000;

	// Clear from localStorage
	localStorage.removeItem("techBuyFilters");
}

function applyFilters() {
	filteredProducts = products.filter((product) => {
		// Apply category filter
		if (
			filters.categories.length > 0 &&
			!filters.categories.includes(product.category)
		) {
			return false;
		}

		// Apply price range filter
		if (product.price < filters.minPrice || product.price > filters.maxPrice) {
			return false;
		}

		// Apply rating filter
		if (filters.ratings.length > 0) {
			const highestRatingFilter = Math.max(...filters.ratings);
			if (product.rating < highestRatingFilter) {
				return false;
			}
		}

		// Apply discount filter
		if (filters.discounts.length > 0) {
			const lowestDiscountFilter = Math.min(...filters.discounts);
			if (product.discount < lowestDiscountFilter) {
				return false;
			}
		}

		return true;
	});

	// Reset to first page when filters change
	currentPage = 1;

	// Update product count
	updateProductCount();
}

function applySorting(sortOption) {
	switch (sortOption) {
		case "newest":
			filteredProducts.sort((a, b) => b.date - a.date);
			break;
		case "price-low":
			filteredProducts.sort((a, b) => a.price - b.price);
			break;
		case "price-high":
			filteredProducts.sort((a, b) => b.price - a.price);
			break;
		case "rating":
			filteredProducts.sort((a, b) => b.rating - a.rating);
			break;
		case "popularity":
			filteredProducts.sort((a, b) => b.popularity - a.popularity);
			break;
		default:
			filteredProducts.sort((a, b) => b.date - a.date);
	}
}

function updateProductCount() {
	productsCount.textContent = `Showing ${filteredProducts.length} product${
		filteredProducts.length !== 1 ? "s" : ""
	}`;
}

function displayProducts() {
	// Calculate pagination
	const startIndex = (currentPage - 1) * productsPerPage;
	const endIndex = startIndex + productsPerPage;
	const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

	// Clear product grid
	productGrid.innerHTML = "";

	// Check if there are products to display
	if (paginatedProducts.length === 0) {
		productGrid.innerHTML = `
            <div class="no-products-message">
                <i class="fas fa-box-open"></i>
                <p>No products match your criteria. Try adjusting your filters.</p>
                <button id="reset-filters" class="btn primary-btn">Reset Filters</button>
            </div>
        `;

		// Add event listener to reset filters button
		document.getElementById("reset-filters").addEventListener("click", () => {
			clearAllFilters();
			applyFilters();
			displayProducts();
		});

		// Hide pagination
		paginationContainer.innerHTML = "";
		return;
	}

	// Create product cards for each product
	paginatedProducts.forEach((product) => {
		const productCard = createProductCard(product);
		productGrid.appendChild(productCard);
	});

	// Update pagination
	createPagination();

	// Add lazy loading to product images
	lazyLoadImages();
}

function createProductCard(product) {
	// Calculate sale price if discount exists
	const hasDiscount = product.discount > 0;
	const salePrice = hasDiscount
		? (product.price - (product.price * product.discount) / 100).toFixed(2)
		: null;

	// Create card element
	const card = document.createElement("div");
	card.className = "product-card";
	card.dataset.id = product.id;

	// Create stars based on rating
	const stars = createRatingStars(product.rating);

	// Build card HTML
	card.innerHTML = `
        <div class="product-image">
            <img data-src="${product.image}" alt="${
		product.name
	}" class="lazy-load">
            ${
							hasDiscount
								? `<span class="discount-badge">-${product.discount}%</span>`
								: ""
						}
            <div class="product-actions">
                <button class="action-btn" title="Add to Wishlist"><i class="far fa-heart"></i></button>
                <button class="action-btn add-to-cart" title="Add to Cart"><i class="fas fa-shopping-cart"></i></button>
                <button class="action-btn" title="Quick View"><i class="fas fa-eye"></i></button>
            </div>
        </div>
        <div class="product-details">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-category">${
							product.category.charAt(0).toUpperCase() +
							product.category.slice(1)
						}</div>
            <div class="product-rating">
                ${stars}
                <span class="rating-number">(${product.rating.toFixed(
									1
								)})</span>
            </div>
            <div class="product-price">
                ${
									hasDiscount
										? `<span class="original-price">$${product.price.toFixed(
												2
										  )}</span>
                     <span class="sale-price">$${salePrice}</span>`
										: `<span class="regular-price">$${product.price.toFixed(
												2
										  )}</span>`
								}
            </div>
        </div>
    `;

	// Add event listener to navigate to product detail page
	card.addEventListener("click", (e) => {
		// Don't navigate if clicked on an action button
		if (!e.target.closest(".action-btn")) {
			window.location.href = `product.html?id=${product.id}`;
		}
	});

	// Add to cart functionality
	const addToCartBtn = card.querySelector(".add-to-cart");
	addToCartBtn.addEventListener("click", (e) => {
		e.stopPropagation(); // Prevent navigation to product page
		addToCart(product);
	});

	return card;
}

function createRatingStars(rating) {
	let starsHtml = "";
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;

	// Add full stars
	for (let i = 0; i < fullStars; i++) {
		starsHtml += '<i class="fas fa-star"></i>';
	}

	// Add half star if needed
	if (hasHalfStar) {
		starsHtml += '<i class="fas fa-star-half-alt"></i>';
	}

	// Add empty stars
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	for (let i = 0; i < emptyStars; i++) {
		starsHtml += '<i class="far fa-star"></i>';
	}

	return starsHtml;
}

function createPagination() {
	// Calculate total pages
	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	// Clear pagination container
	paginationContainer.innerHTML = "";

	// Don't show pagination if only one page
	if (totalPages <= 1) return;

	// Previous button
	const prevBtn = document.createElement("button");
	prevBtn.className = "pagination-btn";
	prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
	prevBtn.disabled = currentPage === 1;
	prevBtn.addEventListener("click", () => {
		if (currentPage > 1) {
			currentPage--;
			displayProducts();
			// Scroll to top of products section
			document
				.querySelector(".products-section")
				.scrollIntoView({behavior: "smooth"});
		}
	});
	paginationContainer.appendChild(prevBtn);

	// Page buttons
	const createPageButton = (pageNum) => {
		const btn = document.createElement("button");
		btn.className = `pagination-btn ${pageNum === currentPage ? "active" : ""}`;
		btn.textContent = pageNum;
		btn.addEventListener("click", () => {
			currentPage = pageNum;
			displayProducts();
			// Scroll to top of products section
			document
				.querySelector(".products-section")
				.scrollIntoView({behavior: "smooth"});
		});
		return btn;
	};

	// Logic for showing page numbers (always show first, last, current and some adjacent pages)
	const maxVisiblePages = 5;
	let startPage, endPage;

	if (totalPages <= maxVisiblePages) {
		// Show all pages if there are few
		startPage = 1;
		endPage = totalPages;
	} else {
		// For many pages, show a subset
		const leftOffset = Math.floor(maxVisiblePages / 2);
		const rightOffset = Math.ceil(maxVisiblePages / 2) - 1;

		if (currentPage <= leftOffset + 1) {
			// Near start
			startPage = 1;
			endPage = maxVisiblePages;
		} else if (currentPage >= totalPages - rightOffset) {
			// Near end
			startPage = totalPages - maxVisiblePages + 1;
			endPage = totalPages;
		} else {
			// Middle
			startPage = currentPage - leftOffset;
			endPage = currentPage + rightOffset;
		}
	}

	// First page if not in range
	if (startPage > 1) {
		paginationContainer.appendChild(createPageButton(1));
		if (startPage > 2) {
			const ellipsis = document.createElement("span");
			ellipsis.className = "pagination-ellipsis";
			ellipsis.textContent = "...";
			paginationContainer.appendChild(ellipsis);
		}
	}

	// Visible page range
	for (let i = startPage; i <= endPage; i++) {
		paginationContainer.appendChild(createPageButton(i));
	}

	// Last page if not in range
	if (endPage < totalPages) {
		if (endPage < totalPages - 1) {
			const ellipsis = document.createElement("span");
			ellipsis.className = "pagination-ellipsis";
			ellipsis.textContent = "...";
			paginationContainer.appendChild(ellipsis);
		}
		paginationContainer.appendChild(createPageButton(totalPages));
	}

	// Next button
	const nextBtn = document.createElement("button");
	nextBtn.className = "pagination-btn";
	nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
	nextBtn.disabled = currentPage === totalPages;
	nextBtn.addEventListener("click", () => {
		if (currentPage < totalPages) {
			currentPage++;
			displayProducts();
			// Scroll to top of products section
			document
				.querySelector(".products-section")
				.scrollIntoView({behavior: "smooth"});
		}
	});
	paginationContainer.appendChild(nextBtn);
}

function lazyLoadImages() {
	const lazyImages = document.querySelectorAll(".lazy-load");

	if ("IntersectionObserver" in window) {
		const imageObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src;
					img.classList.remove("lazy-load");
					imageObserver.unobserve(img);
				}
			});
		});

		lazyImages.forEach((img) => imageObserver.observe(img));
	} else {
		// Fallback for browsers that don't support IntersectionObserver
		lazyImages.forEach((img) => {
			img.src = img.dataset.src;
			img.classList.remove("lazy-load");
		});
	}
}

// Cart functionality
function addToCart(product) {
	// Get current cart from localStorage or initialize new cart
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	// Check if product already in cart
	const existingItem = cart.find((item) => item.id === product.id);

	if (existingItem) {
		// Increase quantity if already in cart
		existingItem.quantity += 1;
	} else {
		// Add new item with quantity 1
		cart.push({
			id: product.id,
			name: product.name,
			price:
				product.discount > 0
					? product.price - (product.price * product.discount) / 100
					: product.price,
			image: product.image,
			quantity: 1,
		});
	}

	// Save updated cart to localStorage
	localStorage.setItem("cart", JSON.stringify(cart));

	// Update cart count in header
	updateCartCount();

	// Show add to cart notification
	showNotification(`${product.name} added to cart!`);
}

function updateCartCount() {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	// Update cart count in header
	const cartCountElement = document.querySelector(".cart-count");
	if (cartCountElement) {
		cartCountElement.textContent = totalItems;
	}
}

function showNotification(message) {
	// Create notification element if it doesn't exist
	let notification = document.querySelector(".notification");

	if (!notification) {
		notification = document.createElement("div");
		notification.className = "notification";
		document.body.appendChild(notification);
	}

	// Set message and show notification
	notification.textContent = message;
	notification.classList.add("show");

	// Hide notification after 3 seconds
	setTimeout(() => {
		notification.classList.remove("show");
	}, 3000);
}

// Initialize cart count on page load
updateCartCount();
