import Image from "next/image";
import CustomAnimation from "../../components/CustomAnimation";
// import CalculatorSvg from "../../public/calculator.svg";
import WorkImage from "../../public/work.jpg";

export function SecondSection() {
  return (
    <section className="min-h-[100vh] grid place-items-center">
      <div className="grid sm:grid-cols-2 container p-8 mx-auto place-items-center ">
        <div className="row-start-2 sm:row-start-1 ">
          <Image src={WorkImage} alt="Imagem Calculadora" className="shadow-xl" />
        </div>
        <div className="p-6 h-full flex flex-col ">
          <CustomAnimation>
            <h2 className="mb-10 text-primary">Com compromisso e seriedade</h2>
          </CustomAnimation>
          <CustomAnimation animationDelay="1s" >
            <p className="text-xl">
              Dirigimos nossa empresa de equipe multidisciplinar com o objetivo
              de trazer uma ótima experiência para nossos clientes.
            </p>
          </CustomAnimation>
        </div>
      </div>
    </section>
  );
}
