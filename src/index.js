import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

const App = () => (
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));