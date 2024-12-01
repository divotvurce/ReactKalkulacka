import CalculatorForm from "./calculator/CalculatorForm";
import './App.css';

const title = "React kalkulačka";

const App = () => {

  return (
    <div className="App">
      <header className="App-header text-gradient">
      <h1>{title}</h1>
      <CalculatorForm />
      </header>
    </div>
  );
}

export default App;
