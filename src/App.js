import React from 'react';
import ReservationForm from './Components/ReservationForm/ReservationForm';
import { createGlobalStyle } from 'styled-components';
import ReservationTemplate from './Components/ReservationTemplate/ReservationTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
function App() {
  return (
    <div>
      <GlobalStyle />
      <ReservationTemplate>
        <ReservationForm />
      </ReservationTemplate>
    </div>
  )
}

export default App;