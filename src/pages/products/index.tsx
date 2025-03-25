import React from "react";

import { BuyLink, Container, ListContainer3, Main } from "./indexStyled";

export default function Products() {
  const products = [
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "fioterapia.png",
      name: "Fioterapia",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "tonico.png",
      name: "Tônico Poderoso",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "reparegold.png",
      name: "Repare Gold",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "standby.png",
      name: "Stand-By",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "cronogramagoldspell.png",
      name: "Cronograma Goldspell",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "efeitosoneca.png",
      name: "Efeito soneca",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "dnaplex.png",
      name: "Dnaplex",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "receitababosa.png",
      name: "Receitinha Babosa",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "caseirodericino.png",
      name: "Caseirinho Rícino",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "shampooefeitosoneca.png",
      name: "Shampoo Efeito Soneca",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "shampoopoderoso.png",
      name: "Shampoo Poderoso",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "dnaplex.png",
      name: "Shampoo DNA",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "prepoo.png",
      name: "Pré Poo Purple",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "receitinhamilagrosa.png",
      name: "Receitinha Milagrosa",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "receitaobrigatoria.png",
      name: "Receitinha Obrigatória",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "booster.png",
      name: "Booster",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "terapiatox.png",
      name: "Terapiatox",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "acidgold.png",
      name: "Acidgold",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "lizzie.png",
      name: "Chapinha Lizze extreme 110v",
    },
    {
      link: "https://www.youtube.com/@devtocruz6698",
      img: "lizzie.png",
      name: "Chapinha Lizze extreme 220v",
    },
  ];
  return (
    <Main>
      {/* TÍTULO E FRASE DE EFEITO */}
      <Container bg1="#f9fbfc">
        <h1>Links de produtos</h1>
      </Container>

      {/* PRODUTOS */}
      <ListContainer3>
        {products.map((item) => (
          <BuyLink href={item.link} target="_blank">
            <img loading="lazy" src={item.img} alt={item.img} />
            <p>{item.name}</p>
          </BuyLink>
        ))}
      </ListContainer3>
    </Main>
  );
}
