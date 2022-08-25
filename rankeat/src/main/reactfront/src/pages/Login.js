import * as React from 'react';
import AppLayout from "./AppLayout";
import '../css/Login.css';


function Login() {
    return (
        <main>
            <AppLayout/>
            <div className="lobox">
                <h2>LOGIN</h2>
                <p><input type="text" placeholder="아이디" /></p>
                <p> <input type="password" placeholder="비밀번호" /></p>
                <div className='lobtn'>
                    <button onclick="save_order()" type="button" >로그인</button>
                </div>
                <div className="joinbtn">
                    <button type="button" >회원가입</button>
                </div>
            </div>
        </main>
    );
}

export default Login;