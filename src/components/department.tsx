const Department = () => {
  return (
    <section className="departments section">
      <div className="departments__bg bg-departments bg-cover xl:bg-auto bg-center
                      bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12
                      xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center">
        <div className="departments__container container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-5">
            <div className="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px]
                            font-medium uppercase text-center xl:text-left text-base text-fsgray3
                            xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0">
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Gestão de tráfego
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Gerenciamento de Redes Sociais
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Criação de Landing Pages
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Criação de Sites
              </div>
            </div>
            <div className="xl:w-[640px]">
              {/* title */}
              <h2 className="h2 mb-[20px] text-center xl:text-left">
                Gestão de tráfego
              </h2>

              {/* description */}
              <p className="mb-[30px] font-light text-center xl:text-left">
                <span className="font-semibold">Como podemos impulsionar o seu negócio:</span> Estratégia meticulosa, planejamento detalhado e execução precisa de campanhas pagas nas principais plataformas online para atrair uma audiência qualificada e aumentar a base de clientes.
                <br /><br />
                <span className="font-semibold">Qual impacto isso traz para o seu empreendimento:</span> A gestão do tráfego pago tem um impacto direto no aumento do tráfego qualificado para o seu site, o que resulta em maior reconhecimento da marca, geração de leads qualificados e um impulso nas vendas, contribuindo significativamente para o crescimento e sucesso do seu negócio online.
              </p>
              <div className="flex flex-col xl:flex-row items-center xl:justify-between
                              max-w-[555px] mb-[50px] mx-auto xl:mx-0 hidden">
                <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                <div className="text-fsblue2">Neurocritical Care</div>
              </div>
              <a href="#appointment" className="w-[220px] btn btn-lg btn-accent-fs mx-auto xl:mx-0">
                Saiba mais
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Department;