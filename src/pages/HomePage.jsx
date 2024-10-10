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
            {!props.userData && !props.devicesNotFound && <p className="loading">Loading...</p>}
            {!props.userData && props.devicesNotFound && <p className="devices-not-found">No Devices Found</p>}
            {props.userData && !props.devicesNotFound && <PlantGrid userData={props.userData} />}
        </div>
    );
};

HomePage.propTypes = {
    userData: PropTypes.array,
    devicesNotFound: PropTypes.bool,
};

export default HomePage;
