import Hero from '../components/landingpage/heroSection';
import FeaturedCourses from '../components/landingpage/featuredCourse';
import PricingSection from '../components/landingpage/pricingSection';
import AboutSection from '../components/landingpage/aboutSection'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />  
      <FeaturedCourses />
      <PricingSection />
      <AboutSection/>
      {children}
    </div>
  );
}
