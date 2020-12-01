import React, { useState } from 'react';

function TravelerInfo({ num }) {
  const [middleName, setMiddleName] = useState('');
  const [isMiddleNameValid, setIsMiddleNameValid] = useState(false)
  const [returnMiddleName, setReturnMiddleName] = useState('');

  const [firstName, setFirstName] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(false)
  const [returnFirstName, setReturnFirstName] = useState('');

  const [koName, setKoName] = useState('');
  const [isKoNameValid, setIsKoNameValid] = useState(false);
  const [returnKoName, setReturnKoName] = useState('');

  const [sex, setSex] = useState('');
  const [isSexValid, setIsSexValid] = useState(false);
  const [returnSex, setReturnSex] = useState('');

  const [birth, setBirth] = useState('');
  const [isBirthValid, setIsBirthValid] = useState(false);
  const [returnBirth, setReturnBirth] = useState(false);

  // 유효성 체크 - 영문 이름 
  const onMiddleNameHandler = (e) => {
    const regExp = /^[a-zA-Z\s]+$/; // 영문과 공백 허용

    if (e.currentTarget.value.length < 2) {
      setIsMiddleNameValid(false)
      setReturnMiddleName('최소 2자 이상 입력해주세요.')
    } else if (e.currentTarget.value.length > 20) {
      setIsMiddleNameValid(false)
      setReturnMiddleName('최대 20자까지 입력 가능합니다.')
    } else if (regExp.test(e.currentTarget.value) === false) {
      setIsMiddleNameValid(false)
      setReturnMiddleName('영어와 띄워쓰기만 입력 가능합니다.')
    } else {
      setIsMiddleNameValid(true)
    }

    setMiddleName(e.currentTarget.value);
  }

  // 유효성 체크 - 영문 성 
  const onFirstNameHandler = (e) => {
    const regExp = /^[a-zA-Z\s]+$/; // 영문과 공백 허용

    if (e.currentTarget.value.length < 2) {
      setIsFirstNameValid(false)
      setReturnFirstName('최소 2자 이상 입력해주세요.')
    } else if (e.currentTarget.value.length > 20) {
      setIsFirstNameValid(false)
      setReturnFirstName('최대 20자까지 입력 가능합니다.')
    } else if (regExp.test(e.currentTarget.value) === false) {
      setIsFirstNameValid(false)
      setReturnFirstName('영어와 띄워쓰기만 입력 가능합니다.')
    } else {
      setIsFirstNameValid(true)
    }
    setFirstName(e.currentTarget.value);
  }

  // 유효성 체크 - 한글 이름 
  const onKoNameHandler = (e) => {
    const regExp = /^[가-힣]+$/; // 한글만 허용

    if (e.currentTarget.value.length < 2) {
      setIsKoNameValid(false)
      setReturnKoName('최소 2자 이상 입력해주세요.')
    } else if (e.currentTarget.value.length > 20) {
      setIsKoNameValid(false)
      setReturnKoName('최대 20자까지 입력 가능합니다.')
    } else if (regExp.test(e.currentTarget.value) === false) {
      setIsKoNameValid(false)
      setReturnKoName('한글만 입력 가능합니다.')
    } else {
      setIsKoNameValid(true)
    }
    setKoName(e.currentTarget.value);
  }

  // 유효성 체크 - 생년월일  
  const onBirthHandler = (e) => {
    const regExp = /^[0-9]+$/; // 숫자만 허용

    if (e.currentTarget.value.length !== 6) {
      setIsBirthValid(false)
      setReturnBirth('6자리의 생년월일을 입력해 주세요.(YYMMDD).')
    } else if (regExp.test(e.currentTarget.value) === false) {
      setIsBirthValid(false)
      setReturnBirth('숫자(0~9)만 입력 가능합니다.')
    } else {
      setIsBirthValid(true)
    }
    setBirth(e.currentTarget.value);
  } 

  return (
    <>
      <h2>여행자<span>{num}</span></h2>
      예약하시는 모든 분의 정보를 여권 상과 동일하게 기입해 주시기 바랍니다.
      <label for='middleName'>
        <p>영문 이름</p>
        <div>
          <input 
            type='text' 
            id='middleName' 
            name='middleName' 
            placeholder='Hong'
            value={middleName} 
            onChange={onMiddleNameHandler} 
          />
          {
            isMiddleNameValid === false && (<p className='is-invalid'>{returnMiddleName}</p>)
          }
        </div>
      </label>
      <label for='firstName'>
        <p>영문 성</p>
        <div>
          <input 
            type='text' 
            id='firstName' 
            name='firstName' 
            placeholder='Gil Dong'
            value={firstName} 
            onChange={onFirstNameHandler} 
          />
          {
            isFirstNameValid === false && (<p className='is-invalid'>{returnFirstName}</p>)
          }
        </div>
      </label>
      <label for='koName'>
        <p>한글 이름</p>
        <div>
          <input 
            type='text' 
            id='koName' 
            name='koName' 
            placeholder='홍길동'
            value={koName} 
            onChange={onKoNameHandler} 
          />
          {
            isKoNameValid === false && (<p className='is-invalid'>{returnKoName}</p>)
          }
        </div>
      </label>
      <label for='sex'>
        <p>성별</p>
        <ul>
          <li>
            <div>
              <input 
                type='radio' 
                id='sex' 
                name='sex' 
                value='male' 
                checked={sex === 'male'}
                onClick={() => setSex('male')}
              />
              <span>남</span>
            </div>
          </li>
          <li>
            <div>
              <input 
                type='radio' 
                id='sex' 
                name='sex' 
                value='female' 
                checked={sex === 'female'}
                onClick={() => setSex('female')}
              />
              <span>여</span>
            </div>
          </li>
        </ul>
        {
          isSexValid === false && (<p className='is-invalid'>{returnSex}</p>)
        }
      </label>
      <label for='birth'>
        <p>생년월일</p>  
        <div>
          <input 
            type='text' 
            id='birth' 
            name='birth' 
            placeholder='YYMMDD'
            value={birth}
            onChange={onBirthHandler} 
          />
          {
            isBirthValid === false && (<p className='is-invalid'>{returnBirth}</p>)
          }
        </div>
      </label>
    </>
  )
}

export default React.memo(TravelerInfo);