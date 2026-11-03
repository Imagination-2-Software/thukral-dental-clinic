import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import DoctorSection from '../components/DoctorSection';
import FeaturedSmileSection from '../components/FeaturedSmileSection';
import ReviewsSection from '../components/ReviewsSection';
import WhyThukral from '../components/WhyThukral';
import Gallery from '../components/Gallery';
import SmileSchoolPreview from '../components/SmileSchoolPreview';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBar />
      <AboutSection />
      <DoctorSection />
      <WhyThukral />
      <FeaturedSmileSection />
      <ReviewsSection />
      <SmileSchoolPreview />
      <Gallery />
      <AppointmentForm />
    </div>
  );
};

export default Home;
