import AppLayout from "./AppLayout";
import '../css/ListInfo.css';
import React, { useState, useEffect } from 'react';
import { IoMoon } from "react-icons/io5"


 function ListInfo() {
    return (
        <div className='main'>
            <AppLayout/>
             <div className='liname'>리스트이름</div>
            <br></br>

            <div className='first_box'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____
                </div>
            </div>

            <div className='second_box'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

            <div className='third_box'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

            <div className='forth'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

            <div className='fifth'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

            <div className='six'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

            <div className='seven'>
                <h3>식당이름</h3>
               <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

            <div className='eight'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

        </div>

    )
}
export default ListInfo;


/*
const query=qs.parse(location.search, {ignoreQueryPrefix : true,});

 function ListInfo() {
    return (
    const list_info = {
            method: "GET",
            body: JSON.stringify({
            "dalpoint": "3.51",
                "storename": "식당이름",
                "tag1" : "1",
                "tag2" : "2",
                "tag3" : "3"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:8080//mylist/list/:listnum")
            .then(response => {
                return response.json();
            }
            .then(json => {
                    this.props.history.push("/DetailInfo")
                }
            });
    };
        <div className='main'>
            <AppLayout/>
             <div className='liname'>{query.listnum}</div>
            <br></br>

            <div className='first_box' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}"}>
                <h3>{data.eatList.storename[0]}</h3>
                <div class="img"></div>
                <IoMoon/> {data.eatList.dalpoint[0]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
                </div>
            </div>

            <div className='second_box' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}"}>
                <h3>{data.eatList.storename[1]}</h3>
                <div class="img"></div>
                <IoMoon/> {data.eatList.dalpoint[1]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='third_box' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}">
                <h3>{data.eatList.storename[2]}</h3>
                <div class="img"></div>
                <IoMoon/> {data.eatList.dalpoint[2]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='forth' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}">
                <h3>{data.eatList.storename[3]}</h3>
                <div class="img"></div>
                <IoMoon/> {data.eatList.dalpoint[3]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='fifth' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}">
                <h3>{data.eatList.storename[4]}</h3>
                <div class="img"></div>
                <IoMoon/> {data.eatList.dalpoint[4]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='six' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}">
                <h3>{data.eatList.storename[5]}</h3>
                <div class="img"></div>
                <IoMoon/> {data.eatList.dalpoint[5]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='seven' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}">
                <h3>{data.eatList.storename[6]}</h3>
                <div class="img"></div>
               <IoMoon/> {data.eatList.dalpoint[6]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='eight' onClick={() => window.location.href="/DetailInfo/?storeNum=${data.storenum}">
                <h3>{data.eatList.storename[7]}</h3>
                <div class="img"></div>
                <IoMoon/> {data.eatList.dalpoint[7]}
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

        </div>

    )
}
export default ListInfo;*/