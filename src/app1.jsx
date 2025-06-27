import React from 'react';
import PropTypes from 'prop-types';

console.log('Vite mode:', import.meta.env.MODE);


const DummyComponent = ({ mode }) => {
  return <div>Mode is: {mode}</div>;
};

DummyComponent.propTypes = {
  mode: PropTypes.oneOf(['left', 'right', 'alternate']),
};

const App1 = () => {
  console.log('Vite mode:', import.meta.env.MODE); // Confirm mode
  return (
    <div>
      <h1>Manual PropTypes Test</h1>
      <DummyComponent mode="triangle" /> {/* trigger warning */}
    </div>
  );
};

export default App1;
