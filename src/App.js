import React from 'react';
import CardPage from './components/CardPage';

function App({props}) {
  
  return (
    <div id="main" className="app"> 
      <CardPage props={props}/>  
    </div>
  );
}
 
export default App;