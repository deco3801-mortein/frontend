import "./Plant.css";

const PlantItem = ({ imageSrc, name }) => {
    return (
        <div className="plant-item">
            <img src={imageSrc} alt={name} className="plant-image" />
            <div className="plant-name">{name}</div>
        </div>
    );
};

export default PlantItem;
