import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PestSearch from "../components/PestSearch";
import pestsData from "../data/pest.json"; // pest information sourced from The Royal Horticultural Society and GrowVeg - links in ReadMe file
import "../pages/SearchPage.css";

/**
 * Component for the Pest page.
 * The pest page is the page which opens when the pest icon is clicked
 * from the guidance page.
 * From this page, you can search for common pests to get information.
 *
 * @returns {ReactNode} react element to render the pest page
 */
const PestPage = () => {
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    // Handle clicking on a pest to navigate to the detail page
    const handlePestClick = (id) => {
        navigate(`/pest-search/${id}`);
    };

    return (
        <div className="pest-page">
            <Header left="Back" title="Search for a Pest" showGuide={false} />
            <PestSearch setResults={setResults} data={pestsData.pest} />
            <ul className="results-list">
                {results.map((pest) => (
                    <li
                        key={pest.name}
                        className="result-item"
                        onClick={() => handlePestClick(pest.id)}
                    >
                        <h2>{pest.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PestPage;
