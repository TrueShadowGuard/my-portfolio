import React from 'react';

const AngularIcon = (props) => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path className={props.className || ""} fill={props.color} d="m12 2.5 8.84 3.15-1.34 11.7-7.5 4.15-7.5-4.15-1.34-11.7zm0 2.1-5.53 12.4h2.06l1.11-2.78h4.7l1.11 2.78h2.05zm1.62 7.9h-3.23l1.61-3.87z"/>
    </svg>
  );
};

export default AngularIcon;