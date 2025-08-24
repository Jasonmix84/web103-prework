import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link, useNavigate } from 'react-router-dom';
import CreatorCard from '../components/CreatorCard'

const ShowCreator = () => {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
        .order('created_at', { ascending: false });
      setCards(data);
    };

    fetchCards();
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
        <img src={'../assets/react.svg'} alt="Logo" style={{ width: 60, height: 60, marginRight: '1rem' }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>CreatorVerse</h1>
      </div>

      {/* Add Creator Button */}
      <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
        <Link to="/add">
          <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Add Creator</button>
        </Link>
      </div>

      {/* Cards Section */}
      {cards && cards.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {cards.map(card => (
            <Link key={card.id} to={`/view/${card.id}`} style={{ textDecoration: 'none' }}>
              <CreatorCard
                id={card.id}
                name={card.name}
                url={card.url}
                description={card.description}
                imageURL={card.imageURL}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div>
          <h2>{'No Creators Added Yet 😞'}</h2>
        </div>
      )}
    </div>
  );
}

export default ShowCreator