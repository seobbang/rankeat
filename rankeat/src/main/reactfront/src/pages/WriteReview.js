/* 후기 작성 페이지 */
import '../css/WriteReview.css'

import React from "react";

const WriteReview = () => {

    let maxChecked=3;
    let totalChecked = 0;

    function CountChecked(field) {
        if (field.checked)
           {totalChecked += 1;}
        else
            {totalChecked -= 1;}

        if (totalChecked>maxChecked) {
            alert ("최대 3개 까지만 가능합니다."); 
            field.checked = false;
            totalChecked -= 1;
        }
    }

    return (
        <div className="writeReview">
            <div className="announcement">
                <span>최근 __동안의 평가만 총 평점에 반영됩니다.</span>
            </div>

            <div className="assess">
                <div className="item">
                    <div className="category">&nbsp;가격 &nbsp;&nbsp;: </div>
                    <input id="radio_btn1" name='radio1' type='radio'/><label for='radio_btn1'>저렴해요</label>
                    <input id="radio_btn2" name='radio1' type='radio'/><label for='radio_btn2'>적당해요</label>
                    <input id="radio_btn3" name='radio1' type='radio'/><label for='radio_btn3'>비싸요</label>
                </div>

                <div className="item">
                    <div className="category">웨이팅 : </div>
                    <input id="radio_btn4" name='radio2' type='radio'/><label for='radio_btn4'>없어요</label>
                    <input id="radio_btn5" name='radio2' type='radio'/><label for='radio_btn5'>적당해요</label>
                    <input id="radio_btn6" name='radio2' type='radio'/><label for='radio_btn6'>길어요</label>
                </div>

                <div className="item">
                    <div className="category">&nbsp;&nbsp; 맛 &nbsp;&nbsp;&nbsp;: </div>
                    <input id="radio_btn7" name='radio3' type='radio'/><label for='radio_btn7'>별로에요</label>
                    <input id="radio_btn8" name='radio3' type='radio'/><label for='radio_btn8'>보통이에요</label>
                    <input id="radio_btn9" name='radio3' type='radio'/><label for='radio_btn9'>최고에요</label>
                </div>

                <div className="item">
                    <div className="category">&nbsp;위생 &nbsp;&nbsp;: </div>
                    <input id="radio_btn10" name='radio4' type='radio'/><label for='radio_btn10'>별로에요</label>
                    <input id="radio_btn11" name='radio4' type='radio'/><label for='radio_btn11'>보통이에요</label>
                    <input id="radio_btn12" name='radio4' type='radio'/><label for='radio_btn12'>깨끗해요</label>
                </div>

                <div className="item">
                    <div className="category">서비스 : </div>
                    <input id="radio_btn13" name='radio5' type='radio'/><label for='radio_btn13'>별로에요</label>
                    <input id="radio_btn14" name='radio5' type='radio'/><label for='radio_btn14'>보통이에요</label>
                    <input id="radio_btn15" name='radio5' type='radio'/><label for='radio_btn15'>좋아요</label>
                </div>
            </div>

            <div className="totalScore"> 
                <div className="category">총점 : </div>
                <input id="radio_btn16" name='radio6' type='radio'/><label for='radio_btn16'>1</label>
                <input id="radio_btn17" name='radio6' type='radio'/><label for='radio_btn17'>2</label>
                <input id="radio_btn18" name='radio6' type='radio'/><label for='radio_btn18'>3</label>
                <input id="radio_btn19" name='radio6' type='radio'/><label for='radio_btn19'>4</label>
                <input id="radio_btn20" name='radio6' type='radio'/><label for='radio_btn20'>5</label>      
            </div>

            <div className="writingBox">
               <textarea rows="5" cols="30" placeholder="300자 이내로 작성해주세요.(선택)">
               </textarea>
               
            </div>

            <div className="selectKeywords">
                <div className="announcement">
                    <span>이 업체와 어울리는 키워드를 선택해주세요!</span>
                    <span> (최대 3개)</span>
                </div>

                <div className="keywords">
                    <input onClick={() => {CountChecked(this)}} id="check_btn1" name='ckeckbox1' type='checkbox'/><label for='check_btn1'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn2" name='ckeckbox1' type='checkbox'/><label for='check_btn2'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn3" name='ckeckbox1' type='checkbox'/><label for='check_btn3'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn4" name='ckeckbox1' type='checkbox'/><label for='check_btn4'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn5" name='ckeckbox1' type='checkbox'/><label for='check_btn5'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn6" name='ckeckbox1' type='checkbox'/><label for='check_btn6'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn7" name='ckeckbox1' type='checkbox'/><label for='check_btn7'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn8" name='ckeckbox1' type='checkbox'/><label for='check_btn8'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn9" name='ckeckbox1' type='checkbox'/><label for='check_btn9'>#어쩌구</label>
                    <input onClick={() => {CountChecked(this)}} id="check_btn10" name='ckeckbox1' type='checkbox'/><label for='check_btn10'>#어쩌구</label>
                </div>
            </div>

            <div className="upload">
                <button type='submit'>리뷰 등록</button>
            </div>

        </div>
    );
}

export default WriteReview;