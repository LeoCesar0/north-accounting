import { ADDRESS_FULL, COMPANY_NAME, COMPANY_SLOGAN, PHONE_2_FORMATED, PHONE_FORMATED } from "../utils/constants";

function Footer() {
  return (
    <footer className="p-4 bg-secondary min-h-[10rem] text-in-secondary">
      <div className="h-full w-full flex justify-evenly items-center">
        <div className="flex-1" >
            <p className="break-normal" >{ADDRESS_FULL}</p>
            <p>{PHONE_FORMATED}</p>
            <p>{PHONE_2_FORMATED}</p>
        </div>
        <div className="flex flex-1 flex-col gap-2 items-center justify-center" >
            <p className=""><strong>{COMPANY_NAME}</strong> © {new Date().getFullYear()}</p>
            <p className="">{COMPANY_SLOGAN}</p>
        </div>
        <div className="flex-1" >

        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
