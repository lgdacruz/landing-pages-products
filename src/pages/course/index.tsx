import React, { useState } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import { IoIosArrowDropdown, IoMdArrowDropdown } from "react-icons/io";
import { FaBitbucket, FaQuoteRight } from "react-icons/fa";
import {
  AllContainers,
  Answer,
  Button,
  ButtonBuy,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  ContainerClasses,
  ContainerModule,
  ContainerRotate,
  ContainerRotate2,
  H1,
  H2,
  H3,
  H4,
  H5,
  Header,
  HeaderItem,
  ItemList,
  ItemList3,
  ItemList5,
  ItemList6,
  ItemList8,
  Link,
  List,
  List5,
  ListContainer3,
  ListContainer6,
  ListContainer8,
  LittleSubContainer2,
  Main,
  Nav,
  SubContainer,
  SubContainer2,
  SubContainer22,
  SubContainer4,
  SubContainer44,
  SubContainer5,
  Text,
  TextNumber,
} from "./indexStyled";

function Course() {
  const [index, setIndex] = useState<number>(null!);
  const [showModule, setShowModule] = useState<number>(null!);
  const [rotate, setRotate] = useState<number>(null!);

  const comments = [
    {
      photo:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/01/ganso-01-1200x857.jpg",
      name: "Luiz Sérgio",
      comment: "Incrível a sua didática, você mudou a minha vida",
    },
    {
      photo:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/01/ganso-01-1200x857.jpg",
      name: "João Gomes",
      comment: "Incrível a sua didática, você mudou a minha vida",
    },
    {
      photo:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/01/ganso-01-1200x857.jpg",
      name: "João Gomes",
      comment: "Incrível a sua didática, você mudou a minha vida",
    },
    {
      photo:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/01/ganso-01-1200x857.jpg",
      name: "João Gomes",
      comment: "Incrível a sua didática, você mudou a minha vida",
    },
    {
      photo:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/01/ganso-01-1200x857.jpg",
      name: "João Gomes",
      comment: "Incrível a sua didática, você mudou a minha vida",
    },
    {
      photo:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/01/ganso-01-1200x857.jpg",
      name: "João Gomes",
      comment: "Incrível a sua didática, você mudou a minha vida",
    },
  ];
  const Faq = [
    {
      ask: "O que eu preciso saber para fazer o curso?",
      answer: "Nada. O curso vai te levar do zero ao objetivo.",
    },
    {
      ask: "Por quanto tempo terei acesso ao conteúdo do curso?",
      answer: "Você terá acesso vitalício ao curso, incluindo todas as atualizações de conteúdo.",
    },
    {
      ask: "Vou aprender a fazer cronograma capilar?",
      answer:
        "Sim, você entenderá como funciona o cabelo no nosso organismo e conseguirá criar um cronograma.",
    },
    {
      ask: "Por onde eu acesso o curso?",
      answer:
        "Após a compra ser aprovada pela Hotmart, você receberá um link para criação da sua senha e liberação da área com as aulas.",
    },
    {
      ask: "Todas as aulas estarão disponíveis após a compra?",
      answer:
        "Não, você terá mais de 100 aulas. Porém novos módulos, aulas e projetos serão adicionados constantemente sem custo adicional.",
    },
    {
      ask: "Qual a carga horária do curso?",
      answer:
        "Atualmente o curso conta com mais de 30 horas de conteúdo, esse valor é aumentado conforme adicionamos novos conteúdos.",
    },
  ];
  const modules = [
    {
      number: "1.",
      module: "Conceitos de Tricologia",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "2.",
      module: "Químicas de alisamento",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "3.",
      module: "Cosméticos na ANVISA",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "4.",
      module: "Pré química",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "5.",
      module: "Escolha da chapinha",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "6.",
      module: "Procedimento do alisamento",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "7.",
      module: "Cronograma Capilar",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "8.",
      module: "Pós química",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "9.",
      module: "Produtos para tratamento",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
    {
      number: "10.",
      module: "Finalização do cabelo alisado",
      teacher: "Professora: Mirella Casquilho",
      description: "Aprenda os fundamentos das químicas utilizadas no alisamento capilar",
      classes: ["Henê", "Selagem", "Botox", "Progressiva"],
    },
  ];
  const goal = [
    {
      img: "fio.png",
      goal: "Entender a Haste Capilar",
      description:
        "Você vai entender toda a estrutura do fio: cutícula, córtex e a membrana. Com isso conseguirá compreender o que acontece no cabelo com os tratamentos e alisamentos.",
    },
    {
      img: "quimica.png",
      goal: "Escolher a química de alisamento",
      description:
        "A escolha do produto interfere tanto no alisamento, quanto no procedimento a ser feito. Você será capaz de identificar a qualidade do produto e a química certa para cada tipo de cabelo.",
    },
    {
      img: "prepos.png",
      goal: "Tratar qualquer cabelo pré e pós química",
      description:
        "Fazer o alisamento não basta para alisa-lo de forma saudável. É necessário que o fio esteja saudável antes e depois da química. No final desse treinamento você aprenderá todos os tratamentos pré e pós química.",
    },
    {
      img: "fogo.png",
      goal: "Escolher os equipamentos adequados e utilizá-los da forma correta",
      description:
        "Ao final do curso você saberá os equipamentos e a forma correta de utilizá-los para cada procedimento do cabelo.",
    },
    {
      img: "liso.png",
      goal: "Alisar corretamente",
      description:
        "O processo de modificar a estrutura do fio corretamente envolve vários detalhes que vão desde o produto utilizado até a forma que você executa o procedimento. Ao final, você saberá executar de forma correta tal procedimento.",
    },
    {
      img: "cronograma.png",
      goal: "Montar um cronograma capilar estratégico para cabelo alisado",
      description:
        "Cada cabelo é único e necessita de ativos de acordo com suas necessidades. Com o cabelo alisado é necessário uma análise mais profunda para um Cronograma Capilar estratégico. No final do treinamento você conseguirá analisar e planejar um cronograma ideal.",
    },
    {
      img: "finalizar.png",
      goal: "Finalizar o cabelo alisado sem danificar",
      description:
        "Você aprenderá a fazer a manutenção dos fios, finalizando-os sem danificar desnecessariamente.",
    },
    {
      img: "eficiente.png",
      goal: "Escolher produtos eficientes",
      description:
        "Você aprenderá enxergar os produtos além da marca e preço, entenderá os ativos que ele possui e então identificar o produto mais eficiente para cada caso.",
    },
    {
      img: "intervalo.png",
      goal: "Entender o intervalo dos retoques",
      description:
        "Você será capaz de identificar quando um cabelo precisa de retoque de alisamento.",
    },
  ];

  return (
    <Main>
      <Header>
        <Nav>
          <Link href="#conteudo">Conteúdo do curso</Link>
          <Link href="#objetivo">O que eu serei capaz de fazer?</Link>
          <Link href="#custo">Preço</Link>
          <Link href="#depoimentos">Depoimentos</Link>
          <Link href="#sobre">Quem sou eu?</Link>
          <Link href="#faq">FAQ</Link>
        </Nav>
        <ButtonBuy>
          <Button type="button">Quero agora!</Button>
        </ButtonBuy>
      </Header>

      <AllContainers>
        <Container1>
          <SubContainer>
            <H1>TÍTULO</H1>
            <Text>
              Aprenda as melhores técnicas e procedimentos para atingir um cabelo alisado saudável
            </Text>
            <iframe
              src="https://www.youtube.com/embed/UwdvdFEvG58?autoplay=1&controls=0&loop=1&fs=0&iv_load_policy=3&modestbranding=0&showinfo=0"
              title="YouTube video player"
            />
          </SubContainer>
          <FaBitbucket size={100} color="blue" />
        </Container1>
      </AllContainers>

      {/* CONTEUDO PROGRAMATICO */}
      <AllContainers bg="#f9fbfc">
        <Container2>
          <H2 id="conteudo">
            TUDO O QUE VOCÊ PRECISA SABER SOBRE O ALISADO SAUDÁVEL EM UM SÓ LUGAR
          </H2>
          <SubContainer2>
            {modules.map((item, i) => (
              <LittleSubContainer2>
                <TextNumber>{item.number}</TextNumber>
                <p>{item.module}</p>
                <ContainerModule show={i === showModule}>
                  <p className="teacher">{item.teacher}</p>
                  <p className="description">{item.description}</p>
                  <button
                    className="more"
                    type="button"
                    onClick={() => setShowModule(i === showModule ? null! : i)}
                  >
                    Ver mais <IoIosArrowDropdown />
                  </button>
                  <ContainerClasses show={i === showModule}>
                    {item.classes.map((value) => (
                      <li>{value}</li>
                    ))}
                  </ContainerClasses>
                </ContainerModule>
              </LittleSubContainer2>
            ))}
          </SubContainer2>

          <SubContainer22>
            <H4>O conteúdo é completo!</H4>
            <SubContainer4>
              <img
                loading="lazy"
                src="completo.png"
                alt="completo"
                style={{ width: "150px", height: "150px" }}
              />
              <p>
                Isso significa que não é necessário nenhum conhecimento prévio, a abordagem é do
                <span> Zero e completa</span> para te proporcionar o conhecimento necessário!
              </p>
            </SubContainer4>
          </SubContainer22>

          <SubContainer44>
            <img
              loading="lazy"
              src="Dias.png"
              alt="Dias"
              style={{ width: "200px", height: "200px" }}
            />
            <div style={{ margin: "0 2rem" }}>
              <H4 style={{ fontSize: "2rem", textAlign: "center" }}>Garantia</H4>
              <p>
                O presente é para você, mas o risco é nosso. Oferecer tanto valor por um preço tão
                baixo não é o suficiente. Você ainda tem uma garantia incondicional de 7 dias caso o
                curso não atenda as expectativas. Acreditamos tanto no nosso trabalho ao ponto de
                assumir o seu risco!
              </p>
            </div>
          </SubContainer44>
        </Container2>
      </AllContainers>

      {/* O QUE SERÁ CAPAZ DE FAZER NO FINAL DO CURSO */}
      <AllContainers bg="#fff">
        <Container3>
          <H3 id="objetivo" style={{ color: "#555", width: "50%", fontSize: "3rem" }}>
            No final do curso, você será capaz de:
          </H3>

          <ListContainer3>
            {goal.map((item, i) => (
              <ItemList3 key={item.goal}>
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
        </Container3>
      </AllContainers>

      {/* LINGUAGEM ACESSIVEL */}
      <AllContainers bg="#f9fbfc" style={{ padding: "4rem 0" }}>
        <Container4>
          <SubContainer4 style={{ flexDirection: "column" }}>
            <H4>Linguagem acessível e didática</H4>
            <img
              loading="lazy"
              src="cadeado.png"
              alt="cadeado"
              style={{ width: "200px", height: "200px" }}
            />
            <p>
              Com uma linguagem simples e didática de quem tem anos de experiência com conteúdo na
              internet, assuntos complexos ficam simples.
            </p>
          </SubContainer4>
        </Container4>
      </AllContainers>

      {/* QUANTO CUSTA */}
      <AllContainers bg="#f9fbfc">
        <Container5>
          <SubContainer5>
            <H4 id="custo">Quanto será que custa se priorizar?</H4>
          </SubContainer5>

          <List5>
            <ItemList5>
              <img
                loading="lazy"
                src="pizza.png"
                alt="pizza"
                style={{ width: "70px", height: "70px" }}
              />
              <p>Pizza no final de semana - R$ 60,00</p>
            </ItemList5>
            <ItemList5>
              <img
                loading="lazy"
                src="look.png"
                alt="look"
                style={{ width: "70px", height: "70px" }}
              />
              <p>Look novo - R$ 150,00</p>
            </ItemList5>
            <ItemList5>
              <img
                loading="lazy"
                src="sapato.png"
                alt="sapato"
                style={{ width: "70px", height: "70px" }}
              />
              <p>Sapato - R$ 100,00</p>
            </ItemList5>
            <ItemList5>
              <img
                loading="lazy"
                src="lampada.png"
                alt="lampada"
                style={{ width: "70px", height: "70px" }}
              />
              <p style={{ fontSize: "1.7rem" }}>
                Investir em você:
                <span
                  style={{
                    margin: "5rem 1rem",
                    fontSize: "1.8rem",
                    textDecoration: "line-through",
                    color: "red",
                  }}
                >
                  {" "}
                  R$ 1.147,<sup>59</sup>
                </span>
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                  R$<sup style={{ fontSize: "0.8rem", color: "#777" }}>12x</sup> 50,
                  <sup>90</sup> ou R$ 600,
                  <sup>00</sup> <span style={{ fontSize: "1rem" }}>à vista</span>
                </span>
              </p>
            </ItemList5>
          </List5>
        </Container5>
      </AllContainers>

      {/* BENEFICIOS EXCLUSIVOS */}
      <AllContainers bg="#fff">
        <Container6>
          <H5>Benefícios exclusivos</H5>
          <ListContainer6>
            <ItemList6>
              <p className="title">Ebook Cronograma</p>
              <p>
                Com o Ebook cronograma capilar você aprenderá de uma vez por todas a identificar o
                cronograma idela de acordo com as necessidades.
              </p>
              <p className="price">R$ 30,00</p>
              <p className="free">Grátis</p>
            </ItemList6>
            <ItemList6>
              <p className="title">Estrutura do fio</p>
              <p>
                Descrição do que vai aprender, isso e aquilo, com uma maior comodidade e como
                funciona o nosso crescimento e pigmentação capilar
              </p>
            </ItemList6>
            <ItemList6>
              <p className="title">Estrutura do fio</p>
              <p>
                Descrição do que vai aprender, isso e aquilo, com uma maior comodidade e como
                funciona o nosso crescimento e pigmentação capilar
              </p>
            </ItemList6>
          </ListContainer6>
        </Container6>
      </AllContainers>

      {/* DEPOIMENTOS */}
      <AllContainers bg="#fff" style={{ padding: "5rem 0" }}>
        <Container6>
          <H3>
            Não perca mais tempo, junte-se ao grupo de pessoas que alcançaram o cabelo dos sonhos.
          </H3>
          <List id="depoimentos">
            {comments.map((item) => (
              <ItemList>
                <HeaderItem>
                  <img loading="lazy" src={item.photo} alt="Aluno" />
                  <p>{item.name}</p>
                  <FaQuoteRight size={30} color="#2F084D" />
                </HeaderItem>
                <p className="comment">{item.comment}</p>
              </ItemList>
            ))}
          </List>
        </Container6>
      </AllContainers>

      {/* SOBRE */}
      <AllContainers id="sobre" bg="#2F084D">
        <Container7>
          <div>
            <H5>QUEM É MIRELLA CASQUILHO?</H5>
            <p style={{ fontSize: "1.5rem" }}>
              Tricologista e terapeuta capilar. Mirella seguiu o caminho da tricologia
            </p>
          </div>
          <FaBitbucket size={200} color="blue" />
        </Container7>
      </AllContainers>

      {/* FAQ */}
      <AllContainers bg="#f9fbfc">
        <Container8>
          <H5 id="faq">FAQ - Perguntas frequentes</H5>
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

          <H5>Pronta para desbloquear todo conhecimento necessário?</H5>
          <ButtonBuy>
            <Button type="button">Adquirir já!</Button>
          </ButtonBuy>
        </Container8>
      </AllContainers>
    </Main>
  );
}

export default Course;
