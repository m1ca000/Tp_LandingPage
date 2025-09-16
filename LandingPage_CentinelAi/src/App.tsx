import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;