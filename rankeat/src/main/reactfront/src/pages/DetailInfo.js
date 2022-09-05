/* 음식점 상세 정보 페이지 */

import '../css/DetailInfo.css';
import React from "react";
import axios from "axios";

import RestaurantInfo from '../components/RestaurantInfo'
import Rating from '../components/Rating'
import ViewReview from '../components/ViewReview'
import AddMyList from '../components/AddMyList'
import AppLayout from "./AppLayout";

const DetailInfo = ({loginState}) => {

    let params = (new URL(document.location)).searchParams;
    let storeNum = params.get('storeNum');

    let reviewList = '';
    let storeInfo = '';

    axios.get('/store/info', {
        params : {
            storeidx : storeNum
        }
    })
      .then(function (response) {
        reviewList = response.data.reviewList;
        storeInfo = response.data.store;
      })
      .catch(function (error) {
        console.log('음식점 정보를 가져오지 못 했습니다.');
      })
      .finally(function () {
        console.log('음식점 정보 요청')
      });


    //test용 더미데이터 
    const dummy = {
       "data": {
           "reviewList": [
               {
                   "writer" : "nickname1",
                   "contents" : "text1",
                   "price" : "1",
                   "waiting" : "1",
                   "taste" : "1",
                   "clean" : "1",
                   "service" : "1"
               },
               {
                   "writer" : "nickname2",
                   "contents" : "text2",
                   "price" : "2",
                   "waiting" : "3",
                   "taste" : "1",
                   "clean" : "3",
                   "service" : "2"
               },
               {
                   "writer" : "nickname3",
                   "contents" : "text2",
                   "price" : "3",
                   "waiting" : "2",
                   "taste" : "3",
                   "clean" : "3",
                   "service" : "2"
               },
            ],
           "store" :
               {
                   "tel" : "01012345678",
                   "address" : "서울특별시 서대문구 창천동",
                   "storename" : "식당이름",
                   "storetype" : "한식",
                   "dong" : "1", // 1: 대현동(이대), 2: 창천동(신촌), 3: 연희동(연희)
                   "price" : "1", // 정수 1~3 중 택 1
                   "waiting" : "1", // 정수 1~3 중 택 1
                   "taste" : "1", // 정수 1~3 중 택 1
                   "clean" : "1", // 정수 1~3 중 택 1
                   "service" : "1", // 정수 1~3 중 택 1
                   "tag1" : "1",
                   "tag2" : "2",
                   "tag3" : "3", // 태그 번호 1~10 중 3개를 tag1, 2, 3에 각각 반환
                   "dalpoint" : "1.25"
               }
       },

       "data2": {
           "myList": [
               {
                   "listname": "rankeatList",
                   "listnum": "12"
               }
           ]
       }
       
   }

 //====================================================================================
   return (
       <>
           <AppLayout/>

           
           <div className='name'>{dummy.data.store.storename}</div>
           
           <div className='detailInfo'>

               <div className='info'>
                   <RestaurantInfo store={dummy.data.store}/>
               </div>
               
               <div className='info_right'>
                    <AddMyList myList={dummy.data2.myList} loginState={loginState}/>
                   <div className='rating'>       
                       <Rating store={dummy.data.store} loginState={loginState} />
                   </div>
               </div>

           </div>

           <div className='viewReview'>
                   <ViewReview reviewList={dummy.data.reviewList}/>
           </div>
       </>
   );
}

export default DetailInfo