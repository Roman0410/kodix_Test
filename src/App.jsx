import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Registr from './screens/auth/Register';
import LogIn from './screens/auth/LogIn';
import HomeScreen from './screens/home/Home';
import PostDetailsPage from './screens/postDetails/PostDetailsPage';
import './assets/styles/global.scss';

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/signup'];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);
  const shouldApplyBackground = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div className={shouldApplyBackground ? 'withBackground' : ''}>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Registr />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
