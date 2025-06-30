import { MODES, POSITIONS, INTERNAL_POSITIONS } from '../constants/timelineConstants';
import PropTypes from 'prop-types';

export const positionPublicProp = PropTypes.oneOf(POSITIONS);
export const modeProp = PropTypes.oneOf(MODES);
export const positionInternalProp = PropTypes.oneOf(INTERNAL_POSITIONS);


export const itemShape = PropTypes.shape({
  color: PropTypes.string,
  dot: PropTypes.node,
  label: PropTypes.node,
  children: PropTypes.node,
  position: positionPublicProp,
});