/* 업체 평점 */

const Rating = (dt) => {

    let assessment = '';
    
    function handleClick (e) {
        window.location.href = '/WriteReview'
    }

    //dalpointImg 함수 : dt.store.dalpoint 값을 받아 그 값 범주에 따라 다른 이미지 반환 -> 조건문 / 반환값(달 그림)

    // function dal (num) {

    //     if (num<=1) {

    //     }
    //     else if (num<=2) {

    //     }
    //     else if (num<=3) {

    //     }
    //     else if(num<=4) {

    //     }
    //     else {

    //     }
    // }

    function numToPrice (num) {

        switch (num) {
            case '1':
                assessment = '저렴해요';
                break;
            case '2':
                assessment = '적당해요';
                break;
            case '3':
                assessment = '비싸요';
                break;
            default:
                assessment = ''
                break;
        }

        return assessment;
    }

    function numToWaiting (num) {

        switch (num) {
            case '1':
                assessment = '없어요';
                break;
            case '2':
                assessment = '적당해요';
                break;
            case '3':
                assessment = '길어요';
                break;
            default:
                assessment = ''
                break;
        }

        return assessment;
    }

    function numToTaste (num) {

        switch (num) {
            case '1':
                assessment = '별로에요';
                break;
            case '2':
                assessment = '보통이에요';
                break;
            case '3':
                assessment = '최고에요';
                break;
            default:
                assessment = ''
                break;
        }

        return assessment;
    }

    function numToClean (num) {

        switch (num) {
            case '1':
                assessment = '별로에요';
                break;
            case '2':
                assessment = '보통이에요';
                break;
            case '3':
                assessment = '깨끗해요';
                break;
            default:
                assessment = ''
                break;     
        }

        return assessment;
    }

    function numToService (num) {

        switch (num) {
            case '1':
                assessment = '별로에요';
                break;
            case '2':
                assessment = '보통이에요';
                break;
            case '3':
                assessment = '좋아요';
                break;
            default:
                assessment = ''
                break;
        }

        return assessment;
    }

    
    return(
        <>
            <div className="moon_grade">
                <div className="moon"></div>   {/*dalpointImg 함수 호출*/}
                <span className="grade">{dt.store.dalpoint}</span>
            </div>

            <div className="totalAssessment">
                <div>
                    <span className="category">가격 :</span> <span className="info">{numToPrice(dt.store.price)}</span>
                </div>
                <div>
                    <span className="category">웨이팅 :</span> <span className="info">{numToWaiting(dt.store.waiting)}</span>
                </div>
                <div>
                    <span className="category">맛 :</span> <span className="info">{numToTaste(dt.store.taste)}</span>
                </div>
                <div>
                    <span className="category">위생 :</span> <span className="info">{numToClean(dt.store.clean)}</span>
                </div>
                <div>
                    <span className="category">서비스 :</span> <span className="info">{numToService(dt.store.service)}</span>
                </div>
            </div>

            <div className="btn_reviewing">
              <button onClick={handleClick}>리뷰 작성하기</button>
            </div>
       </>
    );
}

export default Rating