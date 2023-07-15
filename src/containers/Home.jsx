import { useState } from "react"

export default function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>Hello world</div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>Count</button>
        </>
    )
}