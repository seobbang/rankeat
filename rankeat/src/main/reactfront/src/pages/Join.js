import * as React from 'react';
import '../css/Join.css';
import AppLayout from "./AppLayout";


function Join() {
    return (
        <main>
            <AppLayout/>
            <div className="lobox">
                <h2>회원가입</h2>
                <p>ID: <input type="text" placeholder="전화번호 입력" /></p>
                <p>닉네임: <input type="text" placeholder="닉네임 입력" /></p>
                <p>password:  <input type="password" placeholder="비밀번호" /></p>
                <p>password: <input type="text" placeholder="비밀번호 확인" /></p>
                <div className='lobtn'>
                    <button onClick={()=>{window.location.href="/Home"}}  type="button" >가입하기</button>
                </div>

            </div>
        </main>
    );
}

export default Join;