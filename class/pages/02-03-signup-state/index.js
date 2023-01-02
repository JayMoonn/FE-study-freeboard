import { useState } from 'react'

export default function SignupStatePage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")

    function onChangeEmail(event) {     // 이벤트 핸들러 함수
        setEmail(event.target.value)    // input 입력된 값
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup() {
        console.log(email, password)

        if (email.includes("@") === false) {
            // 방법1 : alert("이메일이 올바르지 않습니다 (@가 없음)") 
            // 방법2 : document.getElementById("error").innerText = "이메일이 올바르지 않습니다 (@가 없음)"
            setEmailError("이메일이 올바르지 않습니다 (@가 없음)")  // 방법3
        } else {
            // Backend 컴퓨터에 있는 API(함수) 요청하기
            alert("회원가입을 축하합니다.")
        }
    }

    return (
        <>
            이메일 : <input type="text" onChange={onChangeEmail} />
            {/* <div id="error"></div> */}
            <div>{emailError}</div>
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </>
    );
}