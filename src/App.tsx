import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { TodoItem } from "./types";
import ENDPOINTS from "./config/endpoints";

function App() {
  const [count, setCount] = useState(0);
  const { data, isFetching, refetch } = useQuery<TodoItem>({
    queryKey: [ENDPOINTS.todosRandom],
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => refetch()}>{isFetching ? "Recarregando..." : "Recarregar"}</button>
      <span></span>
      {/* {data?.todos.map((todoItem) => (
        <div style={{ textAlign: "left", marginBottom: 3 }}>
          <input type="checkbox" />
          <span>{todoItem.todo}</span>
        </div>
      ))} */}
      <div style={{ textAlign: "left", marginBottom: 3 }}>
        <input type="checkbox" />
        <span>{data?.todo}</span>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
