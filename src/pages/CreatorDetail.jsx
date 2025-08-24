import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

export default function CreatorDetail() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#f9f9f9', padding: '2rem', borderRadius: '10px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', marginBottom: '1rem', display: 'inline-block' }}>← Back to Home</Link>
      <h1 style={{ marginBottom: '1rem' }}>{creator.name}</h1>
      <img src={creator.imageURL} alt={creator.name} style={{ width: '100%', maxWidth: 300, borderRadius: '8px', marginBottom: '1rem' }} />
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', fontWeight: 'bold' }}>Visit Website</a>
    </div>
  );
}
