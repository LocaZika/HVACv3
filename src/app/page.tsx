import { Features, Hero, Services, Car, ChooseUs, Cta } from "@/components";

export default async function Home() {
  const getHomepage = await fetch(`${process.env.DATABASE_HOST}/homepage`);
  const homepage: THomepage = await getHomepage.json();
  return (
    <main>
      <Hero data={homepage.hero} />
      <Services data={homepage.services} />
      <Features data={homepage.features} />
      <Car data={homepage.car} />
      <ChooseUs data={homepage.chooseUs} />
      <Cta data={homepage.cta} />
    </main>
  );
}
