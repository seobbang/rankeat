import React, {useState} from 'react';
import '../css/Join.css';
import AppLayout from "./AppLayout";


function Join() {
    const [phone, setPhone] = useState("")
    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onPhoneHandler = (event) => {
        setPhone(event.currentTarget.value)
    }
    const onNickHandler = (event) => {
        setNick(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    return (
        <main>
            <AppLayout/>
            <div className="lobox">
                <h2>회원가입</h2>
                <p>ID: <input type="text" placeholder="전화번호 입력" value={phone} onChange={onPhoneHandler}/></p>
                <p>닉네임: <input type="text" placeholder="닉네임 입력" value={nick} onChange={onNickHandler} /></p>
                <p>password:  <input type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}/></p>
                <p>password: <input type="text" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} /></p>
                <div className='lobtn'>
                    <button onClick={()=>{window.location.href="/Home"}}  type="button" >가입하기</button>
                </div>

            </div>
        </main>
    );
}

export default Join;