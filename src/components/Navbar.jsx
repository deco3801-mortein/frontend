import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../components/Navbar.css"
// Navigation header - used for both detail and plants pages
// (with different props values)
function Navbar(props) {
    const navigate = useNavigate(); // Initialize the navigation hook

    const handleSearchClick = () => {
        navigate("/search"); // Navigate to the search page when the icon is clicked
    };

    const handleMenuClick = () => {
        navigate("/login"); // Navigate to the login page when the icon is clicked
    };

    const handleBackClick = () => {
        navigate(-1);
    }

    const clickLeftFunction = props.left == "Back" ? handleBackClick : handleMenuClick;
    const guideButton = <h2 className="menu-icon" onClick={handleSearchClick} style={{cursor:'pointer'}}>&#128269;</h2>;

    return (
        <nav className="navbar">
            {props.left == "Back" ? <h2 className="back-icon" onClick={clickLeftFunction} style={{cursor:'pointer'}}>&lt;</h2> : <h2 className="menu-icon" onClick={clickLeftFunction} style={{cursor:'pointer'}}>&#9776;</h2>}
            <h1 className="navbar-title">{props.title}</h1>
            {props.showGuide ? guideButton : <div></div>}
        </nav>
    );
}

Navbar.propTypes = {
    left: PropTypes.string,
    title: PropTypes.number,
    showGuide: PropTypes.bool
};

export default Navbar;
