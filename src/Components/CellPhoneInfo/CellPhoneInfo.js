import React, { useState } from 'react';

function CellPhoneInfo() {
  const [phoneName, setPhoneName] = useState('');
  const [isPhoneNameValid, setIsPhoneNameValid] = useState(false);
  const [returnPhoneName, setReturnPhoneName] = useState('');

  const [prePhone, setPrePhone] = useState('82');

  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [returnPhone, setReturnPhone] = useState('')

  // 유효성 체크 - 사용자 이름 
  const onPhoneNameHandler = (e) => {
    const regExp = /^[a-zA-Z\s]+$/; // 영문과 공백 허용

    if (e.currentTarget.value.length < 2) {
      setIsPhoneNameValid(false)
      setReturnPhoneName('최소 2자 이상 입력해주세요.')
    } else if (e.currentTarget.value.length > 20) {
      setIsPhoneNameValid(false)
      setReturnPhoneName('최대 20자까지 입력 가능합니다.')
    } else if (regExp.test(e.currentTarget.value) === false) {
      setIsPhoneNameValid(false)
      setReturnPhoneName('영어와 띄워쓰기만 입력 가능합니다.')
    } else {
      setIsPhoneNameValid(true)
    }

    setPhoneName(e.currentTarget.value);
  }
  // 유효성 체크 - 핸드폰 번호 
  const onPhoneHandler = (e) => {
    const regExp = /^[0-9]+$/; // 숫자만 허용

    if (e.currentTarget.value.length < 2) {
      setIsPhoneValid(false)
      setReturnPhone('최소 2자 이상 입력해주세요.')
    } else if (e.currentTarget.value.length > 20) {
      setIsPhoneValid(false)
      setReturnPhone('최대 20자까지 입력 가능합니다.')
    } else if (regExp.test(e.currentTarget.value) === false) {
      setIsPhoneValid(false)
      setReturnPhone('숫자(0~9)만 입력가능합니다.')
    } else {
      setIsPhoneValid(true)
    }

    setPhone(e.currentTarget.value);
  } 
  return (
    <>
      <h2>상세 핸드폰 정보</h2> 
      <label for='phoneName'>
        <p>사용자 이름</p>
        <div>
          <input 
            type='text' 
            id='phoneName' 
            name='phoneName' 
            placeholder='홍길동'
            value={phoneName}
            onChange={onPhoneNameHandler} 
          />
        </div> 
        {
          isPhoneNameValid === false && (<p className='is-invalid'>{returnPhoneName}</p>)
        }
      </label>
      <label for='prePhone'>
        <p>핸드폰 번호</p> 
        <div>
          <select 
            id='prePhone'
            name='prePhone'
            value={prePhone}
            onChange={({ target: { value } }) => setPrePhone(value)} 
          >
            <option value="866">대만(+866)</option>
            <option value="82" selected>대한민국(+82)</option>
            <option value="45">덴마크(+45)</option>
            <option value="1">도미니카(+1)</option>
          </select>
          <input 
            type='text' 
            id='phone' 
            name='phone' 
            value={phone}
            placeholder="'-'없이 입력해 주세요."
            onChange={onPhoneHandler} 
          />
          {
            isPhoneValid === false && (<p className='is-invalid'>{returnPhone}</p>)
          }
        </div>
      </label>
    </>
  )
}

export default React.memo(CellPhoneInfo);