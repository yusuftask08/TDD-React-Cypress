import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Test Driven Development React-Cypress</code>
        </p>
        <Form />
      </div>
    </div>
  );
}

export default App;