import React from 'react';
import axios from 'axios';

function Box(){

    function searchApi() {
        const url = "http://localhost:8080/login";
        axios.get(url)
            .then(function(response) {
                setPhotos(response.data);
                console.log("성공");
            })
            .catch(function(error) {
                console.log("실패");
            })

    }

    return(
        <div className="box">
            <div className="pic">
                <div className="dis">
                    가격:<br></br>웨이팅:<br></br>맛:<br></br>위생:<br></br>서비스:
                </div>
            </div>
            <div className="nm">
                식당이름</div>
            <div className="tag">
                #_____</div>
            <div className="tag">
                #_____</div>
            <div className="tag">
                #_____ </div>

            <div className="tebox"> </div>
            <span class="material-symbols-outlined">
        delete
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</span>
        </div>


    )
}
export default Box