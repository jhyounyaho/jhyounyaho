import React from 'react';
import styled from 'styled-components';

const ReservationTemplateBlock = styled.div`
  width: 512px;
  position: relative; 
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; 
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

function ReservationTemplate({ children }) {
  return (
    <ReservationTemplateBlock>
      {children}
    </ReservationTemplateBlock>
  )
}

export default React.memo(ReservationTemplate);