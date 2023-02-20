import TempCalculator from './TempCalculator';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [temp, setTemp] = useState(0);
  const [scale, setScale] = useState('c');
  const [results, setResults] = useState({
    temp: 32,
    scale: 'f'
  });

  const convertTemp = (temp, scale) => {
    if (scale === 'c') {
      return (temp * 9 / 5) + 32;
    } else {
      return (temp - 32) * 5 / 9;
    }
  }

  useEffect(() => {
    setResults({
      temp: convertTemp(temp, scale),
      scale: scale === 'c' ? 'f' : 'c'
    });
  }, [temp, scale]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature Calculator</h1>
      </header>
      <main>
        <div className="container">
          <TempCalculator temp={temp} setScale={setScale} setTemp={setTemp} />
          <div className="results">
            <h2>Results</h2>
            <p>Temperature: {results.temp}</p>
            <p>Scale: {results.scale}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
