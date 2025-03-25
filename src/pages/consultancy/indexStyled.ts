import styled from "styled-components";

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
  color?: string;
}

export const Main = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`;

export const Container = styled.div<containerInterface>`
  padding: 6rem 4rem;
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
  }
  h2 {
    font-size: 50px;
    span {
      text-shadow: 1px 1px 10px ${colors.light};
    }
  }
  h3 {
    font-size: 46px;
  }
  p {
    font-size: 30px;
  }
  img {
    width: 300px;
    height: 300px;
  }
  ul {
    margin: 0;
    list-style: none;
  }
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
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
export const ItemList3 = styled.div<containerInterface>`
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
  background-color: ${(props) => (props.show ? "#d8d1de" : "#fff")};
  box-shadow: 10px 5px 15px 5px #d9d9d9;
  .icon {
    box-shadow: ${(props) =>
      props.show ? "10px 5px 15px 5px #d6d6d6" : `10px 5px 15px 5px ${colors.verylight}`};
    cursor: pointer;
    float: right;
    margin: 0;
    position: relative;
    right: -35px;
    top: -35px;
    border-radius: 50%;

    :hover {
      background-color: #fff;
      box-shadow: none;
    }
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
    width: 80%;
    font-weight: bold;
    margin: 1rem 0;
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e5e3e6;
  padding: 1rem;
  border-radius: 10px;
`;
export const TextFb = styled.p<containerInterface>`
  font-size: 18px;
  color: ${(props) => props.color};
  margin: 0.5rem;
`;

export const Input = styled.input.attrs(() => ({
  type: "email",
  placeholder: "Insira seu email",
  required: true,
}))`
  width: 80%;
  padding: 0.5rem;
`;
export const Submit = styled.input.attrs(() => ({ type: "submit" }))`
  cursor: pointer;
  width: 20%;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  border: none;
  background: linear-gradient(29.83deg, ${colors.verylight} 0%, ${colors.light} 100%);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
