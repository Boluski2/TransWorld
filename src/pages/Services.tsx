import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ChevronRight, ChevronLeft, Shield, Camera, Car, Users, Lock, Search } from "lucide-react";
import guardsHeroImage from "@/assets/guards-hero.jpg";
import securityDeviceImage from "@/assets/security-device.jpg";
import guardsGridImage from "@/assets/guards-grid.jpg";
import investigationImage from "@/assets/investigation.jpg";
import securityVehicleImage from "@/assets/security-vehicle.jpg";
import consultancyHandshakeImage from "@/assets/consultancy-handshake.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Security Services",
    "provider": {
      "@type": "Organization",
      "name": "TransWorld Security"
    },
    "areaServed": "Nigeria",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VIP Protection" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Guard Services" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Installation" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Consultancy" }}
      ]
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    "CCTV Cameras",
    "Tracking Devices",
    "Explosives Detectors",
    "Surveillance Equipment",
    "Safety Equipment",
    "Turnstile",
    "Burglar Alarm & Anti Robbery Systems",
    "Automatic Fire Extinguisher",
    "Metal Detectors",
    "Vehicle Barrier",
    "Hand Held Device",
    "Access Control Security"
  ];

  const services = [
    "Guard Service",
    "Background Checks",
    "Alarm/CCTV Service",
    "Criminal Investigations",
    "Escort Service",
    "VIP Bodyguard Service",
    "Security Risk Protection Service",
    "Training Services",
    "Training School of Management & Security"
  ];

  const carouselImages = [
    { src: guardsGridImage, alt: "Professional Guard Services" },
    { src: investigationImage, alt: "Investigation Services" },
    { src: securityVehicleImage, alt: "Security Vehicle Fleet" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Security Services - TransWorld Security | VIP Protection & Guard Services"
        description="Comprehensive security services in Nigeria: VIP protection, armed guards, CCTV installation, security consultancy, K-9 units, and investigation services."
        keywords="VIP protection Nigeria, guard services Lagos, CCTV installation, security consultancy, armed guards, K-9 security"
        canonicalUrl="https://transworldsecurity.com/services"
        structuredData={servicesStructuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={guardsHeroImage} 
            alt="TransWorld Security Guards" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal-dark/40" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our Services & Products
          </h1>
          <p className="text-lg text-white drop-shadow-lg">
            Comprehensive security solutions tailored to your needs
          </p>
        </motion.div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-12 text-center"
          >
            Our Products
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-3">
              {products.map((product, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-lg">{product}</span>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={securityDeviceImage} 
                alt="Security Device" 
                className="rounded-xl shadow-tactical w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guard Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4 text-center"
          >
            Services We Provide
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-primary uppercase">GUARD SERVICES</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are the foremost private security firm in Nigeria with numerous achievements in the security industry. Our guards are well trained and they ensure that your time and assets are protected, we also provide a 3 year warranty on all our state of the art products.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are distributors for most of the reputable security system manufacturers in the world and our installation engineers are all certified professionals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our School of management studies is rated best in security training and committed to professional institutions.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={guardsGridImage} 
                alt="Professional Security Guards" 
                className="rounded-xl shadow-tactical w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List with Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary mb-6 flex items-center gap-2"
              >
                <span className="text-primary text-2xl">✓</span>
                SERVICES
              </motion.h3>
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-lg">{service}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Image Carousel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-tactical">
                <img 
                  src={carouselImages[currentSlide].src} 
                  alt={carouselImages[currentSlide].alt} 
                  className="w-full h-[400px] object-cover transition-all duration-500"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-primary w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Excellence Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Service Excellence Commitment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              At TransWorld Security, we understand that exceptional security goes beyond physical presence. Our comprehensive approach integrates technology, highly trained personnel, and strategic planning to deliver unparalleled protection for your assets, operations, and people.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border-2 border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Regular performance audits and compliance checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Continuous personnel training and skill development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">ISO-compliant operational procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Client feedback integration and service optimization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border-2 border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Rapid Response Protocol</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 emergency response team availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Average response time of under 10 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Direct communication with law enforcement agencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Mobile patrol units strategically positioned</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border-2 border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Technology Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced AI-powered surveillance systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time GPS tracking and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Cloud-based incident management platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Mobile app for client communication</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border-2 border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Compliance & Standards</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Full regulatory compliance and licensing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Comprehensive insurance coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">International security standards adherence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Regular third-party security audits</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultancy Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-12 text-center"
          >
            CONSULTANCY SERVICES
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our <span className="text-primary font-semibold">CONSULTANCY SERVICES</span> include Risk Analysis, Threat Assessments, Security Surveys, Crime Prevention, Crime Analysis, Project Management, Emergency Planning, Regulatory Application.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide comprehensive security consulting services tailored to your organization's specific needs. Our team of experts will conduct thorough assessments and deliver actionable strategies to enhance your security posture.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={consultancyHandshakeImage} 
                alt="Consultancy Services" 
                className="rounded-xl shadow-tactical w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
