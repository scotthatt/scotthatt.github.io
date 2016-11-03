import React, { PropTypes } from 'react';

const NotFound = ({ type = 'Page' }) => (
  <section>
    <h1>{type} Not Found</h1>
  </section>
);

NotFound.propTypes = {
  type: PropTypes.string,
};

export default NotFound;
