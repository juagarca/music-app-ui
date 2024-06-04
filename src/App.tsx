import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Artists, Artist } from './screens';

import ROUTES from './routes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.artist} element={<Artist />} />
        <Route path={ROUTES.artists} element={<Artists />} />
      </Routes>
    </Router>
  );
};

export default App;
