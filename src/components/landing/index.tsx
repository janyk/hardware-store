import React from 'react';

const landing: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to our hardware store!</h1>
      </header>
      <p>We have products for all your hardware needs.</p>
      <p>Just a note, the UX on the adding and subtracting is a bit janky.</p>
      <p>If I had more time, i'd implement robust ordering.</p>
      <p>But I didn't want to sacrifice immutable principles right now or spend too much time on it...</p>
    </div>
  );
}

export default landing;
