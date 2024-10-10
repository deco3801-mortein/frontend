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

// import PropTypes from "prop-types";
// import Header from "../components/Header";
// import PlantGrid from "../components/PlantGrid";
// import "../pages/HomePage.css";

// const HomePage = (props) => {
//     return (
//         <div className="home-page">
//             <Header left="Menu" title="My Plants" showGuide={true} />
//             {!props.userData && <p className="loading">Loading...</p>}
//             {props.userData && <PlantGrid userData={props.userData} />}
//         </div>
//     );
// };

// HomePage.propTypes = {
//     userData: PropTypes.shape({
//         devices: PropTypes.arrayOf(PropTypes.object)
//     })
// };
// export default HomePage;

import React from 'react';
import PropTypes from "prop-types";
import Header from "../components/Header";
import PlantGrid from "../components/PlantGrid";
import "../pages/HomePage.css";

const HomePage = (props) => {
    const checkPlantIssues = (device) => {
        const { moisture, humidity, temperature, sunlight } = device.data;
        return (
            moisture < 21 || moisture > 40 ||
            humidity < 60 || humidity > 70 ||
            temperature < 21 || temperature > 29 ||
            sunlight < 50
        );
    };

    return (
        <div className="home-page">
            <Header left="Menu" title="My Plants" showGuide={true} />
            {!props.userData && <p className="loading">Loading...</p>}
            {props.userData && <PlantGrid userData={props.userData} checkPlantIssues={checkPlantIssues} />}
        </div>
    );
};

HomePage.propTypes = {
    userData: PropTypes.shape({
        devices: PropTypes.arrayOf(PropTypes.object)
    })
};

export default HomePage;