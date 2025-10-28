# 🛍️ MyShop - Modern E-Commerce Site

A modern, full-featured e-commerce web application with user authentication, shopping cart functionality, and a beautiful responsive UI.

![E-Commerce Site](https://img.shields.io/badge/Status-Active-success)
![Authentication](https://img.shields.io/badge/Auth-Supabase-green)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue)

## ✨ Features

### 🔐 User Authentication (Supabase)
- **Sign Up** - Create new accounts with email verification
- **Login** - Secure authentication with session management
- **Logout** - Safe sign out functionality
- **Password Reset** - Forgot password recovery flow
- **Session Persistence** - Stay logged in across page refreshes
- **User Profile** - Display user name in navbar with dropdown menu
- **Protected Routes** - Authentication checks before checkout

### 🛒 Shopping Experience
- **Product Catalog** - Browse products with beautiful card layouts
- **Product Details** - View detailed product information in modals
- **Shopping Cart** - Add, remove, and update product quantities
- **Cart Summary** - Real-time total calculation with tax
- **Quantity Controls** - Increase/decrease item quantities
- **Checkout Flow** - Proceed to checkout (requires authentication)

### 🎨 Modern UI/UX
- **Gradient Design** - Beautiful purple gradient theme throughout
- **Animated Components** - Smooth transitions and micro-interactions
- **Responsive Layout** - Works perfectly on mobile, tablet, and desktop
- **Category Filters** - Filter products by category with pill buttons
- **Search Functionality** - Search products by name
- **Loading States** - Visual feedback during async operations
- **Toast Notifications** - Success and error messages with gradients

### 🚀 Performance & Design
- **Fast Loading** - Optimized assets and minimal dependencies
- **Bootstrap 5** - Modern responsive framework
- **Font Awesome Icons** - Beautiful iconography
- **CSS Animations** - Hardware-accelerated transforms
- **Clean Code** - Well-organized and documented

## 📁 Project Structure

```
E-Commerce-Site/
│
├── index.html                 # Main application file (UI + logic)
├── supabase-config.js         # Supabase authentication configuration
├── test-auth.html             # Authentication testing page
│
├── README.md                  # Project documentation (this file)
├── AUTH_STATUS.md             # Authentication setup guide
├── LOGIN_UI_IMPROVEMENTS.md   # UI enhancement documentation
├── SUPABASE_SETUP.md          # Supabase setup instructions
│
├── download.jpeg              # Product images (stored at repo root)
├── download sp.jpeg
└── download sw.jpeg
```

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Vanilla JS for functionality
- **Bootstrap 5** - Responsive framework
- **Font Awesome 6** - Icon library

### Backend & Services
- **Supabase** - Authentication and user management
- **Supabase Auth** - Secure email/password authentication
- **Session Management** - Automatic token handling

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)
- Supabase account (for authentication features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShivamSoni20/E-Commerce-Site.git
   cd E-Commerce-Site
   ```

2. **Set up Supabase Authentication**
   - Follow the detailed guide in `SUPABASE_SETUP.md`
   - Create a Supabase project at [https://supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Update `supabase-config.js` with your credentials

3. **Run the application**
   
   **Option A: Using Python**
   ```bash
   python -m http.server 8000
   ```
   
   **Option B: Using Node.js**
   ```bash
   npx http-server -p 8000
   ```
   
   **Option C: Using VS Code**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

4. **Open in browser**
   - Navigate to `http://localhost:8000`
   - Test authentication at `http://localhost:8000/test-auth.html`

## 📖 Usage Guide

### For Users

1. **Browse Products**
   - Scroll through the product catalog
   - Use category pills to filter products
   - Search for specific items using the search bar

2. **View Product Details**
   - Click "View Details" on any product card
   - See full description, price, and ratings

3. **Add to Cart**
   - Click "Add to Cart" button on products
   - View cart by clicking the cart icon in navbar
   - Adjust quantities using +/- buttons
   - Remove items with the remove button

4. **Create Account**
   - Click "Login / Sign Up" in navbar
   - Switch to "Sign Up" tab
   - Fill in your details (name, email, password)
   - Check your email for verification link
   - Verify your account

5. **Login**
   - Click "Login / Sign Up" in navbar
   - Enter your email and password
   - Click "Login Now"
   - Your name will appear in the navbar

6. **Checkout**
   - Add items to cart
   - Click "Proceed to Checkout"
   - Login if not already authenticated
   - Complete your order

### For Developers

1. **Customize Products**
   - Edit the `products` array in `index.html`
   - Add/remove products with name, price, image, category, rating, description

2. **Modify Styling**
   - CSS variables are defined in `:root` for easy theming
   - Change gradient colors, fonts, spacing
   - All styles are in the `<style>` section of `index.html`

3. **Add Features**
   - Product filtering is implemented in `filterProducts()`
   - Cart logic is in `addToCart()`, `updateCart()`, etc.
   - Authentication functions are in `supabase-config.js`

4. **Test Authentication**
   - Use `test-auth.html` for debugging
   - Check browser console for error messages
   - Verify Supabase dashboard for user creation

## 🔐 Authentication Setup

### Quick Setup
1. Create a Supabase account
2. Create a new project
3. Copy your Project URL and anon key
4. Update `supabase-config.js`:
```javascript
const SUPABASE_URL = 'your-project-url';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

Note:
- Replace any demo/example values in `supabase-config.js` with your own Supabase URL and anon key before deploying.
- The password reset flow uses `redirectTo: window.location.origin + '/reset-password.html'`. This repository does not include `reset-password.html` by default. Create that page or change `redirectTo` to an existing route on your domain and handle the token if you implement a custom reset UI.

### Detailed Instructions
See `SUPABASE_SETUP.md` for complete setup guide including:
- Creating a Supabase project
- Configuring email templates
- Setting up redirect URLs
- Enabling social authentication
- Creating database tables

## 🎨 UI Features

### Login Modal Enhancements
- **Gradient Header** - Purple gradient with shield icon
- **Animated Tabs** - Smooth pill-shaped tabs with gradient fill
- **Modern Inputs** - Rounded corners with lift animation on focus
- **Premium Buttons** - Gradient background with ripple effect
- **Beautiful Alerts** - Gradient success/error messages
- **Security Indicators** - Trust-building elements

See `LOGIN_UI_IMPROVEMENTS.md` for complete UI documentation.

## 🧪 Testing

### Test Authentication
1. Open `test-auth.html` in your browser
2. Click "Test Connection" to verify Supabase
3. Test sign up with a real email address
4. Check email for verification link
5. Test sign in with your credentials
6. Verify session persistence

### Test Shopping Cart
1. Add multiple products to cart
2. Verify quantity updates
3. Check total calculation
4. Test remove functionality
5. Verify cart persists during session

## 🐛 Troubleshooting

### Authentication Issues
- **"Supabase library not loaded"** - Hard refresh (Ctrl + Shift + R)
- **"Invalid login credentials"** - Verify email and check password length (min 6 chars)
- **"Email not confirmed"** - Check spam folder or resend from Supabase dashboard
- **Session not persisting** - Enable cookies and check browser console
- **Password reset link 404** - Ensure `reset-password.html` exists or update the `redirectTo` URL in `supabase-config.js` and Supabase Auth redirect settings to a valid page on your domain.

### Cart Issues
- **Cart not updating** - Check browser console for errors
- **Total calculation wrong** - Verify product prices in products array

### UI Issues
- **Styles not loading** - Clear browser cache
- **Animations not working** - Ensure modern browser with CSS3 support

See `AUTH_STATUS.md` for detailed troubleshooting guide.

## 📝 Configuration

### Environment Variables
The project uses client-side configuration in `supabase-config.js`:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anon public key (safe for client-side)

### Customization Options
- **Colors** - Modify CSS variables in `:root`
- **Products** - Edit products array in `index.html`
- **Tax Rate** - Change in `updateCartDisplay()` function
- **Email Templates** - Customize in Supabase dashboard

## 🔒 Security

- ✅ Passwords hashed by Supabase
- ✅ Email verification enabled
- ✅ Secure session tokens
- ✅ HTTPS recommended for production
- ✅ Anon key safe for client-side use
- ✅ Never expose service_role key

## 🚀 Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: (none needed)
4. Set publish directory: `/`
5. Add environment variables if needed
6. Deploy!

### Deploy to Vercel
1. Import GitHub repository
2. Configure project settings
3. Deploy with one click

### Deploy to GitHub Pages
1. Go to repository settings
2. Enable GitHub Pages
3. Select main branch
4. Site will be live at `https://username.github.io/repo-name`

**Important:** Update Supabase redirect URLs in dashboard to match your production domain.

## 📚 Documentation

- **[SUPABASE_SETUP.md](SUPABASE_SETUP.md)** - Complete Supabase setup guide
- **[AUTH_STATUS.md](AUTH_STATUS.md)** - Authentication implementation details
- **[LOGIN_UI_IMPROVEMENTS.md](LOGIN_UI_IMPROVEMENTS.md)** - UI enhancement documentation

## 🎯 Future Enhancements

### Planned Features
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history page
- [ ] User profile editing
- [ ] Payment integration (Stripe)
- [ ] Product inventory management
- [ ] Admin dashboard
- [ ] Social authentication (Google, GitHub)
- [ ] Product recommendations
- [ ] Email notifications for orders
- [ ] Advanced search with filters
- [ ] Product comparison feature
- [ ] Dark mode toggle

### Database Enhancements
- [ ] Store products in Supabase database
- [ ] Save user orders
- [ ] Implement user profiles table
- [ ] Add product reviews table
- [ ] Shopping cart persistence across devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shivam Soni**
- GitHub: [@ShivamSoni20](https://github.com/ShivamSoni20)

## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Supabase for authentication services
- Font Awesome for beautiful icons
- All contributors and testers

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation files
- Review the troubleshooting section
- Join the [Supabase Discord](https://discord.supabase.com)

## 🎉 Status

✅ **Authentication** - Fully functional with Supabase  
✅ **Shopping Cart** - Complete with quantity management  
✅ **UI/UX** - Modern gradient design with animations  
✅ **Responsive** - Works on all devices  
✅ **Documentation** - Comprehensive guides available  

**The project is production-ready and actively maintained!**

---

Made with ❤️ by Shivam Soni
