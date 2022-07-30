import TriangleDetail from "../../components/TriangleDetail";
import { SERVICES } from "../../utils/constants";

function SectionServices() {
  return (
    <section className="min-h-[120vh] p-10 bg-in-primary relative">
      <TriangleDetail classes="bg-in-primary " />
      <div className="mb-14 mt-2">
        <h1 className="text-primary">Conheça alguns dos nossos serviços</h1>
      </div> 
      <div className="container p-6  mx-auto  max-w-5xl h-full bg-primary rounded-xl grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 ">
        {SERVICES.map((item, index) => {
          return (
            <div
              className="aspect-square shadow-xl bg-in-secondary rounded-xl overflow-hidden grid place-items-center p-4 w-full h-full max-w-[300px] "
              key={index}
            >
              <item.image size={"65%"} className="text-primary" />
              <h3 className="text-primary text-2xl text-center">{item.label}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionServices;

{
  /* <div className="container p-6 mx-auto  max-w-5xl h-full bg-primary rounded-xl grid grid-cols-3 place-items-center gap-4">
        {servicesList.map((item, index) => {
          return (
            <div
              className="aspect-square bg-in-secondary rounded-xl overflow-hidden grid place-items-center p-4"
              key={index}
            >
              <h3 className="text-primary" >{item.label}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div> */
}
