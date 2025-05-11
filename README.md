# Online Shop Simplified

## Short summary

The idea for the shop is pretty simple. 

* The application is divided into separate components, each representing an element of the shop: Product, Product List, Cart, and Cart Summary.
* The ProductList component is responsible for displaying products fetched from a products.json file. This can easily be replaced with a request to a backend or an API in the future.
* The entire app is governed by App.tsx, where the cart state is managed globally and shared across components. This ensures that the cart retains its state, no matter which page the user is on.
* After placing an order, users are redirected to the Order Confirmation page. The cart is reset and another order can be made.

Website is easily expandable. We can add new elements and css to make it pretty and elegant. 

## How to run?
First, you need to clone the repo. You can use the following command:

```
git clone https://github.com/hjxxzk/Agnieszka_Pisarek_Web_Wroclaw.git
```
Then navigate into the project directory and install the dependencies using:

```
npm install
```

Now you can run the development server:

```
npm run dev
```
The website should now be running locally at ```http://localhost```.
