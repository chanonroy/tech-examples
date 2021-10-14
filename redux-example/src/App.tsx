import React from "react";
import "./App.scss";
import useStoreSelector from "./store/selectors/useStoreSelector";

function App() {
  const count = useStoreSelector((store) => store.counter.count)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginBottom: 20 }}>{count}</div>
        <button>Increment</button>
      </header>
    </div>
  );
}

export default App;
