import { useParams } from "react-router-dom";
import pestData from "../data/pest.json";
import "./PestDetail.css";
import Navbar from "../components/Navbar";

const PestDetail = () => {
    const { id } = useParams();
    const pest = pestData.pest.find((p) => p.id === parseInt(id, 10));

    if (!pest) {
        return <div>Pest not found</div>;
    }

    return (
        <div className="pest-detail-container">
            <Navbar left="Back" title="Search for a Pest" showGuide={false} />
            <div>
                <h2 className="title">{pest.name}</h2>
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
        </div>
    );
};

export default PestDetail;
