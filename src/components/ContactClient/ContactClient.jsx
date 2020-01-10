import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { config } from '../../emailSetup.js';
import { COLORS } from '../../variables/colors';

// Detta är kontaktformuläret för kunder.

export default function ContactClient() {
  const c = { ...COLORS };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(config.serviceID, config.templateID, e.target, config.userID)
      .then((result) => {
          console.log(result.text);
          alert("Förfrågan skickad!");
      }, (error) => {
          console.log(error.text);
      });
  }

  const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 4rem;
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.13);
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  width: 70%;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.13);
  `

  const Select = styled.select`
  width: 20%;
  font-size: 1.1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  font-family: inherit;
  color: gray;
  -ms-box-sizing:content-box;
  -moz-box-sizing:content-box;
  -webkit-box-sizing:content-box; 
  box-sizing:content-box;
  
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-family: inherit;
  }
  `

  const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  width: 70%;
  `
  
  const StyledTextArea = styled.textarea`
  width: 45%;
  font-size: 1.1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  font-family: inherit;

  ::placeholder {
    color: gray;
  }
  `

  const StyledInput = styled.input`
  width: 20%;
  font-size: 1.1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  font-family: inherit;

  ::placeholder {
    color: gray;
  }
  `
  
  const Breaker = styled.div`
  flex-basis: 100%;
  height: 0;
  `

  const Submit = styled.input.attrs({ 
    type: 'submit',
    value: 'SKICKA'
  })`
  width: 15%;
  font-size: 1.1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  font-family: inherit;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.10);
  background-color: ${c.wkitBlue};
  cursor: pointer;
  `

  return (
    <>
    <StyledSection id="contact">
      <StyledH1>KONTAKTA OSS</StyledH1>
      <StyledH2>KONTAKTA OSS GÄRNA OM NI HAR NÅGRA FUNDERINGAR, TANKAR ELLER IDÉER SOM NI BEHÖVER HJÄLP ATT REALISERA</StyledH2>
      <StyledForm className="contact-form" onSubmit={sendEmail}>
        <StyledInput type="text" name="user_name" placeholder="Namn" required />
        <Select name="typeOfPerson" required>
          <option value="" hidden>
            Företag/Privatperson
          </option>
          <option value="Företag">Företag</option>
          <option value="Privatperson">Privatperson</option>
        </Select>
        <StyledInput type="email" name="user_email" placeholder="Email" required />
        <StyledInput type="phone" name="user_phone" placeholder="Telefon" required />
        <Select name="region" required>
          <option value="" hidden>
            Region
          </option>
          <option value="Stockholm">Stockholm</option>
          <option value="Göteborg">Göteborg</option>
          <option value="Linköping">Linköping</option>
          <option value="Malmö / Lund">Malmö / Lund</option>
          <option value="Annan ort">Annan ort</option>
        </Select>
        <Select name="subject" required>
          <option value="" hidden>
            Ämne
          </option>
          <option value="Hemsida">Hemsida</option>
          <option value="Mobilapplikation">Mobilapplikation</option>
          <option value="Utveckling">Utveckling</option>
          <option value="Underkonsult">Underkonsult</option>
        </Select>
        <Select name="found" required>
          <option value="" hidden>
            Hur hittade du We Know IT?
          </option>
          <option value="Via Google">Via Google</option>
          <option value="Via sociala medier">Via sociala medier</option>
          <option value="Via en annons">Via en annons</option>
          <option value="Via ett tips">Via ett tips</option>
          <option value="Jag är en tidigare kund">Jag är en tidigare kund</option>
          <option value="På annat vis">På annat vis</option>
        </Select>
        <Select name="budget" required>
          <option value="" hidden>
            Vad har du för budget?
          </option>
          <option value="0 - 10 000 kr">0 - 10 000 kr</option>
          <option value="10 000 - 25 000 kr">10 000 - 25 000 kr</option>
          <option value="25 000 - 50 000 kr">25 000 - 50 000 kr</option>
          <option value="50 000 - 100 000 kr">50 000 - 100 000 kr</option>
          <option value="100 000 - 200 000 kr">100 000 - 200 000 kr</option>
          <option value="200 000 kr +">200 000 kr +</option>
          <option value="Jag vill inte specificera budget">Jag vill inte specificera budget</option>
        </Select>
        <Breaker />
        <StyledTextArea name="message" placeholder="Meddelande" />
        <Breaker />
        <Submit type="submit" value="Send" />
      </StyledForm>
    </StyledSection>
    </>
  );
}