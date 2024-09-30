import Meter from "../components/Meter";
import "../pages/Detail.css";
import Header from "../components/Header";
import PropTypes from "prop-types";

// Function for main portion of detail page.
function Detail(props) {
    // Data from API to be displayed
    console.log(props.imageSrc);
    const plantData = props.plantData;
    const moistureData = props.plantData.data.moisture;
    const sunlightData = props.plantData.data.sunlight;

    return (
        <div>
            <Header left="Back" title="Detail" showGuide={true} />
            <div className="detail">
                <div className="plant-main">
                    <img src={props.imageSrc} alt="Image of plant" className="plant-image" />
                    <h2>{plantData.name}</h2>
                </div>

                <div className="plant-health">
                    <h2 className="plant-health-title">Plant Health</h2>
                    <Meter type="moisture" level={moistureData} />
                    <Meter type="sunlight" level={sunlightData} />
                    <div className="vibration">
                        <h2 className="vibration-heading">Vibration</h2>
                        <button
                            className="vibration-button"
                            value={plantData.id}
                            onClick={props.toggleVibration}
                        >
                            {plantData.data.vibration ? "Off" : "On"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Detail.propTypes = {
    plantData: PropTypes.object,
    toggleVibration: PropTypes.func,
    imageSrc: PropTypes.string,
};

export default Detail;
