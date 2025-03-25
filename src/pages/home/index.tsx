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
          <h1>Mirella Casquilho</h1>

          <p>
            Mirella Casquilho tem 28 anos e já ajudou centenas de pessoas a alcançarem o cabelo dos
            sonhos durante os 2 anos que atua na internet com conteúdos sobre cabelo. É formada em
            pedagogia e está cursando Pós Gradução em Tricologia e Terapia Capilar, área que vem se
            destacando pelos resultados.
          </p>
        </div>
        <div>
          <img
            loading="lazy"
            src="mirella.png"
            alt="Mirella"
            style={{ width: "300px", height: "400px", margin: "1rem" }}
          />
          <nav>
            <a href="https://www.instagram.com/mirellacasquilhoo" target="_blank" rel="noreferrer">
              <img loading="lazy" src="instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/c/MirellaCasquilho" target="_blank" rel="noreferrer">
              <img loading="lazy" src="youtube.png" alt="youtube" />
            </a>
            <a href="https://www.tiktok.com/@mirellacasquilho" target="_blank" rel="noreferrer">
              <img loading="lazy" src="tiktok.png" alt="tiktok" />
            </a>
          </nav>
        </div>
      </ContainerContent>
    </Main>
  );
}
