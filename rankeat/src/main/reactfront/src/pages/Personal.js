import '../css/Personal.css'
import React, {useState} from "react";
import AppLayout from "./AppLayout";

export default function Personal()
    const [Nick, setNick] = useState('')

    const onNickHandler = (e) => {
        setNick(e.currentTarget.value)
    }

    const onChange = (e) => {
          setNick({nickname:e.target.value});

        UpdateNick = () => {
            fetch('API주소', {
                method: 'POST',
                body: JSON.stringify({
                    "phone" : "01012345678",
                    "name" : "nickname"
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(response => {
                    if (response.message === '닉네임 수정 성공') {
                        return alert('변경되었습니다.');
                    } else if (response.message === '필수 데이터 누락') {
                        alert('필수 정보를 모두 입력해주세요.');
                    } else if (response.message === '이미 존재하는 닉네임'){
                        alert('이미 존재하는 닉네임입니다.');
                    }
                });
        };

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
                    <p><input type="text" placeholder="새로운 닉네임 입력" onChange={onNickHandler} /></p
                </div>

                <button onClick={UpdateNick}  type="button" >수정하기</button>
            </div>

        </main>
    )
}