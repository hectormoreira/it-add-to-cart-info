import React from 'react';

const Totalizer = (totalizer: any) => {
  const total = totalizer.totalizer;

  console.log("Totalizer", totalizer.totalizer);
  return (
    <div>
      <p>Tenemos items en tu compra</p>
      <p>Total:  ${total?.value / 100}</p >
    </div>
  );
};

export default Totalizer;
