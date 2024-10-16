import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import pestsData from "../data/pest.json";
import "./SearchBar.css";

/**
 * Component for the search bar of the pest page
 *
 * @param {string} setResults function to set the state of results
 * @returns {ReactNode} react element to render the search bar for pests
 */
export const PestSearch = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        setLoading(true);
        setError(null);

        try {
            if (input.length >= 2) {
                // Filter the pests based on the search input
                const filteredResults = pestsData.pest.filter((pest) =>
                    pest.name.toLowerCase().includes(input.toLowerCase()),
                );

                setResults(filteredResults);
            } else {
                setResults([]);
            }
        } catch (err) {
            setError("An error occurred while searching. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value);
        handleSearch(); // Trigger search on input change
    };

    return (
        <>
            <div className="search-container">
                <div className="title">
                    <h1>Search for a Pest</h1>
                </div>
                <div className="input-wrapper">
                    <FaSearch id="search-icon" />
                    <input
                        placeholder="Type the pest name here..."
                        value={input}
                        onChange={handleChange}
                    />
                </div>
            </div>
            {loading && <p className="text-gray-600">Loading...</p>}
            {error && (
                <div className="message-none-box">
                    <b>{error}</b>
                </div>
            )}
        </>
    );
};

PestSearch.propTypes = {
    setResults: PropTypes.func,
};

export default PestSearch;
