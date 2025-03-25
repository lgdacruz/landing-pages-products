import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { H1, Main } from "./indexStyled";

export default function Success() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 30000);
  }, []);

  return (
    <Main>
      <H1>Obrigado pela compra!</H1>
      <p>
        O código da sua compra é: <span>{orderId}</span>
      </p>
      <p>
        Cartão de crédito: Um email automático será enviado para você com o Ebook. Caso tenha alguma
        dúvida é só entrar em contato pelo Whatsapp.
      </p>
      <p>
        Pix: Quando o pagamento for confirmado, um email automático será enviado para você com o
        Ebook. Caso tenha alguma dúvida é só entrar em contato pelo Whatsapp.
      </p>
    </Main>
  );
}
