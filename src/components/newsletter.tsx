const Newsletter = () => {
  return (
    <section className="newsletter bg-fsblue2 md:h-[444px] py-12 flex items-center relative overflow-hidden">
      {/* pattern */}
      <div className="absolute left-0 bottom-0">
        <img src="assets/img/newsletter/pattern.svg" alt="" />
      </div>

      {/* container */}
      <div className="newsletter__container container mx-auto" >
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
          {/* text */}
          <div className="flex-1 z-10 text-center md:text-left">
            <div className="text-base uppercase text-fswhite tracking-[2.24px] font-medium">
              Para Mais Informações{/* Our newsletter */}
            </div>

            <h1 className="h1 mb-4 text-fswhite">
              Inscreva-se para receber mais informações
            </h1>
          </div>

          {/* form */}
          <form className="flex-1" >
            <div className="flex flex-col md:flex-row relative gap-y-4">
              <input
                type="text"
                placeholder="Informe seu email"
                className="rounded-full w-full h-[66px] bg-transparent border-2 border-fswhite outline-none pl-[30px]
                          placeholder:text-fswhite focus:text-fswhite"
              />
              <button className="btn btn-lg btn-white md:absolute right-0">
                Se inscreva
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;