import { About, Breadcrumb, Client, Counter, RequestCallback, Team, Testimonial } from '@/components';
import { getData } from '@/utils';

export default async function page() {
  const aboutpage: TAboutpage = await getData('/aboutpage');
  const about: TAbout = {
    title: aboutpage.title,
    text: aboutpage.text,
    img: aboutpage.img,
    items: aboutpage.items,
    features: aboutpage.features,
  };
  return (
    <>
      <Breadcrumb title='about us' />
      <About data={about} />
      <RequestCallback />
      <Team data={aboutpage.teams} />
      <Testimonial data={aboutpage.testimonials} />
      <Counter data={aboutpage.quantities}/>
      <Client data={aboutpage.clients} />
    </>
  )
}
