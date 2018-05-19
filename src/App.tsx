import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from 'src/core/Router';

console.log('Mounting App');

const App = () => (
  <div>
    <Router/>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('trivia-root')
);