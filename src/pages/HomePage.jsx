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
            <Header />
            {props.userData && <PlantGrid userData={props.userData} />}
        </div>
    );
};

HomePage.propTypes = {
    userData: PropTypes.object,
};

export default HomePage;
