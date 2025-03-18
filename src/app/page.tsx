import Hero from '../components/landingPage/heroSection';
import FeaturedCourses from '../components/landingPage/featuredCourse';
import PricingSection from '../components/landingPage/pricingSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />  
      <FeaturedCourses />
      <PricingSection />
      {children}
    </div>
  );
}
