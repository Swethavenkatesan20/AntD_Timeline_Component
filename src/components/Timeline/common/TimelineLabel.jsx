import React from 'react';
import PropTypes from 'prop-types';

const validPositions = ['left', 'right'];
const TimelineLabel = ({ label, position = 'left' }) => {
  const safePos = validPositions.includes(position) ? position : 'left';

  return (
    <aside
      className={`timeline-label label-${safePos}`}
      role="note"
      aria-label="Timeline Label"
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
