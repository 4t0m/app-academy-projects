import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children }) => (
  <div>
    <h1>BenchBnB</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
