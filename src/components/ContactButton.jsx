import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import React from "react";
import { WPPLINK } from "../utils/constants";

export default function ContactButton() {
  return (
    <Link passHref href={WPPLINK}>
      <a
        target="_blank noopener noreferrer"
        className={`bg-zinc-200 text-secondary text-xl font-bold py-2 px-4 rounded min-w-[10rem] flex items-center justify-center w-full flex gap-1 items-center`}
      >
        <WhatsappLogo size={25} />
        Entrar em contato
      </a>
    </Link>
  );
}
