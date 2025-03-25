import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { ContainerContent, ContainerNav, Main, Nav, Page } from "./indexStyled";

export default function Home() {
  const [show, setShow] = useState(true);

  const CloseMenu = () => setShow(false);

  return (
    <Main>
      <ContainerNav show={show}>
        <button type="button" onClick={CloseMenu}>
          X
        </button>
        <Nav>
          {/* <Page to="course">Treinamento</Page> */}
          <Page to="consultancy">Consultoria</Page>
          <Page to="ebook">Ebook</Page>
          <Page to="products">Meus links</Page>
        </Nav>
        <IoIosArrowForward size={50} onClick={() => setShow(true)} className="icon" />
      </ContainerNav>

      <ContainerContent onClick={CloseMenu}>
        <div>
          <h1>Autor</h1>

          <p>Descrição do autor</p>
        </div>
        <div>
          <nav>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img loading="lazy" src="instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img loading="lazy" src="youtube.png" alt="youtube" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <img loading="lazy" src="tiktok.png" alt="tiktok" />
            </a>
          </nav>
        </div>
      </ContainerContent>
    </Main>
  );
}
