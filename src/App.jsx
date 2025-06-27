import React, { useState } from 'react';
import Timeline from './components/Timeline/common/Timeline';
import {
  labelItems,
  modeOptions,
  basicItems,
  colorItems,
  lastNodeItems,
  alternateItems,
  customItems,
  rightItems,
} from './components/config/timelineConfig';
import './App.css';

const App = () => {
  const [reverseStates, setReverseStates] = useState({
    color: false,
    lastNode: false,
  });

  const [mode, setMode] = useState('left');

  const handleToggle = (key) => {
    setReverseStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleChange = (e) => setMode(e.target.value);

  return (
    <div className="app-container">

      <div className="timeline-demo">
        <h2>Basic Timeline</h2>
        <Timeline items={basicItems} />
      </div>

      <div className="timeline-demo">
        <h2>Color Timeline</h2>
        <Timeline items={colorItems} reverse={reverseStates.color} />
        {/* <button onClick={() => handleToggle('color')} className="reverse-button">
          Toggle Reverse
        </button> */}
      </div>

      <div className="timeline-demo">
        <h2>Last Node & Reverse Timeline</h2>
        <Timeline items={lastNodeItems} pending="Recording..." reverse={reverseStates.lastNode} />
        <button onClick={() => handleToggle('lastNode')} className="reverse-button">
          Toggle Reverse
        </button>
      </div>

      <div className="timeline-demo">
        <h2>Alternate Timeline</h2>
        <Timeline mode="alternate" items={alternateItems} />
      </div>

      <div className="timeline-demo">
        <h2>Custom Timeline</h2>
        <Timeline items={customItems} />
      </div>

      <div className="timeline-demo">
        <h2>Right Alternate Timeline</h2>
        <Timeline mode="right" items={rightItems} />
      </div>

      <div className="timeline-demo">
        <h2>Label Mode Timeline</h2>
        <div className="mode-selector">
          {modeOptions.map((option) => (
            <label key={option.value} className="mode-option">
              <input
                type="radio"
                value={option.value}
                checked={mode === option.value}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </div>
        <Timeline items={labelItems} mode={mode} />
      </div>

    </div>
  );
};

export default App;
