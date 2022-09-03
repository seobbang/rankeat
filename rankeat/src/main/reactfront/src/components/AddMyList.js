/* 내 맛집 리스트 드롭다운 메뉴 */

import Modal from 'react-modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';


const AddMyList = () => {

  const [isClicked, setIsClicked] = useState(false);

  function handleClick (e) {

    setIsClicked(true);

    setTimeout(() => {setIsClicked(false)}, 1000);

   }

  const [createList, setCreateList] = useState(false);

  function handleCreateList (e) {
    setCreateList(!createList);
  }

  // '새 맛집 리스트 생성 팝업' 컴포넌트
  const CreateList = () => {

    return (
        <div className="createList">

                <div className="inputBox">
                        <div>리스트명</div>
                        <input></input>
  
                        <div>상세설명</div>
                        <textarea></textarea>
  
                        <div>키워드 선택</div>
                        <div className="keywords">
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
  
                </div>
  
                <div className="createOrNot">
                    <button onClick={handleCreateList}>CANCEL</button>
                    <button>CREATE</button>
                </div>   
        </div>       
    );
  }
  

    return (
        
      <div className="myList">

                  <DropdownButton id="dropdown-basic-button" title="내 리스트에 추가" size='sm'>
                      <Dropdown.Item href="#/putMyList" onClick={handleClick}>List1</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item  href="#/createNewList" onClick={handleCreateList}>새 리스트 만들기</Dropdown.Item>
                  </DropdownButton>

                    <Modal className='addListModal' isOpen={isClicked} onRequestClose={isClicked}>         
                            <div className='content'>
                              <div>
                                <img src={process.env.PUBLIC_URL + '/image/addListSuccess.gif'}/>
                              </div>
                              <div>맛집 리스트에 추가되었습니다!</div>
                            </div>
                    </Modal>

                    <Modal className='createListModal' isOpen={createList} onRequestClose={createList}>         
                            <div className='content'>
                               <CreateList/>
                            </div>
                    </Modal>

      </div>

    )

}

export default AddMyList

