import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import checkPropTypes from 'prop-types/checkPropTypes';

//import TimelineItem from './TimelineItem';

import './timeline.css';
//import LoadingOutlined from '../../../shared/LoadingOutlined';
import { itemShape, modeProp } from '../../config/propTypes';
import TimelineItem from './TimelineItem/TimelineItem';
import TimelineContext from '../../context/TimelineContext';
import LoadingOutlined from '../StatusDot/LoadingOutlined';
import useTimelineMode from '../../hooks/useTimelineMode';
import { ARIA_LABELS } from '../../constants/ariaLabels';
import { hasAnyLabel, getReversedItems } from '../../utils/timelineHelpers';


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
  // if (import.meta.env.DEV) {
  //   checkPropTypes(
  //     Timeline.propTypes,
  //     { items, pending, pendingDot, reverse, mode },
  //     'prop',
  //     'Timeline'
  //   );
  // }

  // //  internal state for uncontrolled mode - moved this to hook folder
  // const [internalMode, setInternalMode] = useState(defaultMode);

  // const currentMode = mode !== undefined ? mode : internalMode;

  // const handleModeChange = (newMode) => {
  //   if (onModeChange) onModeChange(newMode);
  //   else setInternalMode(newMode);
  // };


  const [currentMode, setCurrentMode] = useTimelineMode(mode ?? defaultMode, onModeChange);





  let finalItems = [...(items || defaultBasicItems)];

  if (pending) {
    finalItems.push({
      dot: pendingDot,
      children: typeof pending === 'boolean' ? null : pending,
      isPending: true,
    });
  }

  // if (reverse) {
  //   finalItems = finalItems.reverse();
  // }

// instead of if reversed i am writing this as helper function
  finalItems = getReversedItems(finalItems, reverse);


  // const hasLabelInTimeline = items.some(item => item.label);
  const hasLabelInTimeline = hasAnyLabel(items); 

  return (
    <TimelineContext.Provider value={{ mode: currentMode, hasLabelInTimeline }}>
    <section className="timeline-wrapper" aria-label={ARIA_LABELS.timeline}>
      <ol className={`timeline ${currentMode ? `timeline-${currentMode}` : ''}`}>
        {finalItems.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            index={index}
            isLast={index === finalItems.length - 1}
          />
        ))}
      </ol>
    </section>
  </TimelineContext.Provider>
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
