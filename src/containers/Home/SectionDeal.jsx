import Image from "next/image";
import BusinessImage from "../../public/business.svg";
import TriangleDetail from "../../components/TriangleDetail";
import ContactButton from "../../components/ContactButton";

export function SectionDeal() {
  return (
    <section className="min-h-[100vh] bg-in-secondary relative">
      <TriangleDetail classes="bg-in-secondary " />
      <div className="container mx-auto flex flex-col justify-center items-center py-12">
        <h2 className=" text-primary mb-8 ">
          Achamos a solução para o seu negócio.
        </h2>
        <div className="max-w-2xl mb-8">
          <ContactButton />
        </div>
        <div className="">
          <Image src={BusinessImage} alt="Imagem Business" />
        </div>
      </div>
    </section>
  );
}
