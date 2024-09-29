import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from '../HomePage/HomePage';
import './App.scss';
import Header from '../Header/Header';
import AboutPage from '../AboutPage/AboutPage';
import Portfolio from '../Portfolio/Portfolio';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ scale: 1, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 1, opacity: 0, rotateY: 180 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/a_propos"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Portfolio />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
