# Productify

This is an assignment project given by a company. The project is a simple web application that allows users to create, read, update, and delete products with Login functionality. The data is stored in the local storage of the browser.

## Technologies

- React.js
- TailwindCSS
- Vite bundler

### Extra Libraries Used in the Project

- react-router-dom: For routing
- zustand: For global state management
- react-toastify: For toast notifications
- lucide-react: For icons
- lodash: For utility functions

### High Level Overview

- When the user login, the user is redirected to the home page. And if the logged in user tries to access login page again, the user is redirected to the home page.
- When the user is not logged in then the user is redirected to the login page and the unauthorized user can't access home page, if they tries to do so they just redirected to login page.
- User email and token is stored in the localstorage of the browser.
- Catch all routes: This helps if user tries to access any route that is not defined in the application, user redirected to the home page/login page depending on the user is authenticated or not.
- Home Page Overview:
  - You can add a product by clicking on the `Add Product` button on the home page.
    - Recent added products are shown at the top.
  - You can delete any single product.
  - Also you can delete all the products at once by clicking on the `Delete All` button present on the home page.
  - You can load the sample data by clicking on the `Reset to Sample Data` button.
  - Search functionality is present to search the products by name.
  - All products are added in the local storage of the browser. So if user revisits the application, the data is still there.

<br>
<br>

> Not so important: It took me around 11 to 12 hours to complete this project.

