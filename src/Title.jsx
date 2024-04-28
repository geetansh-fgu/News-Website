import React from 'react';

function Title() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
          .lobster-regular {
            font-family: "Lobster", sans-serif;
            font-weight: 400;
            text-align: center;
            font-style: normal;
          }
        `}
      </style>
      <h1 className="text-4xl italic lobster-regular p-4">News Today</h1>
      <hr className='border-gray-400'/>
    </>
  );
}

export default Title;
