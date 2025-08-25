import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';
import './AddCreator.css';

export default function AddCreator() {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('creators')
            .insert([
                { name, url, description, imageURL }
            ]);
        if (!error) {
            navigate('/');
        } else {
            alert('Error adding creator!');
        }
    };

    return (
            <div className="add-creator-container">
                <Link to="/">
                    <button className="back-btn">← Back to Home</button>
                </Link>
                <form className="add-creator-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="url">URL</label>
                    <input
                        id="url"
                        type="url"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        required
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        rows={3}
                        required
                    />
                    <label htmlFor="imageURL">Image URL</label>
                    <input
                        id="imageURL"
                        type="url"
                        value={imageURL}
                        onChange={e => setImageURL(e.target.value)}
                        required
                    />
                    <button type="submit">Add Creator</button>
                </form>
            </div>
    );
}

