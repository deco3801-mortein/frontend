import PropTypes from "prop-types";

/**
 * Component for the tip below each meter of the detail page
 * Tip can be shown by clicking the question icon next to the meter
 * and hidden by clicking the close button under the tip text.
 *
 * @param {string} content tip text to be displayed
 * @param {func} onClose function to handle click of close button
 * @returns {ReactNode} react element to render the tip component
 */
function Tip({ content, onClose }) {
    return (
        <div className="tip-content">
            <p>{content}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

Tip.propTypes = {
    content: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Tip;
