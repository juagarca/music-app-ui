import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Artist, Artists, List, Release, Upcoming } from "./screens";
import { Navbar } from "./components";

import ROUTES from "./routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={ROUTES.artist} element={<Artist />} />
        <Route path={ROUTES.artists} element={<Artists />} />
        <Route path={ROUTES.list} element={<List />} />
        <Route path={ROUTES.release} element={<Release />} />
        <Route path={ROUTES.upcoming} element={<Upcoming />} />
      </Routes>
    </Router>
  );
};

export default App;
