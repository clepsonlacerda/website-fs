import { RocketIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero bg-fswhite py-12 xl:pt-12 xl:pb-0 overflow-hidden">
      <div className="container mx-auto h-full">
        {/* text and image */}
        <div className="flex flex-col xl:flex-row items-center justify-between h-full">
          {/* text */}
          <div className="hero__text xl:w-[48%] text-center xl:text-left">
            {/* badge */}
            <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
              {/* badge icon */}
              <RocketIcon className="text-2xl text-fsblue2" />
              <div className="uppercase text-base font-medium text-fsgray3 tracking-[2.24px]">
                Cresça seu negócio
              </div>
            </div>

            {/* title */}
            <h1 className="h1 mb-6">Nós podemos ajudar seu negócio</h1>

            {/* desc */}
            <p className="mb-[42px] md:max-w-xl">
              Somos uma empresa especialista em gerar oportunidades e trazer
              clientes de forma relevante pro seu negócio através do Tráfego pago.
            </p>

            {/* button */}
            <button className="btn btn-lg btn-accent  mx-auto xl:mx-0">
              Entre em Contato
            </button>
          </div>

          {/* image */}
          <div className="hero__img hidden xl:flex max-w-[814px] self-end">
            <img src="/assets/img/hero/img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;