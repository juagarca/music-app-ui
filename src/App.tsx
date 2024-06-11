import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Artist, Artists, Release } from "./screens";
import { Navbar } from "./components";

import ROUTES from "./routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={ROUTES.artist} element={<Artist />} />
        <Route path={ROUTES.artists} element={<Artists />} />
        <Route path={ROUTES.release} element={<Release />} />
      </Routes>
    </Router>
  );
};

export default App;
