import { Link, useNavigate } from 'react-router-dom';
import './CreatorCard.css';

const CreatorCard = ({ id, name, url, description, imageURL }) => {
    const navigate = useNavigate();
    const handleCardClick = (e) => {
        // Prevent navigation if Edit button or Visit Website is clicked
        if (e.target.closest('.creator-card-edit-btn') || e.target.closest('.creator-card-link')) return;
        navigate(`/view/${id}`);
    };
    return (
        <div className="creator-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <img src={imageURL} alt={name} className="creator-card-img" />
            <h3 className="creator-card-title">{name}</h3>
            <p className="creator-card-desc">{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="creator-card-link">Visit Website</a>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button
                    className="creator-card-edit-btn"
                    onClick={e => {
                        e.stopPropagation();
                        navigate(`/edit/${id}`);
                    }}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default CreatorCard