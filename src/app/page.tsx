import Hero from '../components/landingpage/heroSection';
import FeaturedCourses from '../components/landingpage/featuredCourse';
import PricingSection from '../components/landingpage/pricingSection';
import AboutSection from '../components/landingpage/aboutSection'
import TestimonialSection from '../components/landingpage/testimonialSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />  
      <FeaturedCourses />
      <PricingSection />
      <AboutSection/>
      <TestimonialSection/>
      {children}
    </div>
  );
}
