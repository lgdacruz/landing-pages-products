import React, { useState } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import Api from "../../services/api";
import {
  Answer,
  Container,
  ContainerRotate,
  ContainerRotate2,
  ContainerRow,
  Form,
  Input,
  ItemList3,
  ItemList8,
  ListContainer3,
  ListContainer8,
  Main,
  Submit,
  TextFb,
} from "./indexStyled";

export default function Ebook() {
  const [rotate, setRotate] = useState<number>(null!);
  const [index, setIndex] = useState<number>(null!);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const goal = [
    {
      img: "liso.png",
      goal: "Cronograma capilar personalizado",
      description:
        "Todas as características atuais do seu cabelo serão analisadas para chegar em um cronograma único e personalizado para você.",
    },
    {
      img: "fio.png",
      goal: "Cuidados personalizados",
      description: "Os cuidados são de acordo com os seus objetivos e necessidades.",
    },
    {
      img: "eficiente.png",
      goal: "Acompanhamento",
      description:
        "Eu acompanho de perto todas as clientes, identificando mudanças necessárias durante o tratamento.",
    },
    {
      img: "cronograma.png",
      goal: "Videochamadas",
      description:
        "As videochamadas são de acordo com o plano da cliente, na videochamada eu explico todos os detalhes do tratamento e tiro as dúvidas.",
    },
    {
      img: "prepos.png",
      goal: "Indicação de produtos",
      description:
        "Eu sei como é frustrante todo mundo falar que um produto é bom e esse produto não funcionar com você. Sabendo disso, eu vou indicar para você os produtos mais adequados para o seu caso.",
    },
    {
      img: "fogo.png",
      goal: "Dúvidas tiradas diretamente comigo",
      description:
        "Simplicidade e facilidade são muito importante, por isso eu tiro as dúvidas direto no whatsapp.",
    },
    {
      img: "finalizar.png",
      goal: "Indicação de equipamentos",
      description:
        "Caso necessário, você terá indicação de equipamentos como prancha, secador e etc de qualidade.",
    },
  ];
  const Faq = [
    {
      ask: "Por onde eu pago?",
      answer:
        "No pix ou cartão enviado pelo whatsapp que está no canto inferior direito dessa página.",
    },
    {
      ask: "Quando começa a consultoria?",
      answer: "A data é informada no mínimo uma semana antes.",
    },
    {
      ask: "Vou aprender a fazer cronograma capilar?",
      answer:
        "Não, esse não é o foco da consultoria, a consultoria é o meu acompanhamento com você.",
    },
    {
      ask: "Como eu receberei meu cronograma?",
      answer:
        "Após a confirmação do pagamento, você receberá pelo whatsapp em formato PDF um dia antes da data de início da consultoria.",
    },
    {
      ask: "Posso perguntar qualquer coisa sobre o tratamento a qualquer momento?",
      answer:
        "Sim, você pode. Mas eu estabeleço dias e horários específicos para responder todas as dúvidas.",
    },
    {
      ask: "Tenho uma dúvida que não está aqui, como tiro essa dúvida?",
      answer:
        "Clique no ícone do whatsapp que está no canto inferior direito do site e envie a sua dúvida.",
    },
  ];

  const SubmitEmail = (event: any) => {
    event.preventDefault();
    setLoading(true);
    Api.post("/pushEmail", { email })
      .then((res) => {
        setError("");
        setSuccess(res.data);
      })
      .catch((e) => {
        setSuccess("");
        setError(e.response.data);
      })
      .finally(() => {
        setEmail("");
        setLoading(false);
      });
  };

  return (
    <Main>
      {/* TÍTULO E FRASE DE EFEITO */}
      <Container>
        <ContainerRow>
          <h1>Consultoria capilar com Mirella Casquilho</h1>
        </ContainerRow>
        <p>Acompanhamento profissional com quem tem método próprio comprovado com resultado</p>
      </Container>

      {/* O QUE VAI TER NA CONSULTORIA */}
      <Container bg1="#f9fbfc">
        <h2>
          Na <span>consultoria</span> você vai ter:
        </h2>

        <ListContainer3>
          {goal.map((item, i) => (
            <ItemList3
              key={item.goal}
              show={rotate === i}
              onClick={() => setRotate(rotate === i ? null! : i)}
            >
              <ContainerRotate show={rotate === i}>
                <img loading="lazy" src={item.img} alt={item.img} />
                <p className="title">{item.goal}</p>
              </ContainerRotate>
              <ContainerRotate2 show={rotate === i}>
                <p className="title">{item.goal}</p>
                <p>{item.description}</p>
              </ContainerRotate2>
              {rotate === i ? (
                <BsDashCircle
                  className="icon"
                  size={50}
                  color="#5D0F99"
                  onClick={() => setRotate(rotate === i ? null! : i)}
                />
              ) : (
                <BsPlusCircle
                  className="icon"
                  size={50}
                  color="#5D0F99"
                  onClick={() => setRotate(rotate === i ? null! : i)}
                />
              )}
            </ItemList3>
          ))}
        </ListContainer3>
      </Container>

      {/* PEGAR EMAIL */}
      <Container bg1="#f9fbfc">
        <Form onSubmit={(e) => SubmitEmail(e)}>
          <p>Seja avisada quando as vagas abrirem!</p>

          <TextFb color={error !== "" ? "red" : "green"}>{error !== "" ? error : success}</TextFb>

          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <Submit disabled={loading} />
        </Form>
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
