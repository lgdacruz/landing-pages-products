import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const colors = {
  dark: "#2F084D",
  medium: "#5D0F99",
  light: "#9D55D5",
  verylight: "#ba96d6",
  grey: "#f9fbfc",
};

interface container {
  show?: boolean;
}

const neon = keyframes`
from{
  box-shadow: none;
}
to{
  box-shadow: 0 0 35px ${colors.verylight}, 0 0 40px ${colors.verylight}, 0 0 55px #fff;
}
`;

export const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerNav = styled.div<container>`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(34, 34, 34, 0.9);
  width: ${(props) => (props.show ? "300px" : "10px")};
  transition: width 0.6s;
  overflow: hidden;
  min-height: 100vh;
  box-shadow: 5px 5px 20px #222;
  display: block;
  button {
    background-color: transparent;
    box-shadow: 0 0 10px #fff;
    border-radius: 13px;
    border: none;
    margin: 1rem 0 1rem 1rem;
    font-size: 26px;
    color: #fff;
    font-weight: bold;
    text-shadow: 0px 0px 10px white, 0px 0px 10px white;
    cursor: pointer;
  }
  .icon {
    cursor: pointer;
    position: fixed;
    top: 50%;
    display: ${(props) => (props.show ? "none" : "block")};
    box-shadow: 0 0 35px ${colors.verylight}, 0 0 40px ${colors.verylight}, 0 0 55px #fff;
    border-radius: 0 30% 30% 0;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;
export const Page = styled(Link)`
  margin: 0.5rem;
  font-size: 46px;
  text-decoration: none;
  color: ${colors.verylight};
  animation: ${neon} 1.5s 1s infinite alternate;
  padding: 1rem;
  background-color: #111;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  :hover {
    animation: none;
    color: #d9d9d9;
    text-shadow: 0 0 35px #d6d6d6;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  margin: 50px 0 0 0;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    h1 {
      text-align: center;
      font-size: 38px;
    }
    p {
      font-size: 20px;
      text-align: center;
      padding: 0 1rem;
    }
    nav {
      display: flex;
      flex-direction: row;
      a {
        margin: 0 1rem;
        border-radius: 2px;
        padding: 1px;
        img {
          width: 50px;
          height: 50px;
          :hover {
            transform: scale(1.5, 1.5);
          }
        }
      }
    }
  }
`;
