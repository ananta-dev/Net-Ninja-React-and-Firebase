import "./App.css";
import { useState, useEffect } from "react";

function JOKER(props) {
    const [jokerCount, setJokerCount] = useState(props.count);
    useEffect(() => {
        console.log(
            `I am JOKER's  useEffect jokerCount: ${jokerCount} props.count: ${props.count}`
        );
        console.log(
            `within useEffect, now setting jokerCount to ${props.count}`
        );
        setJokerCount(props.count);
    }, [props.count]);

    console.log(
        `I am JOKER's  render jokerCount: ${jokerCount} props.count: ${props.count}`
    );
    return (
        <div>
            <p style={{ color: "red" }}>JOKER: jokerCount: {jokerCount}</p>
        </div>
    );
}

function App() {
    const [appCount, setAppCount] = useState(0);

    console.log(`I am App (appCount: ${appCount})`);

    return (
        <div className='App'>
            <p>App component: You clicked {appCount} times</p>
            <button
                onClick={() => {
                    console.log("\n");
                    setAppCount(appCount + 1);
                }}
            >
                Click me
            </button>
            <p>
                This is in App, and next is the JOKER component called with
                appCount={appCount}
            </p>
            <JOKER count={appCount} />
        </div>
    );
}

export default App;
