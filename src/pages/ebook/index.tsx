import React, { useState } from "react";
import { BsDashCircle, BsGraphUp, BsPlusCircle } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";

import {
  Answer,
  ButtonBuy,
  Container,
  ContainerGoals,
  Containerprice,
  ContainerRotate,
  ContainerRotate2,
  ContainerRow,
  ContainerRow2,
  Goals,
  Header,
  ItemList3,
  ItemList8,
  ListContainer3,
  ListContainer8,
  Main,
} from "./indexStyled";

export default function Ebook() {
  const [index, setIndex] = useState<number>(null!);
  const [rotate, setRotate] = useState<number>(null!);

  const Faq = [
    {
      ask: "Como recebo o Ebook?",
      answer:
        "Após a confirmação do pagamento, um email automático é enviado para o email cadastrado na finalização da compra. Caso não receba o email é só entrar em contato através do whatsapp.",
    },
    {
      ask: "O Ebook terá atualizações?",
      answer:
        "Sim, ele é atualizado constantemente. Principalmente inserindo exemplos novos de máscaras capilares.",
    },
    {
      ask: "Tenho acesso as atualizações do Ebook?",
      answer: "Sim, sempre que atualizarmos o Ebook enviaremos para todos que compraram.",
    },
  ];
  const modules = [
    {
      module: "Ordem dos ingredientes",
      description: "As boas práticas e a regra que o Brasil adota",
    },
    { module: "Ativos", description: "Os principais ativos nas máscaras de tratamento" },
    { module: "Hidratação", description: "Entendendo a etapa de hidratação" },
    { module: "Nutrição", description: "Entendendo a etapa de nutrição" },
    { module: "Reconstrução", description: "Entendendo a etapa de reconstrução" },
    { module: "Restauração", description: "Entendendo a etapa de restauração" },
    {
      module: "Quantidade de ativos",
      description: "Entendendo a classificação da máscara de acordo com esse critério",
    },
    { module: "Ingredientes", description: "Ingredientes além dos ativos" },
    {
      module: "Máscaras liberadas",
      description: "Entendendo o que são e para que servem as máscaras liberadas",
    },
    { module: "Silicones", description: "Entendendo o silicone nas máscaras" },
    { module: "Polímeros", description: "Entendendo o polímero nas máscaras" },
    { module: "Antioxidantes", description: "Entendendo o antioxidante nas máscaras" },
    { module: "Quelantes", description: "Entendendo o quelante nas máscaras" },
    { module: "Corretor de PH", description: "Entendendo o corretor de PH nas máscaras" },
    { module: "Petrolatos", description: "Entendendo o petrolato nas máscaras" },
    { module: "Parabenos", description: "Entendendo o parabeno nas máscaras" },
    { module: "Sulfatos", description: "Entendendo o sulfato nas máscaras" },
    { module: "Alcóois", description: "Entendendo o álcool nas máscaras" },
    { module: "Finalizadores", description: "Entendendo os finalizadores e para que servem" },
    {
      module: "Cosméticos na ANVISA",
      description:
        "Entendendo a função da ANVISA na área de cosméticos e como consultar informações oficiais",
    },
    {
      module: "INCI NAME",
      description: "Padronização internacional das nomenclaturas",
    },
    {
      module: "Escolhendo uma máscaras eficiente",
      description: "Checklist para escolher uma máscara eficiente",
    },
    {
      module: "Análise prática",
      description: "Exemplos práticos de análise das máscaras",
    },
  ];
  return (
    <Main>
      <Header>
        <ButtonBuy to="/checkout">Garantir Ebook!</ButtonBuy>
      </Header>

      {/* TÍTULO E FRASE DE EFEITO */}
      <Container bg1="#f9fbfc">
        <ContainerRow>
          <img loading="lazy" src="ebook.png" alt="" />
          <h1>
            Manual do <span>rótulo</span>{" "}
          </h1>
        </ContainerRow>
        <p>Desvende todas as charadas nos rótulos das máscaras capilares!</p>
      </Container>

      <Container>
        <ContainerGoals>
          <Goals>
            <BiTargetLock size={60} color="red" />
            <p>Alcance resultados no primeiro mês de cronograma capilar</p>
          </Goals>
          <Goals>
            <MdOutlineAttachMoney size={60} color="green" />
            <p>Economize com máscaras eficientes e de bom custo benefício</p>
          </Goals>
          <Goals>
            <BsGraphUp size={60} color="#0088a3" />
            <p>Na compra das máscaras capilares, o investimento já se paga</p>
          </Goals>
        </ContainerGoals>
      </Container>

      {/* O QUE VOCE VAI ENCONTRAR */}
      <Container bg1="#f9fbfc">
        <ContainerRow2>
          <img loading="lazy" src="tapete.png" alt="" />
          <div>
            <ListContainer3>
              <h2>
                O que você vai encontrar no <span>Ebook</span> ?
              </h2>
              {modules.map((item, i) => (
                <ItemList3
                  key={item.module}
                  show={rotate === i}
                  onClick={() => setRotate(rotate === i ? null! : i)}
                >
                  <ContainerRotate show={rotate === i}>
                    <p>{item.module}</p>
                  </ContainerRotate>
                  <ContainerRotate2 show={rotate === i}>
                    <p>{item.description}</p>
                  </ContainerRotate2>
                  {rotate === i ? (
                    <BsDashCircle
                      className="icon"
                      size={40}
                      color="#5D0F99"
                      onClick={() => setRotate(rotate === i ? null! : i)}
                    />
                  ) : (
                    <BsPlusCircle
                      className="icon"
                      size={40}
                      color="#5D0F99"
                      onClick={() => setRotate(rotate === i ? null! : i)}
                    />
                  )}
                </ItemList3>
              ))}
            </ListContainer3>
            <Containerprice>
              <p>Por apenas:</p>
              <h3 className="before">R$ 55,90 </h3>
              <h3 className="after">R$ 45,90 </h3>
            </Containerprice>
          </div>
        </ContainerRow2>
      </Container>

      {/* FAQ */}
      <Container bg1="#f9fbfc">
        <h3>Algumas instruções importantes:</h3>

        <ListContainer8>
          {Faq.map((item, i) => (
            <ItemList8 key={item.ask} show={index === i}>
              <button type="button" onClick={() => setIndex(index === i ? null! : i)}>
                {item.ask}
                <IoMdArrowDropdown size={30} color="red" className="icon" />
              </button>
              <Answer show={index === i}>
                <p>{item.answer}</p>
              </Answer>
            </ItemList8>
          ))}
        </ListContainer8>
      </Container>
    </Main>
  );
}
