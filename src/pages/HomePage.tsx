import { Hero } from '../components/sections/Hero';
import { PracticeAreas } from '../components/sections/PracticeAreas';
import { WhyUs } from '../components/sections/WhyUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
