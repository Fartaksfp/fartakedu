import Benefits from "@/components/home/benefits/Benefits";
import Hero from "@/components/home/hero/Hero";

function Home() {
  return (
    <main className="flex flex-col gap-10">
      <section className="h-dvh">
        <Hero />
      </section>
      <section className="mb-20 container flex justify-center mx-auto">
        <Benefits/>
      </section>

    </main>
  );
}

export default Home;
