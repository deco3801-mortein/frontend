// import "../components/Header.css";
// import { Link } from "react-router-dom";

// const Header = (props) => {
//     return (
//         <header className="header">
//             <div className="menu-icon">&#9776;</div>
//             <h1 className="title">{props.title}</h1>
//             <Link to="/SearchPage">
//                 <div className="search-icon">&#128269;</div>
//             </Link>
//         </header>
//     );
// };

// export default Header;
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../components/Header.css";

const Header = (props) => {
    const navigate = useNavigate(); // Initialize the navigation hook

    const handleSearchClick = () => {
        navigate("/garden-guidance"); // Navigate to the search page when the icon is clicked
    };

    const handleMenuClick = () => {
        navigate("/login"); // Navigate to the login page when the icon is clicked
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const clickLeftFunction = props.left == "Back" ? handleBackClick : handleMenuClick;
    const guideButton = (
        <h2 className="search-icon" onClick={handleSearchClick} style={{ cursor: "pointer" }}>
            &#128269;
        </h2>
    );

    return (
        <header className="header">
            {props.left == "Back" ? (
                <h2 className="back-icon" onClick={clickLeftFunction} style={{ cursor: "pointer" }}>
                    &lt;
                </h2>
            ) : (
                <h2 className="menu-icon" onClick={clickLeftFunction} style={{ cursor: "pointer" }}>
                    &#9776;
                </h2>
            )}
            <h1 className="title">{props.title}</h1>
            {props.showGuide ? guideButton : <div></div>}
        </header>
    );
};

Header.propTypes = {
    left: PropTypes.string,
    title: PropTypes.string,
    showGuide: PropTypes.bool,
};

export default Header;
