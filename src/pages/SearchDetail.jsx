import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SearchDetail.css";

const API_KEY = "sk-7NuB66e38c2a660d46837";

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
    const scientificName = plantData.scientific_name?.join(", ") || "Unknown";
    const otherName = plantData.other_name?.join(", ") || "Unknown";

    return (
        <div className="search-detail-page">
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
                    <h3>Scientific Name:</h3>
                    <p>{scientificName}</p>
                </div>
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
        </div>
    );
};

export default SearchDetail;
