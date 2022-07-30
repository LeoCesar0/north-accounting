import ContactButton from "../../components/ContactButton";
import WorkImage from "../../public/work.jpg";
import WrittingImage from "../../public/writting.jpg";
import NotesImage from "../../public/notes.jpg";
import RealPcImage from "../../public/real-pc.jpeg";
import * as businessAnimation from "../../public/business-animation.json";
import Lottie from "react-lottie";
import BusinessImage from "../../public/business.svg";
import CalculatorSvg from "../../public/calculator.svg";
import Image from "next/image";
import FinanceImage from "../../public/finance.svg";
import Link from "next/link";
import LinkButton from "../../components/LinkButton";
import Styles from "./styles.module.css";
import Logo from "../../public/logo.png";
import { WhatsappLogo } from "phosphor-react";
import CustomAnimation from "../../components/CustomAnimation";

function FirstSection() {
  return (
    <section className="bg-secondary min-h-[90vh] flex items-center relative overflow-hidden ">
      <div className="absolute w-[120vh] h-[120vh] right-0 translate-x-[30%] top-0 bg-in-secondary rounded-full opacity-60"></div>
      <div className="container mx-auto grid sm:grid-cols-2 place-items-center z-10">
        <div className="hidden sm:block">
          <Image src={FinanceImage} alt="Imagem Finanças" />
        </div>
        <div className="p-6 h-full flex flex-col gap-2">
          <CustomAnimation>
            <h3 className="text-zinc-200 mb-1">
              Nós cuidamos de toda burocracia
            </h3>
          </CustomAnimation>
          <div>
            <CustomAnimation animationDelay="1s" >
              <h2 className="text-white font-bold">
                <strong>Para você</strong> que precisa cuidar do que{" "}
                <strong>realmente importa</strong>
              </h2>
            </CustomAnimation>
          </div>
          <div className="flex flex-1 items-center ">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
