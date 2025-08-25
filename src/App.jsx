import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewCreator from './pages/ViewCreator';
import ShowCreator from './pages/ShowCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreator />} />
        <Route path="/view/:id" element={<ViewCreator />} />
        <Route path="/add" element={<AddCreator />} />
  <Route path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </Router>
  );
}

export default App
