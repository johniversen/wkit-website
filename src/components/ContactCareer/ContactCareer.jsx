import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { config } from '../../emailSetupCareer.js';
import { COLORS } from '../../variables/colors';

// Detta är kontaktformuläret för kunder.

export default function ContactCareer() {
  const c = { ...COLORS };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(config.serviceID, config.templateID, e.target, config.userID)
      .then((result) => {
          console.log(result.text);
          alert("Ansökan skickad!");
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
      <StyledH1>ANSÖK NU!</StyledH1>
      <StyledH2>FYLL I FORMULÄRET NEDAN, SKRIV EN KORT PRESENTATION OCH LADDA UPP DITT CV!</StyledH2>
      <StyledForm className="contact-form" onSubmit={sendEmail}>
        <StyledInput type="text" name="user_name" placeholder="Namn" required />
        <StyledInput type="text" name="education" placeholder="Utbildning" required />
        <StyledInput type="email" name="user_email" placeholder="Email" required />
        <StyledInput type="phone" name="user_phone" placeholder="Telefon (frivilligt)" />
        <Select name="post" required>
          <option value="" hidden>
            Tjänst
          </option>
          <option value="Apputvecklare">Apputvecklare</option>
          <option value="Webbutvecklare">Webbutvecklare</option>
          <option value="Annan">Annan</option>
        </Select>
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
        <StyledInput type="text" name="github" placeholder="Länk till din GitHub (frivilligt)" />
        <StyledInput type="text" name="graduation" placeholder="Planerad examen" />
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
        <Breaker />
        <StyledTextArea name="message" placeholder="Personligt brev (frivilligt)" />
        <Breaker />
        <Submit type="submit" value="Send" />
      </StyledForm>
    </StyledSection>
    </>
  );
}