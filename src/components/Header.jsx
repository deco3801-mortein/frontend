import "../components/Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="menu-icon">&#9776;</div>
            <h1 className="title">{props.title}</h1>
            <Link to="/guide">
                <div className="search-icon">&#128269;</div>
            </Link>
        </header>
    );
};

export default Header;
