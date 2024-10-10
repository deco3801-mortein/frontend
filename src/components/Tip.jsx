import PropTypes from 'prop-types';

function Tip({ content, onClose }) {
  return (
    <div className="tip-overlay">
      <div className="tip-content">
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

Tip.propTypes = {
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Tip;