import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Device, HealthcheckData } from "@deco3801-mortein/mortein-sdk/services.gen";
import Meter from "../components/Meter";
import "../pages/Detail.css";
import Header from "../components/Navbar";
import image1 from "../assets/img/1.1.gif";

// Function for main portion of detail page.
function Detail() {
    const { id } = useParams();

    const [deviceNotFound, setDeviceNotFound] = useState(false);

    const [device, setDevice] = useState(null);

    useEffect(() => {
        const deviceId = {
            id: id,
        };
        Device.getDeviceById(deviceId)
            .then((data) => {
                setDevice({
                    deviceId: data.id,
                    deviceName: data.name,
                });
            })
            .catch((error) => {
                console.error(error.message);
                setDeviceNotFound(true);
            });
    }, [id]);

    const [dataNotFound, setDataNotFound] = useState(false);

    const [currentHealthData, setCurrentHealthData] = useState(null);

    useEffect(() => {
        if (device) {
            HealthcheckData.getDeviceByDeviceIdHealthcheckDataLatest(device)
                .then((data) => {
                    setCurrentHealthData(data);
                })
                .catch((error) => {
                    console.log(error.message);
                    setDataNotFound(true);
                });
        }
    }, [device]);

    //const device = props.userData.devices[id];
    // Data from API to be displayed
    /**const moistureData = device.data.moisture;
    const sunlightData = device.data.sunlight;

    const plantImages = [image1, image2, image3];
    **/
    return (
        <div className="detail">
            <Header left="Back" title="Detail" showGuide={true} />
            {!device && !deviceNotFound && <p className="loading">Loading...</p>}
            {!device && deviceNotFound && <p className="device-not-found">Device Not Found</p>}
            {device && (
                <div className="detail-content">
                    <div className="plant-main">
                        <img src={image1} alt="Plant image" className="plant-image" />
                        <h2>{device.deviceName}</h2>
                    </div>
                    {!currentHealthData && !dataNotFound && <p className="loading">Loading...</p>}
                    {!currentHealthData && dataNotFound && <p className="data-not-found">Data Not Found</p>}
                    {currentHealthData && (
                        <div className="plant-health">
                            <h2 className="plant-health-title">Plant Health</h2>
                            <Meter type="moisture" level={currentHealthData.moisture} />
                            <Meter type="sunlight" level={currentHealthData.sunlight} />
                            <Meter type="temperature" level={currentHealthData.temperature} />
                            <div className="vibration">
                                <h2 className="vibration-heading">Vibration</h2>
                                <button
                                    className="vibration-button"
                                    value={device.id}
                                    //onClick={props.toggleVibration}
                                >
                                    {currentHealthData.isVibrating ? "Off" : "On"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// Detail.propTypes = {
//     userData: PropTypes.array,
//     toggleVibration: PropTypes.func,
// };

export default Detail;
