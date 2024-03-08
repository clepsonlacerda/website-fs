import Header from "@/components/header";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Appointment from "@/components/appointment";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Stats />

      <Services />

      <Appointment />

      <Testimonials />

      {/* div tem */}
      <div className="h-[4000px]"></div>
    </>
  );
}
