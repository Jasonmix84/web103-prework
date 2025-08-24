import { Link } from 'react-router-dom';

const CreatorCard = ({ id, name, url, description, imageURL }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            width: '250px',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            cursor: 'pointer',
            transition: 'box-shadow 0.2s',
            position: 'relative',
        }}>
            <img src={imageURL} alt={name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <h3 style={{ margin: '0.5rem 0' }}>{name}</h3>
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '0.5rem' }}>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', fontWeight: 'bold', fontSize: '0.95rem' }}>Visit Website</a>
            <Link to={`/edit/${id}`}>
                <button style={{ position: 'absolute', top: 10, right: 10, padding: '0.3rem 0.8rem', fontSize: '0.9rem', background: '#ffc107', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Edit</button>
            </Link>
        </div>
    );
}

export default CreatorCard