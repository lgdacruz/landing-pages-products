import styled, { keyframes } from "styled-components";

const colors = {
  dark: "#2F084D",
  medium: "#5D0F99",
  light: "#9D55D5",
  verylight: "#ba96d6",
  grey: "#f9fbfc",
};

interface containerInterface {
  bg1?: string;
  bg2?: string;
  show?: boolean;
}

const shine = keyframes`
  from {
    text-shadow: none;
    box-shadow: none;
    transform: scale(1.0, 1.0);
  }

  to {
    text-shadow: 0 0 50px #ba96d6;
    box-shadow: 0 0 50px #ba96d6;
    transform: scale(1.09, 1.09);
    
  }
`;

export const Main = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`;

export const Container = styled.div<containerInterface>`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bg1 ? props.bg1 : "inherit")};
  color: ${(props) => (props.bg1 ? "#222" : "inherit")};
  @media (max-width: 650px) {
    padding: 8rem 0;
  }
  h1 {
    font-size: 60px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  p {
    font-size: 26px;
    margin: 0 10px;
    padding: 1rem;
    text-align: left;
    text-decoration: underline;
  }
`;
export const ListContainer3 = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 6rem;
`;

export const BuyLink = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 1rem 0;
  padding: 1rem;
  width: 40%;
  box-shadow: 5px 5px 20px #d2d2d2;
  border-radius: 10px;
  font-size: 28px;
  text-decoration: none;
  color: ${colors.dark};
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  p {
    margin: 0 2rem;
  }
  @media (max-width: 850px) {
    width: 70%;
  }
  :hover {
    animation: ${shine} 1s 0s infinite alternate;
  }
`;
