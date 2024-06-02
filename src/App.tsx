import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Artists } from './screens';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Artists />} />
      </Routes>
    </Router>
  );
};

export default App;
