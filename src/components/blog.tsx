const Blog = () => {
  return (
    <section className="blog">
      <div className="container mx-auto">
        <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
          our blog
        </h2>
        {/* blog post */}
        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
          {/* post 1 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src="assets/img/blog/img-1.png"
                alt=""
              />
              {/* badge */}
              <div className="bg-fsblue2 absolute bottom-0 left-0 text-fswhite 
                              text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]" >
                Medical
              </div>
            </div>

            {/* text */}
            <div className="px-5 py-6">
              {/* date */}
              <div className="mb-4">Jan 2, 2023</div>
              {/* title */}
              <h4 className="h4 mb-[10px]">
                10 foods to avoid  for your heart health
              </h4>
              {/* description */}
              <p className="font-light">
                Its normal to feel anxiety, warry and grief any time you are diagnosed with a condition that is cenrtainly true...

                <a href="#" className="italic underline text-fsgray2">Read more</a>
              </p>
            </div>
          </div>
          {/* post 2 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src="assets/img/blog/img-2.png"
                alt=""
              />
              {/* badge */}
              <div className="bg-fsblue2 absolute bottom-0 left-0 text-fswhite 
                              text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]" >
                Medical
              </div>
            </div>

            {/* text */}
            <div className="px-5 py-6">
              {/* date */}
              <div className="mb-4">Jan 2, 2023</div>
              {/* title */}
              <h4 className="h4 mb-[10px]">
                10 foods to avoid  for your heart health
              </h4>
              {/* description */}
              <p className="font-light">
                Its normal to feel anxiety, warry and grief any time you are diagnosed with a condition that is cenrtainly true...

                <a href="#" className="italic underline text-fsgray2">Read more</a>
              </p>
            </div>
          </div>
          {/* post 3 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src="assets/img/blog/img-3.png"
                alt=""
              />
              {/* badge */}
              <div className="bg-fsblue2 absolute bottom-0 left-0 text-fswhite 
                              text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]" >
                Medical
              </div>
            </div>

            {/* text */}
            <div className="px-5 py-6">
              {/* date */}
              <div className="mb-4">Jan 2, 2023</div>
              {/* title */}
              <h4 className="h4 mb-[10px]">
                10 foods to avoid  for your heart health
              </h4>
              {/* description */}
              <p className="font-light">
                Its normal to feel anxiety, warry and grief any time you are diagnosed with a condition that is cenrtainly true...

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