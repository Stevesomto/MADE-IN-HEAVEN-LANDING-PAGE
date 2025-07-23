// JavaScript for dynamic content and interactions

document.addEventListener("DOMContentLoaded", function() {
    // --- 1. Customer Reviews Data ---
    // In a real application, you might fetch this data from an API.
    const reviews = [
        {
            text: "This product exceeded all my expectations. The quality is amazing and it was so easy to set up. Highly recommended!",
            reviewer: "Alex Johnson"
        },
        {
            text: "I was skeptical at first, but this has become an essential part of my routine. A truly game-changing product.",
            reviewer: "Maria Garcia"
        },
        {
            text: "Fantastic customer support and a brilliant product. I couldn't be happier with my purchase.",
            reviewer: "James Smith"
        }
    ];

    // --- 2. Function to Display Reviews ---
    const reviewsContainer = document.getElementById("reviews-container");

    function displayReviews() {
        let reviewHTML = "";
        reviews.forEach(review => {
            reviewHTML += `
                <div class="review-card">
                    <p>"${review.text}"</p>
                    <div class="reviewer">- ${review.reviewer}</div>
                </div>
            `;
        });
        reviewsContainer.innerHTML = reviewHTML;
    }

    // --- 3. Animate Reviews on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a delay to each card animation
                entry.target.style.animationDelay = `${index * 0.2}s`;
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // --- 4. Initialize ---
    displayReviews();
    
    // Observe each review card after they have been created
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        observer.observe(card);
    });

});
