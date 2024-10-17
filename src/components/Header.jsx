import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import PropTypes from "prop-types";
import "../components/Header.css";

/**
 * Component for the header used in all pages except the login page.
 *
 * @param {string} left what should be on the left side of the header
 * @param {string} title what should be on the right side of the header
 * @param {bool} showGuide if the guide button and link should be displayed on the right side
 * @returns {ReactNode} react element to render the header
 */
const Header = (props) => {
    const navigate = useNavigate(); // Initialize the navigation hook

    const handleSearchClick = () => {
        navigate("/garden-guidance"); // Navigate to the search page when the icon is clicked
    };

    const handleMenuClick = () => {
        navigate("/login"); // Navigate to the login page when the icon is clicked
    };

    const handleBackClick = () => {
        navigate(-1); // Navigate to the last page when the icon is clicked
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
