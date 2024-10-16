import { useParams } from "react-router-dom";
import pestData from "../data/pest.json";
import Header from "../components/Header";
import "./PestDetail.css";

/**
 * Component for the Pest Detail page.
 * The pest detail page is the page which opens when you click a pest from
 * from the results of your search on the pest page.
 *
 * @returns {ReactNode} react element to render the pest detail page
 */
const PestDetail = () => {
    const { id } = useParams();
    const pest = pestData.pest.find((p) => p.id === parseInt(id, 10));

    if (!pest) {
        return <div>Pest not found</div>;
    }

    return (
        <div className="pest-detail-page">
            <Header left="Back" title="Search for a Pest" showGuide={false} />
            <div className="pest-detail-container">
                <div>
                    <h1 className="title">{pest.name}</h1>
                </div>
                <div className="pest-content">
                    <div className="pest-image-container">
                        <img src="/path/to/your/image.png" alt={pest.name} className="pest-image" />
                    </div>
                    <h2>Description</h2>
                    <p>{pest.description}</p>
                    <h2>Damage</h2>
                    <p>{pest.damage}</p>
                    <h2>Tips</h2>
                    <p>{pest.tips}</p>
                </div>
                <div className="pest-footer">
                    <p className="footer-text">
                        Pest Information gathered from GrowVeg and the RHS Biodiversity Database
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PestDetail;
