import React from 'react';
import './App.css';
import LifeCycleMountA from './components/LifeCycleMountA';
import LifeCycleUpdateA from './components/LifeCyleUpdateA';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleMountA/> */}
      <LifeCycleUpdateA/>
    </div>
  );
}

export default App;
