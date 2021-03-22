import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ className, containerClassName, children }) => (
  <section className={`w-full py-40 flex flex-col justify-start items-center space-y-8 overflow-x-hidden ${className}`}>
    <div className={`container w-11/12 2xl:w-7/12 ${containerClassName}`}>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  className: null,
  containerClassName: null,
  children: null,
};

export default Section;
