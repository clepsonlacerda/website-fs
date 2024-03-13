const Stats = () => {
  return (
    <section className="stats section">
      <div className="container mx-auto">
        {/* wrapper */}
        <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
          {/* item */}
          <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-fspurple xl:mb-2">+5120</div>
            <div>Clientes felizes</div>
          </div>
          {/* item */}
          <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-fspurple xl:mb-2">+5120</div>
            <div>Clientes felizes</div>
          </div>
          {/* item */}
          <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-fspurple xl:mb-2">+5120</div>
            <div>Clientes felizes</div>
          </div>
          {/* item */}
          <div className="stats__item flex-1 flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-fspurple xl:mb-2">+5120</div>
            <div>Clientes felizes</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;