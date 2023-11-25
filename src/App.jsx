import React from 'react';
import User from './pages/User';
import StickyHeader from './components/StickyHeader';
import './index.css';

const App = () => {
  return (
    <>
      <StickyHeader />
      <main>
        <User />
      </main>
    </>
  );
};

export default App;
