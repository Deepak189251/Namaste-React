Sure! Here's a sample README file for your food ordering React app with instructions on installing the CORS extension:

---

# Food Ordering App

A food ordering application built with React. This app allows users to browse food items, add them to their cart, and proceed to checkout. The data is fetched from the Swiggy API to display available food options.

### ⚠️ Important: Install CORS Extension

Due to the Swiggy API's strict origin policy, you may encounter CORS (Cross-Origin Resource Sharing) issues when attempting to make requests directly to the API. To bypass this, you'll need to install a browser extension that handles CORS.

Please follow the steps below to install the CORS extension on your browser:

#### For Chrome:
1. Go to the [Allow-Cors-Access-Control](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) page.
2. Click on "Add to Chrome" and follow the installation prompts.
3. Once installed, enable the extension by clicking its icon in the top-right corner of the browser and toggling it to "ON."

#### For Firefox:
1. Visit the [CORS Everywhere Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/).
2. Click on "Add to Firefox."
3. After installation, click the CORS Everywhere icon in the toolbar and toggle it on.

Once the extension is installed and enabled, you should be able to use the app without any CORS-related issues.

---

## Features

- Browse food items from the Swiggy API.
- Add items to the cart and manage quantities.
- View total price and proceed to checkout.
- Responsive UI for easy navigation.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Deepak189251/Namaste-React
   cd food-ordering-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

---

## How to Use

1. Open the app in your browser.
2. Browse the list of food items available.
3. Add items to your cart.
4. Adjust the quantity of items as needed.
5. Proceed to checkout and view your order details.

---

## Technologies Used

- React
- Swiggy API (for fetching Restaurant and food data)
- Tailwind CSS (for styling)
- Redux (for state management)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you need any additional information in the README!