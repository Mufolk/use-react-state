import './App.css';
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("Guilherme");
  const [age, setAge] = useState("24");

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name: {name}</p>
        <p>Display Age: {age}</p>
      </div>

      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input 
            className="input" 
            type="text" 
            placeholder="Gui" 
            value={name}
            onChange={e => setName(e.target.value)}/>
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input 
            className="input" 
            type="number" 
            placeholder="24" 
            value={age}
            onChange={e => setAge(e.target.value)}/>
        </div>
      </div>

    </div>
  );
}

export default App;
