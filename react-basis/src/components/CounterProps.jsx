export default function CounterProps ({count, setCount}) {
    return (
        <>
            <h3>CounterProps</h3>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count} ++
                </button>
                <button onClick={() => setCount((count) => count + 2)}>
                count is {count} += 2
                </button>
                <button onClick={() => setCount((count) => setMultiple(count))}>
                count is {count} * 3 <br/>
                <small>// onClick={() => setCount(setMultiple(count))} 보다는 함수 업데이트 문법 사용 {"->"} 인자를 최신값으로 바꿔줌</small>
                </button>
            </div>
        </>
    );
}

function setMultiple (count) {
    count += 1;
    return count * 3;
}