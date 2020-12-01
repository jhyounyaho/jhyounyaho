import React, { useState } from 'react';

function EstimatedArrivalTime() {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  let hourSelect = [];
  for(let i=0; i <=23; i++) {
    hourSelect.push(<option value={i}>{i}</option>);
  }

  let minuteSelect = [];
  for(let i=0; i <=59; i++) {
    minuteSelect.push(<option value={i}>{i}</option>);
  }

  const onHourHandler = (e) => {
    setHour(e.target.value);
  }

  const onMinuteHandler = (e) => {
    setMinute(e.target.value)
  }

  return (
    <>
      <h2>숙소 도착 예정 시간</h2>
      <div>
        <label for='hour'>
          <select 
            id='hour'
            name='hour'
            value={hour}
            onChange={onHourHandler} 
          >
            <option value=''>시</option>
            {hourSelect.map(e => e)}
          </select>
        </label>
        <label for='minute'>
          <select 
            id='minute'
            value={minute}
            onChange={onMinuteHandler} 
          >
            <option value=''>분</option>
            {minuteSelect.map(e => e)}
          </select>
        </label>
      </div>
    </>
  )
}

export default React.memo(EstimatedArrivalTime);