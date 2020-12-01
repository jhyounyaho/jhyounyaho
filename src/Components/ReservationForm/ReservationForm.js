import React from 'react';
import styled from 'styled-components';
import CellPhoneInfo from '../CellPhoneInfo/CellPhoneInfo';
import EstimatedArrivalTime from '../EstimatedArrivalTime/EstimatedArrivalTime';
import ExReservationInfo from '../ExReservationInfo/ExReservationInfo';
import ReservationAgree from '../ReservationAgree/ReservationAgree';
import TravelerInfo from '../TravelerInfo/TravelerInfo';

const ReservationFormBlock = styled.div`
  width: 100%;
  left: 0;
  ul {
    list-style:none
  }
  li {
    list-style:none;
    margin-bottom: 10px;
  }
  button {
    height: 46px;
    width: 100%;
    background-color: #51abf3;
    color: #fff;
    border-radius: 3px;
    vertical-align: middle;
    font-size: 20px;
    cursor: pointer;
    padding-left: 0!important;
    padding-right: 0!important;
    text-align: center;
    disabled;
  }
  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    /**width: 80%; **/
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    margin-right: 15px;
  }
  textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }
  select {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    margin-right: 15px;
  }
  p.is-invalid {
    color: #ff8000; 
  }
`;

const InsertForm = styled.form`
  padding: 32px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

function ReservationForm() {
  // form sumit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    /*
    console.log('middleName 영문이름', middleName)
    console.log('firstName 영문성', firstName)
    console.log('koName 한글이름', koName)
    console.log('sex 성별', sex)
    console.log('birth 생년월일', birth)
    console.log('hour 숙소예정시간', hour)
    console.log('minute 숙소예정분', minute)
    console.log('phoneName 사용자이름', phoneName)
    console.log('prePhone 핸드폰번호', prePhone)
    console.log('phone 핸드폰번호', phone)
    console.log('exInfo 기타예약정보', exInfo)
    */
    // valid 가 다 가능한 상태일 경우 
    alert('submit !')
  }

  return (
    <ReservationFormBlock>
      <InsertForm onSubmit={onSubmitHandler}>
        <TravelerInfo num={1} />
        <TravelerInfo num={2} />
        <EstimatedArrivalTime />
        <CellPhoneInfo />
        <ExReservationInfo /> 
        <ReservationAgree />
        <div>
          <button type='submit'>
            결제하기
          </button>
        </div>
      </InsertForm>
    </ReservationFormBlock>
  )
}

export default React.memo(ReservationForm);