import { Link, useNavigate } from "react-router";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
export default function Navbar({ handleToggleLogin, auth, currentWidth }) {
  const navigate = useNavigate();
  const [toggleBurger, setToggleBurger] = useState(false);

  const handleToggleBurger = () => {
    setToggleBurger(!toggleBurger);
  };
  return (
    <div className={styles.Navbar}>
      <div className={`${styles["nav-sub-containers"]} ${styles["nav-top"]}`}>
        <Link to="/" title="Homepage">
          <img className={styles["nav-top-logo"]} alt="logo" src="/icons/shop-logo.png" />
        </Link>
        <div className={styles["nav-top-icons"]}>
          <Link
            className={styles["nav-top-link"]}
            onClick={
              auth.isLoggedIn
                ? () => {
                    handleToggleLogin();
                    navigate("/");
                  }
                : () => navigate("/login")
            }
          >
            <img className={styles["nav-top-icon"]} alt="profile-icon" src="/icons/user.svg" />
            <span className={styles["nav-top-text"]}>{!auth.isLoggedIn ? "Login" : "Logout"}</span>
          </Link>
          <Link to="/cart" className={styles["nav-top-link"]}>
            <img className={styles["nav-top-icon"]} alt="shopping-bag-icon" src="/icons/shopping_bag.svg" />
            <span className={styles["nav-top-text"]}>Cart</span>
          </Link>
        </div>
      </div>
      <div className={`${styles["nav-sub-containers"]} ${styles["nav-mid"]}`}>
        <input
          className={styles["nav-mid-input"]}
          placeholder="Search for a product"
          name="navbar-search"
          autoComplete="true"
        />
        <div className={styles["nav-mid-search-wrapper"]}>
          <button className={styles["nav-mid-search-button"]}>OK</button>
        </div>
      </div>
      <div className={`${styles["nav-sub-containers"]} ${styles["nav-bottom"]}`}>
        {currentWidth < 768 ? (
          <>
            <button onClick={handleToggleBurger} className={styles["burger-button"]}>
              &#8801;
            </button>
            {toggleBurger && <Sidebar handleToggleLogin={handleToggleLogin} auth={auth} />}
          </>
        ) : (
          <div className={styles["nav-bottom-links-container"]}>
            <div className={styles["nav-bottom-link"]}>
              <Link to="/">Homepage</Link>
            </div>
            <div className={styles["nav-bottom-link"]}>
              <Link to="/categories">Categories</Link>
            </div>
            <div className={styles["nav-bottom-link"]}>
              <Link to="/favorites">Favorites</Link>
            </div>
            <div className={styles["nav-bottom-link"]}>
              <Link to="/cart">Cart</Link>
            </div>
            <div className={styles["nav-bottom-link"]}>
              {!auth.isLoggedIn ? (
                <Link to="/login">Login</Link>
              ) : (
                <button
                  onClick={() => {
                    handleToggleLogin();
                    navigate("/");
                  }}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  Logout
                </button>
              )}
            </div>
            <div className={styles["nav-bottom-link"]}>
              <a href="#">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
