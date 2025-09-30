import { education } from "../utils/education";
import { technologies } from "../utils/technologies";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="p-4 w-[80vw] mx-auto flex flex-col md:grid md:grid-cols-2 gap-4"
    >
      <div className="flex flex-col gap-4">
        <p className="subtitle">- SOBRE MÍ</p>
        <h3 className="title">Construyendo el futuro digital</h3>
        <p className="text-[#d9d9d966]">
          Soy un desarrollador apasionado por construir aplicaciones web
          modernas y accesibles, con un enfoque en combinar un diseño claro con
          una ingeniería sólida. Disfruto especialmente cuando puedo unir la
          parte visual con la lógica de programación.
        </p>
        <p className="text-[#d9d9d966]">
          Actualmente estoy finalizando la Tecnicatura Universitaria en
          Programación en la UTN Mendoza y he complementado mi formación con un
          bootcamp de Java con Spring y un curso de desarrollo web. Mi objetivo
          es dar mis primeros pasos profesionales como programador junior y
          seguir creciendo dentro del área de desarrollo de software.
        </p>
      </div>
      <div className="mt-2 md:mt-0 flex flex-col">
        <h4 className="title mb-2">Tecnologías que uso</h4>
        <div className="grid grid-cols-2 gap-2 ">
          {technologies.map((t, i) => (
            <div
              key={i}
              className="max-w-[300px] text-[14px] bg-[#d9d9d9]/5 p-2 rounded flex items-center"
            >
              <p>{t}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="title mt-2">Resumen formación academica</h4>
          {education.map((e, i) => (
            <div key={i}>
              <p>{e.anio}</p>
              <p className="text-[#d9d9d966]">{e.entity}</p>
              <p className="text-[#d9d9d966]">{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
