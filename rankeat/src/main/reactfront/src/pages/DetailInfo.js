/* 음식점 상세 정보 페이지 */

import '../css/DetailInfo.css';

import RestaurantInfo from '../components/RestaurantInfo'
import Rating from '../components/Rating'
import ViewReview from '../components/ViewReview'
import AddMyList from '../components/AddMyList'

const DetailInfo = () => {

    return (
        <>
            <div className='name'>업체명</div>
            
            <div className='detailInfo'>

                <div className='info'>
                    <RestaurantInfo />
                </div>
                
                <div className='info_right'>
                     <AddMyList/>
                    <div className='rating'>       
                        <Rating />
                    </div>
                </div>

            </div>

            <div className='viewReview'>
                    <ViewReview />
            </div>
        </>
    );
}

export default DetailInfo