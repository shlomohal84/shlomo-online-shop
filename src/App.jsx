import { Route, HashRouter as Router, Routes, Navigate } from "react-router";
import { useEffect, useState } from "react";
import GlobalContext from "./helpers/context/app.context";

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import CategoriesBar from "./components/CategoriesBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Categories from "./components/Categories";
import SingleProduct from "./components/SingleProduct";
import Category from "./components/Category";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

export default function App() {
  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    const assignCategories = [];

    async function getData() {
      try {
        const res = await fetch("data.json");
        const data = await res.json();
        data.auth = {
          isLoggedIn: false,
          username: "",
          email: "",
        };
        data.favorites = [];
        data.cart = { products: [] };
        data.cart.products.forEach((product) => data.cart.subtotal + product.price);

        localStorage.setItem("onlineShop", JSON.stringify(data));
        const ls = JSON.parse(localStorage.getItem("onlineShop"));
        setProducts(ls.products);
        setAuth(ls.auth);
        setFavorites(ls.favorites);
        setCart(ls.cart);
        ls.products.forEach((product) => {
          if (!assignCategories.includes(product.category)) assignCategories.push(product.category);
        });
        setCategories(assignCategories);
        getSubtotal();
      } catch (err) {
        console.log(err);
      }
      return () => window.removeEventListener("resize", handleResize);
    }

    if (!localStorage.getItem("onlineShop") || !JSON.parse(localStorage.getItem("onlineShop")).products) getData();
    else {
      if (!Object.keys(JSON.parse(localStorage.getItem("onlineShop")).auth).length) {
        localStorage.setItem(
          "onlineShop",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("onlineShop")),
            auth: {
              isLoggedIn: false,
              username: "",
              email: "",
            },
          })
        );
      }
      setProducts(ls.products);
      setAuth(ls.auth);
      setFavorites(ls.favorites);
      setCart({ ...ls.cart });
      ls.products &&
        ls.products.forEach((product) => {
          if (!assignCategories.includes(product.category)) assignCategories.push(product.category);
        });
      setCategories(assignCategories);
      getSubtotal();
    }
  }, []);

  const getSubtotal = () => {
    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    let sum = 0;
    ls.cart.products.forEach((p) => (sum += p.price));
    setSubtotal(sum);
  };

  const handleToggleLogin = (username, email) => {
    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    if (!ls.auth.isLoggedIn) {
      ls.auth = { ...ls.auth, isLoggedIn: true, username: username, email: email };
      localStorage.setItem("onlineShop", JSON.stringify(ls));
      setAuth((prevState) => ({ ...prevState, isLoggedIn: ls.auth.isLoggedIn, username: username, email: email }));
    } else {
      ls.auth = { ...ls.auth, isLoggedIn: false, username: "", email: "" };
      localStorage.setItem("onlineShop", JSON.stringify(ls));
      setAuth((prevState) => ({ ...prevState, isLoggedIn: ls.auth.isLoggedIn, username: "", email: "" }));
    }
  };

  const handleAddToFavorites = (product) => {
    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    if (!ls.favorites.some((favorite) => favorite.id === product.id)) {
      ls.favorites = [...ls.favorites, product];
      localStorage.setItem("onlineShop", JSON.stringify(ls));
      setFavorites(ls.favorites);
    }
  };

  const handleRemoveFromFavorites = (product) => {
    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    ls.favorites = ls.favorites.filter((favorite) => favorite.id !== product.id);
    localStorage.setItem("onlineShop", JSON.stringify(ls));
    setFavorites(ls.favorites);
  };

  const handleAddToCart = (product) => {
    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    if (!cart.products.some((cartItem) => cartItem.id === product.id)) {
      ls.cart.products = [...ls.cart.products, product];
      localStorage.setItem("onlineShop", JSON.stringify(ls));
      setCart((prevState) => ({ ...prevState, products: ls.cart.products }));
      getSubtotal(ls);
    }
  };

  const handleRemoveFromCart = (product) => {
    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    ls.cart.products = ls.cart.products.filter((cartItem) => cartItem.id !== product.id);
    localStorage.setItem("onlineShop", JSON.stringify(ls));
    setCart((prevState) => ({ ...prevState, products: [...ls.cart.products] }));
    getSubtotal(ls);
  };

  const handlePurchase = () => {
    const ls = JSON.parse(localStorage.getItem("onlineShop"));
    ls.cart.products = [];
    localStorage.setItem("onlineShop", JSON.stringify(ls));
    setCart((prevState) => ({ ...prevState, products: [...ls.cart.products] }));
    setSubtotal(0);
  };
  return (
    <Router>
      <GlobalContext.Provider
        value={{
          products: products,
          categories: categories,
          auth: auth,
          cart: cart,
          favorites: favorites,
          handleToggleLogin: handleToggleLogin,
          handleAddToFavorites: handleAddToFavorites,
          handleRemoveFromFavorites: handleRemoveFromFavorites,
          handleAddToCart: handleAddToCart,
          handleRemoveFromCart: handleRemoveFromCart,
          subtotal: subtotal,
          handlePurchase: handlePurchase,
        }}
      >
        <title>My Online Shop</title>
        <div className="App">
          <Navbar auth={auth} handleToggleLogin={handleToggleLogin} currentWidth={currentWidth} />
          {/* <Hero /> */}
          <CategoriesBar />
          <MainPage>
            <Routes>
              <Route index element={<HomePage />} />
              <Route
                path="/categories"
                element={
                  <div className="categories-container">
                    {categories.map((category, i) => (
                      <Categories key={i} category={category} />
                    ))}
                  </div>
                }
              />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
              {<Route path="/login" element={!auth.isLoggedIn ? <Login /> : <Navigate to="/" replace />} />}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>ERROR 404</h1>} />
            </Routes>
          </MainPage>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </Router>
  );
}
