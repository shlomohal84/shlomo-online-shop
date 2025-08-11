import ProductCard from "./ProductCard";
import GlobalContext from "../helpers/context/app.context";
import { useContext } from "react";
export default function Favorites() {
    const { favorites } = useContext(GlobalContext);
    return (
        <>
            <h3 className="category-header">
                <span>Favorites</span>
            </h3>
            <div className="category">
                {favorites.map((product, i) => (
                    <ProductCard product={product} key={i} />
                ))}
            </div>
        </>
    );
}
