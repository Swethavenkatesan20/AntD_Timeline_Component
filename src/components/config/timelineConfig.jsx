
import React from 'react';
import ClockDot from '../Timeline/shared/ClockDot';
import SmileDot from '../Timeline/shared/SmileDot';
// import SmileDot from '../../shared/SmileDot';
// import ClockDot from '../../shared/ClockDot';
//import LoadingSpinner from '../../shared/LoadingOutlined';

export const modeOptions = [
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' },
  { value: 'alternate', label: 'Alternate' },
];

// right mode timeline 
export const rightItems = [
  { children: 'Create a services site 2015-09-01' },
  { children: 'Solve initial network problems 2015-09-01' },
  { children: 'Technical testing 2015-09-01', dot: <ClockDot /> },
  { children: 'Network problems solved 2015-09-01', color: 'red' },
];

// label mode timeline 
export const labelItems = [
  { label: '2015-09-01', children: 'Create a services site' },
  { children: 'Solve initial network problems' },
  { label: '2015-09-01 10:00:00', children: 'Technical testing' },
  { label: '2015-09-01 12:00:00', children: 'Network problems being solved' },
];

// basic mode
export const basicItems = [
  { children: 'Create a services site 2015-09-01' },
  { children: 'Solve initial network problems 2015-09-01' },
  { children: 'Technical testing 2015-09-01' },
  { children: 'Network problems being solved 2015-09-01' },
];

// color mode 
export const colorItems = [
  { color: 'green', children: 'Create a services site 2015-09-01' },
  { color: 'green', children: 'Solve initial network problems 2015-09-01' },
  { color: 'red', children: 'Technical testing 2015-09-01' },
  {
    dot: <SmileDot />,
    children: 'Custom smiling dot event',
  },
];

// last node + reverse mode 
export const lastNodeItems = [
  { children: 'Create a services site 2015-09-01' ,color:'red'},
  { children: 'Solve initial network problems 2015-09-01' },
  { children: 'Technical testing 2015-09-01' },
  { children: 'Network problems being solved 2015-09-01' },
];

// alternate mode 
export const alternateItems = [
  { children: 'Create a services site 2015-09-01' },
  { children: 'Solve initial network problems 2015-09-01', color: 'green' },
  { children: 'Technical testing 2015-09-01', dot: <ClockDot /> },
  { children: 'Network problems being solved 2015-09-01', color: 'red' },
  { children: 'Service restored 2015-09-01' },
  { children: 'Postmortem analysis 2015-09-02', dot: <ClockDot /> },
];

// custom timeline
export const customItems = [
  { children: 'Service initialization 2025-06-01' },
  { children: 'Internal training sessions' ,color:'green'},
  {
    children: 'User feedback loop opened',
    dot: <ClockDot />,
    color: 'red',
  },
  {
    children: 'Launch day event',
  },
  {
    children: 'Monitoring system live',
  },
];
