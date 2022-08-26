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

    // login 버튼 클릭 시 서버로 데이터 전달
    const onClickLogin = (e) => {
        e.preventDefault();

        const login_info = {
            method: "POST",
            body: JSON.stringify({
                "phone" : "01012345678",
                "password" : "password"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:8080/login", login_info)
            .then(res => {
                return res.json();
            })
            .then(json => {
                if (json.success === true) {
                    alert("로그인되었습니다");
                    // 서버로 부터 받은 JSON데이터를 로컬스토리지에 우선 저장
                    window.localStorage.setItem('userInfo', JSON.stringify(json))
                    //스테이트에 유저정보를 저장
                    setState({
                        inputId: json.inputId,
                        inputPw: json.inputPw,
                        isLogin: json.success
                    });
                    this.props.history.push("/Home")
                } else {
                    alert("아이디 혹은 비밀번호를 확인하세요");
                }
            });
    };
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