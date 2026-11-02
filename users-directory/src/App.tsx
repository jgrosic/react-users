import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Users from "./users/Users.tsx";

// app entry point

function App() {

    return (
        <>
            {/* comment */}
            <section id="center">
                <div className="hero">
                    <img src={heroImg} className="base" width="170" height="179" alt=""/>
                    <img src={reactLogo} className="framework" alt="React logo"/>
                    <img src={viteLogo} className="vite" alt="Vite logo"/>
                </div>
                <div>
                    <h1>Users directory</h1>
                    <h2>Learning concepts by prototyping an app</h2>
                    <p></p>
                </div>
                
                <Users/>
                
            </section>
            
            <div className="ticks"></div>

            <div className="ticks"></div>
            <section id="spacer"></section>
        </>
    )
}

export default App
