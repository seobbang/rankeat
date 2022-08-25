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
            .then(res => {
                if(res.data.userId === undefined){
                    // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                    alert('입력하신 전화번호가 일치하지 않습니다.')
                } else if(res.data.userId === null){
                    // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                    alert('입력하신 비밀번호 가 일치하지 않습니다.')
                } else if(res.data.userId === inputId) {
                    // id, pw 모두 일치 userId = userId1, msg = undefined
                    alert('로그인 성공');
                    sessionStorage.setItem('user_id', inputId)
                }
                // 작업 완료 되면 페이지 이동(새로고침)
                document.location.href = '/'
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