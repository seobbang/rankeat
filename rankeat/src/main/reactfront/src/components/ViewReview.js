import React from "react";

const ViewReview = () => {
    return (
        <>
          <div className="title">
             Review
          </div>

          <div className="reviewBox">
           
                <div className="nick">
                    <span>닉네임</span>
                </div>

                <div className="assessment">
                    <span>가격 : </span> <br/>
                    <span>웨이팅 : </span> <br/>
                    <span>맛 :</span>  <br/>
                    <span>위생 :</span>  <br/>
                    <span>서비스: </span>
                </div>

                <div className="statement">
                    
                </div>
            
          </div>
        </>
    );
}

export default ViewReview;