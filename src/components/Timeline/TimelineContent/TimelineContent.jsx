import './timelineContent.css';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const validPositions = ['content-left', 'content-right', ''];
const TimelineContent = ({ 
    children, 
    position = 'left' ,
    size = 'medium',
    className = '',
    ...rest }) => { 
  const safePosition = validPositions.includes(position) ? position : '';
  const classes = useMemo(()=>{
    return ['timeline-content', safePosition , `size-${size}`,
      className].filter(Boolean).join(' ');
  },[safePosition,size,className]) 

  return (
    <section className={classes}{...rest} role="region" aria-label="Timeline Content">
      {children}
    </section>
  );
};

TimelineContent.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
};

export default React.memo(TimelineContent);
