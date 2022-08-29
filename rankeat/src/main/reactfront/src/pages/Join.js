import React, {useState} from 'react';
import '../css/Join.css';
import AppLayout from "./AppLayout";


function Join() {
    const [phone, setPhone] = useState("")
    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onPhoneHandler = (e) => {
        setPhone(e.currentTarget.value)
    }
    const onNickHandler = (e) => {
        setNick(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }
    handleJoin = () => {
        fetch('API주소', {
            method: 'POST',
            body: JSON.stringify({
                "phone" : "01012345678",
                "password" : "password",
                "email" : "email@rankeat.com",
                "name" : "nickname"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response=> response.json())
            .then(response => {
                if (response.message === '회원가입 성공') {
                    return alert('회원가입 성공!');
                } else if (response.message === '필수 데이터 누락') {
                    alert('필수 정보를 모두 입력해주세요.');
                } else if (response.message === '이미 존재하는 전화번호'){
                    alert('이미 존재하는 번호입니다.');
                } else if (response.message === '이미 존재하는 닉네임'){
                    alert('이미 존재하는 닉네임입니다.');
                }
            });
    };

    return (
        <main>
            <AppLayout/>
            <div className="lobox">
                <h2>회원가입</h2>
                <p>전화번호: <input type="text" placeholder="전화번호 입력" value={phone} onChange={onPhoneHandler}/></p>
                <p>닉네임: <input type="text" placeholder="닉네임 입력" value={nick} onChange={onNickHandler} /></p>
                <p>password:  <input type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}/></p>
                <p>password: <input type="text" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} /></p>
                <div className='lobtn'>
                    <button onClick={ () => {
                        handleJoin()
                        ()=>{window.location.href="/Login"}
                    } } type="button" >가입하기</button>
                </div>

            </div>
        </main>
    );
}

export default Join;