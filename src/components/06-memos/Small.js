import React from 'react';

const Small = React.memo(({ value }) => {

  console.log('Render again')

  return (
    <small> {value}</small>
  );
});

export default Small;
