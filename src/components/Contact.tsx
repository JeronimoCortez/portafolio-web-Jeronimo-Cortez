import { Contact2Icon, Linkedin, Mail } from "lucide-react";
import { contacts } from "../utils/contacts";

const Contact = () => {
  return (
    <div id="contact" className="mx-auto max-w-[80vw] mt-4 flex flex-col gap-4">
      <p className="subtitle text-center">- Contacto</p>
      <h4 className="title text-center">Construyamos algo increíble juntos</h4>
      <p className="text-center description md:max-w-[40vw] mx-auto">
        Ya sea para hablar de un proyecto, explorar una colaboración o
        simplemente saludar, siempre es un buen momento para conectar.
      </p>
      <div className="flex justify-center gap-2 flex-wrap  mb-5">
        {contacts.map((c, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center w-[200px] border border-[#d9d9d920] hover:border-[#38bdf8] rounded p-4"
          >
            <div className="w-[40px]  rounded flex items-center justify-center p-2">
              {c.platform === "Gmail" ? (
                <img
                  className="w-[30px]"
                  src="/assets/gmail.svg"
                  alt="Gmail logo"
                />
              ) : c.platform === "Linkedin" ? (
                <Linkedin className="w-[30px]" />
              ) : c.platform === "Email" ? (
                <Mail className="w-[30px]" />
              ) : (
                <Contact2Icon className="w-[30px]" />
              )}
            </div>
            <p>{c.platform}</p>
            <p className="text-center description text-[14px]!">{c.cta}</p>
            <a
              className="px-2 py-1 border border-[#d9d9d915]  rounded"
              href={c.url}
              target="_blank"
            >
              {c.platform === "Gmail" ? (
                <p>Enviar gmail</p>
              ) : c.platform === "Linkedin" ? (
                <p>Conectar</p>
              ) : c.platform === "Email" ? (
                <p>Enviar email</p>
              ) : (
                <p>Contactar</p>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
