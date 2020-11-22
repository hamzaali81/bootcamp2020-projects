import React from 'react';
import MainScreen from './Container/Screens';
import  { TranscationProvider } from './Container/Screens/TranscationContext';

const App = () => {
  return (
    <TranscationProvider>
       <div className="App">
      <MainScreen />
    </div>
     </TranscationProvider>
  );
}

export default App;
