const Header = () => {
  return (
    <div className="h-[56px] bg-transparent w-full bg-[#000] border-b-[.5px] border-[#d9d9d9]/30 flex items-center sm:justify-around">
      <p className="text-[#bdbdbd] font-bold font-mono m-4 sm:m-0">
        {"<dev />"}
      </p>
      <nav className="hidden sm:block text-white">
        <ul className="flex gap-4">
          <li className="item-nav --selected">
            <a href="#home">Inicio</a>
          </li>
          <li className="item-nav">
            <a href="#about-me">Sobre mi</a>
          </li>
          <li className="item-nav">
            <a href="#education">Educacion</a>
          </li>
          <li className="item-nav">
            <a href="#proyects">Proyectos</a>
          </li>
          <li className="item-nav">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
