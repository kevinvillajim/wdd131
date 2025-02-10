document.addEventListener("DOMContentLoaded", function () {
	const products = [
		{
			id: "fc-1888",
			name: "flux capacitor",
			averagerating: 4.5,
		},
		{
			id: "fc-2050",
			name: "power laces",
			averagerating: 4.7,
		},
		{
			id: "fs-1987",
			name: "time circuits",
			averagerating: 3.5,
		},
		{
			id: "ac-2000",
			name: "low voltage reactor",
			averagerating: 3.9,
		},
		{
			id: "jj-1969",
			name: "warp equalizer",
			averagerating: 5.0,
		},
	];

	const productSelect = document.getElementById("product");
	products.forEach((product) => {
		const option = document.createElement("option");
		option.value = product.id;
		option.textContent =
			product.name.charAt(0).toUpperCase() + product.name.slice(1);
		productSelect.appendChild(option);
	});

	const form = document.getElementById("reviewForm");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = new FormData(form);
		const reviewData = {};

		formData.forEach((value, key) => {
			reviewData[key] = value;
		});

		reviewData.timestamp = new Date().toISOString();

		try {
			let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

			reviews.push(reviewData);

			localStorage.setItem("reviews", JSON.stringify(reviews));

			let reviewCount = parseInt(localStorage.getItem("reviewCount") || "0");
			reviewCount++;
			localStorage.setItem("reviewCount", reviewCount);
			form.reset();
			window.location.href = "review.html";
		} catch (error) {
			console.error("Error saving to localStorage:", error);
			alert("Error saving review. Please try again.");
		}
	});

	const currentYearElement = document.getElementById("currentYear");
	if (currentYearElement) {
		currentYearElement.textContent = new Date().getFullYear();
	}

	const lastModifiedElement = document.getElementById("lastModified");
	if (lastModifiedElement) {
		lastModifiedElement.textContent = document.lastModified;
	}
});
