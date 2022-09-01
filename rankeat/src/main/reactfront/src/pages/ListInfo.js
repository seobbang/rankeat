import AppLayout from "./AppLayout";
import '../css/ListInfo.css';
import React, { useState, useEffect } from 'react';

function ListInfo(){
    return(
        <div className='title'>
            <AppLayout/>
            리스트 이름
            <div className='restbox'>
                식당이름
            </div>
        </div>
    )
};

export default ListInfo;