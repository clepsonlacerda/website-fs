const Services = () => {
  return (
    <section className="services" id="services">
      {/* bg */}
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto 
                      rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          {/* text */}
          <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
              Nossos melhores serviços para sua solução
            </h2>
            <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate non ex rem molestiae ut, est qui accusantium, nam id nisi inventore,
              totam facere tenetur autem. Accusantium impedit animi doloribus maiores.
            </p>
          </div>
        </div>
      </div>

      {/* grid container */}
      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        {/* grid */}
        <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
          {/* grid item */}
          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2
                          min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-1.svg" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Impulsionar posts</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, impedit.
            </p>
          </div>

          {/* grid item */}
          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2
                          min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-2.svg" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Impulsionar posts</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, impedit.
            </p>
          </div>

          {/* grid item */}
          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2
                          min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-3.svg" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Impulsionar posts</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, impedit.
            </p>
          </div>

          {/* grid item */}
          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2
                          min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-4.svg" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Impulsionar posts</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;