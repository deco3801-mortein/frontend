import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Plant.css";

/**
 * Component for each plant device displayed on home page.
 *
 * @param {string} id id of plant device
 * @param {string} imageSrc the image to be displayed
 * @param {string} name name of the plant device
 * @returns {ReactNode} react element to render the plant component
 */
function PlantItem(props) {
    const id = props.id;
    const imageSrc = props.imageSrc;
    const name = props.name;
    return (
        <div className="plant-item">
            <Link className="link-container" to={`/detail/${id}`}>
                <img src={imageSrc} alt={name} className="plant-image" />
                <div className="plant-name">{name}</div>
            </Link>
        </div>
    );
}

PlantItem.propTypes = {
    id: PropTypes.string,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
};

export default PlantItem;
