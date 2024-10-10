// import { useParams } from "react-router-dom";
// import Meter from "../components/Meter";
// import "../pages/Detail.css";
// import Header from "../components/Navbar";
// import PropTypes from "prop-types";
// import image1 from "../assets/img/1.1.gif";
// import image2 from "../assets/img/5.gif";
// import image3 from "../assets/img/4.gif";

// // Function for main portion of detail page.
// function Detail(props) {
//     const { id } = useParams();
//     const device = props.userData.devices[id];
//     // Data from API to be displayed
//     const moistureData = device.data.moisture;
//     const sunlightData = device.data.sunlight;

//     const plantImages = [image1, image2, image3];

//     return (
//         <div>
//             <Header left="Back" title="Detail" showGuide={true} />
//             <div className="detail">
//                 <div className="plant-main">
//                     <img src={plantImages[id % 3]} alt="Plant image" className="plant-image" />
//                     <h2>{device.name}</h2>
//                 </div>

//                 <div className="plant-health">
//                     <h2 className="plant-health-title">Plant Health</h2>
//                     <Meter type="moisture" level={moistureData} />
//                     <Meter type="sunlight" level={sunlightData} />
//                     <div className="vibration">
//                         <h2 className="vibration-heading">Vibration</h2>
//                         <button
//                             className="vibration-button"
//                             value={device.id}
//                             onClick={props.toggleVibration}
//                         >
//                             {device.data.vibration ? "Off" : "On"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// Detail.propTypes = {
//     userData: PropTypes.array,
//     toggleVibration: PropTypes.func,
// };

// export default Detail;

import { useParams } from "react-router-dom";
import Meter from "../components/Meter";
import "../pages/Detail.css";
import Header from "../components/Navbar";
import PropTypes from "prop-types";
import image1 from "../assets/img/1.1.gif";
import image2 from "../assets/img/5.gif";
import image3 from "../assets/img/4.gif";

function Detail(props) {
    const { id } = useParams();
    const device = props.userData.devices[id];
    const moistureData = device.data.moisture;
    const sunlightData = device.data.sunlight;
    const humidityData = device.data.humidity;
    const temperatureData = device.data.temperature;

    // Determine color for moisture based on value
    const getColor = (type, value) => {
        const healthyGreen = "#4caf50";  
        const unhealthyRed = "#e57373";  

        switch (type) {
            case "moisture":
                return value >= 21 && value <= 40 ? healthyGreen : unhealthyRed;
            case "humidity":
                return value >= 60 && value <= 70 ? healthyGreen : unhealthyRed;
            case "temperature":
                return value >= 21 && value <= 29 ? healthyGreen : unhealthyRed;
            case "sunlight":
                return value >= 50 ? healthyGreen : unhealthyRed;
            default:
                return "#bdbdbd"; 
        }
    };

    const plantImages = [image1, image2, image3];

    return (
        <div>
            <Header left="Back" title="Detail" showGuide={true} />
            <div className="detail">
                <div className="plant-main">
                    <img src={plantImages[id % 3]} alt="Plant image" className="plant-image" />
                    <h2>{device.name}</h2>
                </div>

                <div className="plant-health">
                    <h2 className="plant-health-title">Plant Health</h2>
                    <Meter type="moisture" level={moistureData} color={getColor("moisture", moistureData)} />
                    <Meter type="sunlight" level={sunlightData} color={getColor("sunlight", sunlightData)} />
                    <Meter type="humidity" level={humidityData} color={getColor("humidity", humidityData)} />
                    <Meter type="temperature" level={temperatureData} color={getColor("temperature", temperatureData)} />
                    <div className="vibration">
                        <h2 className="vibration-heading">Vibration</h2>
                        <button
                            className="vibration-button"
                            value={device.id}
                            onClick={props.toggleVibration}
                        >
                            {device.data.vibration ? "Off" : "On"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Detail.propTypes = {
    userData: PropTypes.shape({
        devices: PropTypes.arrayOf(PropTypes.object)
    }),
    toggleVibration: PropTypes.func,
};


export default Detail;

