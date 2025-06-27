import PropTypes from 'prop-types';

export const VALID_POSITIONS_PUBLIC = ['left', 'right'];
export const VALID_MODES = ['left', 'right', 'alternate'];
export const VALID_POSITIONS_INTERNAL = [
  ...VALID_POSITIONS_PUBLIC,
  'content-left',
  'content-right',
  'center',
];

export const positionPublicProp = PropTypes.oneOf(VALID_POSITIONS_PUBLIC);
export const modeProp = PropTypes.oneOf(VALID_MODES);
export const positionInternalProp = PropTypes.oneOf(VALID_POSITIONS_INTERNAL);

export const itemShape = PropTypes.shape({
  color: PropTypes.string,
  dot: PropTypes.node,
  label: PropTypes.node,
  children: PropTypes.node,
  position: positionPublicProp,
});
