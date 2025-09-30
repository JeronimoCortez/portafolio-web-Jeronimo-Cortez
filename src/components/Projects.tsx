import { ExternalLink, GithubIcon } from "lucide-react";
import { proyects } from "../utils/proyects";

const Projects = () => {
  return (
    <div className="max-w-[80vw] mx-auto flex flex-col gap-3 mt-5">
      <p className="description">- Proyectos</p>
      <h4 className="title">Proyectos destacados</h4>
      <div className="flex flex-wrap justify-center gap-2">
        {proyects.map((p, i) => (
          <div
            key={i}
            className="border border-[#d9d9d930] hover:border-[#38bdf8] max-w-[350px] flex flex-col gap-2 p-3 transition-colors "
          >
            <img src={`${p.imageURL}`} alt={p.name} className="rounded" />
            <div>
              <h4>{p.name}</h4>
              <p className="description font-thin! mb-2">{p.description}</p>
              <div className="flex flex-wrap gap-2 ">
                {p.technologies.map((t, i) => (
                  <div
                    key={i}
                    className="border border-[#d9d9d915] p-2 bg-[#d9d9d910]"
                  >
                    <p className="text-xs">{t.toString()}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {p.github.map((g, i) => (
                  <div
                    key={i}
                    className="flex border border-[#d9d9d915] max-w-[100px] px-2 py-1 rounded"
                  >
                    <a
                      className="flex gap-2"
                      href={g.toString()}
                      target="_blank"
                    >
                      Github <GithubIcon />
                    </a>
                  </div>
                ))}
              </div>

              {p.demo && (
                <div>
                  <a href={p.demo}>
                    Demo <ExternalLink />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
