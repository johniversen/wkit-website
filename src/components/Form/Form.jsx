import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { config } from '../../emailSetupClient.js';
import { COLORS } from '../../variables/colors';
import './ContactClientStyles.css';

// Detta är kontaktformuläret för kunder.

const Form = ({ setDiv }) => {
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

    e.target.reset();
  }

  const Select = styled.select`
  width: 86%;
  font-size: 1.1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  font-family: inherit;
  color: gray;
  
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
  display: grid;
  grid-template-areas:
  "name typeOfPerson message message"
  "email phone message message"
  "region subject send send"
  "found budget . .";
  justify-items: center;
  margin-top: 1rem;
  text-align: left;
  flex-wrap: wrap;
  width: 70%;

  @media (max-width: 768px) {
    grid-template-areas:
    "name"
    "typeOfPerson"
    "email"
    "phone"
    "region"
    "subject"
    "found"
    "budget"
    "message"
    "send"
  }
  `
  
  const StyledTextArea = styled.textarea`
  width: 80%;
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
  width: 80%;
  font-size: 1.1rem;
  padding: 0.3rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  font-family: inherit;

  ::placeholder {
    color: gray;
  }
  `

  const Submit = styled.input.attrs({ 
    type: 'submit',
    value: 'SKICKA'
  })`
  width: 50%;
  font-size: 1.1rem;
  line-height: 1.1rem;
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
      <StyledForm className="contact-form" onSubmit={sendEmail}>
        <StyledInput id="user_name" type="text" name="user_name" placeholder="Namn" required />
        <Select id="typeOfPerson" name="typeOfPerson" required>
          <option value="" hidden>
            Företag/Privatperson
          </option>
          <option value="Företag">Företag</option>
          <option value="Privatperson">Privatperson</option>
        </Select>
        <StyledInput id="email" type="email" name="user_email" placeholder="Email" required />
        <StyledInput id="phone" type="phone" name="user_phone" placeholder="Telefon" required />
        <Select id="region" name="region" required>
          <option value="" hidden>
            Region
          </option>
          <option value="Stockholm">Stockholm</option>
          <option value="Göteborg">Göteborg</option>
          <option value="Linköping">Linköping</option>
          <option value="Malmö / Lund">Malmö / Lund</option>
          <option value="Annan ort">Annan ort</option>
        </Select>
        <Select onChange={() => setDiv()} id="subject" name="subject" required>
          <option value="" hidden>
            Ämne
          </option>
          <option value="Hemsida">Hemsida</option>
          <option value="Mobilapplikation">Mobilapplikation</option>
          <option value="Utveckling">Utveckling</option>
          <option value="Underkonsult">Underkonsult</option>
        </Select>
        <Select id="found" name="found" required>
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
        <Select id="budget" name="budget" required>
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
        <StyledTextArea id="message" name="message" placeholder="Meddelande" />
        <Submit id="send" type="submit" value="Send" />
      </StyledForm>
    </>
  );
}

export default Form;