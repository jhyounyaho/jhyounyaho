import React, { useState } from 'react';

function ExReservationInfo() {
  const [exInfo, setExInfo] = useState('');
  const [isExInfoValid, setIsExInfoValid] = useState(false);
  const [returnExInfo, setReturnExInfo] = useState('');

  // 유효성검사 - 기타 예약 정보 
  const onExInfoHandler = (e) => {
    if (e.currentTarget.value.length === 6) {
      setIsExInfoValid(false);
      setReturnExInfo('기타 예약 정보를 입력해주세요.')
    } else if (e.currentTarget.value.length > 200) {
      setIsExInfoValid(false);
      setReturnExInfo('최대 200자까지 입력 가능합니다.')
    } else {
      setIsExInfoValid(true);
    }
    setExInfo(e.currentTarget.value);
  }

  return (
    <>
      <h2>기타 예약 정보</h2>
      오시는 교통 수단을 적어주세요
      <label for='exInfo'>
        <div>
          <textarea
            id='exInfo'
            name='exInfo'
            value={exInfo}
            placeholder='답변을 입력해 주세요.'
            onChange={onExInfoHandler} 
          >
          </textarea>
          {
            isExInfoValid === false && (<p className='is-invalid'>{returnExInfo}</p>)
          }
        </div>
      </label>
    </>
  )
}

export default React.memo(ExReservationInfo);