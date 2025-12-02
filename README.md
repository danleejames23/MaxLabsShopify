# Max Labs - Premium Supplements E-Commerce Theme

![Max Labs](preview/assets/logo.jpg)

A modern, dark-themed Shopify e-commerce theme designed for supplement and fitness brands. Built with performance, conversion optimization, and mobile-first design in mind.

## 🚀 Live Demo

[View Live Preview](https://max-labs2.myshopify.com) *(Password protected - contact for access)*

## ✨ Features

### Design
- **Dark Modern Aesthetic** - Sleek black and neon green color scheme
- **Mobile-First Responsive** - Optimized for all devices
- **Custom Typography** - Orbitron headings + Inter body text
- **Smooth Animations** - Subtle hover effects and transitions

### E-Commerce
- **Product Pages** - Image galleries, variant selectors, trust badges
- **Shopping Cart** - Real-time updates, quantity controls
- **Checkout Ready** - Shopify Payments / Stripe integration
- **Product Grid** - Filterable, sortable product displays

### Pages Included
- Home (Hero, Featured Products, Testimonials, CTA)
- Shop / Collection
- Product Detail
- Cart
- About Us
- Contact (with form)
- FAQ (accordion style)
- Blog
- Privacy Policy
- Terms & Conditions
- Shipping & Delivery
- Returns & Refunds

### Technical
- **Shopify 2.0** - Section-based architecture
- **Liquid Templates** - Dynamic content rendering
- **CSS Variables** - Easy theme customization
- **Vanilla JavaScript** - No jQuery dependency
- **SEO Optimized** - Meta tags, structured data ready

## 📁 Project Structure

```
MaxLabs/
├── theme/                    # Shopify Theme Files
│   ├── assets/              # CSS, JS, images
│   ├── config/              # Theme settings
│   ├── layout/              # theme.liquid
│   ├── sections/            # Reusable sections
│   ├── snippets/            # Partial templates
│   └── templates/           # Page templates
├── preview/                  # Static HTML Preview
│   ├── index.html           # Home page
│   ├── shop.html            # Shop page
│   ├── product.html         # Product page
│   ├── styles.css           # Preview styles
│   └── app.js               # Preview functionality
├── stockimages/             # Product images
├── maxlabs-theme.zip        # Ready to upload theme
└── shopify-products.csv     # Product import file
```

## 🛠️ Installation

### For Shopify Store

1. Download `maxlabs-theme.zip`
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload zip file"
4. Upload the zip and publish

### For Local Preview

```bash
# Navigate to preview folder
cd preview

# Start a local server (Python)
python -m http.server 8080

# Or with Node.js
npx serve .
```

Open `http://localhost:8080` in your browser.

## 🎨 Customization

### Colors
Edit CSS variables in `theme/assets/base.css`:

```css
:root {
  --color-primary: #00FF7F;      /* Neon green */
  --color-background: #000000;   /* Black */
  --color-text: #ffffff;         /* White */
}
```

### Logo
Replace files in `theme/assets/`:
- `logo.jpg` - Main logo
- `logotransparent.png` - Transparent version

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 1024px | Tablet |
| 768px | Mobile |

## 🔧 Tech Stack

- **Platform**: Shopify
- **Templating**: Liquid
- **Styling**: CSS3 (Custom Properties)
- **JavaScript**: Vanilla ES6
- **Fonts**: Google Fonts (Orbitron, Inter)
- **Icons**: Custom SVG

## 💼 Skills Demonstrated

### Frontend Development
- **HTML5** - Semantic markup, accessibility best practices
- **CSS3** - Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6+)** - DOM manipulation, event handling, local storage
- **Responsive Design** - Mobile-first approach, media queries

### E-Commerce & Shopify
- **Shopify Theme Development** - Liquid templating language
- **Shopify 2.0 Architecture** - Sections, blocks, JSON templates
- **Theme Customization** - Settings schema, dynamic content
- **Product Management** - CSV imports, variant handling

### Design & UX
- **UI/UX Design** - Conversion-focused layouts
- **Dark Theme Design** - Modern aesthetic with accessibility
- **Typography** - Font pairing, hierarchy, readability
- **Visual Design** - Color theory, spacing, visual balance

### Development Practices
- **Version Control** - Git, GitHub
- **Code Organization** - Modular CSS, reusable components
- **Performance** - Optimized assets, lazy loading
- **Cross-Browser Compatibility** - Tested across major browsers

### Additional Skills
- **SEO** - Meta tags, structured data, semantic HTML
- **Payment Integration** - Stripe, Shopify Payments
- **Content Management** - Blog, pages, collections
- **Customer Experience** - Cart functionality, checkout flow

## 📄 License

This project is created for portfolio demonstration purposes.

## 👤 Author

**Dan Lee James**  
Full Stack Developer | Shopify Expert

- GitHub: [@danleejames23](https://github.com/danleejames23)

---

*This project demonstrates end-to-end Shopify theme development, from design to deployment.*
