import './App.css';
import './assets/css/main.css';
import React from 'react';
import Home from './pages/Home/Home';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const reduxOverflow = useSelector(
    (state) => state.modalLocationOpenReducer.overflow
  );
  const reduxHeight = useSelector(
    (state) => state.modalLocationOpenReducer.height
  );

  return (
    <div
      className="App"
      style={{
        overflow: reduxOverflow ? reduxOverflow : 'visible',
        height: reduxHeight ? reduxHeight : 'auto',
      }}>
      <Home />
    </div>
  );
}

export default App;

//npx json-server -p 2020 ./src/api/db.json
