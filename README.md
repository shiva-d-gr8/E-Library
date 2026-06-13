# Online Library Project

Online Library Project

A full-stack web application for an online library system with book browsing, wishlist management, and book requests.

## 📁 Project Structure

```
online_library/
│
├── pages/                    # HTML Pages
│   ├── elib.html            # Featured Books Landing Page
│   ├── elib1.html           # Main Library Catalog (21+ books)
│   ├── favourites.html      # Wishlist/Favorites Page
│   ├── registration.html    # Library Member Registration
│   ├── request.html         # Request a Book Page
│   ├── subscribe.html       # Newsletter Subscription
│   └── success.html         # Success Confirmation Page
│
├── styles/                  # CSS Stylesheets
│   ├── stylelib.css         # Open Library Featured Books Styles
│   ├── elib1.css            # Library Catalog Styles
│   ├── favourites.css       # Wishlist Page Styles
│   ├── request.css          # Request Page Styles (Orange Theme)
│   └── subscribe.css        # Subscription Page Styles
│
├── scripts/                 # JavaScript Files
│   ├── elib.js              # Featured Books Functionality
│   ├── elib1.js             # Library Catalog & Book Management
│   └── request.js           # Request Form Handling
│
├── images/                  # Book Cover Images & Assets
│   ├── Book Covers (JPEG):
│   │   ├── the_great_gatsby.jpeg
│   │   ├── to_kill_a_mockingbird.jpeg
│   │   ├── pride_and_prejudice.jpeg
│   │   ├── the god of small things.jpeg
│   │   ├── 1984.jpeg
│   │   └── a.jpeg through o.jpeg (Collection Covers)
│   │
│   └── Icons:
│       └── lib.png
│
└── documentation/           # Architecture & Design Documents
    ├── online_library_architecture_diagram.png
    ├── online_library_activity_diagram.png
    ├── online_library_sequence_diagram.png
    └── clear_online_library_*.png (High-res versions)
```

## 🌐 Pages Overview

| Page            | File                | Purpose                                      |
| --------------- | ------------------- | -------------------------------------------- |
| Featured Books  | `elib.html`         | Landing page with 4 featured books           |
| Library Catalog | `elib1.html`        | Main shopping page with 21+ book collections |
| Wishlist        | `favourites.html`   | View and manage saved favorites              |
| Registration    | `registration.html` | Library member signup form                   |
| Request Book    | `request.html`      | Submit book requests (Orange themed)         |
| Subscribe       | `subscribe.html`    | Newsletter subscription                      |
| Success         | `success.html`      | Confirmation page                            |

## 🎨 Color Themes

- **Primary**: Orange `#ff7b00` (Request & main pages)
- **Secondary**: Orange gradient `#fff0dc → #ffd299 → #ff9d3e`
- **Accent**: Gold `#f5ae2a` (Hover states)
- **Dark**: `#333` (Text)

## 📚 Book Collections

### Featured Books (4)

- The Great Gatsby
- To Kill a Mockingbird
- Pride and Prejudice
- The God of Small Things

### Collection (16+)

- Collections A through O with various genres
- 1984

## ⚙️ Features

✅ Browse 21+ books with cover images  
✅ Add books to Wishlist  
✅ Borrow books  
✅ Request new books  
✅ Newsletter subscription  
✅ Library member registration  
✅ Responsive design  
✅ localStorage-based state management

## 🚀 Getting Started

1. Navigate to the project root
2. Run: `python -m http.server 8000`
3. Open: `http://localhost:8000/elib1.html`

## 📖 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- localStorage API
- Python HTTP Server

## 📝 Notes

- All images are stored locally (no external image CDN)
- Uses browser localStorage for wishlist persistence
- Responsive design for desktop and mobile
- Architecture diagrams included in documentation folder
