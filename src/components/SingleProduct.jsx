import { useContext, useState } from "react";
import { useParams } from "react-router";
import GlobalContext from "../helpers/context/app.context";

import ProductButtons from "./ProductButtons";

import styles from "../styles/products.module.css";
import Specs from "./Specs";

export default function SingleProduct() {
  const { products } = useContext(GlobalContext);
  const id = useParams().id;
  const product = products && products.find((p) => p.id === id);

  const [counter, setCounter] = useState(1);
  const [currentMainImg, setCurrentMainImg] = useState(products && product && product.mainImg);

  const [wasMouseOver, setWasMouseOver] = useState(false);
  const handleCounterChange = (operator) => {
    if (operator == "+") setCounter(counter + 1);
    else if (operator == "-" && counter > 1) setCounter(counter - 1);
  };

  const handleThumbnailMouseOver = (img) => {
    setCurrentMainImg(img);
    setWasMouseOver(true);
  };

  const handleThumbnailMouseOut = () => {
    if (wasMouseOver) {
      setCurrentMainImg(product && product.mainImg);
      setWasMouseOver(false);
    }
  };
  return (
    <div className={styles["product-container"]}>
      <h2 className={styles["product-page-header"]}>{product && product.name}</h2>
      <div className={styles["img-group"]}>
        <div className={styles["main-img-wrapper"]}>
          <img className={styles["main-img"]} src={currentMainImg} alt="product-photo" />
        </div>
        <div className={styles["product-thumbnails-container"]}>
          {product &&
            product.thumbnails.map((img, i) => (
              <div key={i} className={styles["product-thumbnail-wrapper"]}>
                <img
                  className={styles["product-thumbnail"]}
                  src={img}
                  alt="product-photo"
                  onMouseEnter={() => handleThumbnailMouseOver(img)}
                  onMouseOut={handleThumbnailMouseOut}
                />
              </div>
            ))}
        </div>
      </div>
      <p className="price">
        Price:
        <span>
          <span> {product && product.price}$</span>
        </span>
      </p>
      <ProductButtons product={product} />
      <div className={styles["qty-group"]}>
        <button className={styles["decrease-button"]} onClick={() => handleCounterChange("-")}>
          -
        </button>
        <input value={counter} readOnly={true} className={styles["qty-input"]} />
        <button className={styles["increase-button"]} onClick={() => handleCounterChange("+")}>
          +
        </button>
      </div>
      <div className="specs-wrapper">
        <Specs product={product} />
      </div>
      {/* <div className={styles["product-description"]}>
        <h3 className={styles["product-description-header"]}>Product Description:</h3>
        <div className={styles["description-table"]}>
          <div className={styles["description-rows"]}>
            <div className={styles["description-cols-title"]}>CPU</div>
            <div className={styles["description-cols"]}>{product && product.description.cpu}</div>
          </div>

          <div className={styles["description-rows"]}>
            <div className={styles["description-cols-title"]}>GPU</div>
            <div className={styles["description-cols"]}>{product && product.description.gpu}</div>
          </div>
          <div className={styles["description-rows"]}>
            <div className={styles["description-cols-title"]}>RAM</div>
            <div className={styles["description-cols"]}>{product && product.description.ram}</div>
          </div>
          <div className={styles["description-rows"]}>
            <div className={styles["description-cols-title"]}>Internal Storage</div>
            <div className={styles["description-cols"]}>{product && product.description.internalStorage}</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
