import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MyPillbox = ({ pills }) => {
  const [pillboxPills, setPillboxPills] = useState(pills);

  useEffect(() => {
    setPillboxPills(pills);
  }, [pillboxPills]);

  return (
    <div>
      {pillboxPills.map((pill, i) => (
        <p key={i}>{pill}</p>
      ))}
    </div>
  );
};

MyPillbox.defaultProps = {
  pills: [],
};

MyPillbox.propTypes = {
  pills: PropTypes.arrayOf([PropTypes.string]),
};

export default MyPillbox;
