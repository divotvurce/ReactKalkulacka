import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";
import React, { useState } from 'react';
import { operations, calculate } from '../utils/calculate';

function CalculatorForm() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(""); // To display error messages

    const handleSubmit = (event) => {
        event.preventDefault();
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);

        // Check if operation is division and b is zero
        if (operation.value === "/" && numberB === 0) {
            setError("Není možné dělit nulou!");
            setResult(null); // Clear the result if there's an error
            return;
        }

        // Clear error if the operation is valid
        setError("");
        const result = calculate(numberA, numberB, operation.value);
        setResult(result);
    };


    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit} >
                <NumberInput name="a" label="První číslo:" onChange={e => setA(e.target.value)} />
                <NumberInput name="b" label="Druhé číslo:" onChange={e => setB(e.target.value)} />
                    <div className="select-container">
                <Select
  options={operations} 
  value={operation} 
  onChange={setOperation}
  styles={{
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f0f0f0",
      borderColor: "#ccc",
      fontSize: "1.1em",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#2e9cff" : "white",
      color: state.isFocused ? "white" : "#333",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      borderRadius: "8px",
    }),
  }}
/>
</div>
                <input type="submit" value="Spočítej" />
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {result !== null && <Result value={result} />}
        </div>
    );
}

export default CalculatorForm;