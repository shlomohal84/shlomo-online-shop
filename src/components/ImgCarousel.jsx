import { Carousel } from "react-bootstrap";
import BlankImgCarousel from "./BlankImgCarousel";
import GlobalContext from "../helpers/context/app.context";
import { useContext } from "react";

import styles from "../styles/ImgCarousel.module.css";

export default function ImgCarousel() {
    const { products } = useContext(GlobalContext);
    return (
        <Carousel className={styles["Carousel"]}>
            {products &&
                products.map((elm, i) => (
                    <Carousel.Item key={i}>
                        <div className={styles["img-wrapper"]}>
                            <img src={elm.mainImg} alt="main-img" className={styles["carousel-img"]} />
                        </div>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
}
