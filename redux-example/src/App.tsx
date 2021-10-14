import React from "react";
import "./App.css";
import useStoreSelector from "./store/selectors/useStoreSelector";

function App() {
  const count = useStoreSelector((store) => store.counter.count)

  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
      </header>
    </div>
  );
}

export default App;
