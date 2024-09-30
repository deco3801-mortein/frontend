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

import Header from "../components/Header";
import PlantGrid from "../components/PlantGrid";
import "../pages/HomePage.css";

const HomePage = (props) => {
    console.log(props.userData);
    return (
        <div className="home-page">
            <Header />
            {props.userData && <PlantGrid userData={props.userData}/>}
        </div>
    );
};

export default HomePage;
