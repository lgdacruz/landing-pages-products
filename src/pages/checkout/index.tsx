import React, { useEffect, useState } from "react";
import { AiFillCopy, AiFillLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Api from "../../services/api";
import { CardType, ErrorType, UserType } from "../../types";
import {
  ContainerAllCardCamp,
  ContainerCard,
  ContainerImg,
  ContainerPaymentType,
  FormQrCode,
  ContainerRow,
  ContainerSecurity,
  ContainerUser,
  ErrorText,
  Form,
  Input,
  InputCard,
  Main,
  Spinner,
  Submit,
  GenericContainerForm,
} from "./indexStyled";

export default function Checkout() {
  const navigate = useNavigate();

  const [key, setKey] = useState<string>(null!);
  const [card, setCard] = useState<CardType>();
  const [user, setUser] = useState<UserType>();
  const [error, setError] = useState<ErrorType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentType, setPaymentType] = useState<"card" | "pix">("card");
  const [qrCode, setQrCode] = useState<{ text?: string; img?: string }>();

  const CardErrors = [
    { code: "INVALID_NUMBER", message: "Número do cartão inválido" },
    {
      code: "INVALID_SECURITY_CODE",
      message: "CVV inválido",
    },
    {
      code: "INVALID_EXPIRATION_MONTH",
      message: "Mês de expiração inválido",
    },
    {
      code: "INVALID_EXPIRATION_YEAR",
      message: "Ano de expiração inválido",
    },
    { code: "INVALID_PUBLIC_KEY", message: "Chave pública inválida" },
    { code: "INVALID_HOLDER", message: "Nome do titular inválido" },
  ];

  useEffect(() => {
    Api.get("/publicKey")
      .then((res) => {
        setKey(res.data);
      })
      .catch((e) => {
        setError({ ...error, text: e.response.data });
      });
  }, []);

  // useEffect(() => {
  //   const userCard = window.PagSeguro.encryptCard({
  //     publicKey: key,
  //     holder: card?.holder,
  //     number: card?.number,
  //     expMonth: card?.expMonth,
  //     expYear: card?.expYear,
  //     securityCode: card?.securityCode,
  //   });

  //   userCard.errors.forEach((item: any) => {
  //     setError({ ...error, type: item.code });
  //   });
  // }, [error]);

  const PayCard = (event: any) => {
    event.preventDefault();
    setLoading(true);

    const userCard = window.PagSeguro.encryptCard({
      publicKey: key,
      holder: card?.holder,
      number: card?.number,
      expMonth: card?.expMonth,
      expYear: card?.expYear,
      securityCode: card?.securityCode,
    });

    if (userCard.hasErrors) {
      const errorSdk = userCard.errors[0];
      const myError = CardErrors.find((myList) => myList.code === errorSdk?.code);
      setError({ type: myError?.code, text: myError?.message });
      setLoading(false);
      return;
    }

    const encrypted = userCard.encryptedCard;

    Api.post("/checkout", {
      cardEncrypted: encrypted,
      install: card?.install ? card?.install : "1",
      name: user?.name,
      email: user?.email,
      cpf: user?.cpf,
    })
      .then((res) => {
        setLoading(false);
        navigate(`/success/${res.data}`);
      })
      .catch((e) => {
        setError({ ...error, text: e.response.data });
        setLoading(false);
      })
      .finally(() => {
        setUser({ cpf: "", email: "", name: "" });
        setCard({
          expMonth: "",
          expYear: "",
          holder: "",
          install: "",
          number: "",
          securityCode: "",
        });
        setLoading(false);
      });
  };

  const PayPix = (event: any) => {
    event.preventDefault();
    setLoading(true);
    Api.post("/checkoutPix", {
      name: user?.name,
      email: user?.email,
      cpf: user?.cpf,
    })
      .then((res) => {
        setQrCode({ text: res.data.text, img: res.data.img });
        setTimeout(() => navigate("/success/QRCODE"), 600000);
        setLoading(false);
      })
      .catch((e) => {
        setError({ ...error, text: e.response.data });
        setLoading(false);
      })
      .finally(() => {
        setUser({ cpf: "", email: "", name: "" });
        setLoading(false);
      });
  };

  return (
    <Main>
      <ContainerImg>
        <img loading="lazy" src="ebook.png" alt="" />
        <h1>Manual do rótulo</h1>
      </ContainerImg>

      <GenericContainerForm>
        <ContainerPaymentType>
          <button
            type="button"
            onClick={() => setPaymentType("pix")}
            disabled={paymentType === "pix"}
          >
            <img src="pix.png" alt="pix" />
            pix
          </button>
          <button
            type="button"
            onClick={() => setPaymentType("card")}
            disabled={paymentType === "card"}
          >
            <img src="card.png" alt="pix" />
            Cartão
          </button>
        </ContainerPaymentType>

        {paymentType === "card" ? (
          <Form onSubmit={(e) => PayCard(e)} show>
            <ErrorText>{error?.text}</ErrorText>

            <ContainerUser>
              <Input
                disabled={loading}
                required
                type="text"
                value={user?.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="Nome"
                minLength={1}
                maxLength={30}
              />
              <Input
                disabled={loading}
                required
                type="text"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
                minLength={10}
                maxLength={255}
              />
              <Input
                disabled={loading}
                required
                type="text"
                value={user?.cpf}
                onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                placeholder="CPF"
                minLength={11}
                maxLength={14}
              />
            </ContainerUser>

            <ContainerAllCardCamp show={paymentType === "card"}>
              <ContainerCard>
                <InputCard
                  error={error?.type === "INVALID_NUMBER"}
                  disabled={loading}
                  required
                  wd={90}
                  type="text"
                  value={card?.number}
                  onChange={(e) => setCard({ ...card, number: e.target.value })}
                  placeholder="42424242424242424242"
                  minLength={14}
                  maxLength={19}
                />
                <ContainerRow>
                  <InputCard
                    error={error?.type === "INVALID_HOLDER"}
                    disabled={loading}
                    required
                    wd={55}
                    type="text"
                    value={card?.holder}
                    onChange={(e) => setCard({ ...card, holder: e.target.value })}
                    placeholder="Nome no cartão"
                    minLength={1}
                    maxLength={30}
                  />
                  <InputCard
                    error={error?.type === "INVALID_EXPIRATION_MONTH"}
                    disabled={loading}
                    required
                    wd={10}
                    type="text"
                    value={card?.expMonth}
                    onChange={(e) => setCard({ ...card, expMonth: e.target.value })}
                    placeholder="MM"
                    minLength={1}
                    maxLength={2}
                  />
                  <InputCard
                    error={error?.type === "INVALID_EXPIRATION_YEAR"}
                    disabled={loading}
                    required
                    wd={15}
                    type="text"
                    value={card?.expYear}
                    onChange={(e) => setCard({ ...card, expYear: e.target.value })}
                    placeholder="YYYY"
                    minLength={2}
                    maxLength={4}
                  />
                </ContainerRow>
                <InputCard
                  error={error?.type === "INVALID_SECURITY_CODE"}
                  disabled={loading}
                  required
                  style={{ marginLeft: "-195px" }}
                  wd={13}
                  type="text"
                  value={card?.securityCode}
                  onChange={(e) => setCard({ ...card, securityCode: e.target.value })}
                  placeholder="CVV"
                  minLength={3}
                  maxLength={4}
                />
              </ContainerCard>
              <select
                disabled={loading}
                required
                value={card?.install}
                onChange={(e) => {
                  setCard({ ...card, install: e.target.value });
                }}
              >
                <option value="1">1x de R$ 45,90</option>
                <option value="2">2x de R$ 22,95</option>
                <option value="3">3x de R$ 15,30</option>
                <option value="4">4x de R$ 11,48</option>
                <option value="5">5x de R$ 9,18</option>
              </select>
            </ContainerAllCardCamp>

            {loading ? (
              <Spinner />
            ) : (
              <Submit disabled={loading} type="submit" value="Finalizar compra" />
            )}
            <ContainerSecurity>
              <p>Seus dados estão seguros</p>
              <AiFillLock />
            </ContainerSecurity>
          </Form>
        ) : (
          <>
            <Form onSubmit={(e) => PayPix(e)} show={!qrCode?.img && !qrCode?.text}>
              <ErrorText>{error?.text}</ErrorText>

              <ContainerUser>
                <Input
                  disabled={loading}
                  required
                  type="text"
                  value={user?.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="Nome"
                  minLength={1}
                  maxLength={30}
                />
                <Input
                  disabled={loading}
                  required
                  type="text"
                  value={user?.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                  minLength={10}
                  maxLength={255}
                />
                <Input
                  disabled={loading}
                  required
                  type="text"
                  value={user?.cpf}
                  onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                  placeholder="CPF"
                  minLength={11}
                  maxLength={14}
                />
              </ContainerUser>

              {loading ? (
                <Spinner />
              ) : (
                <Submit disabled={loading} type="submit" value="Gerar QrCode" />
              )}
              <ContainerSecurity>
                <p>Seus dados estão seguros</p>
                <AiFillLock />
              </ContainerSecurity>
            </Form>
            <FormQrCode show={!!qrCode?.img && !!qrCode?.text}>
              <p className="instruction">
                Aponte a câmera para o QrCode ou copie e cole o código. <br />
                Após a confirmação do pagamento, o Ebook será enviado para o email inserido.
              </p>
              <img src={qrCode?.img} alt="QrCode" />

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(qrCode?.text as string)}
              >
                <AiFillCopy size={40} id="iconCopy" />
                {qrCode?.text}
              </button>
            </FormQrCode>
          </>
        )}
      </GenericContainerForm>
    </Main>
  );
}
