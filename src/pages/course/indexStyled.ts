import styled, { keyframes } from "styled-components";

interface InterfaceBuy {
  bg1?: string;
  bg2?: string;
}
interface InterfaceAnswer {
  show: boolean;
}
interface InterBg {
  bg?: string;
}
const colors = {
  dark: "#2F084D",
  medium: "#5D0F99",
  light: "#9D55D5",
  verylight: "#ba96d6",
  grey: "#f9fbfc",
};

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
`;
export const AllContainers = styled.div<InterBg>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bg ? props.bg : "inherit")};
`;
export const Header = styled.div`
  width: 100%;
  height: 80px;
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
export const Img = styled.img``;

export const Nav = styled.nav`
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const Link = styled.a`
  font-size: 1.2rem;
  color: #d6d6d6;
  text-decoration: none;
  margin: 0 2rem;
  :hover {
    color: #fff;
  }
`;
export const ButtonBuy = styled.a``;

export const Button = styled.button<InterfaceBuy>`
  white-space: nowrap;
  cursor: pointer;
  background: linear-gradient(
    29.83deg,
    ${(props) => (props.bg1 ? props.bg1 : colors.verylight)} 0%,
    ${(props) => (props.bg2 ? props.bg2 : colors.light)} 100%
  );
  border-radius: 10px;
  height: 50px;
  width: 250px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #222;
  padding: 12px;
  :hover {
    animation: ${animation} 1s 0s infinite alternate;
    box-shadow: 0 5px 20px 10px ${colors.light};
  }
`;

export const Container1 = styled.div`
  width: 80%;
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    margin: 0;
  }
  @media (max-width: 1250px) {
    flex-direction: column-reverse;
    img {
      width: 200px;
    }
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  iframe {
    width: 560px;
    height: 315px;
    @media (max-width: 650px) {
      width: 300px;
      height: 250px;
    }
  }
`;
export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 1.8rem;
  margin: 4rem 0;
`;
export const Container2 = styled.div`
  width: 80%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey};
  color: #222;
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  width: 80%;
`;

export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex-wrap: wrap;
  margin: 1rem 0;
  width: 100%;
`;

export const LittleSubContainer2 = styled.div`
  margin: 1rem 0;
  border-radius: 15px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  transition: box-shadow 0.5s linear;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  p {
    font-size: 2rem;
    text-align: center;
    max-width: 80%;
  }
  :hover {
    background-color: #fff;
    box-shadow: 2px 5px 10px #555;
  }
`;
export const TextNumber = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.dark};
`;
export const ContainerModule = styled.div<InterfaceAnswer>`
  margin: 0 0 0 1rem;
  p {
    color: #666;
    font-size: 1.6rem;
    text-align: left;
  }
  .teacher {
    font-size: 18px;
  }
  button {
    margin: 1rem;
    display: ${(props) => (props.show ? "none" : "flex")};
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    color: orange;
  }
`;
export const ContainerClasses = styled.ul<InterfaceAnswer>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 2rem 0;
  li {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #666;
  }
`;
export const SubContainer22 = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    font-size: 1.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 2rem;
  color: ${colors.medium};
  text-align: center;
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ItemList = styled.div`
  max-width: 300px;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
  transition: box-shadow 0.3s linear;
  :hover {
    box-shadow: 2px 5px 10px #999;
  }
  p {
    margin: 2rem 0;
    text-align: center;
    font-size: 1.1rem;
  }
`;
export const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const Container3 = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  color: #222;
`;

export const ListContainer3 = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ItemList3 = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  width: 300px;
  min-height: 350px;
  border-radius: 10px;
  margin: 3rem 0;
  background-color: #fff;
  box-shadow: 10px 5px 15px 5px #d9d9d9;
  .icon {
    cursor: pointer;
    float: right;
    margin: 0;
    position: relative;
    right: -35px;
    top: -35px;
    border-radius: 50%;
    :hover {
      background-color: #fff;
    }
  }
`;
export const ContainerRotate = styled.div<InterfaceAnswer>`
  backface-visibility: hidden;
  transform-style: preserve-3d;
  position: absolute;
  z-index: ${(props) => (props.show ? 1 : 0)};
  transition: all 0.5s ease-out 0s;
  transform: ${(props) => (props.show ? `rotateY(180deg)` : `rotateY(0deg)`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img {
    backface-visibility: hidden;
    width: 100px;
    height: 100px;
    margin: 3rem;
  }
  p {
    backface-visibility: hidden;
    font-size: 1.5rem;
    margin: 0 0 0 1.3rem;
    color: #888;
  }
  .title {
    font-weight: bold;
    margin: 1rem 0;
    color: black;
    text-align: center;
  }
`;
export const ContainerRotate2 = styled.div<InterfaceAnswer>`
  backface-visibility: hidden;
  width: 100%;
  transform: ${(props) => (props.show ? `rotateY(0deg)` : `rotateY(180deg)`)};
  transition: all 0.5s ease-out 0s;
  transform-style: preserve-3d;
  z-index: ${(props) => (props.show ? 0 : 1)};
  overflow: hidden;
  position: relative;
  p {
    font-size: 1.5rem;
    margin: 0 0 0 1.3rem;
    color: #888;
  }
  .title {
    font-weight: bold;
    margin: 1rem 0;
    color: black;
    text-align: center;
  }
`;

export const Container4 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.grey};
  color: #222;
`;
export const H4 = styled.h4`
  font-size: 3rem;
  color: #666;
`;
export const SubContainer4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #666;
  @media (max-width: 855px) {
    flex-direction: column;
  }
  p {
    width: 70%;
    font-size: 2rem;
    margin: 0 3rem;
    span {
      color: orange;
      font-weight: bold;
    }
  }
`;
export const SubContainer44 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 5rem auto;
  padding: 1rem;
  width: 80%;
  background-color: #f1f1f1;
  border-radius: 20px;
  @media (max-width: 770px) {
    flex-direction: column;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Container5 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.grey};
  color: #222;
  @media (max-width: 855px) {
    flex-direction: column;
  }
`;
export const SubContainer5 = styled.div`
  width: 30%;
  @media (max-width: 855px) {
    width: 100%;
  }
  p {
    font-size: 1.3rem;
    text-align: center;
  }
`;
export const List5 = styled.div`
  margin: 0 2rem;
`;
export const ItemList5 = styled.div`
  cursor: default;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 2rem 0;
  padding: 1rem;
  transition: background-color 0.3s linear, box-shadow 0.3s linear;
  @media (max-width: "400px") {
    width: 300px;
  }
  :hover {
    background-color: #fff;
    box-shadow: 5px 7px 10px #d2d2d2;
  }
  p {
    margin: 0 2rem;
    font-size: 1.4rem;
  }
`;
export const Container6 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #222;
`;
export const H5 = styled.h5`
  font-size: 2.5rem;
  font-family: Eurostile, sans-serif;
  width: 100%;
  word-wrap: break-word;
  text-align: center;
`;
export const ListContainer6 = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ItemList6 = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 1rem 0;
  p {
    font-size: 1.5rem;
    margin: 0 0 0 1.3rem;
    color: #888;
  }
  .title {
    font-weight: bold;
    margin: 1rem 0;
    color: black;
  }
  .price {
    text-decoration: line-through;
    color: red;
    text-align: left;
    margin: 1rem;
  }
  .free {
    font-weight: bold;
    font-size: 1.8rem;
    color: blue;
  }
`;
export const Container7 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 855px) {
    flex-direction: column-reverse;
  }
`;
export const Container8 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.grey};
  color: #222;

  text-transform: uppercase;
`;
export const ListContainer8 = styled.div`
  width: 100%;
`;
export const ItemList8 = styled.div<InterfaceAnswer>`
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
export const Answer = styled.div<InterfaceAnswer>`
  height: ${(props) => (props.show ? "150px" : "10px")};
  transition: height 0.4s linear;
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
