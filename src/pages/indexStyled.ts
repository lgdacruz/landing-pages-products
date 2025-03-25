import styled from "styled-components";

interface containerInterface {
  show?: boolean;
}

export const Whats = styled.a`
  z-index: 20;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 10px #666;
  transition: transform 0.3s 0s linear;
  :hover {
    transform: scale(1.2, 1.2);
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
`;

export const Privacy = styled.div<containerInterface>`
  display: ${(props) => (props.show ? "flex" : "none")}; /* Hidden by default */
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  bottom: 0;
  width: 100%; /* Full width */
  height: 100px; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(35, 35, 35, 0.9);
  color: #fff;
  font-size: 20px;
  button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    border: none;
    background-color: #222;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  color: #444;
  background-color: #fff;
  p {
    text-align: center;
  }
`;
