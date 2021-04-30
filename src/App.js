import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TodoContext from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <div className="formElements">
        <TodoContext>
          <Form />
          <List />
        </TodoContext>
      </div>
    </div>
  );
}

export default App;
