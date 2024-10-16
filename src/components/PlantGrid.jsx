import PropTypes from "prop-types";
import PlantItem from "../components/Plant";
import "../components/PlantGrid";
import image1 from "../assets/img/1.1.gif";
import image2 from "../assets/img/5.gif";
import image3 from "../assets/img/4.gif";

const PlantGrid = (props) => {
    const plants = props.devices;
    const plantImages = [image1, image2, image3];
    let currentImage = 0;

    const names = ["Tomato Plant", "Kitchen Palm", "Orange Tree", "Lemon Tree", "Geranium", "Rose", "Outdoor Palm", "Cactus"];
    return (
        <div className="plant-grid">
            {plants.map((plant) => (
                <PlantItem
                    key={plant.id}
                    id={plant.id}
                    imageSrc={plantImages[currentImage % 3]}
                    name={names[currentImage++]}
                />
            ))}
        </div>
    );
};

PlantGrid.propTypes = {
    devices: PropTypes.array,
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
