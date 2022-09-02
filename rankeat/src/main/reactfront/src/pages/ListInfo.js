import AppLayout from "./AppLayout";
import '../css/ListInfo.css';
import React, { useState, useEffect } from 'react';
import { IoMoon } from "react-icons/io5"


export default function ListInfo() {
    return (
        <div className='main'>
            <AppLayout/>
            리스트이름
            <br></br>

            <div className='first'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
                <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

            <div className='second'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
                <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

            <div className='third'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
                <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

            <div className='forth'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
                <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

            <div className='fifth'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
                <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

            <div className='six'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
                <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

            <div className='seven'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
               <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

            <div className='seven'>
                <h3>식당이름</h3>
                <div class="img">👩‍💻</div>
                <IoMoon/> 3.5
                <div className='tag'>#</div>
            </div>

        </div>

    )
}
export default ListInfo;