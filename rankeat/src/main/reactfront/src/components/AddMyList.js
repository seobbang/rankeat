/* 내 맛집 리스트 드롭다운 메뉴 */
import React from 'react'

import Modal from 'react-modal';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

const AddMyList = (dt, loginState) => {

  // 더미데이터
   const dummy =  {
    "data": {
      "myList": [
          {
              "listname": "rankeatList_1",
              "listnum": "1"
          },
          {
              "listname": "rankeatList_2",
              "listnum": "2"
          },
          {
              "listname": "rankeatList_3",
              "listnum": "3"
          },
      ]
     }
   }


 // 내 맛집 리스트에 추가 성공/실패 모달 control
  const [successAdd, setSuccessAdd] = useState(false);
  const [failAdd, setSFailAdd] = useState(false);

 // 로그인 여부 확인
  function handleLoginState (e) {

        if(loginState) {
          const userId = window.localStorage.getItem('id');
      } else {
          alert("로그인 후 이용해주세요.");
      }

  }

  function handleClick (e) {

    setSuccessAdd(true);

    setTimeout(() => {setSuccessAdd(false)}, 1300);

   }

  // 새 맛집 리스트 생성 팝업 모달 control
  const [createList, setCreateList] = useState(false);

  function handleCreateList (e) {
    setCreateList(!createList);
  }


  // '새 맛집 리스트 생성 팝업' 컴포넌트
  const CreateList = () => {

     // 사용자로부터 입력 받은 데이터 + 서버 전송 데이터
      const [inputData,setInputData] = useState({
        "listnum" : "",
        "writer" : "",
        "listname" : "",
        "ltag1" : false,
        "ltag2" : false,
        "ltag3" : false,
        "ltag4" : false,
        "ltag5" : false,
        "ltag6" : false,
        "ltag7" : false,
        "ltag8" : false,
        "ltag9" : false,
        "ltag10" : false
      })

    // 리스트명 저장
    const getListName = (e) => {
      setInputData({
        ...inputData,
        [e.target.id] : e.target.value,
      })
    }

    //키워드 선택 개수 제한
    let maxChecked=3;
    let totalChecked = 0;

    function countChecked(e) {
      if (e.target.checked){
         totalChecked += 1;
        }
      else {
        totalChecked -= 1;
      }

      if (totalChecked>maxChecked) {
          e.target.checked = false;
          totalChecked -= 1;
      }
    }

    // 태그 선택 여부 저장  - 에러: setInputData 넣으면 countChecked 작동 안됨
    function getTagValue (e) {
      countChecked(e)

      // setInputData({
      //   ...inputData,
      //   [e.target.id] : e.target.checked,
      // })
    }


    function handleSubmit(e) {

      // 작성 항목 누락 확인
      if(inputData.listname.length < 1) {
        window.alert('맛집리스트 이름을 입력해주세요!');
      }

      if(totalChecked !== 3) {
        window.alert('3가지 키워드를 선택해주세요!');
      }

      // 확인용
      console.log(inputData);

    }

    return (

        <div className="createList">

                <div className="inputBox">
                        <div>리스트명</div>
                        <input id='listname' onChange={getListName}></input>
  
                        <div>키워드 선택</div>
                        <div className="keywords">
                          <input id="ltag1" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag1'>#가성비 좋음</label>
                          <input id="ltag2" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag2'>#데이트 코스</label>
                          <input id="ltag3" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag3'>#밥약에 좋음</label>
                          <input id="ltag4" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag4'>#카공에 적합</label>
                          <input id="ltag5" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag5'>#접근성 좋음</label>
                          <input id="ltag6" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag6'>#혼밥에 적당</label>
                          <input id="ltag7" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag7'>#늦게까지 함</label>
                          <input id="ltag8" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag8'>#사장님 친절</label>
                          <input id="ltag9" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag9'>#매장이 깨끗</label>
                          <input id="ltag10" name='ckeckbox1' type='checkbox' onClick={getTagValue}/><label for='ltag10'>#재료가 신선</label>
                        </div>
  
                </div>
  
                <div className="createOrNot">
                    <button onClick={handleCreateList}>CANCEL</button>
                    <button onClick={handleSubmit}>CREATE</button>
                </div>   
        </div>       
    );
  }

  // ============================================================================================================================
    return (
        
      <div className="myList">

                  <DropdownButton onClick={handleLoginState} id="dropdown-basic-button" title="내 리스트에 추가" size='sm'>

                      { dummy.data.myList.map((it) => (
                          <Dropdown.Item id='myListdropdown' onClick={handleClick}>
                          <div>{it.listname}</div>
                          </Dropdown.Item>
                      ))}

                      <Dropdown.Divider />

                      <Dropdown.Item id='createListDropdown'  href="#/createNewList" onClick={handleCreateList}>새 리스트 만들기</Dropdown.Item>

                  </DropdownButton>

                {/* 리스트에 식당 추가 성공/실패 알림 modal */}
                    <Modal className='addListModal' isOpen={successAdd} onRequestClose={successAdd}>
                            <div className='content'>
                              <div>
                                <img src={process.env.PUBLIC_URL + '/image/addListSuccess.gif'}/>
                              </div>
                              <div>맛집 리스트에 추가되었습니다!</div>
                            </div>
                    </Modal>

                    <Modal className='alreadyExistsModal' isOpen={failAdd} onRequestClose={failAdd}>
                            <div className='content'>
                              <div>
                                <img src={process.env.PUBLIC_URL + '/image/addListSuccess.gif'}/>
                              </div>
                              <div>이미 리스트에 추가된 업체입니다.</div>
                            </div>
                    </Modal>

               {/* 새 리스트 생성 modal */}

                    <Modal className='createListModal' isOpen={createList} onRequestClose={createList}>
                            <div className='content'>
                               <CreateList/>
                            </div>
                    </Modal>

      </div>

    )

}

export default AddMyList