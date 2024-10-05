import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Device, HealthcheckData } from "@deco3801-mortein/mortein-sdk/services.gen";
import Meter from "../components/Meter";
import "../pages/Detail.css";
import Header from "../components/Navbar";
import PropTypes from "prop-types";
import image1 from "../assets/img/1.1.gif";
import image2 from "../assets/img/5.gif";
import image3 from "../assets/img/4.gif";

// Function for main portion of detail page.
function Detail() {
    const { id } = useParams();
    const [device, setDevice] = useState(null);

    useEffect(() => {
        const deviceId = {
            id: id
        };
        const newDevice = Device.getDeviceById(deviceId);
        newDevice.promise.then((data) => {
            setDevice(data)
        })
   }, [id]);
    console.log(device);

    //const device = props.userData.devices[id];
    // Data from API to be displayed
    /**const moistureData = device.data.moisture;
    const sunlightData = device.data.sunlight;

    const plantImages = [image1, image2, image3];
    **/
    return (
        <h1>{id}</h1>
        // <div>
        //     <Header left="Back" title="Detail" showGuide={true} />
        //     <div className="detail">
        //         <div className="plant-main">
        //             <img src={plantImages[id % 3]} alt="Plant image" className="plant-image" />
        //             <h2>{device.name}</h2>
        //         </div>

        //         <div className="plant-health">
        //             <h2 className="plant-health-title">Plant Health</h2>
        //             <Meter type="moisture" level={moistureData} />
        //             <Meter type="sunlight" level={sunlightData} />
        //             <div className="vibration">
        //                 <h2 className="vibration-heading">Vibration</h2>
        //                 <button
        //                     className="vibration-button"
        //                     value={device.id}
        //                     onClick={props.toggleVibration}
        //                 >
        //                     {device.data.vibration ? "Off" : "On"}
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

// Detail.propTypes = {
//     userData: PropTypes.array,
//     toggleVibration: PropTypes.func,
// };

export default Detail;
