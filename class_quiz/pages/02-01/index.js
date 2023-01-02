import { useState } from 'react'

export default function changeButtonPage() {

    const [hello, setHello] = useState('안녕하세요')

    function onClickHello() {
        if (hello == '안녕하세요') {
            setHello('반갑습니다')
        } else {
            setHello('안녕하세요')
        }
    }

    return (
        <>
            <button onClick={onClickHello}>{hello}</button>
        </>
    )
}


/*
export default function changeButtonPage() {

    function onClickHello() {
        document.getElementById("text").innerText = "반갑습니다"
    }

    return (
        <>
            <button id="text" onClick={onClickHello}>안녕하세요</button>
        </>
    )
}
*/


