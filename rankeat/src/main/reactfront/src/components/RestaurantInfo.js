/* 업체 정보 */

const RestaurantInfo = (dt) => {

    function numToKeword (tag) {

        let keyword  ='';

        switch (tag) {
            case "1":
                keyword = '가성비 좋음';
                break;
            case '2':
                keyword = '넉넉한 밥양';
                break;
            case "3":
                keyword = '밥약에 좋음';
                break;
            case "4":
                keyword = '카공에 적합';
                break;
            case "5":
                keyword = '미팅에 적합';
                break;
            case "6":
                keyword = '혼밥에 적당';
                break;
            case "7":
                keyword = '늦게까지 함';
                break;
            case "8":
                keyword = '특별한 날에';
                break;
            case "9":
                keyword = '매장이 깨끗';
                break;
            case "10":
                keyword = '재료가 신선';
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