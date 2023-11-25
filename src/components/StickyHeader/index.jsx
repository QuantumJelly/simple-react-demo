import React, { useState, useEffect } from 'react';
import './index.css';

const StickyHeader = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? 'sticky-header' : ''}>
      <h1>User Table</h1>
    </div>
  );
};

export default StickyHeader;