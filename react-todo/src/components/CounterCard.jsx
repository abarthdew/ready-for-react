import { useState } from "react";

export default function CounterCard () {

    const [count, setCount] = useState(0);

    return (
        <>
            <h3>CounterCard</h3>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </>
    );
}