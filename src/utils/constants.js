import { Buildings, Calculator, Notebook, Stamp, CurrencyDollar, Strategy, Ruler } from "phosphor-react";


export const CEP = '69.098-270'
export const ADDRESS_AVENUE = 'AV. Coronel Sávio Belota'
export const ADDRESS_FULL = 'AV. Coronel Sávio Belota, 59 núcleo 16, Cidade Nova, Coj. Cidde Nova - bairro Novo Aleixo - Manaus AM'
export const PHONE_FORMATED = '+55 (92) 9 9441-3000'
export const PHONE = PHONE_FORMATED.replace(/\D/g, '')
export const PHONE_2_FORMATED = '+55 (92) 9 9944-1012'
export const PHONE_2 = PHONE_2_FORMATED.replace(/\D/g, '')
export const WPPLINK = `https://api.whatsapp.com/send?phone=${PHONE}`
export const EMAIL = 'nortecontabilidade1@gmail.com'

export const COMPANY_NAME = 'Norte Contabilidade'
export const COMPANY_SLOGAN = 'Soluções em contabilidade'

export const SERVICES = [
    {
      label: "Abertura de Empresas",
      image: Buildings,
      description:
        "De forma rápida e segura",
    },
    {
      label: "Regularização fiscal e Dept. Pessoal",
      image: Notebook,
      description:
        "Gerenciamento",
    },
    {
      label: "Baixa de CNPJ",
      image: Stamp,
      description:
        "Lorem",
    },
    {
      label: "Planejamento Tributário",
      image: Calculator,
      description:
        "Lorem",
    },
    {
      label: "Regularização de CPF",
      image: Strategy,
      description:
        "Lorem",
    },
    {
      label: "Regularização de Empresas",
      image: Ruler,
      description:
        "Lorem",
    },
  ];