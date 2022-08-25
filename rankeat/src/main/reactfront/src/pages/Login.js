import AppLayout from "./AppLayout";
import '../css/Login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭
    const onClickLogin = () => {
        axios.post('/user_inform/onLogin', null, {
            params: {
                'user_id': inputId,
                'user_pw': inputPw
            }
        })
            .then(res =>
            if(res.ok){
                alert('로그인 완료');
                history.pushState('/');
            })
            .catch()
    }

    return (
        <main>
            <AppLayout/>
            <div className="lobox">
                <h2>LOGIN</h2>
                <p><input type="text" placeholder="아이디" onChange={handleInputId} /></p>
                <p> <input type="password" placeholder="비밀번호" onChange={handleInputPw} /></p>
                <div className='lobtn'>
                    <button onClick={onClickLogin} type="button" >로그인</button>
                </div>
                <div className="joinbtn">
                    <button onClick={()=>{window.location.href="/Join"}} type="button" >회원가입</button>
                </div>
            </div>
        </main>
    );
}

export default Login;