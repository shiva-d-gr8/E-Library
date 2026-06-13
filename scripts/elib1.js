document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedBooks();
});

function loadFeaturedBooks() {
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'the_great_gatsby.jpeg' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'to_kill_a_mockingbird.jpeg' },
        { title: 'Pride and Prejudice', author: 'Jane Austen', image: 'pride_and_prejudice.jpeg' },
        { title: 'The God of Small Things', author: 'Arundhati Roy', image: 'the god of small things.jpeg' },
        { title: '1984', author: 'George Orwell', image: '1984.jpeg' },
        { title: 'Collection A', author: 'Various Authors', image: 'a.jpeg' },
        { title: 'Collection B', author: 'Various Authors', image: 'b.jpeg' },
        { title: 'Collection C', author: 'Various Authors', image: 'c.jpeg' },
        { title: 'Collection D', author: 'Various Authors', image: 'd.jpg' },
        { title: 'Collection E', author: 'Various Authors', image: 'e.jpeg' },
        { title: 'Collection F', author: 'Various Authors', image: 'f.jpeg' },
        { title: 'Collection G', author: 'Various Authors', image: 'g.jpeg' },
        { title: 'Collection H', author: 'Various Authors', image: 'h.jpg' },
        { title: 'Collection I', author: 'Various Authors', image: 'i.jpeg' },
        { title: 'Collection J', author: 'Various Authors', image: 'j.jpeg' },
        { title: 'Collection K', author: 'Various Authors', image: 'k.jpeg' },
        { title: 'Collection L', author: 'Various Authors', image: 'l.jpeg' },
        { title: 'Collection M', author: 'Various Authors', image: 'm.jpeg' },
        { title: 'Collection N', author: 'Various Authors', image: 'n.jpeg' },
        { title: 'Collection O', author: 'Various Authors', image: 'o.jpeg' }
    ];

    const bookList = document.getElementById('bookList');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <img src="../images/${book.image}" alt="${book.title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px;">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <div style="display: flex; gap: 8px; margin-top: 10px;">
                <button class="buy-btn" style="flex: 1; padding: 8px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Buy</button>
                <button class="borrow-btn" style="flex: 1; padding: 8px; background-color: #008CBA; color: white; border: none; border-radius: 4px; cursor: pointer;">Borrow</button>
                <button class="wishlist-btn" style="flex: 1; padding: 8px; background-color: #ff6b6b; color: white; border: none; border-radius: 4px; cursor: pointer;">♡</button>
            </div>
        `;
        bookList.appendChild(bookItem);

        // Add event listeners for buttons
        bookItem.querySelector('.buy-btn').addEventListener('click', () => {
            alert(`"${book.title}" added to cart for purchase!`);
        });
        bookItem.querySelector('.borrow-btn').addEventListener('click', () => {
            alert(`"${book.title}" added to borrowing list!`);
        });
        bookItem.querySelector('.wishlist-btn').addEventListener('click', () => {
            alert(`"${book.title}" added to wishlist!`);
        });
    });
}

function searchBooks() {
    const input = document.getElementById('myInput').value.toLowerCase();
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function showLogin() {
    alert('Show login form');
}

function showRegister() {
    alert('Show registration form');
}

function showCart() {
    alert('Show cart');
}

function showBorrow() {
    alert('Show borrow options');
}

function showBuy() {
    alert('Show buy options');
}