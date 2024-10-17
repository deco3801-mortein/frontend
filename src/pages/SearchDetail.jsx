import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "./SearchDetail.css";

// Perenual API key imported from .env file
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Component for the Search Detail page.
 * The search detail page is the page which opens when you click
 * the plant icon from the guidance page.
 * On this page you can search for plants from the Perenual Plant API.
 *
 * @returns {ReactNode} react element to render the pest detail page
 */
const SearchDetail = () => {
    const { id } = useParams();
    const [plantData, setPlantData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://perenual.com/api/species/details/${id}?key=${API_KEY}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch plant data");
                }
                return response.json();
            })
            .then((data) => {
                setPlantData(data);
            })
            .catch((error) => {
                console.error("Error fetching plant data:", error);
                setError("Failed to load plant details. Please try again.");
            });
    }, [id]);

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!plantData) {
        return <p>Loading...</p>;
    }

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
