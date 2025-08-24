import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewCreator from './pages/ViewCreator';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewCreator />} />
        <Route path="/show" element={<ShowCreators />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </Router>
  );
}

export default App
