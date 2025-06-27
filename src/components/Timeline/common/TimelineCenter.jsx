import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';

const TimelineCenter = ({ dot, color, isPending }) => {
  return (
    <div className="timeline-center" role="presentation">
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
