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

            <div className='first'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____
                </div>
            </div>

            <div className='second'>
                <h3>식당이름</h3>
                <IoMoon/> 3.5
                <div className='tag'>#____<br></br> #____<br></br> #____</div>
            </div>

            <div className='third'>
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
             <div className='liname'>리스트이름</div>
            <br></br>

            <div className='first'>
                <h3>식당이름</h3>
                <div class="img"></div>
                <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
                </div>
            </div>

            <div className='second'>
                <h3>식당이름</h3>
                <div class="img"></div>
                <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='third'>
                <h3>식당이름</h3>
                <div class="img"></div>
                <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='forth'>
                <h3>식당이름</h3>
                <div class="img"></div>
                <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='fifth'>
                <h3>식당이름</h3>
                <div class="img"></div>
                <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='six'>
                <h3>식당이름</h3>
                <div class="img"></div>
                <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='seven'>
                <h3>식당이름</h3>
                <div class="img"></div>
               <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

            <div className='eight'>
                <h3>식당이름</h3>
                <div class="img"></div>
                <IoMoon/> 3.5
                <div className='tag'>{data.tag1}<br></br>{data.tag2}<br></br>{data.tag3}</div>
            </div>

        </div>

    )
}
export default ListInfo;*/