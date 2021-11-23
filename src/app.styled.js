// ! Styles for hele appen
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const colors = {
    darkBlue: "#013440",
    lightBlue: "#04C4D9",
    orange: "#F26B1D",
    lightBrown: "#A62F03",
    darkBrown: "#591902",
    bgGradient: "linear-gradient(180deg, rgba(1,52,64,1) 0%, rgba(0,83,103,1) 100%)",
};

export const fonts = {
    lato: "'Lato', sans-serif",
    poppins: "'Poppins', sans-serif"
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
        font-family: ${fonts.lato};
    }

    


`;

export const AppWrapper = styled.div`

`;
