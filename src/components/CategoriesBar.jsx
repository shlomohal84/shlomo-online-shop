import { Link } from "react-router";

export default function CategoriesBar() {
    return (
        <div className="categories-list-container">
            <div className="categories-list-item">
                <Link to="category/consoles">
                    <h3>Consoles</h3>
                </Link>
                <Link to="category/consoles">
                    <img alt="category img" src="/icons/consoles.svg" />
                </Link>
            </div>
            <div className="categories-list-item">
                <Link to="category/games">
                    <h3>Games</h3>
                </Link>
                <Link to="category/games">
                    <img alt="category img" src="/icons/games.svg" />
                </Link>
            </div>
            <div className="categories-list-item categories-list-item-smartphones">
                <Link to="category/smartphones">
                    <h3>Smartphones</h3>
                </Link>
                <Link to="category/smartphones">
                    <img alt="category img" src="/icons/smartphones.svg" />
                </Link>
            </div>
            <div className="categories-list-item">
                <Link to="category/pc_parts">
                    <h3>PC Parts</h3>
                </Link>
                <Link to="category/pc_parts">
                    <img alt="category img" src="/icons/pc_parts.svg" />
                </Link>
            </div>
            <div className="categories-list-item">
                <Link to="favorites">
                    <h3>Favorites</h3>
                </Link>
                <Link to="favorites">
                    <img alt="category img" src="/icons/thumbs_up.svg" />
                </Link>
            </div>
        </div>
    );
}
