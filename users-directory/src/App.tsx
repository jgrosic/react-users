import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// app entry point

function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <>
    {/* comment */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Users directory</h1>
          <h2>Learning concepts by prototyping an app</h2>
          <p></p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={
            () => setCount(
              (count) => count + 1
            )
          }
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
