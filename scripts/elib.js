// script.js

// Initialize wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Function to update wishlist count
function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
}

// Update counts on page load
updateWishlistCount();

// Sample data for featured books
const featuredBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "the_great_gatsby.jpeg", link: "the_god_of_small_things.html" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "to_kill_a_mockingbird.jpeg", link: "mockingbird.html" },
    { title: "Pride and Prejudice", author: "Jane Austen", cover: "pride_and_prejudice.jpeg", link: "fiction.html" },
    { title: "The God of Small Things", author: "Arundhati Roy", cover: "the god of small things.jpeg", link: "the_god_of_small_things.html" },
];

// Load featured books dynamically
const featuredList = document.getElementById("featured-list");

featuredBooks.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.style.cursor = "pointer";

    bookCard.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px;">
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <div style="display: flex; gap: 10px; margin-top: 15px;">
            <button class="add-to-wishlist" style="flex: 1; padding: 10px; background-color: #ffa500; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">♡ Wishlist</button>
        </div>
    `;

    // Add click event for the image and title (navigate to book detail)
    const img = bookCard.querySelector("img");
    const title = bookCard.querySelector("h3");
    img.addEventListener("click", () => {
        window.location.href = book.link;
    });
    title.addEventListener("click", () => {
        window.location.href = book.link;
    });
    img.style.cursor = "pointer";
    title.style.cursor = "pointer";

    // Add to Wishlist button
    const addToWishlistBtn = bookCard.querySelector(".add-to-wishlist");
    addToWishlistBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        // Check if already in wishlist
        if (!wishlist.find(item => item.title === book.title)) {
            wishlist.push(book);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateWishlistCount();
        }
        alert(`"${book.title}" added to wishlist!`);
        addToWishlistBtn.style.backgroundColor = "#ff1493";
        addToWishlistBtn.textContent = "♥ Added to Wishlist";
        setTimeout(() => {
            addToWishlistBtn.style.backgroundColor = "#ffa500";
            addToWishlistBtn.textContent = "♡ Wishlist";
        }, 2000);
    });

    featuredList.appendChild(bookCard);
});

