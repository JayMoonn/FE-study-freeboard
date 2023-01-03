import axios from "axios"
import { useState } from "react"

export default function GraphqlRequestPage() {

    const onClickSubmit = async () => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
    }

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    )
}