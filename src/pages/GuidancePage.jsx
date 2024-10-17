import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import plantImagePath from "../assets/img/plant.gif"; // © alekseyvanin / Adobe Stock
import pestImagePath from "../assets/img/pest.gif"; // © Alexandra Gl / Adobe Stock
import "./GuidancePage.css";

/**
 * Component for the Guidance page.
 * Guidance page is the page which opens when the search icon is clicked
 * from the home page and detail pages.
 * From this page, either pest or plant guides can be selected.
 *
 * @returns {ReactNode} react element to render the guidance page
 */
const GuidancePage = () => {
    const navigate = useNavigate();

    return (
        <div className="garden-guidance-page">
            <Header left="Back" title="Garden Guidance" showGuide={false} />
            <div className="icon-container">
                <div className="icon-circle" onClick={() => navigate("/search")}>
                    <img src={plantImagePath} alt="Plant" className="custom-icon" />
                </div>
                <p onClick={() => navigate("/search")}>Plant</p>
            </div>
            <div className="icon-container" onClick={() => navigate("/pest-search")}>
                <div className="icon-circle">
                    <img src={pestImagePath} alt="Pest" className="custom-icon" />
                </div>
                <p>Pest</p>
            </div>
        </div>
    );
};

export default GuidancePage;
