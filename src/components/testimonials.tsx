const Testimonials = () => {
  return (
    <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
      <div className="flex flex-col items-center gap-x-14 xl:flex-row">
        {/* img */}
        <div className="hidden xl:flex">
          <img src="assets/img/testimonials/img.png" alt="" />
        </div>

        {/* slide */}
        <div className="max-w-[98%] xl:max-w-[710px]">
          {/* slider main container */}
          <div className="swiper h-[400px]">
            {/* additional required wrapper */}
            <div className="swiper-wrapper">
              {/* slide 1*/}
              <div className="swiper-slide">
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center xl:text-left">
                    <p className="font-light relative text-[22px] text-fsgray2 leading-[190%] text-center xl:text-left
                                  before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 
                                  before:w-10 before:h-10 before:bg-no-repeat
                                  after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
                                  after:w-10 after:h-10 after:bg-no-repeat mb-7">
                      {/* message */}
                      <span className="mx-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
                        velit beatae molestias dignissimos eius eligendi, odit, ducimus quo
                        nihil quos laudantium quisquam hic ut animi facere consequuntur qui voluptate et?
                      </span>
                    </p>
                    {/* name */}
                    <div className="text-[26px] text-fsgray2 font-semibold">Jams Rodrigo</div>
                    {/* job */}
                    <div className="text-fsgray2 font-medium uppercase tracking-[2.24px]">Customer</div>
                  </div>
                </div>
              </div>
              {/* slide 2*/}
              <div className="swiper-slide">
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center xl:text-left">
                    <p className="font-light relative text-[22px] text-fsgray2 leading-[190%] text-center xl:text-left
                                  before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 
                                  before:w-10 before:h-10 before:bg-no-repeat
                                  after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 
                                  after:w-10 after:h-10 after:bg-no-repeat mb-7">
                      {/* message */}
                      <span className="mx-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
                        velit beatae molestias dignissimos eius eligendi, odit, ducimus quo
                        nihil quos laudantium quisquam hic ut animi facere consequuntur qui voluptate et?
                      </span>
                    </p>
                    {/* name */}
                    <div className="text-[26px] text-fsgray2 font-semibold">Jams Rodrigo</div>
                    {/* job */}
                    <div className="text-fsgray2 font-medium uppercase tracking-[2.24px]">Customer</div>
                  </div>
                </div>
              </div>
            </div>
            {/* swiper pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;