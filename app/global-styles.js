import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  @font-face {
    font-family: 'Adobe Arabic';
    src: url('app/images/AdobeArabic-BoldItalic.woff2') format('woff2'),
        url('app/images/AdobeArabic-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

  body {
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: 'Adobe Arabic';
    font-weight: bold;
    font-style: italic;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  .background {
  background-image: url("https://i.ibb.co/K2vDQsR/driling.jpg");
  width: 40%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 1px solid black;
  justify-content:center;
  justify-items:center;

  }

  .program-name{
    padding-right: 75px;
    padding-left:75px;
  }

  .default-form{
    padding-top: 10px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
  width: 300px;
  height: 350px;
}

#text {
  z-index: 100;
  position: absolute;
  color: white;
  font-size: 24px;
  font-weight: bold;
  left: 150px;
  top: 350px;
}
.image-container{
    position: relative;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    background: url('https://i.ibb.co/K2vDQsR/driling.jpg');
    background-size: 100% 100%;;
}



.image-container img{
    position: absolute;
}
.image-container .image-caption{
    position: absolute;
    top: 288px;
    right: 208px;
}
.grid-container {
  display: grid;
  grid-template-columns: 50% 1fr 1fr;
  grid-template-rows: 1fr 25%;
  gap: 1em 1em;
  grid-template-areas: ". . ." ". . .";
  border-radius: 10px;
}
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  label {
  display: inline-block;
  width: 140px;
  text-align: left;
  padding-left: 15px;
  }
`;

export default GlobalStyle;
