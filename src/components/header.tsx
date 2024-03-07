import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, PhoneIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 lg:pt-6 lg:pb-14 bg-fsgray2">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-4 lg:gap-y-0">
        {/* logo */}
        <div className="flex justify-center lg:justify-normal">
          <a href="#">
            <Image src="/assets/img/header/logo-fs.png" alt="Logo" width={80} height={62} priority />
          </a>
        </div>

        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          {/* location */}
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <MapPinIcon className="text-2xl text-fspurple" />
            <div className="text-fsgray3">123 Arling, Miola, NY</div>
          </div>

          {/* fone */}
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <PhoneIcon className="text-2xl text-fspurple" />
            <div className="text-fsgray3">(+55) 88 99999-9999</div>
          </div>

          {/* btn */}
          <button className="btn btn-sm btn-outline-fs w-[240px] lg:w-auto mx-auto lg:mx-0">
            book now
          </button>

          {/* mobile nav */}
          <nav className="mnav bg-fsdark3 fixed w-[300px] top-0 h-screen -left-[300px] 
                          shadow-2xl lg:hidden transition-all duration-300 z-20">
            {/* nav trigger btn */}
            <div className="mnav__close-btn bg-fsblue2 w-8 h-8 relative -right-full top-8 
            flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
              <ChevronLeftIcon className="mnav__close-btn-icon ri-arrow-left-s-line text-2xl text-fswhite hidden" />
              <ChevronRightIcon className="mnav__close-btn-icon ri-arrow-right-s-line text-2xl text-fswhite" />
            </div>

            {/* logo, list form */}
            <div className="px-12 flex flex-col gap-y-12 h-full">
              {/* logo */}
              <a href="#">
                <Image src="/assets/img/header/logo-fs.png" alt="Logo" width={60} height={62} priority />
              </a>

              {/* list */}
              <ul className="flex flex-col gap-y-5">
                <li>
                  <a href="#" className="text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                    Contato
                  </a>
                </li>                <li>
                  <a href="#" className="text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                    Sobre
                  </a>
                </li>
              </ul>

              {/* form */}
              <form className="relative flex gap-x-[10px]">
                <label htmlFor="mnav-search-input">
                  <SearchIcon className="text-2xl text-fsblue2" />
                </label>
                <input
                  type="text"
                  id="mnav-search-input"
                  placeholder="Pesquise..."
                  className="outline-none bg-fsdark1 w-[160px] border-b-2 focus:border-b-2 border-fsgray3 focus:border-fsblue2 placeholder:italic"
                />
              </form>
            </div>
          </nav>

          {/* desktop nav */}
          <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 
                            rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
            {/* list */}
            <ul className="flex gap-x-4">
              <li>
                <a href="#" className="border-r pr-4 text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="border-r pr-4 text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="border-r pr-4 text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                  Contato
                </a>
              </li>                <li>
                <a href="#" className="text-fsgray3 hover:text-fsblue2 transition-all duration-300">
                  Sobre
                </a>
              </li>
            </ul>

            {/* form */}
            <form className="relative flex gap-x-[10px]">
              <label htmlFor="search-input" className="flex justify-center items-center group">
                <SearchIcon className="text-2xl text-fsblue2" />
              </label>
              <input
                type="text"
                id="search-input"
                placeholder="Pesquise..."
                className="outline-none w-[100px] focus:w-[180px] focus:border-b-2
                focus:border-fsblue2 placeholder:italic placeholder:text-base transition-all duration-150"
              />
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;