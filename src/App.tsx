import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Artists, Favourites } from './screens';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Artists />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
};

export default App;
