import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, Img, Privacy, Whats } from "./indexStyled";
import Home from "./home";
import Consultancy from "./consultancy";
import Course from "./course";
import Ebook from "./ebook";
import Checkout from "./checkout";
import Success from "./success";
import Products from "./products";

export default function RoutesIndex() {
  const [showPolicy, setShowPolicy] = useState<boolean>();
  useEffect(() => {
    setShowPolicy(localStorage.getItem("privacity") !== "true");
  }, [localStorage.getItem("privacity")]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success/:orderId" element={<Success />} />
        </Routes>
      </BrowserRouter>
      {/* WHATSAP  */}
      <Whats href="https://api.whatsapp.com/" target="_blank">
        <Img loading="lazy" src="whatsapp.png" alt="whatsapp" />
      </Whats>
      {/* TERMOS DE PRIVACIDADE  */}
      <Privacy show={showPolicy}>
        <p>
          Utilizamos cookies e outras tecnologias de medição para melhorar a sua experiência de
          navegação no nosso site, de forma a mostrar conteúdo personalizado, anúncios direcionados,
          analisar o tráfego do site e entender de onde vêm os visitantes.
        </p>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("privacity", "true");
            setShowPolicy(false);
          }}
        >
          Ok
        </button>
      </Privacy>
      {/* RODAPÉ  */}
      <Footer>
        <p>© All rights reserved.</p>
      </Footer>
    </>
  );
}
