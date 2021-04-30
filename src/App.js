import "./App.css";
import Form from "./components/Form";
import TodoContext from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className="formElements">
        <TodoContext>
          <Form />
        </TodoContext>
      </div>
    </div>
  );
}

export default App;
