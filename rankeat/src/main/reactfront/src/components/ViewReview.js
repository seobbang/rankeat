
const ViewReview = (dt) => {

    let assessment = '';

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



 //============================================================================================

    return (
        <>
          <div className="title">
             Review
          </div>

          { dt.reviewList.map((it) => (
                <div className="reviewBox">
           
                      <div className="nick">
                          <span>{it.writer}</span>
                      </div>
      
                      <div className="assessment">
                            <div>
                                <span className="category">가격 :</span> <span className="info">{numToPrice(it.price)}</span>
                            </div>
                            <div>
                                <span className="category">웨이팅 :</span> <span className="info">{numToWaiting(it.waiting)}</span>
                            </div>
                            <div>
                                <span className="category">맛 :</span> <span className="info">{numToTaste(it.taste)}</span>
                            </div>
                            <div>
                                <span className="category">위생 :</span> <span className="info">{numToClean(it.clean)}</span>
                            </div>
                            <div>
                                <span className="category">서비스 :</span> <span className="info">{numToService(it.service)}</span>
                            </div>
                      </div>
      
                      <div className="statement">
                          {it.contents}
                      </div>
                  
                </div>
          )) 
          } 

        </>
    );
}

export default ViewReview;