import Header from "@/components/header";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Appointment from "@/components/appointment";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import Faq from "@/components/faq";
import Department from "@/components/department";
import Blog from "@/components/blog";
import Brands from "@/components/brands";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Stats />

      <Services />

      <Appointment />

      <Testimonials />

      <Team />

      <Faq />

      <Department />

      <Blog />

      <Brands />

      {/* div tem */}
      <div className="h-[4000px]"></div>
    </>
  );
}
