import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SearchDetail.css";
import Header from "../components/Header";

const API_KEY = import.meta.env.VITE_API_KEY;

const SearchDetail = () => {
    const { id } = useParams(); // Get plant ID from URL
    const [plantData, setPlantData] = useState(null);

    useEffect(() => {
        // Fetch plant data from API based on plant ID
        fetch(`https://perenual.com/api/species-list?key=${API_KEY}&q=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data.length > 0) {
                    setPlantData(data.data[0]); // Set the first plant result
                }
            })
            .catch((error) => console.error("Error fetching plant data:", error));
    }, [id]);

    if (!plantData) {
        return <p>Loading...</p>; // Display loading while fetching
    }

    // Ensure information is an array
    const sunlight = Array.isArray(plantData.sunlight)
        ? plantData.sunlight.join(", ")
        : plantData.sunlight || "Unknown";
    const otherName = plantData.other_name?.join(", ") || "Unknown";

    return (
        <div className="search-detail-page">
            <Header left="Back" title="Plant Detail" showGuide={false} />
            <div className="plant-main">
                <img
                    src={plantData.default_image?.regular_url}
                    alt={plantData.common_name}
                    className="plant-image"
                />
                <h1 className="plant-title">{plantData.common_name}</h1>
            </div>
            <div className="plant-info">
                <div className="info-section">
                    <h3>Other Name:</h3>
                    <p>{otherName}</p>
                </div>
                <div className="info-section">
                    <h3>Cycle:</h3>
                    <p>{plantData.cycle}</p>
                </div>
                <div className="info-section">
                    <h3>Watering:</h3>
                    <p>{plantData.watering}</p>
                </div>
                <div className="info-section">
                    <h3>Sunlight:</h3>
                    <p>{sunlight}</p>
                </div>
            </div>
            <div className="plant-footer">
                <p className="footer-text">Plant information from the Perenual Plant API</p>
            </div>
        </div>
    );
};

export default SearchDetail;
