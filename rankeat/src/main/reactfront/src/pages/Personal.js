import '../css/Personal.css'
import React from "react";
import AppLayout from "./AppLayout";

export default function Personal() {
    return (

        <main>
            <AppLayout/>
            <div className='box'>
                개인정보수정
                <div>


                </div>
                <div className='small'>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

                    <span class="material-symbols-outlined"> account_circle</span>
                </div>
                <div className='nick'>
                    <p>닉네임</p>
                    <p><input type="text" placeholder="새로운 닉네임 입력" /></p>
                    <button>중복확인</button>
                </div>
                <button onClick={function(){
                    alert('수정되었습니다.');
                }}  type="button" >수정하기</button>
            </div>

        </main>
    )
}