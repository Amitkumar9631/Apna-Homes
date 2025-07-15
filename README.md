# Apna Homes - Real Estate Web Application

A modern, responsive real estate web application built with React. Apna Homes helps users explore, discover, and connect with their dream properties, featuring a beautiful UI, testimonials, and a contact form.

## 🚀 Features
- **Home Page:** Hero section with background image, headline, and quick navigation buttons.
- **About:** Company info with image and mission statement.
- **Projects:** Grid of featured properties with images, locations, and prices.
- **Testimonials:** Customer reviews with profile images and ratings.
- **Contact Us:** Form for inquiries, sends messages to your email via Formspree.
- **Footer:** Company info, quick links, and newsletter subscription.
- **Responsive Design:** Looks great on desktop and mobile.

## 🖼️ Demo
![Home Page Screenshot](./public/header_img.png)

## 🛠️ Tech Stack
- React (Functional Components & Hooks)
- CSS Modules (component-based styling)
- [Formspree](https://formspree.io/) for contact form handling

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/apna-homes.git
cd apna-homes/living-homes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000)

### 4. Configure Contact Form
- Sign up at [Formspree](https://formspree.io/) and get your form endpoint.
- In `src/components/Contact.js`, replace the placeholder endpoint with your Formspree endpoint.

## 📁 Project Structure
```
living-homes/
  src/
    assets/         # Images and data
    components/     # React components (Navbar, Home, About, Projects, Testimonials, Contact, Footer)
    index.js        # App entry point
    index.css       # Global styles
    App.js          # Main app component
  public/
    ...             # Static assets
  package.json      # Project config
```

## 🙏 Credits
- [Formspree](https://formspree.io/) for contact form handling
- [Unsplash](https://unsplash.com/) for demo images
- Inspired by modern real estate UI/UX best practices

## 📄 License
This project is open source and available under the [MIT License](LICENSE). 
