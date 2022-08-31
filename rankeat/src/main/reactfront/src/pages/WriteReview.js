/* 후기 작성 페이지 */
import '../css/WriteReview.css'

import React, { useState } from "react";
import AppLayout from './AppLayout';

const WriteReview = () => {

    //입력 받은 정보

    const [inputData,setInputData] = useState({

        "reviewnum" : "",
        "reviewer" : "",
        "storenum" : "",
        "dalpoint" : "", 
        "contents" : "",
        "price" : "", 
        "waiting" : "", 
        "taste" : "",
        "clean" : "", 
        "service" : "", 
        "tag1" : "",
        "tag2" : "",
        "tag3" : ""

    })

    // 
    const getInputData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        })

        
    }

    // start - 키워드 3개만 선택 가능하도록 제어 - 오류 발생

    let maxChecked=3;
    let totalChecked = 0;
    let kewordsTempArr = [];

    function CountChecked(e) {
        if (e.target.checked) {
            totalChecked += 1;
            kewordsTempArr.push(e.target.value);
        }   
        else { 
            totalChecked -= 1;
            kewordsTempArr = kewordsTempArr.filter((elm) => elm !== e.target.value)
        }

        if (totalChecked>maxChecked) {
            e.target.checked = false;
            totalChecked -= 1;
            kewordsTempArr = kewordsTempArr.filter((elm) => elm !== e.target.value)
        }
    }

    // end


   // 작성한 리뷰 업로드 
    const handleSubmit= (e) => {

        // 작성 누락 항목 확인 
        if (inputData.price === '' || inputData.waiting === '' || inputData.taste === '' || inputData.clean === '' || inputData.service === '') {
            window.scrollTo({top:0, behavior:'smooth'});
            window.alert('항목별 평가를 선택해주세요!');
            console.log("항목별 평가 누락");
        };

        if(inputData.dalpoint === '') {
            window.scrollTo({top:0, behavior:'smooth'});
            window.alert('총점을 선택해주세요!');
            console.log("총점 선택 누락")
        }

        if (inputData.contents.length < 1) {
            window.alert('상세 후기를 입력해주세요!');
            console.log("상세후기 입력 누락")   
        }

        if (inputData.tag1 === '' || inputData.tag2 === '' || inputData.tag3 === '') {
            window.alert('3가지 키워드를 선택해주세요!');
            console.log("키워드 선택 누락")  
        }

        // 누락 항목 없음 -> 리뷰 등록 & 맛집 상제 정보 페이지로

        //test

        console.log(kewordsTempArr)
        console.log(inputData);

    }

    // end
    

    //========================================================================================================================

    return (
       <>
          <AppLayout/>

            <div className="writeReview">

                <div className="announcement">
                    <span>최근 __동안의 평가만 총 평점에 반영됩니다.</span>
                </div>

                <div className="assess">
                    <div className="item">
                        <div className="category">&nbsp;가격 &nbsp;&nbsp;: </div>
                        <input onClick={getInputData} value='1' id="radio_btn1" name='price' type='radio'/><label for='radio_btn1'>저렴해요</label>
                        <input onClick={getInputData} value='2' id="radio_btn2" name='price' type='radio'/><label for='radio_btn2'>적당해요</label>
                        <input onClick={getInputData} value='3' id="radio_btn3" name='price' type='radio'/><label for='radio_btn3'>비싸요</label>
                    </div>

                    <div className="item">
                        <div className="category">웨이팅 : </div>
                        <input onClick={getInputData} value='1' id="radio_btn4" name='waiting' type='radio'/><label for='radio_btn4'>없어요</label>
                        <input onClick={getInputData} value='2' id="radio_btn5" name='waiting' type='radio'/><label for='radio_btn5'>적당해요</label>
                        <input onClick={getInputData} value='3' id="radio_btn6" name='waiting' type='radio'/><label for='radio_btn6'>길어요</label>
                    </div>

                    <div className="item">
                        <div className="category">&nbsp;&nbsp; 맛 &nbsp;&nbsp;&nbsp;: </div>
                        <input onClick={getInputData} value='1' id="radio_btn7" name='taste' type='radio'/><label for='radio_btn7'>별로에요</label>
                        <input onClick={getInputData} value='2' id="radio_btn8" name='taste' type='radio'/><label for='radio_btn8'>보통이에요</label>
                        <input onClick={getInputData} value='3' id="radio_btn9" name='taste' type='radio'/><label for='radio_btn9'>최고에요</label>
                    </div>

                    <div className="item">
                        <div className="category">&nbsp;위생 &nbsp;&nbsp;: </div>
                        <input onClick={getInputData} value='1' id="radio_btn10" name='clean' type='radio'/><label for='radio_btn10'>별로에요</label>
                        <input onClick={getInputData} value='2' id="radio_btn11" name='clean' type='radio'/><label for='radio_btn11'>보통이에요</label>
                        <input onClick={getInputData} value='3' id="radio_btn12" name='clean' type='radio'/><label for='radio_btn12'>깨끗해요</label>
                    </div>

                    <div className="item">
                        <div className="category">서비스 : </div>
                        <input onClick={getInputData} value='1' id="radio_btn13" name='service' type='radio'/><label for='radio_btn13'>별로에요</label>
                        <input onClick={getInputData} value='2' id="radio_btn14" name='service' type='radio'/><label for='radio_btn14'>보통이에요</label>
                        <input onClick={getInputData} value='3' id="radio_btn15" name='service' type='radio'/><label for='radio_btn15'>좋아요</label>
                    </div>
                </div>

                <div className="totalScore"> 
                    <div className="category">총점 : </div>
                    <input onClick={getInputData} value='1' id="radio_btn16" name='dalpoint' type='radio'/><label for='radio_btn16'>1</label>
                    <input onClick={getInputData} value='2' id="radio_btn17" name='dalpoint' type='radio'/><label for='radio_btn17'>2</label>
                    <input onClick={getInputData} value='3' id="radio_btn18" name='dalpoint' type='radio'/><label for='radio_btn18'>3</label>
                    <input onClick={getInputData} value='4' id="radio_btn19" name='dalpoint' type='radio'/><label for='radio_btn19'>4</label>
                    <input onClick={getInputData} value='5' id="radio_btn20" name='dalpoint' type='radio'/><label for='radio_btn20'>5</label>      
                </div>

                <div className="writingBox">
                <textarea onChange={getInputData} name='contents' rows="5" cols="30" placeholder="300자 이내로 작성해주세요." maxLength={300}> 
                </textarea>
                
                </div>

                <div className="selectKeywords">
                    <div className="announcement">
                        <span>이 업체와 어울리는 3가지 키워드를 선택해주세요!</span>
                    </div>

                    <div className="keywords">
                        <input value='1' onClick={CountChecked} id="check_btn1" name='ckeckbox1' type='checkbox'/><label for='check_btn1'>#가성비 좋음</label>
                        <input value='2' onClick={CountChecked} id="check_btn2" name='ckeckbox1' type='checkbox'/><label for='check_btn2'>#넉넉한 밥양</label>
                        <input value='3' onClick={CountChecked} id="check_btn3" name='ckeckbox1' type='checkbox'/><label for='check_btn3'>#밥약에 좋음</label>
                        <input value='4' onClick={CountChecked} id="check_btn4" name='ckeckbox1' type='checkbox'/><label for='check_btn4'>#카공에 적합</label>
                        <input value='5' onClick={CountChecked} id="check_btn5" name='ckeckbox1' type='checkbox'/><label for='check_btn5'>#미팅에 적합</label>
                        <input value='6' onClick={CountChecked} id="check_btn6" name='ckeckbox1' type='checkbox'/><label for='check_btn6'>#혼밥에 적당</label>
                        <input value='7' onClick={CountChecked} id="check_btn7" name='ckeckbox1' type='checkbox'/><label for='check_btn7'>#늦게까지 함</label>
                        <input value='8' onClick={CountChecked} id="check_btn8" name='ckeckbox1' type='checkbox'/><label for='check_btn8'>#특별한 날에</label>
                        <input value='9' onClick={CountChecked} id="check_btn9" name='ckeckbox1' type='checkbox'/><label for='check_btn9'>#매장이 깨끗</label>
                        <input value='10' onClick={CountChecked} id="check_btn10" name='ckeckbox1' type='checkbox'/><label for='check_btn10'>#재료가 신선</label>
                    </div>
                </div>

                <div className="upload">
                    <button type='submit' onClick={handleSubmit}>리뷰 등록</button>
                </div>

            </div>
      </>
    );
}

export default WriteReview;