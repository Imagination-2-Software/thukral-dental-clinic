import { Link } from 'react-router-dom';

const FeaturedSmileSection = () => {
  return (
    <section className="bg-primary text-background py-24 md:py-32 relative overflow-hidden">
      {/* Watermark Logo Emblem in Light Shade */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/zvlxacfu/image/upload/v1793692667/202091-removebg-preview.png"
          alt="Thukral Clinic Emblem Watermark"
          className="w-[340px] sm:w-[460px] md:w-[560px] lg:w-[640px] max-w-[85vw] h-auto object-contain opacity-[0.08] brightness-0 invert select-none pointer-events-none"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-tight max-w-4xl mx-auto">
          A Smile Designed Around You.
        </h2>
        <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          From teeth whitening and aligners to personalised smile-focused care, explore treatment options designed around your individual needs.
        </p>
        <Link to="/treatments" className="btn-secondary border-background text-background hover:bg-background hover:text-primary transition-colors bg-transparent px-8 py-4 text-sm tracking-widest uppercase inline-block">
          Explore Smile Treatments
        </Link>
      </div>
    </section>
  );
};

export default FeaturedSmileSection;
