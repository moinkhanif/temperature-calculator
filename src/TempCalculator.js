import './TempCalculator.css'

function TempCalculator() {
  return (
    <form id="calculator" className='calculator-form'>
      <input type="number" id="temp" />
      <select id="scale">
        <option value="c">Celsius</option>
        <option value="f">Fahrenheit</option>
      </select>
    </form>
  );
}

export default TempCalculator;