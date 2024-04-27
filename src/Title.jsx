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
            margin-bottom: 10px;
            margin-top: 10px;
            font-style: normal;
          }
        `}
      </style>
      <h1 className="text-4xl italic lobster-regular">News Today</h1>
      <br />
      <hr />
    </>
  );
}

export default Title;
