import AppLayout from "./AppLayout";
import '../css/Login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [isLogin, setisLogin] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = (e) => {
        e.preventDefault();
        const login_info = {
            method: "POST",
            body: JSON.stringify({
                "phone": "01012345678",
                "password": "password"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:8080/login")
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.success === true) {
                    alert("로그인되었습니다");
                    // 서버로 부터 받은 JSON데이터를 로컬스토리지에 우선 저장
                    window.localStorage.setItem('id', inputId);
                    window.localStorage.setItem('nickname', JSON.stringify(json).nickname);
                    //스테이트에 유저정보를 저장
                    setInputId(json.inputId);
                    setInputPw(json.inputPw);

                    this.props.history.push("/Home")
                } else {
                    alert("아이디 혹은 비밀번호를 확인하세요");
                }
            });
    };


    return (
        <main>
            <AppLayout/>
            <div className="lobox">
                <h2>LOGIN</h2>
                <p><input type="text" placeholder="전화번호" onChange={handleInputId}/></p>
                <p><input type="password" placeholder="비밀번호" onChange={handleInputPw}/></p>
                <button onClick={onClickLogin} className='lobtn' type="button">로그인</button>
                <button onClick={() => {
                    window.location.href = "/Join"
                }} className="joinbtn" type="button">회원가입
                </button>
            </div>
        </main>
    );
}


export default Login;