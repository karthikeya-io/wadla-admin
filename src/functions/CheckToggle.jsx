import React, { useState, useEffect } from 'react';

const CheckToggle = () => {
  const [collapseState, setCollapseState] = useState('navbar-collapse collapse');

  useEffect(() => {
    const navbar = document.getElementById('myNavbar');
    if (navbar) {
      navbar.className = collapseState;
    }
  }, [collapseState]);

  const handleToggle = () => {
    if (collapseState === 'navbar-collapse collapse in') {
      setCollapseState('navbar-collapse collapse');
    }
  };

  return (
    <button type="button" onClick={handleToggle}>
      Toggle
    </button>
  );
};

export default CheckToggle;
