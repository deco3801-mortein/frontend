// import PropTypes from "prop-types";
// import PlantItem from "../components/Plant";
// import "../components/PlantGrid";
// import image1 from "../assets/img/1.1.gif";
// import image2 from "../assets/img/5.gif";
// import image3 from "../assets/img/4.gif";

// const PlantGrid = (props) => {
//     const plants = props.userData.devices;
//     const plantImages = [image1, image2, image3];
//     let currentImage = 0;

//     return (
//         <div className="plant-grid">
//             {plants.map((plant) => (
//                 <PlantItem
//                     key={plant.id}
//                     id={plant.id}
//                     imageSrc={plantImages[currentImage++ % 3]}
//                     name={plant.name}
//                 />
//             ))}
//         </div>
//     );
// };

// PlantGrid.propTypes = {
//     userData: PropTypes.object,
// };

// export default PlantGrid;

// import React from 'react';
// import PlantItem from './Plant';
// import './PlantGrid.css';

// const PlantGrid = () => {
//     const plants = [
//         { id: 1, imageSrc: require('./src/assets/img/1.1.gif'), name: 'Plant 1' },
//         { id: 2, imageSrc: require('./src/assets/img/1.1.gif'), name: 'Plant 2' },
//         { id: 3, imageSrc: require('./src/assets/img/1.1.gif'), name: 'Plant 3' },
//         { id: 4, imageSrc: require('./src/assets/img/1.1.gif'), name: 'Plant 4' },
//         { id: 5, imageSrc: require('./src/assets/img/1.1.gif'), name: 'Plant 5' },
//         { id: 6, imageSrc: require('./src/assets/img/1.1.gif'), name: 'Plant 6' },
//     ];

//     return (
//         <div className="plant-grid">
//             {plants.map(plant => (
//                 <PlantItem key={plant.id} id={plant.id} imageSrc={plant.imageSrc} name={plant.name} />
//             ))}
//         </div>
//     );
// };

// export default PlantGrid;

import React from 'react';
import PropTypes from "prop-types";
import PlantItem from "../components/Plant";
import "../components/PlantGrid.css";
import image1 from "../assets/img/1.1.gif";
import image2 from "../assets/img/5.gif";
import image3 from "../assets/img/4.gif";

const PlantGrid = (props) => {
    const plants = props.userData.devices;
    const plantImages = [image1, image2, image3];
    let currentImage = 0;

    const isParameterHealthy = (type, value) => {
        switch (type) {
            case "moisture":
                return value >= 21 && value <= 40;
            case "humidity":
                return value >= 60 && value <= 70;
            case "temperature":
                return value >= 21 && value <= 29;
            case "sunlight":
                return value >= 50;
            default:
                return true;
        }
    };

    const hasUnhealthyParameter = (plant) => {
        return Object.entries(plant.data).some(([key, value]) => !isParameterHealthy(key, value));
    };

    return (
        <div className="plant-grid">
            {plants.map((plant) => (
                <PlantItem
                    key={plant.id}
                    id={plant.id}
                    imageSrc={plantImages[currentImage++ % 3]}
                    name={plant.name}
                    hasIssues={hasUnhealthyParameter(plant)}
                />
            ))}
        </div>
    );
};

PlantGrid.propTypes = {
    userData: PropTypes.shape({
        devices: PropTypes.arrayOf(PropTypes.object)
    }),
};

export default PlantGrid;
