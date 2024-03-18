import { PlusIcon } from "lucide-react";

const Faq = () => {
  return (
    <section className="faq mt-[100px]">
      {/* site de inspiração: https://beginmkt.com.br/pilares-trafego-pago/ */}
      <div className="container mx-auto">
        <h2 className="faq__title h2 text-center mb-[50px]">Nós temos respostas</h2>
        {/* item wrapper */}
        <div className="max-w-5xl mx-auto">
          {/* item */}
          <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">Qual é o seu objetivo com o tráfego pago?</h4>
              <div className="faq__btn text-fsblue2">
                <i className="ri-add-line text-2xl"></i>
              </div>
            </div>
            {/* answer text */}
            <div className="faq__asnwer h-0 overflow-hidden">
              <p className="font-light">
                Para responder essa pergunta é necessária uma análise minuciosa do seu negócio online. Precisa-se avaliar histórico de ações já feitas, ferramentas disponíveis e necessidades urgentes. É importante direcionar o orçamento e ações para o que, de fato, gera retorno para o seu negócio. Infelizmente, likes não pagam contas, compradores sim.
              </p>
            </div>
          </div>

          {/* item */}
          <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">Quanto investir?</h4>
              <div className="faq__btn text-fsblue2">
                <i className="ri-add-line text-2xl"></i>
              </div>
            </div>
            {/* answer text */}
            <div className="faq__asnwer h-0 overflow-hidden">
              <p className="font-light">
                É necessário ter, pelo menos, uma média de investimento. Assim, tendo os objetivos claros, mais o investimento aceitável, é possível construir um plano de ações para alcançar os resultados. Talvez, o gestor de tráfego irá prolongar um pouco mais o plano se o orçamento for pequeno, mas tudo é uma questão de organização e planejamento. Vale lembrar que, em tráfego pago, a recorrência é melhor do que intensidade em muitos casos.
              </p>
            </div>
          </div>

          {/* item */}
          <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">Qual estratégia usar?</h4>
              <div className="faq__btn text-fsblue2">
                <i className="ri-add-line text-2xl"></i>
              </div>
            </div>
            {/* answer text */}
            <div className="faq__asnwer h-0 overflow-hidden">
              <p className="font-light">
                Existem várias: conteúdo, inbound, remarketing, venda, posicionamento e outras tantas. Nesse estágio, várias perguntas já foram respondidas e por isso, talvez, seja mais prático de descobrir. Mas, de forma geral: reveja suas potencialidades e seus diferenciais para explorar da melhor forma a estratégia matadora.
              </p>
            </div>
          </div>

          {/* item */}
          <div className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">Em quais plataformas investir?</h4>
              <div className="faq__btn text-fsblue2">
                <i className="ri-add-line text-2xl"></i>
              </div>
            </div>
            {/* answer text */}
            <div className="faq__asnwer h-0 overflow-hidden">
              <p className="font-light">
                Escolher em qual plataforma investir depende de vários fatores: a maturidade do seu negócio, do desenvolvimento online da sua empresa e até das características dos seus produtos. Hoje, as mais utilizadas são Facebook / Instagram Ads e Google Ads, mas temos Youtube Ads, Linkedin Ads, entre outras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;