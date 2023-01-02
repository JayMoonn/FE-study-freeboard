import { useState } from 'react';

export default function counterPage() {

    const [count, setCount] = useState(0)

    function onClickCount() {
        setCount(count + 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCount}>카운트 증가</button>
        </>
    )
}


/*
export default function counterPage() {

    function onClickCount() {
        const count = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = count
    }

    return (
        <>
            <div id="count">0</div>
            <button onClick={onClickCount}>카운트 증가</button>
        </>
    )
}
*/