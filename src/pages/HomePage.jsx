// import Header from "../components/Header";
// import PlantGrid from "../components/PlantGrid";
// import "../pages/HomePage.css";

// const HomePage = () => {
//     return (
//         <div className="home-page">
//             <Header />
//             <PlantGrid />
//         </div>
//     );
// };

// export default HomePage;

import PropTypes from "prop-types";
import Header from "../components/Header";
import PlantGrid from "../components/PlantGrid";
import "../pages/HomePage.css";

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
