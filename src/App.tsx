import React, { type FC } from "react"
import { useState } from 'react'
const reactLogo = new URL('./assets/react.svg', import.meta.url).href;
const viteLogo = new URL('../public/vite.svg', import.meta.url).href;
import './App.css'

// import * as PercyDOM from "npm:@percy/dom";  

const App: FC = () => {
  const [count, setCount] = useState(0)

  // const domSnapshot = PercyDOM.serializeDOM({ enableJavascript: true });
  // console.log(domSnapshot)

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
