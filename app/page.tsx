import Benefits from "@/components/home/benefits/Benefits";
import FeaturedCourses from "@/components/home/featuredCourses/FeaturedCourses";
import Hero from "@/components/home/hero/Hero";

function Home() {
  return (
    <main className="flex flex-col gap-10">
      <section className="h-dvh">
        <Hero />
      </section>
      <section className="w-[90%] sm:w-4/5 flex justify-center mx-auto">
        <Benefits/>
      </section>
      <section className="w-[90%] sm:w-4/5 flex justify-center mx-auto">
        <FeaturedCourses/>
      </section>
      <section>
        
      </section>

    </main>
  );
}

export default Home;
