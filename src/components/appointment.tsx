import { ChevronDownIcon } from "lucide-react";

const Appointment = () => {
  return (
    <section className="appointment section">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left">
          Marque uma consulta ou ligue para:
          <span className="text-fspurple">
            (+55) 88 99999-9999
          </span>
        </h2>

        {/* form */}
        <form className="appointment__form flex flex-col gap-y-5">
          {/* select wrapper */}
          <div className="flex flex-col xl:flex-row gap-5">
            {/* select 1 */}
            <div className="select relative flex items-center hidden">
              {/* icon */}
              <div className="absolute right-4">
                <ChevronDownIcon className="text-[26px] text-fsgray1" />
              </div>

              {/* select */}
              <select className="appearance-none outline-none h-full w-full bg-transparent px-4" >
                <option value="1">Assunto</option>
                <option value="2">Tráfego Pago</option>
                <option value="3">Divulgação</option>
                <option value="4">Vendas</option>
              </select>
            </div>

            {/* select 2 */}
            <div className="select relative flex items-center hidden">
              {/* icon */}
              <div className="absolute right-4">
                <ChevronDownIcon className="text-[26px] text-fsgray1" />
              </div>

              {/* select */}
              <select className="appearance-none outline-none h-full w-full bg-transparent px-4" >
                <option value="1">Select doctor</option>
                <option value="2">Dr. 1</option>
                <option value="3">Dr. 2</option>
                <option value="4">Dr. 3</option>
              </select>
            </div>
          </div>

          {/* input wrapper */}
          <div className="flex flex-col xl:flex-row gap-5">
            <input className="input" type="text" placeholder="Informe seu Nome" />
            <input className="input" type="text" placeholder="Informe seu Número" />
          </div>

          {/* input wrapper */}
          <div className="flex flex-col xl:flex-row gap-5">
            <input className="input" type="text" placeholder="Informe o Assunto" />
            <input className="input" type="text" placeholder="Informe seu Email" />
          </div>

          {/* input wrapper */}
          <div className="flex flex-col xl:flex-row gap-5">
            <input className="input" type="date" />
            <input className="input" type="time" />
          </div>

          {/* btn */}
          <button className="btn btn-lg btn-accent-fs self-start">
            Agende uma Consulta
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;