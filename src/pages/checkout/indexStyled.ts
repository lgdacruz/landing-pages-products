import styled, { keyframes } from "styled-components";

interface Card {
  wd?: number;
  error?: boolean;
}
interface containerCard {
  show?: boolean;
}

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  }
`;
export const GenericContainerForm = styled.div`
  display: "flex";
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 550px;
  background-color: rgba(34, 34, 34, 0.5);
  padding: 2rem;
  margin: 5rem;
  border-radius: 20px;
`;

export const Form = styled.form<containerCard>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  select {
    font-size: 1rem;
    width: 60%;
    border: none;
    border-radius: 10px;
    padding: 0.3rem;
  }
`;
export const ErrorText = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  color: red;
`;
export const ContainerPaymentType = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    :enabled {
      background-color: #f9fbfc;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  background-color: #d6d6d6;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;
export const ContainerAllCardCamp = styled.div<containerCard>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 150px;
  background-color: #999;
  margin: 1rem 0;
  box-shadow: 0 0 10px #d6d6d6;
  width: 100%;
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
`;
export const InputCard = styled.input<Card>`
  border: ${(props) => (props.error ? "1px solid red" : "none")};
  width: ${(props) => props.wd}%;
  background-color: #d9d9d9;
  border-radius: 5px;
  padding: 0.3rem;
  color: #000;
`;
export const FormQrCode = styled.div<containerCard>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    width: 300px;
    word-wrap: break-word;
    text-align: center;
  }
  .instruction {
    text-align: left;
    font-weight: bold;
  }
  button {
    width: 50px;
    font-size: 10px;
    margin: 1.5rem 0;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.4);
    border: none;
    background-color: transparent;
    :hover {
      color: rgba(255, 255, 255, 0.2);
    }
    #iconCopy {
      position: absolute;
      color: rgba(255, 255, 255, 0.7);
      :hover {
        color: #fff;
      }
    }
  }
  img {
    width: 150px;
    height: 150px;
  }
`;
export const Spinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  content: " ";
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: ${rotate} 1.2s linear infinite;
`;
export const Submit = styled.input`
  margin: 2rem 0;
  width: 70%;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 0 10px #d6d6d6;
  border: none;
  color: #2f084d;
  cursor: pointer;
  transition: transform 0.4s 0s linear;
  :hover {
    background-color: #d9d9d9;
    transform: scale(1.1, 1.1);
  }
`;
export const ContainerSecurity = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(34, 34, 34, 0.6);
  padding: 0 0.5rem;
`;
