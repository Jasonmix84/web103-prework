import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link, useNavigate } from 'react-router-dom';
import CreatorCard from '../components/CreatorCard'

const ViewCreator = () => {
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
      
    </div>
  );
}

export default ViewCreator