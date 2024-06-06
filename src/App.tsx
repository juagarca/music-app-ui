import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Artists, Artist } from "./screens";
import { Navbar } from "./components";

import ROUTES from "./routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={ROUTES.artist} element={<Artist />} />
        <Route path={ROUTES.artists} element={<Artists />} />
      </Routes>
    </Router>
  );
};

export default App;
