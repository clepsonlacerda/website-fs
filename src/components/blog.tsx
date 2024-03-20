/* eslint-disable @next/next/no-img-element */
const Blog = () => {
  return (
    <section className="blog">
      <div className="container mx-auto">
        <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
          Nosso blog
        </h2>
        {/* blog post */}
        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
          {/* post 1 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500 h-[286px]"
                src="assets/img/blog/img-4.png"
                alt=""
              />
              {/* badge */}
              <div className="bg-fspurple absolute bottom-0 left-0 text-fswhite 
                              text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]" >
                Tráfego
              </div>
            </div>

            {/* text */}
            <div className="px-5 py-6">
              {/* date */}
              <div className="mb-4">2 de Jan, 2024</div>
              {/* title */}
              <h4 className="h4 mb-[10px]">
                10 Motivos para usar Tráfego Pago
              </h4>
              {/* description */}
              <p className="font-light">
                Descubra as 10 razões convincentes pelas quais investir em tráfego pago pode impulsionar exponencialmente...

                <a href="#" className="italic underline text-fsgray2">Leia mais</a>
              </p>
            </div>
          </div>
          {/* post 2 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500 h-[286px]"
                src="assets/img/blog/img-5.png"
                alt=""
              />
              {/* badge */}
              <div className="bg-fspurple absolute bottom-0 left-0 text-fswhite 
                              text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]" >
                Sites
              </div>
            </div>

            {/* text */}
            <div className="px-5 py-6">
              {/* date */}
              <div className="mb-4">Fev 15, 2024</div>
              {/* title */}
              <h4 className="h4 mb-[10px]">
                O porquê é essencial ter uma Landing Page
              </h4>
              {/* description */}
              <p className="font-light">
                Explore a importância vital de ter uma landing page eficaz e como ela pode ser a chave para converter visitantes...

                <a href="#" className="italic underline text-fsgray2">Read more</a>
              </p>
            </div>
          </div>
          {/* post 3 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500 h-[286px]"
                src="assets/img/blog/img-6.png"
                alt=""
              />
              {/* badge */}
              <div className="bg-fspurple absolute bottom-0 left-0 text-fswhite 
                              text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]" >
                Marketing
              </div>
            </div>

            {/* text */}
            <div className="px-5 py-6">
              {/* date */}
              <div className="mb-4">Mar 7, 2024</div>
              {/* title */}
              <h4 className="h4 mb-[10px]">
                Como o Marketing pode aumentar suas vendas
              </h4>
              {/* description */}
              <p className="font-light">
                Descubra como estratégias de marketing inteligentes e direcionadas podem impulsionar suas vendas, expandir sua base...

                <a href="#" className="italic underline text-fsgray2">Read more</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;