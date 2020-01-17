import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { config } from '../../emailSetupCareer.js';
import { COLORS } from '../../variables/colors';
import './ContactCareerStyles.css';

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

    e.target.reset();
  }

  const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
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
  "name education message message"
  "email phone message message"
  "post region found found"
  "github graduation send send";
  justify-items: center;
  margin-top: 1rem;
  text-align: left;
  flex-wrap: wrap;
  width: 70%;
  
  @media (max-width: 768px) {
    grid-template-areas:
    "name"
    "education"
    "email"
    "phone"
    "post"
    "region"
    "github"
    "graduation"
    "message"
    "found"
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

  const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 1rem;
  width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  `

  const StyledInfoSection = styled.a`
  padding: 2%;
  width: 40%;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  color: ${c.wkitBlue};

  @media (max-width: 768px) {
    width: 100%;
  }
  `

  return (
    <>
    <StyledSection id="contact">
      <StyledH1>ANSÖK NU!</StyledH1>
      <StyledH2>FYLL I FORMULÄRET NEDAN OCH SKRIV EN KORT PRESENTATION!</StyledH2>
      <InfoContainer>
        <StyledInfoSection href="tel:010-1510899"><i class="fas fa-phone"></i> 010 - 151 08 99</StyledInfoSection>
        <StyledInfoSection href="mailto:rekrytering@weknowit.se"><i class="fas fa-envelope"></i> rekrytering@weknowit.se</StyledInfoSection>
      </InfoContainer>
      <StyledForm className="contact-form" onSubmit={sendEmail}>
        <StyledInput id="name" type="text" name="user_name" placeholder="Namn" required />
        <StyledInput id="education" type="text" name="education" placeholder="Utbildning" required />
        <StyledInput id="email" type="email" name="user_email" placeholder="Email" required />
        <StyledInput id="phone" type="phone" name="user_phone" placeholder="Telefon (frivilligt)" />
        <Select id="post" name="post" required>
          <option value="" hidden>
            Tjänst
          </option>
          <option value="Apputvecklare">Apputvecklare</option>
          <option value="Webbutvecklare">Webbutvecklare</option>
          <option value="Annan">Annan</option>
        </Select>
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
        <StyledInput id="github" type="text" name="github" placeholder="Länk till din GitHub (frivilligt)" />
        <StyledInput id="graduation" type="text" name="graduation" placeholder="Planerad examen" />
        <Select id="found" name="found" required>
          <option value="" hidden>
            Hur hittade du We Know IT?
          </option>
          <option value="Via Google">Via Google</option>
          <option value="Via Facebook">Via Facebook</option>
          <option value="Via andra sociala medier">Via andra sociala medier</option>
          <option value="Via en vän">Via en vän</option>
          <option value="Via en mässa">Via en mässa</option>
          <option value="Via flyers på universitetet">Via flyers på universitetet</option>
          <option value="Via information från We Know IT på en föreläsning">Via information från We Know IT på en föreläsning</option>
          <option value="På annat vis">På annat vis</option>
        </Select>
        <StyledTextArea id="message" name="message" placeholder="Personligt brev (frivilligt)" />
        <Submit id="send" type="submit" value="Send" />
      </StyledForm>
    </StyledSection>
    </>
  );
}