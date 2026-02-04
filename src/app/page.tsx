import BackgroundFX from "@/components/site/BackgroundFX";
import PageReveal from "@/components/site/PageReveal";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Process from "@/components/site/Process";
import Coverage from "@/components/site/Coverage";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Page() {
  return (
    <>
      <BackgroundFX />
      <Navbar />

      {/* fixed navbar spacing */}
      <main className="pt-[72px] sm:pt-[80px]">
        <PageReveal>
          <Hero />
          <Services />
          <WhyUs />
          <Process />
          <Coverage />
          <Testimonials />
          <Contact />
        </PageReveal>
      </main>

      <Footer />
    </>
  );
}
