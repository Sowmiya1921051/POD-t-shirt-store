# 🛍 POD T-Shirt Store

A sleek and animated React-based Print-On-Demand T-Shirt store using **Framer Motion** for smooth animations and a clean UI layout.

---

## 🚀 Features

- 🖼 Product showcase with animations
- 🎨 Styled UI with custom CSS
- ⚡ Framer Motion for smooth transitions
- ✅ Component-based architecture
- 📱 Responsive design

---

## 📁 Project Structure

src/
├── assets/ # Product images and media
├── components/ # Reusable components like Header, Footer, Product cards
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── Product1.jsx
│ ├── Product2.jsx
│ ├── Product3.jsx
│ ├── Product4.jsx
│ └── Gallery.css # Styles for product layout
├── css/
│ └── base.css # Global styles
├── js/ # JavaScript utilities (if needed)
├── pages/
│ └── Pages.jsx # Page container for product listings
├── App.jsx # Main App component
├── index.css # Root stylesheet
└── main.jsx # Entry point

php-template
Copy
Edit

---

## 🖥️ UI Components

### 🔹 Header Component

The `Header.jsx` file renders the top navigation with branding and links.

```jsx
<header className="header">
  <h1>POD T-Shirt Store</h1>
  <nav>
    <a href="#products">Products</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
Style (Gallery.css or base.css):

css
Copy
Edit
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #1f1f1f;
  color: #fff;
}
.header nav a {
  color: #ffd700;
  margin-left: 20px;
  text-decoration: none;
}
👕 Product Card (e.g., Product1.jsx)
Each product card uses Framer Motion for animation and displays a product.

jsx
Copy
Edit
import { motion } from "framer-motion";

<motion.div
  className="product-card"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <img src="path-to-image" alt="T-shirt" />
  <h3>Classic Tee</h3>
  <p>$19.99</p>
  <button>Add to Cart</button>
</motion.div>
Style (Gallery.css):

css
Copy
Edit
.product-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.product-card img {
  width: 100%;
  border-radius: 8px;
}
.product-card button {
  background-color: #1f1f1f;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.product-card button:hover {
  background-color: #ffd700;
  color: #000;
}
```
# 📄 Pages.jsx
This component renders multiple products:

jsx
Copy
Edit
import Product1 from "../components/Product1";
import Product2 from "../components/Product2";
...
```
function Pages() {
  return (
    <div className="product-grid">
      <Product1 />
      <Product2 />
      <Product3 />
      <Product4 />
    </div>
  );
}

export default Pages;
```
# Optional Grid Style:

css
Copy
Edit
```
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
```
# 📦 Footer.jsx
## A simple footer component:

jsx
Copy
Edit
```
<footer className="footer">
  <p>&copy; 2025 POD T-Shirt Store. All rights reserved.</p>
</footer>
```
# 🎥 Framer Motion Usage
Used for entry animations and hover effects.

jsx
Copy
Edit
```
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```
# 📦 Installation & Setup
## 1. Clone the Repository
bash
Copy
Edit
```
git clone https://github.com/your-username/pod-tshirt-store.git
cd pod-tshirt-store
```
## 2. Install Dependencies
bash
Copy
Edit
```
npm install
```
## 3. Start Development Server
bash
Copy
Edit
```
npm run dev
Make sure vite is installed if you're using Vite.
```

## 🌍 Deployment

This project can be deployed to any of the following static‐site hosts:

- **Cloudflare Pages** 

### Cloudflare Pages

1. **Connect your repository**  
   Link your GitHub repo to Cloudflare Pages and configure the build settings (e.g., `npm run build`, `build` directory).

2. **Deploy**  
   Cloudflare Pages will automatically build and publish your site on every push to your main branch.

3. **Troubleshooting**  
   If you encounter:
   > “This repository is being used for a Cloudflare Pages project on a different Cloudflare account”  
   follow the official guide to disconnect any existing Pages project before linking:  
   https://developers.cloudflare.com/pages/platform/git-integration/#this-repository-is-being-used-for-a-cloudflare-pages-project-on-a-different-cloudflare-account


# 📸 Screenshots
You can include screenshots of your UI here for better presentation.

# 📄 License
MIT License

# 👤 Author
### Made with 💗 by Sowmiya N
