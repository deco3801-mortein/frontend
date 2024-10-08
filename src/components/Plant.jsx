// import React from 'react';
// import '../component/Plant.css';

// const PlantItem = ({ imageSrc, name }) => {
//     return (
//         <div className="plant-item">
//             <img src={imageSrc} alt={name} className="plant-image" />
//             <div className="plant-name">{name}</div>
//         </div>
//     );
// };

// export default PlantItem;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Plant.css";

function PlantItem(props) {
    const id = props.id;
    const imageSrc = props.imageSrc;
    const name = props.name;
    return (
        <div className="plant-item">
            <Link className="please" to={`/detail/${id}`}>
                <img src={imageSrc} alt={name} className="plant-image" />
                <div className="plant-name">{name}</div>
            </Link>
            {/* <div className="plant-name">{name}</div> */}
        </div>
    );
}

PlantItem.propTypes = {
    id: PropTypes.string,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
};

export default PlantItem;
