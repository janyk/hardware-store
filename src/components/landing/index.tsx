import React from 'react';

const landing: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to our hardware store!</h1>
      </header>
      <p>We have products for all your hardware needs.</p>
      <p>Just a note, the UX on subtracting is a bit janky.</p>
      <p>If I had more time, i'd implement robust ordering.</p>
    </div>
  );
}

export default landing;
