import HeroClock from "./HeroClock";

export default function Hero() {
    //

    const createDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day > 10 ? day : "0" + day}/${month > 10 ? month : "0" + month}/${year}`;
    };

    return (
        <div className="hero-container">
            <p className="hero-title">
                <span>Because low prices are overrated!</span>
                <span>{createDate()}</span>
                <span>
                    <HeroClock />
                </span>
            </p>
            <img className="hero-img" src="/images/hero_img.png" alt="hero-img" draggable={false} />
        </div>
    );
}
