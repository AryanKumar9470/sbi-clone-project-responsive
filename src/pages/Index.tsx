
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import RegistrationBanner from "@/components/RegistrationBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HomeHero />
        <FeaturesSection />
        <NewsSection />
        <RegistrationBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
