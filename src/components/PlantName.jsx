// import "./Plant.css";

// const PlantItem = ({ imageSrc, name }) => {
//     return (
//         <div className="plant-item">
//             <img src={imageSrc} alt={name} className="plant-image" />
//             <div className="plant-name">{name}</div>
//         </div>
//     );
// };

// export default PlantItem;

import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from 'react-icons/fa'; 

const PlantItem = ({ id, imageSrc, name, hasIssues }) => {
    
    console.log(`Plant ${name} (ID: ${id}) has issues: ${hasIssues}`);

    return (
        <Link to={`/detail/${id}`} className="plant-item">
            <div className="plant-icon-container">
                {hasIssues && (
                    <FaQuestionCircle className="question-icon" />
                )}
                <img src={imageSrc} alt={name} className="plant-icon" />
            </div>
            <p className="plant-name">{name}</p>
        </Link>
    );
};

PlantItem.propTypes = {
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hasIssues: PropTypes.bool.isRequired,
};

export default PlantItem;


