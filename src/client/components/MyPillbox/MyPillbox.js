import React from 'react';
// import request from '../../helpers/request';

// getPills = async () => {
//   const pills = await request.getPills();
//   console.log(pills);
//   this.setState({
//     pills,
//   });
// };

const MyPillbox = ({ pills, addPillClick }) => (
  <div>
    {pills.map((pill, i) => (
      <p key={i}>{pill.name}</p>
    ))}
  </div>
);

export default MyPillbox;
