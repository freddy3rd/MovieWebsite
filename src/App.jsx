import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import ErrorPage from "./ErrorPage";
import Navigation from "./components/Navigation";
import MovieDetail from "./components/MovieDetail";
import ContextProvide from "./components/ContextProvide";
import ProtectedRoutes from "./components/utils/ProtectedRoute";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <ContextProvide>
      <AnimatePresence>
        <Router>
          <div className="App">
            <Navigation />
            <div className="Content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/Details" element={<MovieDetail />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AnimatePresence>
    </ContextProvide>
  );
}

export default App;
