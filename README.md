# Mini Ecommerce App

This is a simple Mini Ecommerce App built using React and Vite.  
It allows users to log in, view products, and manage a cart.

## Features

- Login functionality (FakeStoreAPI based)
- Product listing
- Add to cart
- Responsive design

## How the Code Works

Login:  
Users log in using predefined credentials. On successful login, the API returns a token, which is stored in localStorage. After login, the user is redirected to the Home page.

Fetching Products:  
On the Home page, products are fetched from https://fakestoreapi.com/products using fetch API inside a useEffect hook.

Product Display:  
Products are displayed using the ProductCard component which shows product image, title, price, and a button to add the product to the cart.

Cart Management:  
When a user clicks on "Add to Cart", the product gets added to a local cart state (using React useState). Cart items are shown on the Cart page.

Routing:  
react-router-dom is used to navigate between Login, Home, and Cart pages.

->Move into the Project Directory
cd my-app

->Install Dependencies
npm install

->Start the Development Server
npm run dev

Open the application

Login Credentials
Use these credentials to log in:

Username: mor_2314

Password: 83r5^_



