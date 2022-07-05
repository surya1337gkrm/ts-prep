import React from 'react';

const Event: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <>
      <input onChange={handleChange} />
    </>
  );
};
export default Event;
