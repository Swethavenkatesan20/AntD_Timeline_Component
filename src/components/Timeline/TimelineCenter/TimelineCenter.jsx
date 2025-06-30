import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//import Dot from './Dot';


import './timelineCenter.css';
//import './timelineTail.css';
import Dot from '../Dot/Dot';


const TimelineCenter = ({ dot, color, isPending ,size = 'medium',className = '',...rest }) => {

    const classes = useMemo(()=>{
        return ['timeline-center',`size-${size}`,className].filter(Boolean).join(' ');
    },[size,className])
  return (
    <div className={classes} role="presentation" {...rest}>
      <Dot dot={dot} color={color} isPending={isPending} />
      <div className="timeline-tail" aria-hidden="true" />
    </div>
  );
};

TimelineCenter.propTypes = {
  dot: PropTypes.node,
  color: PropTypes.string,
  isPending: PropTypes.bool,
};

export default React.memo(TimelineCenter);
