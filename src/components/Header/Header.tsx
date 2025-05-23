import "./Header.css";

interface Style {
    color: string
    fontSize: string
    width: string
    display: string
    justifyContent: string
}


const style: Style = {
    color: "blue",
    fontSize: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center"

}
function Header() {
    return (
        <header className="container" style={style}>
            <h1>Title</h1>
        </header>
    )

}

export default Header;