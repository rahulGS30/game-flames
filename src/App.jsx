import React, { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateFLAMES = () => {
    let n1 = name1.toLowerCase().replace(/\s/g, '');
    let n2 = name2.toLowerCase().replace(/\s/g, '');

    let commonChars = n1.split('').filter(char => {
      if (n2.includes(char)) {
        n2 = n2.replace(char, '');
        return false;
      }
      return true;
    });

    const count = commonChars.length + n2.length;
    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemies', 'Siblings'];

    let index = 0;
    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      flames.splice(index, 1);
    }

    setResult(flames[0]);
  };

  return (
    <div className="container">
      <h1>FLAMES Game</h1>
      <input
        type="text"
        placeholder="Enter First Name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Second Name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button onClick={calculateFLAMES}>Calculate</button>
      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
