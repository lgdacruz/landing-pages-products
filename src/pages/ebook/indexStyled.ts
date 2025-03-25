import { Link } from "react-router-dom";
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

const animation = keyframes`
  from {
    transform: none;
  }

  to {
    transform: scale(1.2,1.2);
  }
`;

export const Main = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`;
export const Header = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(34, 34, 34, 0.8);
  z-index: 100;
`;

export const ButtonBuy = styled(Link)<containerInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  background: linear-gradient(
    29.83deg,
    ${(props) => (props.bg1 ? props.bg1 : "#d9d9d9")} 0%,
    ${(props) => (props.bg2 ? props.bg2 : colors.verylight)} 100%
  );
  text-decoration: none;
  border-radius: 10px;
  width: 250px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  padding: 12px;
  :hover {
    animation: ${animation} 1s 0s infinite alternate;
    box-shadow: 0 5px 20px 10px ${colors.light};
  }
`;
export const Container = styled.div<containerInterface>`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bg1 ? props.bg1 : "inherit")};
  color: ${(props) => (props.bg1 ? "#222" : "inherit")};
  @media (max-width: 650px) {
    padding: 8rem 0;
  }

  h3 {
    font-size: 40px;
    margin: 0;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
      sans-serif;
  }
  .before {
    text-decoration: line-through;
    text-decoration-color: red;
    font-size: 40px;
  }
  .after {
    font-size: 50px;
  }
  p {
    font-size: 30px;
  }
  ul {
    margin: 0;
    list-style: none;
  }
`;
export const ContainerRow = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
  img {
    width: 128px;
    height: 200px;
    box-shadow: 5px 5px 20px #999;
    transform: rotate(10deg);
  }
  h1 {
    width: 200px;
    font-size: 50px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
      sans-serif;
    letter-spacing: 4px;
    margin: 0 2rem;
    @media (max-width: 750px) {
      letter-spacing: 0px;
      width: auto;
    }
    span {
      color: #2f084d;
    }
  }
`;
export const ContainerRow2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    flex-direction: column;
  }
  img {
    margin: 0;
    z-index: 5;
    width: 256px;
    height: 400px;
    position: sticky;
    top: 50px;
    left: 10px;
    @media (max-width: 750px) {
      opacity: 0.2;
    }
  }
`;
export const ContainerGoals = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const Goals = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 300px;
  height: 200px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #222;
  background-color: rgba(34, 34, 34, 0.3);
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 26px;
    color: #d6d6d6;
  }
`;
export const ListContainer3 = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 60vw;
  h2 {
    font-size: 50px;
    span {
      text-shadow: 1px 1px 10px ${colors.medium};
    }
  }
`;
export const ItemList3 = styled.div<containerInterface>`
  position: relative;
  margin: 20px 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 250px;
  min-height: 200px;
  border-radius: 10px;
  background-color: ${(props) => (props.show ? "#d8d1de" : "#fff")};
  box-shadow: 10px 5px 15px 5px #d9d9d9;
  .icon {
    cursor: pointer;
    float: right;
    margin: 0;
    position: relative;
    right: -25px;
    top: -25px;
    z-index: 20;
  }
`;
export const ContainerRotate = styled.div<containerInterface>`
  backface-visibility: hidden;
  transform-style: preserve-3d;
  position: absolute;
  z-index: ${(props) => (props.show ? 1 : 0)};
  transition: all 0.5s ease-out 0s;
  transform: ${(props) => (props.show ? `rotateY(180deg)` : `rotateY(0deg)`)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    backface-visibility: hidden;
    font-size: 1.5rem;
    color: #888;
    font-weight: bold;
    color: black;
    text-align: center;
  }
`;
export const ContainerRotate2 = styled.div<containerInterface>`
  backface-visibility: hidden;
  width: 100%;
  transform: ${(props) => (props.show ? `rotateY(0deg)` : `rotateY(180deg)`)};
  transition: all 0.5s ease-out 0s;
  transform-style: preserve-3d;
  z-index: ${(props) => (props.show ? 0 : 1)};
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  p {
    font-size: 2rem;
    margin: 0 0 0 1.3rem;
    color: #444;
  }
`;

export const Containerprice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ListContainer8 = styled.div`
  width: 100%;
`;
export const ItemList8 = styled.div<containerInterface>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
  background-color: ${(props) => (props.show ? "#fff" : "inherit")};
  border-radius: 20px;
  button {
    text-transform: uppercase;
    letter-spacing: 0;
    width: 100%;
    cursor: pointer;
    border: none;
    background-color: ${(props) => (props.show ? "#fff" : "transparent")};
    box-shadow: ${(props) => (props.show ? "5px 8px 10px #d9d9d9" : "none")};
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    transition: background-color 0.4s linear, box-shadow 0.4s linear;
    :hover {
      background-color: #fff;
      box-shadow: 5px 8px 10px #d9d9d9;
    }
    .icon {
      transform: ${(props) => (props.show ? "rotate(180deg)" : "none")};
    }
  }
`;
export const Answer = styled.div<containerInterface>`
  min-height: ${(props) => (props.show ? "50px" : "10px")};
  transition: min-height 0.4s linear;
  font-size: 1.4rem;
  color: #777;
  padding: 0 3rem;
  @media (max-width: 600px) {
    min-height: ${(props) => (props.show ? "350px" : "10px")};
  }
  p {
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;
