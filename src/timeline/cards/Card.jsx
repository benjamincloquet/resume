import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import './Card.scss';

const Card = ({ title, style }) => (
  <animated.div className="card" style={style}>
    <h2 className="card__title">{title}</h2>
  </animated.div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
};

export default Card;
