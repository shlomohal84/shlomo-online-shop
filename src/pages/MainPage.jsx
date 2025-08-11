export default function MainPage(props) {
    return (
        <div className="MainPage">
            <div className="content-container">{props.children}</div>
        </div>
    );
}
