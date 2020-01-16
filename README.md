# We Know IT 

## Setup för emailJs
Av säkerhetsskäl finns inte setup-filerna för emailJs inkluderade i repot. För att få emailJs att fungera krävs det att du själv skapar dessa. Jag kommer nedan gå igenom för strukturen för dessa. Båda filerna ska ligga i wkit-website/src/.

emailSetupCareer.js
```
export const config = {
  serviceID: 'DITT_SERVICE_ID',             // Hittas under den mailadress du vill ta emot till.
  templateID: 'KONTAKFORMULÄRETS_ID',       // Hittas bland dina templates för formulär. Välj det som är för karriär.
  userID: 'DITT_ANVÄNDAR_ID'                // Hittas under din användare -> API Keys.
}
```

emailSetupClient.js
```
export const config = {
  serviceID: 'DITT_SERVICE_ID',             // Hittas under den mailadress du vill ta emot till.
  templateID: 'KONTAKFORMULÄRETS_ID',       // Hittas bland dina templates för formulär. Välj det som är för klienter.
  userID: 'DITT_ANVÄNDAR_ID'                // Hittas under din användare -> API Keys.
}
```

## Förklaring av filstruktur
Projektet ivolverad en relativt standardiserad filstruktur som ofta förekommer i React-projekt. Alla komponenter kan finnas i mappen src/components. Varje komponent har där en egen mappen innehållande två filer. För att göra ändringar i utseende och innehåll görs detta i den fil som heter samma sak som komponenten. T.ex. för Contact görs ändringar i src/components/Contact/Contact.jsx, och inte i index.tsx i samma mapp.

Styling av projektet görs med biblioteket styled-components. Detta möjliggör skapandet av egna element som stylas på en gång för att sedan exporteras. I samma fil som tidigare, src/components/Contact/Contact.jsx, kan jag ta ett exempel.

```
const StyledH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  width: 70%;
  `
```
Detta skapar en h2-tagg som är stylad utan att behöva specificera styling i en css-fil. Denna kan sedan användas på följande sätt.

```
return (
    <StyledSection id="contact">
      <StyledH1>KONTAKTA OSS</StyledH1>
      <StyledH2>KONTAKTA OSS GÄRNA OM NI HAR NÅGRA FUNDERINGAR, TANKAR ELLER IDÉER SOM NI BEHÖVER HJÄLP ATT REALISERA</StyledH2>
    </StyledSection>
  )
```

#### För förklaring av hur sidan körs, se nedan.

## To run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
