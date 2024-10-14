import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Insights from "@/components/Insights";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

const HomePage: React.FC = () => {
    return (
      <div>
        <HeroSection />
        <Services />
        <Insights />
        <Statistics />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </div>
    );
  };

  export default HomePage;