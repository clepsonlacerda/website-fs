const Department = () => {
  return (
    <section className="departments section">
      <div className="departments__bg1 bg-departments bg-cover xl:bg-auto bg-center
                      bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12
                      xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center">
        <div className="departments__container container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-5">
            <div className="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px]
                            font-medium uppercase text-center xl:text-left text-base text-fsgray3
                            xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0">
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Laboratory Analysis
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Laboratory Analysis
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Laboratory Analysis
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Laboratory Analysis
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Laboratory Analysis
              </div>
              <div className="cursor-pointer hover:text-fsblue2 transition-all">
                Laboratory Analysis
              </div>
            </div>
            <div className="xl:w-[640px]">
              {/* title */}
              <h2 className="h2 mb-[20px] text-center xl:text-left">
                Cardiology Clinic
              </h2>

              {/* description */}
              <p className="mb-[30px] font-light text-center xl:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta recusandae eaque qui adipisci velit amet iure natus eum commodi magnam totam, animi quos laudantium! Distinctio quia aspernatur cupiditate reprehenderit.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem iure nobis, architecto voluptatem quas esse, cupiditate suscipit iste voluptate atque culpa veritatis omnis. Blanditiis rem voluptates sunt temporibus quis.
              </p>
              <div className="flex flex-col xl:flex-row items-center xl:justify-between
                              max-w-[555px] mb-[50px] mx-auto xl:mx-0">
                <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                <div className="text-fsblue2 xl:border-r border-fsgray3 xl:pr-6">Neurocritical Care</div>
                <div className="text-fsblue2">Neurocritical Care</div>
              </div>
              <button className="btn btn-lg btn-accent-fs mx-auto xl:mx-0">
                Learn more
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Department;