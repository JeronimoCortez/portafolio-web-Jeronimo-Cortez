import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="#home"
      className="mt-4 p-4 w-[80vw] mx-auto md:flex md:items-center md:gap-4"
    >
      <div className="flex flex-col gap-2">
        <h2 className="title">Jeronimo Cortez</h2>
        <h3 className="subtitle">Desarrollador Full Stack</h3>
        <p className="description">
          Me apasiona construir soluciones digitales sólidas y productos que
          cumplan las necesidades de los usuarios. Estoy en constante
          aprendizaje, perfeccionando mis conocimientos en tecnologías ya
          aprendidas y adquiriendo nuevas habilidades con otras tecnologías.
        </p>
        <div className="flex gap-2 mt-2">
          <button
            className="flex px-2 py-1 bg-[#fff] text-[#000] gap-2 rounded-[.1rem] hover:cursor-pointer font-semibold"
            onClick={() =>
              (window.location.href =
                "mailto:ejemplo@correo.com?subject=Consulta&body=Hola, quisiera más información sobre...")
            }
          >
            <Mail /> Contactar
          </button>

          <a
            className="flex px-2 py-1 text-white w-[8rem] text-[#000] gap-2 rounded-[.1rem] hover:cursor-pointer font-semibold"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink />
            Ver CV
          </a>
        </div>
        <div className="flex gap-3 mt-2">
          <a href="https://github.com/JeronimoCortez" target="_blank">
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/jeronimo-cortez-bab3a8264/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            className="flex"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jeronimofcortez3@gmail.com&su=Hola%20Jeronimo&body=Me%20gustaria%20contactarte."
            target="_blank"
          >
            <img
              className="w-[1.5rem] "
              src="/assets/gmail.svg"
              alt="gmail icon"
            />
          </a>
        </div>
      </div>
      <div className="mt-4 mx:mt-0">
        <div>
          <p className="subtitle font-thin! text-[#38bdf8]!">Actualmente</p>
          <p className="description text-[#fff]!">
            Soy desarrollador fullstack con experiencia en el desarrollo de
            aplicaciones web utilizando el stack MERN. Me interesa la aplicación
            de buenas prácticas de programación, como el desarrollo guiado por
            pruebas (TDD) y la arquitectura clean code. También me desempeño
            como tutor docente en la Tecnicatura Universitaria en Programación
            en la UTN (modalidad a distancia), donde acompaño a estudiantes en
            su formación técnica.
          </p>
        </div>
        <div className="mt-2">
          <p className="subtitle font-thin! text-[#38bdf8]!">Experiencia</p>
          <p className="description text-[#fff]!">
            Desde que comencé a prepararme en 2022 como desarrollador, me he
            enfocado principalmente en formarme, realizando distintos cursos
            para complementar mi tecnicatura en programación. Entre ellos, un
            bootcamp de Egg Cooperation que duró 9 meses y se enfocaba
            principalmente en Java con Spring Boot. Además, realicé un bootcamp
            de Node.js en Codo a Codo, y finalicé mi Tecnicatura Universitaria
            en Programación, habiendo aprobado todas las materias del cursado y
            actualmente en proceso de entrega de mis prácticas profesionales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
