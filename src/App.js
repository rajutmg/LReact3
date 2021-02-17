import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      {/* props using Function Component*/}
      {/* <Hello name='Raju' nickname="kaju">
        <p>This is Childern props</p>
      </Hello>
      <Hello name="sital" nickname="pital" >
        <p>This is children props</p>
      </Hello>
      <Hello name="samir" nickname="kaji" >
        <p>This is children props</p>
      </Hello> */}

      {/* props using class components  */}
      {/* <Welcome name='Raju' nickname="kaju" />
      <Welcome name="sital" nickname="pital" />
      <Welcome name="samir" nickname="kaji" /> */}
      {/* state  */}
      {/* <Message /> */}
      <Counter />
    </div>
  );
}

export default App;
