import React from 'react';
const api = {
  key: '447820dade170aab3486577b52a4d798',
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box' >
          <input 
          type='tex'
          className='search-bar'
          placeholder='Search..'/>
        </div>
      </main>
    </div>
  );
}

export default App;
