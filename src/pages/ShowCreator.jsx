import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link, useNavigate } from 'react-router-dom';
import CreatorCard from '../components/CreatorCard';
import './ShowCreators.css';

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
    <div className="show-creators-container">
      {/* Banner Section */}
      <div className="show-creators-header">
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBL-KXjQVYTXGNkMjPj7n-XV5c9uDPPfN4cQ&s'} alt="Logo" className="show-creators-logo" />
        <h1 className="show-creators-title">CreatorVerse</h1>
      </div>

      {/* Add Creator Button */}
      <Link to="/add">
        <button className="show-creators-add-btn">Add Creator</button>
      </Link>

      {/* Cards Section */}
      {cards && cards.length > 0 ? (
        <div className="show-creators-cards">
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
        <div className="show-creators-empty">
          <h2>{'No Creators Added Yet 😞'}</h2>
        </div>
      )}
    </div>
  );
}

export default ShowCreator