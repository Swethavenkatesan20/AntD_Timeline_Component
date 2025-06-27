import './dot.css';
import React from 'react';
import PropTypes from 'prop-types';
//import { tokens } from '../../../tokens';
import {tokens} from '../../../../tokens'

const Dot = ({ dot, color = 'blue', isPending }) => {
  const tokenColor = tokens[`color${capitalize(color)}`] || color;
  const baseClass = ['timeline-dot', isPending ? 'timeline-dot-pending' : ''].filter(Boolean).join(' ');

  return (
    <div
      className={baseClass}
      role="presentation"
      style={dot ? undefined : {
        backgroundColor: tokens.dotBg,
        border: `${tokens.dotBorderWidth} solid ${tokenColor}`,
      }}
    >
      {dot}
    </div>
  );
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

Dot.propTypes = {
  dot: PropTypes.node,
  color: PropTypes.string,
  isPending: PropTypes.bool,
};

export default React.memo(Dot);
