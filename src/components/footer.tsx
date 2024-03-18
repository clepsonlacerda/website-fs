/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer className="footer pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          {/* footer contact section */}
          <div className="footer__item flex-1">
            {/* logo */}
            <a href="">
              <img className="mb-[30px]" src="assets/img/header/logo-fs.png" alt="" />
            </a>
            {/* description */}
            <p className="mb-[20px]">
              Nosso compromisso é oferecer estratégias de tráfego pago eficazes e de fácil utilização.
            </p>
            {/* location, email & phone */}
            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <i className="ri-map-pin-fill text-[24px] text-fsblue2"></i>
                <div>123 Conceição, Brejo-Santo, CE</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <i className="ri-mail-fill text-[24px] text-fsblue2"></i>
                <div>fabricadesolucoes@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <i className="ri-phone-fill text-[24px] text-fsblue2"></i>
                <div>(88) 99658-9145</div>
              </div>
            </div>
            {/* socials */}
            <div className="flex gap-[14px] text-[30px]">
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-fsblue2/85
                              hover:text-fsblue2 cursor-pointer transition-all">
                <i className="ri-facebook-circle-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-fsblue2/85
                              hover:text-fsblue2 cursor-pointer transition-all">
                <i className="ri-instagram-line"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-fsblue2/85
                              hover:text-fsblue2 cursor-pointer transition-all">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-fsblue2/85
                              hover:text-fsblue2 cursor-pointer transition-all">
                <i className="ri-linkedin-box-fill"></i>
              </div>
            </div>
          </div>

          {/* footer quick links section */}
          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Links Rápidos</h4>
            <div className="flex gap-x-5">
              {/* list 1 */}
              <ul className="flex-1 flex flex-col gap-y-5">
                <li><a href="#header" className="hover:text-fsblue2 transition-all">Inicio</a></li>
                <li><a href="#appointment" className="hover:text-fsblue2 transition-all">Contato</a></li>
                <li><a href="#services" className="hover:text-fsblue2 transition-all">Serviços</a></li>
                <li><a href="#" className="hover:text-fsblue2 transition-all">Sobre</a></li>
              </ul>

              {/* list 2 */}
              <ul className="flex-1 flex flex-col gap-y-5">
                <li><a href="#appointment" className="hover:text-fsblue2 transition-all">Nossos Preços</a></li>
                <li><a href="#" className="hover:text-fsblue2 transition-all">Blog</a></li>
                <li><a href="#" className="hover:text-fsblue2 transition-all">Dúvidas</a></li>
                <li><a href="#" className="hover:text-fsblue2 transition-all">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>

          {/* footer opening hours section */}
          <div className="footer__item flex-1 hi">
            <h4 className="h4 mb-5">Alguns assuntos</h4>

            {/* list */}
            <div className="flex flex-col gap-5">
              {/* item1 */}
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>#TrafegoPago</div>
                  <div className="text-fsblue2 font-medium">O que é Tráfego Pago?</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>#TrafegoPago</div>
                  <div className="text-fsblue2 font-medium">Tráfego Orgânico ou Pago?</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>#Site</div>
                  <div className="text-fsblue2 font-medium">Por que ter uma Landing Page?</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>#Site</div>
                  <div className="text-fsblue2 font-medium">A importância de um site</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* copyright */}
      < div className="py-[30px] border-t" >
        <div className="container mx-auto text-center">
          <div className="font-light text-base">
            &copy; 2024 Fabrica de Soluções - Todo os direitos reservados.
          </div>
        </div>
      </div >
    </footer >
  );
}

export default Footer;