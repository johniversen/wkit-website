import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';

// Detta är kontaktformuläret för kunder.

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('j_iversen94_gmail_com', 'contact_form', e.target, 'user_FapPIZissNNXuDSwzRrFb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  const StyledSection = styled.section`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  `

  const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  `

  const StyledH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  width: 70%;
  `

  const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  `;

  const StyledInput = styled.input`
  
  `;

  return (
    <>
    <StyledSection id="contact">
      <StyledH1>KONTAKTA OSS</StyledH1>
      <StyledH2>KONTAKTA OSS GÄRNA OM NI HAR NÅGRA FUNDERINGAR, TANKAR ELLER IDÉER SOM NI BEHÖVER HJÄLP ATT REALISERA</StyledH2>
      <form className="contact-form" onSubmit={sendEmail}>
        <StyledInput type="hidden" name="contact_number" />
        <label>Namn</label>
        <StyledInput type="text" name="user_name" />
        <Select name="typeOfPerson">
          <option value="" hidden>
            Företag/Privatperson
          </option>
          <option value="Företag">Företag</option>
          <option value="Privatperson">Privatperson</option>
        </Select>
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Telefon</label>
        <input type="phone" name="user_phone" />
        <Select name="region">
          <option value="" hidden>
            Region
          </option>
          <option value="Stockholm">Stockholm</option>
          <option value="Göteborg">Göteborg</option>
          <option value="Linköping">Linköping</option>
          <option value="Malmö / Lund">Malmö / Lund</option>
          <option value="Annan ort">Annan ort</option>
        </Select>
        <Select name="subject">
          <option value="" hidden>
            Ämne
          </option>
          <option value="Hemsida">Hemsida</option>
          <option value="Mobilapplikation">Mobilapplikation</option>
          <option value="Utveckling">Utveckling</option>
          <option value="Underkonsult">Underkonsult</option>
        </Select>
        <Select name="found">
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
        <Select name="budget">
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
        <label>Meddelande</label>
        <textarea name="message" />
        <Button variant="outlined" onClick={sendEmail}>SKICKA</Button>
      </form>
    </StyledSection>
    </>
  );
}