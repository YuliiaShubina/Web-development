import React from 'react';

function DateCom() {
  const DateCom = new Date();
  const createdDate = DateCom.toLocaleDateString();

  return (
    <div>
      <h2>Current Date</h2>
      <p>{createdDate}</p>
    </div>
  );
}

export default DateCom;