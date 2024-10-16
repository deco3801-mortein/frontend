import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import Header from "../components/Header";
import "../pages/SearchPage.css";

/**
 * Component for the Search page.
 * The search page opens when you click a pest from the results of
 * your search on the plant page.
 * The information on this page is retrieved from the Perenual Plant API.
 *
 * @returns {ReactNode} react element to render the pest detail page
 */
const SearchPage = () => {
    const [results, setResults] = useState([]);
    const navigate = useNavigate(); // Initialize navigate hook

    // Handle clicking on a plant to navigate to the SearchDetail page
    const handlePlantClick = (id) => {
        navigate(`/search-detail/${id}`); // Navigate to the renamed SearchDetail page
    };

    return (
        <div className="search-page">
            <Header left="Back" title="Search for a Plant" showGuide={false} />
            <SearchBar setResults={setResults} />
            <ul className="results-list">
                {results.map((plant) => (
                    <li
                        key={plant.id}
                        className="result-item"
                        onClick={() => handlePlantClick(plant.id)}
                    >
                        <h2>{plant.common_name}</h2>
                        {plant.default_image && (
                            <img
                                src={plant.default_image.thumbnail}
                                alt={plant.common_name}
                                className="plant-thumbnail"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;
