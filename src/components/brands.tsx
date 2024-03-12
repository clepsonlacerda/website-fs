/* eslint-disable @next/next/no-img-element */
const Brands = () => {
  return (
    <section className="brands section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center">
          <img
            className="brands__logo"
            src="assets/img/brands/brand-1.svg"
            alt=""
          />
          <img
            className="brands__logo"
            src="assets/img/brands/brand-2.svg"
            alt=""
          />
          <img
            className="brands__logo"
            src="assets/img/brands/brand-3.svg"
            alt=""
          />
          <img
            className="brands__logo"
            src="assets/img/brands/brand-4.svg"
            alt=""
          />
          <img
            className="brands__logo"
            src="assets/img/brands/brand-5.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Brands;