import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  p {
    margin: 0 1rem;
    font-size: 24px;
    span {
      font-weight: bold;
      text-shadow: 0 0 10px black;
      font-style: oblique;
      text-decoration: underline;
    }
  }
`;

export const H1 = styled.h1`
  text-align: center;
`;
