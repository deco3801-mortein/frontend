import PropTypes from "prop-types";
import Header from "../components/Header";
import PlantGrid from "../components/PlantGrid";
import "../pages/HomePage.css";

/**
 * Component for the detail page.
 * Detail page includes device health readings and vibration control toggle.
 *
 * @param {array} props.devices array of all device objects
 * @param {bool} props.devicesNotFound whether no devices can be retrieved from the API
 * @returns {ReactNode} react element to render the detail page
 */
const HomePage = (props) => {
    return (
        <div className="home-page">
            <Header left="Menu" title="My Plants" showGuide={true} />
            {!props.devices && !props.devicesNotFound && <p className="loading">Loading...</p>}
            {!props.devices && props.devicesNotFound && (
                <p className="devices-not-found">No Devices Found</p>
            )}
            {props.devices && !props.devicesNotFound && <PlantGrid devices={props.devices} />}
        </div>
    );
};

HomePage.propTypes = {
    devices: PropTypes.array,
    devicesNotFound: PropTypes.bool,
};

export default HomePage;
