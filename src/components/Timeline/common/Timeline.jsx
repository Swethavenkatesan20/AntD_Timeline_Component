import React, { useState } from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'prop-types/checkPropTypes';

import TimelineItem from './TimelineItem';
import './timeline.css';
import LoadingOutlined from '../../../shared/LoadingOutlined';
import { itemShape, modeProp } from './propTypes';

const defaultBasicItems = [
  { children: 'Basic timeline item 1' },
  { children: 'Basic timeline item 2' },
  { children: 'Basic timeline item 3' },
];

const Timeline = ({
  items,
  pending = false,
  pendingDot = <LoadingOutlined />,
  reverse = false,
  mode,               // controlled
  defaultMode = 'left', // uncontrolled fallback
  onModeChange        // optional callback
}) => {
  if (import.meta.env.DEV) {
    checkPropTypes(
      Timeline.propTypes,
      { items, pending, pendingDot, reverse, mode },
      'prop',
      'Timeline'
    );
  }

  //  internal state for uncontrolled mode
  const [internalMode, setInternalMode] = useState(defaultMode);

  //  final mode to use (controlled or fallback)
  const currentMode = mode !== undefined ? mode : internalMode;

  //  optional handler to change mode
  const handleModeChange = (newMode) => {
    if (onModeChange) onModeChange(newMode);
    else setInternalMode(newMode);
  };

  let finalItems = [...(items || defaultBasicItems)];

  if (pending) {
    finalItems.push({
      dot: pendingDot,
      children: typeof pending === 'boolean' ? null : pending,
      isPending: true,
    });
  }

  if (reverse) {
    finalItems = finalItems.reverse();
  }

  const hasLabelInTimeline = items.some(item => item.label);

  return (
    <section className="timeline-wrapper">
      {/* Optional */}
      {/* <button onClick={() => handleModeChange('right')}>Change Mode</button> */}

      <ol className={`timeline ${currentMode ? `timeline-${currentMode}` : ''}`}>
        {finalItems.map((item, index) => (
          <TimelineItem 
            key={index}
            {...item}
            index={index}
            mode={currentMode}
            isLast={index === finalItems.length - 1}
            hasLabelInTimeline={hasLabelInTimeline}
          />
        ))}
      </ol>
    </section>
  );
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(itemShape),
  pending: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  pendingDot: PropTypes.node,
  reverse: PropTypes.bool,
  mode: modeProp,          // controlled
  defaultMode: modeProp,   // uncontrolled
  onModeChange: PropTypes.func,
};

export default Timeline;
