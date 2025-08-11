import { useLocation, useNavigate } from "react-router";
import styles from "../styles/products.module.css";
import { useContext } from "react";
import GlobalContext from "../helpers/context/app.context";
export default function ProductButtons({ product }) {
  const {
    auth,
    handleAddToFavorites,
    handleRemoveFromFavorites,
    handleAddToCart,
    handleRemoveFromCart,
    favorites,
    cart,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className={styles["product-button-group"]}>
      {favorites.some((f) => f.id == product.id) ? (
        <button
          className={styles["cart-remove-button"]}
          onClick={() => handleRemoveFromFavorites(product)}
          title="Remove from favorites"
        >
          <img src="/icons/thumbs-down-solid-full.svg" />
        </button>
      ) : (
        <button
          className={styles["cart-add-button"]}
          title="Add to favorites"
          onClick={() => (auth.isLoggedIn ? handleAddToFavorites(product) : navigate("/login"))}
        >
          <img src="/icons/thumbs-up-solid-full.svg" />
        </button>
      )}

      {cart.products && cart.products.some((c) => c.id == product.id) ? (
        <button
          className={styles["cart-add-button"]}
          title="Remove from cart"
          onClick={() => handleRemoveFromCart(product)}
        >
          <img src="/icons/trash-can-solid-full.svg" />
        </button>
      ) : (
        <button className={styles["cart-add-button"]} title="Add to cart" onClick={() => handleAddToCart(product)}>
          <img src="/icons/cart-plus-solid-full.svg" />
        </button>
      )}
    </div>
  );
}
