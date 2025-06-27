import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './timelineLabel.css';


const validPositions = ['left', 'right'];
const TimelineLabel = ({ label, position = 'left', size = 'medium',
    className = '',
    ...rest }) => {
  const safePos = validPositions.includes(position) ? position : 'left';

  const classes = useMemo(()=>{
    return [
        'timeline-label',
        `label-${safePos}`,
        `size-${size}`,
        className
      ].filter(Boolean).join(' ');
  },[safePos,size,className])

  return (
    <aside
      className={classes}
      role="note"
      aria-label="Timeline Label"
      {...rest}
    >
      {label}
    </aside>
  );
};

TimelineLabel.propTypes = {
  label: PropTypes.node,
  position: PropTypes.string,
};

export default React.memo(TimelineLabel);
