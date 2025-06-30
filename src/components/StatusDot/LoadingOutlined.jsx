import React from 'react';
import './StatusDot.css';
import { ARIA_LABELS } from '../../constants/ariaLabels';

const LoadingOutlined = () => (
  <span className="loading-spinner" aria-label={ARIA_LABELS.loading} > </span>
);

export default LoadingOutlined;
