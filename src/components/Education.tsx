import { education } from "../utils/education";

const Education = () => {
  return (
    <div id="education" className=" w-[80vw] mx-auto flex flex-col gap-2">
      <p className="subtitle">- Educacion</p>
      <h4 className="title">Trayectoria Academica</h4>
      <div className="flex flex-col gap-4">
        {education.map((e, i) => (
          <div key={i}>
            <p className="text-[#d9d9d966] font-thin">{e.anio}</p>
            <h4 className="title font-semibold!">{e.title}</h4>
            <p className="text-[#38bdf8]! font-semibold">{e.entity}</p>
            <p className="description">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
