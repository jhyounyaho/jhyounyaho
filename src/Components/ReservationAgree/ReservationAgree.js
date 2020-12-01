import React, { useState } from 'react';

function ReservationAgree() {
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTraveler, setAgreeTraveler] = useState(false);
  const [agreeSale, setAgreeSale] = useState(false);

  // 전체 약관 동의 
  const onAgreeAllHandler = (e) =>{
    setAgreeAll(!agreeAll)
    if (agreeAll === true) {
      setAgreeTraveler(true)
      setAgreeSale(true)
    } else {
      setAgreeTraveler(false)
      setAgreeSale(false)
    }
  }

  // 여행자 약관 동의 (필수)
  const onAgreeTravelerHandler = (e) =>{
    setAgreeTraveler(!agreeTraveler)
    if (agreeTraveler === false) {
      setAgreeAll(false)
    }
  }

  // 특가 항공권 및 할인 혜택 안내 동의(선택)
  const onAgreeSaleHandler = (e) =>{
    setAgreeSale(!agreeSale)
    if (agreeSale === false) {
      setAgreeAll(false)
    }
  }

  return (
    <>
      <h2>약관 동의</h2>
      <label for='agreeAll'>
        <input 
          type='checkbox' 
          id='agreeAll' 
          name='agreeAll' 
          checked={agreeAll}
          onChange={onAgreeAllHandler}
        />
        <strong>전체 약관 동의</strong>
      </label>
      <ul>
        <li>
          <div>
            <label for='agreeTraveler'>
              <input 
                type='checkbox' 
                id='agreeTraveler' 
                name='agreeTraveler' 
                checked={agreeTraveler}
                onChange={onAgreeTravelerHandler}
              />
              여행자 약관 동의 (필수)
            </label>
          </div>
        </li>
        <li>
          <div>
            <label for='agreeSale'>
              <input 
                type='checkbox' 
                id='agreeSale' 
                name='agreeSale' 
                checked={agreeSale}
                onChange={onAgreeSaleHandler}
              />
              특가 항공권 및 할인 혜택 안내 동의(선택)
            </label>
          </div>
        </li>
      </ul>
    </>
  )
}

export default React.memo(ReservationAgree);