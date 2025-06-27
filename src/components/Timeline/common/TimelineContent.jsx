import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const validPositions = ['content-left', 'content-right', ''];
const TimelineContent = ({ children, position = 'left' }) => {
  const safePosition = validPositions.includes(position) ? position : '';
  const classes = useMemo(()=>{
    return ['timeline-content', safePosition].filter(Boolean).join(' ');
  },[position]) 

  return (
    <section className={classes} role="region" aria-label="Timeline Content">
      {children}
    </section>
  );
};

TimelineContent.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
};

export default React.memo(TimelineContent);
