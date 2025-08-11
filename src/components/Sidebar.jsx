import { Link } from "react-router";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar({ auth, handleToggleLogin }) {
  return (
    <div className={styles["Sidebar"]}>
      <div className={styles["nav-bottom-links-container"]} style={{ paddingTop: "30px" }}>
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
                padding: 0,
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
    </div>
  );
}
