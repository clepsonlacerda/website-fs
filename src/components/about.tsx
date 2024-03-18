const About = () => {
  return (
    <section
      className="about section bg-about bg-cover bg-right bg-no-repeat py-12 xl:min-h-[500px] xl:py-0 mb-[0px] mt-[100px] 
                 xl:pt-[70px] ls:bg-red-700"
      id="about"
    >
      <div className="container mx-auto">
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* text */}
          <div className="flex-1 z-10 text-center items-center justify-center md:text-left">
            <h2 className="team__title h2 text-fswhite mb-[30px] text-center xl:text-left">
              Sobre Nós
            </h2>

            <p className="text-[22px] text-fswhite lg:w-[550px]">
              Somos uma empresa especialista em gerar oportunidades e trazer
              clientes de forma relevante pro
              seu negócio através do Tráfego pago.
              Utilizamos as mais avançadas ferramentas e técnicas de marketing digital para direcionar o tráfego qualificado para o seu ramo, aumentando sua visibilidade e impulsionando suas vendas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;