import PropTypes from "prop-types";
import PlantItem from "../components/Plant";
import "../components/PlantGrid";

const PlantGrid = (props) => {
    const plants = props.userData.devices;
    const plantImages = [
        "./src/assets/img/1.1.gif",
        "./src/assets/img/5.gif",
        "./src/assets/img/4.gif",
    ];
    let currentImage = 0;

    return (
        <div className="plant-grid">
            {plants.map((plant) => (
                <PlantItem
                    key={plant.id}
                    id={plant.id}
                    imageSrc={plantImages[currentImage++ % 3]}
                    name={plant.name}
                />
            ))}
        </div>
    );
};

PlantGrid.propTypes = {
    userData: PropTypes.object,
};

export default PlantGrid;

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
