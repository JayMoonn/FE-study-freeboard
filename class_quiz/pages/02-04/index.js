import { useState } from 'react'

export default function SignupStatePage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [error, setError] = useState("")

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onChangePasswordCheck(event) {
        setPasswordCheck(event.target.value)
    }

    function onClickSignup() {
        let a = password
        let b = passwordCheck
        console.log(a, b)
        if (email.includes("@") === false) {
            setError("이메일에 @가 포함되어 있지 않습니다.")
        }
        else if (password != passwordCheck) {
            setError("비밀번호와 비밀번호 확인이 다릅니다.")
        }
        else {
            setError("")
            alert("회원가입을 축하합니다.")
        }
    }

    return (
        <>
            <div>이메일 : <input type="text" onChange={onChangeEmail} /></div>
            <div>비밀번호 : <input type="password" onChange={onChangePassword} /></div>
            <div>비밀번호 재확인 : <input type="password" onChange={onChangePasswordCheck} /></div>
            <div>
                <button onClick={onClickSignup}>가입하기</button>
                <div>{error}</div>
            </div>
        </>
    )

}


