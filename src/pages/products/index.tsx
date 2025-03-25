import React from "react";

import { BuyLink, Container, ListContainer3, Main } from "./indexStyled";

export default function Products() {
  const products = [
    {
      link: "https://go.siteoficial.app/aff/XCGXDQ91/LGZGQUQ9",
      img: "fioterapia.png",
      name: "Fioterapia",
    },
    {
      link: "https://go.siteoficial.app/aff/QYX4VMCA/SVFUCG0V",
      img: "tonico.png",
      name: "Tônico Poderoso",
    },
    {
      link: "https://go.siteoficial.app/aff/ZTMYMMQG/FQZ5AN2L",
      img: "reparegold.png",
      name: "Repare Gold",
    },
    {
      link: "https://go.siteoficial.app/aff/981OE5FS/EOPUZ2YR",
      img: "standby.png",
      name: "Stand-By",
    },
    {
      link: "https://go.siteoficial.app/aff/HPQ1VH8B/IJFAPDJN",
      img: "cronogramagoldspell.png",
      name: "Cronograma Goldspell",
    },
    {
      link: "https://go.siteoficial.app/aff/IY9PPSQB/IBWSAJSO",
      img: "efeitosoneca.png",
      name: "Efeito soneca",
    },
    {
      link: "https://go.siteoficial.app/aff/3NTX4JOT/CQDNSCMZ",
      img: "dnaplex.png",
      name: "Dnaplex",
    },
    {
      link: "https://go.siteoficial.app/aff/P58YI0U1/6YYJJOR4",
      img: "receitababosa.png",
      name: "Receitinha Babosa",
    },
    {
      link: "https://go.siteoficial.app/aff/FMDJ6PL6/33SIWE6U",
      img: "caseirodericino.png",
      name: "Caseirinho Rícino",
    },
    {
      link: "https://go.siteoficial.app/aff/FSDMHQVW/7QNEZL7V",
      img: "shampooefeitosoneca.png",
      name: "Shampoo Efeito Soneca",
    },
    {
      link: "https://go.siteoficial.app/aff/VIJ9SA8L/HJD1TEOB",
      img: "shampoopoderoso.png",
      name: "Shampoo Poderoso",
    },
    {
      link: "https://go.siteoficial.app/aff/MFPICB3N/YNNYKFCH",
      img: "dnaplex.png",
      name: "Shampoo DNA",
    },
    {
      link: "https://go.siteoficial.app/aff/LP0LLQZ8/LXOKQMIX",
      img: "prepoo.png",
      name: "Pré Poo Purple",
    },
    {
      link: "https://go.siteoficial.app/aff/GUWEYQPH/UBK0EEMY",
      img: "receitinhamilagrosa.png",
      name: "Receitinha Milagrosa",
    },
    {
      link: "https://go.siteoficial.app/aff/08M3RXY5/G71HRYOV",
      img: "receitaobrigatoria.png",
      name: "Receitinha Obrigatória",
    },
    {
      link: "https://go.siteoficial.app/aff/KYJ09WTD/7KJOIGNQ",
      img: "booster.png",
      name: "Booster",
    },
    {
      link: "https://go.siteoficial.app/aff/OMWFOS0N/UYGHZNQS",
      img: "terapiatox.png",
      name: "Terapiatox",
    },
    {
      link: "https://go.siteoficial.app/aff/ZJRHAIOS/UZ9NSDJX",
      img: "acidgold.png",
      name: "Acidgold",
    },
    {
      link: "https://amzn.to/3oFW9u1",
      img: "lizzie.png",
      name: "Chapinha Lizze extreme 110v",
    },
    {
      link: "https://amzn.to/3JmanIm",
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
