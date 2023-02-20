import TempCalculator from './TempCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature Calculator</h1>
      </header>
      <main>
        <div className="container">
          <TempCalculator />
        </div>
      </main>
    </div>
  );
}

export default App;
