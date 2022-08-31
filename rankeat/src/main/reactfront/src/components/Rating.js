/* 업체 평점 */
import {WiMoonWaxingCrescent2, WiMoonWaxingCrescent4, WiMoonFirstQuarter, WiMoonWaxingGibbous6, WiMoonFull} from 'react-icons/wi' 


const Rating = (dt,loginState) => {

    let assessment = '';
    
    function handleClick (e) {
        if(loginState) {
            const userId = window.localStorage.getItem('id');
            window.location.href = '/WriteReview'
        } else {
            alert("로그인 후 이용해주세요.");
        }
    }

    function dalPointToIcon (num) { 

        let dalIcon = '';

        if (num<=1) {
            dalIcon = <WiMoonWaxingCrescent2 size='120'/>
        }
        else if (num<=2) {
            dalIcon = <WiMoonWaxingCrescent4 size='120'/>

        }
        else if (num<=3) {
            dalIcon = <WiMoonFirstQuarter size='120'/>
        }
        else if(num<=4) {
            dalIcon = <WiMoonWaxingGibbous6 size='120'/>
        }
        else {
            dalIcon = <WiMoonFull size='120'/>
        }

        return dalIcon;
    }

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

   //================================================================================================================
    return(
        <>
            <div className="moon_grade">
                <div className="moon">
                        {dalPointToIcon(dt.store.dalpoint)}
                </div>  
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