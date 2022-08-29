import '../css/Personal.css'
import React, {useState} from "react";
import AppLayout from "./AppLayout";

function Personal() {

    const [Nick, setNick] = useState('')

    const onNickHandler = (e) => {
        setNick(e.currentTarget.value)
    }

    const onChange = (e) => {
        setNick({nickname: e.target.value})
    }
    /*
    const UpdateNick = (e) => {
        fetch("http://localhost:8080/user/modify", {
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
                    setNick(e.currentTarget.value)
                    return alert('변경되었습니다.');
                } else if (response.message === '필수 데이터 누락') {
                    alert('필수 정보를 모두 입력해주세요.');
                } else if (response.message === '이미 존재하는 닉네임'){
                    alert('이미 존재하는 닉네임입니다.');
                }
            });

    };

     */
return (

            <div>
                <AppLayout/>
                <div className='minibox'>
                    개인정보수정
                <div className='nick'>
                    <p>닉네임</p>
                    <p><input type="text" placeholder="새로운 닉네임 입력" onChange={onNickHandler}/></p>

                <button /*onClick={UpdateNick}*/  type="button" >수정하기</button>
                </div>
                </div>
            </div>

 )}


export default Personal;