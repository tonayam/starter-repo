import { useEffect } from 'react';
import { Routes, useLocation } from 'react-router-dom';

// PAGES WITHOUT AUTH
import {} from './pages';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <Routes></Routes>
    </>
  );
}

export default App;
