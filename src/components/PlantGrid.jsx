import PropTypes from "prop-types";
import PlantItem from "../components/Plant";
import "../components/PlantGrid";
import image1 from "../assets/img/1.1.gif"; // © Good Studio / Adobe Stock
import image2 from "../assets/img/5.gif"; // © Good Studio / Adobe Stock
import image3 from "../assets/img/4.gif"; // © Good Studio / Adobe Stock

/**
 * Component for the grid of plants on the home page.
 *
 * @param {array} devices the devices to be displayed in the grid
 * @returns {ReactNode} react element to render the plant grid
 */
const PlantGrid = (props) => {
    const plants = props.devices;

    // plant images to be used for the devices
    const plantImages = [image1, image2, image3];
    // used to store the current image index for the plantImages array
    let currentImage = 0;

    return (
        <div className="plant-grid">
            {plants.map((plant) => (
                <PlantItem
                    key={plant.id}
                    id={plant.id}
                    imageSrc={plantImages[currentImage % 3]}
                    name={plant.name}
                />
            ))}
        </div>
    );
};

PlantGrid.propTypes = {
    devices: PropTypes.array,
};

export default PlantGrid;
