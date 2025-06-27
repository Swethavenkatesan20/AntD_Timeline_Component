import React from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'prop-types/checkPropTypes';

// import TimelineCenter from './TimelineCenter';
// import TimelineLabel from './TimelineLabel';
// import TimelineContent from './TimelineContent';

import TimelineCenter from '../TimelineCenter/TimelineCenter';
import TimelineLabel from '../TimelineLabel/TimelineLabel';
import TimelineContent from '../TimelineContent/TimelineContent';


import { positionPublicProp, modeProp } from '../propTypes';

import './timelineItem.css';


const TimelineItem = ({
  color = 'blue',
  dot,
  label,
  children,
  position,
  isPending,
  mode,
  index,
  hasLabelInTimeline,
}) => {
  if (import.meta.env.DEV) {
    checkPropTypes(TimelineItem.propTypes, {
      color, dot, label, children, position, isPending, mode, index
    }, 'prop', 'TimelineItem');
  }

  // const hasLabel = !!label; getting layout issue if one item does not has label then that particular item getting defualt position

  const hasLabel = hasLabelInTimeline; // check for entire timeline even if current item doesn't have label
  const thisItemHasLabel = label;    // whether this specific item has label





  const isAlternate = mode === 'alternate';
  const isRight = mode === 'right';
  const isLeft = mode === 'left';

  const isAltLeft = isAlternate && index % 2 === 0;
  const isAltRight = isAlternate && index % 2 !== 0;

  const labelOnLeft = isLeft || isAltLeft;
  const labelOnRight = isRight || isAltRight;

  let baseClass = 'timeline-item';
  if (hasLabel) {
    baseClass += ' timeline-item-label';
  } else if (isAlternate) {
    baseClass += ` alternate ${isAltLeft ? 'alternate-left' : 'alternate-right'}`;
  } else if (isRight) {
    baseClass += ' timeline-item-right';
  } else {
    baseClass += ` timeline-item-${position || 'left'}`;
  }

  return (
    <li className={baseClass} role="listitem">
      {hasLabel ? (
        <>
          {/* {labelOnLeft && <TimelineLabel label={label} position="left" />}
          {labelOnRight && <TimelineLabel label={label} position="right" />} */}
          {labelOnLeft && <TimelineLabel label={thisItemHasLabel ? label : null} position="left" />}
          {labelOnRight && <TimelineLabel label={thisItemHasLabel ? label : null} position="right" />}

          <TimelineCenter isPending={isPending} color={color} dot={dot} />
          <TimelineContent position={labelOnLeft ? 'content-right' : labelOnRight ? 'content-left' : ''}>
            {children}
          </TimelineContent>
        </>
      ) : isAlternate ? (
        <>
          {isAltLeft && <TimelineContent>{children}</TimelineContent>}
          <TimelineCenter isPending={isPending} color={color} dot={dot} />
          {isAltRight && <TimelineContent>{children}</TimelineContent>}
        </>
      ) : (
        <>
          <TimelineCenter isPending={isPending} color={color} dot={dot} />
          <TimelineContent>{children}</TimelineContent>
        </>
      )}
    </li>
  );
};

TimelineItem.propTypes = {
  color: PropTypes.string,
  dot: PropTypes.node,
  label: PropTypes.node,
  children: PropTypes.node,
  position: positionPublicProp,
  isPending: PropTypes.bool,
  mode: modeProp,
  index: PropTypes.number,
};

export default React.memo(TimelineItem);
