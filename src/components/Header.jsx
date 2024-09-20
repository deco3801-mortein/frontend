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
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../components/Header.css';

const Header = () => {
    const navigate = useNavigate(); // Initialize the navigation hook

    const handleSearchClick = () => {
        navigate('/search'); // Navigate to the search page when the icon is clicked
    };

    return (
        <header className="header">
            <div className="menu-icon">&#9776;</div>
            <h1 className="title">My Plant</h1>
            <div className="search-icon" onClick={handleSearchClick}>&#128269;</div>
        </header>
    );
};

export default Header;
