import './TempCalculator.css'

function TempCalculator( { temp, setScale, setTemp }) {
  const handleTempChange = (e) => {
    setTemp(e.target.value);
  }
  const handleScaleChange = (e) => {
    setScale(e.target.value);
  }

  return (
    <form id="calculator" className='calculator-form'>
      <input type="number" value={temp} id="temp" onChange={handleTempChange} />
      <select id="scale" onChange={handleScaleChange}>
        <option value="c" selected>Celsius</option>
        <option value="f">Fahrenheit</option>
      </select>
    </form>
  );
}

export default TempCalculator;