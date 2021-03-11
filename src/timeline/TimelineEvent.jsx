import React from 'react';
import PropTypes from 'prop-types';
import LocationIcon from '../svg/LocationIcon';

const TimelineEvent = ({ title, location, children }) => (
  <div className="flex flex-col space-y-4 py-4">
    <h1 className="text-5xl">{title}</h1>
    <div className="flex flex-row space-x-4 items-center">
      <LocationIcon />
      <h2 className="text-3xl">{location}</h2>
    </div>
    {children}
  </div>
);

TimelineEvent.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TimelineEvent.defaultProps = {
  title: '',
  location: '',
};

export default TimelineEvent;
