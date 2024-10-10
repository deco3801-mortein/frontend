import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const API_KEY = import.meta.env.VITE_API_KEY;

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (input.length >= 2) {
                setLoading(true);
                setError(null);

                try {
                    const response = await fetch(
                        `https://perenual.com/api/species-list?key=${API_KEY}&q=${input}`,
                    );

                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }

                    const data = await response.json();
                    setResults(data.data);
                } catch (err) {
                    setError("Failed to fetch plants. Please try again.");
                } finally {
                    setLoading(false);
                }
            } else {
                setResults([]);
            }
        };

        fetchData();
    }, [input, setResults]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <div className="search-container">
                <div className="title">
                    <h1>Search for a Plant</h1>
                </div>
                <div className="input-wrapper">
                    <FaSearch id="search-icon" />
                    <input
                        placeholder="Type the plant name here..."
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
