import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './ViewCreator.css';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single();
      setCreator(data);
      setLoading(false);
    };
    fetchCreator();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!creator) return <div>Creator not found.</div>;

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);
      if (!error) {
        navigate('/');
      } else {
        alert('Error deleting creator!');
      }
    }
  };

  return (
    <div className="view-creator-container">
      <Link to="/" className="view-creator-back">← Back to Home</Link>
      <h1 className="view-creator-title">{creator.name}</h1>
      <img src={creator.imageURL} alt={creator.name} className="view-creator-img" />
      <p className="view-creator-desc">{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer" className="view-creator-link">Visit Website</a>
      <div className="view-creator-btns">
        <Link to={`/edit/${id}`}>
          <button className="view-creator-edit-btn">Edit</button>
        </Link>
        <button onClick={handleDelete} className="view-creator-delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default ViewCreator