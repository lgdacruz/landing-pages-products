declare global {
  interface Window {
    PagSeguro: any;
  }
}

export interface CardType {
  publicKey?: string;
  holder?: string;
  number?: string;
  expMonth?: string;
  expYear?: string;
  securityCode?: string;
  install?: string;
}
export interface UserType {
  name?: string;
  email?: string;
  cpf?: string;
}
export interface EbookType {
  name?: string;
  url?: string;
}
export interface ErrorType {
  text?: string;
  type?: string;
}
