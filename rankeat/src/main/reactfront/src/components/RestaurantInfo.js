/* 업체 정보 */

const RestaurantInfo = (dt) => {

    //numToKeword함수 : dt.store.tag의 정수 값을 받아 해당 수에 대응하는 키워드로 치환하는 함수  ->  스위치문 / 인자(dt.store.tag) / 반환값(키워드 문자열)

    function numToKeword (tag) {

        let keyword  ='';

        switch (tag) {
            case "1":
                keyword = '키워드1';
                break;
            case '2':
                keyword = '키워드2';
                break;
            case "3":
                keyword = '키워드3';
                break;
            case "4":
                keyword = '키워드4';
                break;
            case "5":
                keyword = '키워드5';
                break;
            case "6":
                keyword = '키워드6';
                break;
            case "7":
                keyword = '키워드7';
                break;
            case "8":
                keyword = '키워드8';
                break;
            case "9":
                keyword = '키워드9';
                break;
            case "10":
                keyword = '키워드10';
                break;                
            default:
                keyword = '';
                break;
        }

        return keyword;
    }

  //=============================================================================

    return (
        <div id="restaurantInfo">
        
                <div className="representative_image">
                    <div> </div>
                </div>

                <div className="keywords">
                    <span>#{numToKeword(dt.store.tag1)}</span>   
                    <span>#{numToKeword(dt.store.tag2)}</span>
                    <span>#{numToKeword(dt.store.tag3)}</span>
                </div>

                <div className="other_info"> 
                   <div> 
                      <span className="category">주소</span> <span className="info">{dt.store.address}</span> 
                   </div>
                   <div>
                      <span className="category">전화번호</span> <span className="info">{dt.store.tel}</span>
                   </div> 
                </div>

        </div>
    );
}

export default RestaurantInfo