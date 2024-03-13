import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

const Team = () => {
  return (
    <section className="team section">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
          Nosso time
        </h2>
        {/* slide */}
        <div className="team__slider swiper min-h-[400px]">
          {/* additional required wrapper */}
          <div className="swiper-wrapper">
            {/* slide 1*/}
            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row gap-9">
                {/* item */}
                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    {/* img */}
                    <div className="flex-1">
                      <img src="assets/img/team/doctor-1.png" alt="" />
                    </div>
                    {/* info */}
                    <div className="flex-1 flex flex-col">
                      {/* name */}
                      <h4 className="h4 mb-[10px]">Clepson Lacerda</h4>
                      {/* job */}
                      <div className="font-medium uppercase tracking-[2.24px] text-fsgray3 mb-[20px]">
                        Desenvolvedor
                      </div>
                      {/* desc */}
                      <p className="font-light mb-[26px] max-w-[320px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime facilis accusantium ab?
                      </p>
                      {/* socials */}
                      <div className="flex items-center text-[30px] gap-x-5 text-fspurple/80">
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <YoutubeIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <FacebookIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <InstagramIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <LinkedinIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* item */}
                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    {/* img */}
                    <div className="flex-1">
                      <img src="assets/img/team/doctor-1.png" alt="" />
                    </div>
                    {/* info */}
                    <div className="flex-1 flex flex-col">
                      {/* name */}
                      <h4 className="h4 mb-[10px]">Wesley Saraiva</h4>
                      {/* job */}
                      <div className="font-medium uppercase tracking-[2.24px] text-fsgray3 mb-[20px]">
                        CEO e Gestor de tráfego
                      </div>
                      {/* desc */}
                      <p className="font-light mb-[26px] max-w-[320px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime facilis accusantium ab?
                      </p>
                      {/* socials */}
                      <div className="flex items-center text-[30px] gap-x-5 text-fspurple/80">
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <YoutubeIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <FacebookIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <InstagramIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <LinkedinIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* slide 2*/}
            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row gap-9">
                {/* item */}
                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    {/* img */}
                    <div className="flex-1">
                      <img src="assets/img/team/doctor-1.png" alt="" />
                    </div>
                    {/* info */}
                    <div className="flex-1 flex flex-col">
                      {/* name */}
                      <h4 className="h4 mb-[10px]">Saullo Araújo</h4>
                      {/* job */}
                      <div className="font-medium uppercase tracking-[2.24px] text-fsgray3 mb-[20px]">
                        Consultor
                      </div>
                      {/* desc */}
                      <p className="font-light mb-[26px] max-w-[320px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime facilis accusantium ab?
                      </p>
                      {/* socials */}
                      <div className="flex items-center text-[30px] gap-x-5 text-fspurple/80">
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <YoutubeIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <FacebookIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <InstagramIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <LinkedinIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* item */}
                <div className="flex-1 flex flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                    {/* img */}
                    <div className="flex-1">
                      <img src="assets/img/team/doctor-1.png" alt="" />
                    </div>
                    {/* info */}
                    <div className="flex-1 flex flex-col">
                      {/* name */}
                      <h4 className="h4 mb-[10px]">Gabriel Alcântara</h4>
                      {/* job */}
                      <div className="font-medium uppercase tracking-[2.24px] text-fsgray3 mb-[20px]">
                        Designer e Gestor de tráfego
                      </div>
                      {/* desc */}
                      <p className="font-light mb-[26px] max-w-[320px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime facilis accusantium ab?
                      </p>
                      {/* socials */}
                      <div className="flex items-center text-[30px] gap-x-5 text-fspurple/80">
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <YoutubeIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <FacebookIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <InstagramIcon />
                        </a>
                        <a href="#" className="cursor-pointer hover:text-fspurple transition-all">
                          <LinkedinIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* swiper pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Team;