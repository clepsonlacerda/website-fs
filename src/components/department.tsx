"use client"

import { useEffect, useState } from "react";

const Department = () => {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle("Gestão de tráfego");
  }, []);

  function handleChangeDepartment(param: string) {
    setTitle(param);
  }

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
              <div className={
                `cursor-pointer hover:text-fsblue2 transition-all ${title === 'Gestão de tráfego' ? 'text-fsblue1 font-semibold' : ''}`
              } onClick={() => handleChangeDepartment('Gestão de tráfego')}>
                Gestão de tráfego
              </div>
              <div className={
                `cursor-pointer hover:text-fsblue2 transition-all ${title === 'Gerenciamento de Redes Sociais' ? 'text-fsblue1 font-semibold' : ''}`
              } onClick={() => handleChangeDepartment('Gerenciamento de Redes Sociais')}>
                Gerenciamento de Redes Sociais
              </div>
              <div className={
                `cursor-pointer hover:text-fsblue2 transition-all ${title === 'Criação de Landing Pages' ? 'text-fsblue1 font-semibold' : ''}`
              } onClick={() => handleChangeDepartment('Criação de Landing Pages')}>
                Criação de Landing Pages
              </div>
              <div className={
                `cursor-pointer hover:text-fsblue2 transition-all ${title === 'Criação de Sites' ? 'text-fsblue1 font-semibold' : ''}`
              } onClick={() => handleChangeDepartment('Criação de Sites')}>
                Criação de Sites
              </div>
            </div>
            <div className="xl:w-[750px]">
              {title === 'Gestão de tráfego' && (
                <>
                  {/* title */}
                  < h2 className="h2 mb-[20px] text-center xl:text-left">
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
                  <a href="#appointment" className="w-[220px] btn btn-lg btn-accent-fs mx-auto xl:mx-0 hidden">
                    Saiba mais
                  </a>
                </>
              )}

              {title === 'Gerenciamento de Redes Sociais' && (
                <>
                  {/* title */}
                  < h2 className="h2 mb-[20px] text-center xl:text-left">
                    Gerenciamento de Redes Sociais
                  </h2>

                  {/* description */}
                  <p className="mb-[30px] font-light text-center xl:text-left">
                    <span className="font-semibold">Como podemos impulsionar o seu negócio:</span> Desenvolvemos uma abordagem estratégica meticulosa para o gerenciamento de redes sociais, com foco em criar conteúdo relevante e envolvente, interagir com a comunidade e segmentar o público-alvo de maneira precisa.
                    <br /><br />
                    <span className="font-semibold">Qual impacto isso traz para o seu empreendimento:</span> O gerenciamento eficaz de redes sociais tem um impacto significativo no crescimento e sucesso do seu negócio. Ao aumentar a presença online da sua marca, geramos tráfego qualificado para suas páginas, o que resulta em maior visibilidade, engajamento do público e, consequentemente, em um aumento nas conversões e vendas.
                  </p>
                  <div className="flex flex-col xl:flex-row items-center xl:justify-between
                                  max-w-[555px] mb-[50px] mx-auto xl:mx-0 hidden">
                    <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                    <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                    <div className="text-fsblue2">Neurocritical Care</div>
                  </div>
                  <a href="#appointment" className="w-[220px] btn btn-lg btn-accent-fs mx-auto xl:mx-0 hidden">
                    Saiba mais
                  </a>
                </>
              )}

              {title === 'Criação de Landing Pages' && (
                <>
                  {/* title */}
                  < h2 className="h2 mb-[20px] text-center xl:text-left">
                    {title}
                  </h2>

                  {/* description */}
                  <p className="mb-[30px] font-light text-center xl:text-left">
                    <span className="font-semibold">Como podemos impulsionar o seu negócio:</span> Nossa abordagem na criação de landing pages é guiada por uma estratégia meticulosa, que através de uma análise detalhada do público-alvo e dos objetivos da campanha, desenvolvemos landing pages com design atraente, conteúdo persuasivo e chamadas para ação claras.
                    <br /><br />
                    <span className="font-semibold">Qual impacto isso traz para o seu empreendimento:</span>  A criação de landing pages eficazes tem um impacto direto no sucesso das suas campanhas de marketing digital. Ao oferecer uma experiência de usuário intuitiva e convincente, as landing pages aumentam significativamente as taxas de conversão, convertendo visitantes em leads ou clientes.
                  </p>
                  <div className="flex flex-col xl:flex-row items-center xl:justify-between
                                  max-w-[555px] mb-[50px] mx-auto xl:mx-0 hidden">
                    <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                    <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                    <div className="text-fsblue2">Neurocritical Care</div>
                  </div>
                  <a href="#appointment" className="w-[220px] btn btn-lg btn-accent-fs mx-auto xl:mx-0 hidden">
                    Saiba mais
                  </a>
                </>
              )}

              {title === 'Criação de Sites' && (
                <>
                  {/* title */}
                  < h2 className="h2 mb-[20px] text-center xl:text-left">
                    {title}
                  </h2>

                  {/* description */}
                  <p className="mb-[30px] font-light text-center xl:text-left">
                    <span className="font-semibold">Como podemos impulsionar o seu negócio:</span> Nossa abordagem na criação de sites é fundamentada em uma estratégia abrangente, que abarca desde a compreensão profunda dos objetivos do seu negócio até a identificação das necessidades específicas do seu público-alvo.
                    <br /><br />
                    <span className="font-semibold">Qual impacto isso traz para o seu empreendimento:</span> A criação de um site profissional e eficaz tem um impacto transformador no sucesso do seu empreendimento. Além de fornecer uma vitrine online para sua marca, um site bem elaborado aumenta a credibilidade, a confiança e a percepção positiva do público em relação ao seu negócio.
                  </p>
                  <div className="flex flex-col xl:flex-row items-center xl:justify-between
                                  max-w-[555px] mb-[50px] mx-auto xl:mx-0 hidden">
                    <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                    <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                    <div className="text-fsblue2">Neurocritical Care</div>
                  </div>
                  <a href="#appointment" className="w-[220px] btn btn-lg btn-accent-fs mx-auto xl:mx-0 hidden">
                    Saiba mais
                  </a>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}

export default Department;