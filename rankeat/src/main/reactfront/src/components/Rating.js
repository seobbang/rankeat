/* 업체 평점 */

const Rating = () => {
    
    function handleClick (e) {
        window.location.href = '/WriteReview'
    }

    return(
        <>
            <div className="moon_grade">
                <div className="moon"></div>
                <span className="grade">평점</span>
            </div>

            <div className="assessment">
                <span>가격 : </span> <br/><br/>
                <span>웨이팅 : </span> <br/><br/>
                <span>맛 :</span>  <br/><br/>
                <span>위생 :</span>  <br/><br/>
                <span>서비스: </span>
            </div>

            <div className="btn_reviewing">
              <button onClick={handleClick}>리뷰 작성하기</button>
            </div>
       </>
    );
}

export default Rating