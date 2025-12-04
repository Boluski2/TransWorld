import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import { Shield, Target, Users, Camera, ChevronRight, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-security.jpg";
import guardsHero from "@/assets/guards-hero.jpg";
import tacticalTraining from "@/assets/tactical-training.jpg";
import controlRoomImage from "@/assets/control-room.jpg";
import k9Image from "@/assets/k9-unit.jpg";

const Index = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TransWorld Security - Elite Protection & Security Solutions",
    "description": "Premier security services in Lagos, Nigeria. VIP protection, guard services, CCTV installation, and security consultancy.",
    "url": "https://transworldsecurity.com/",
    "mainEntity": {
      "@type": "SecurityService",
      "name": "TransWorld Security",
      "serviceType": ["VIP Protection", "Guard Services", "CCTV Installation", "Security Consultancy"],
      "areaServed": "Nigeria"
    }
  };
  const heroImages = [heroImage, guardsHero, tacticalTraining, controlRoomImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="TransWorld Security - Elite Protection & Security Solutions in Nigeria"
        description="Premier security services in Lagos, Nigeria. VIP protection, guard services, CCTV installation, security consultancy, and professional training for 30+ years."
        keywords="security company Nigeria, private security Lagos, VIP protection, guard services, CCTV installation, security consultancy"
        canonicalUrl="https://transworldsecurity.com/"
        structuredData={homeStructuredData}
      />
      <Navigation />
      
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        
        <div className="absolute inset-0 bg-charcoal-dark/30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
             We are the foremost asset protection firm in West Africa
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
             Deploy the most appropriate threat deterrents to ensure client’s assets are protected
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-charcoal-dark text-lg px-8 py-6 shadow-xl"
                onClick={() => window.location.href = '/contact'}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImageIndex === index ? 'bg-primary w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <p className="text-xl font-semibold text-foreground mb-2">
              We Are Qualified & Professional
            </p>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              The corporate mission of Trans-World Security is to make the world a safer place leveraging our expertise and cutting-edge technology to deliver best in class security solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              className="relative h-[500px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={controlRoomImage} 
                alt="Professional Security Operations" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Security Consulting</h3>
                    <p className="text-sm text-muted-foreground">Expert analysis & strategy</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Private Security</h3>
                    <p className="text-sm text-muted-foreground">Elite protection services</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Close Protections</h3>
                    <p className="text-sm text-muted-foreground">VIP & executive security</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Guard House</h3>
                    <p className="text-sm text-muted-foreground">24/7 facility protection</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Always Honest</h3>
                    <p className="text-sm text-muted-foreground">Transparent operations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">24/7 Constant Support</h3>
                    <p className="text-sm text-muted-foreground">Always available</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card border border-border rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">PROFESSIONAL ASSOCIATIONS</h3>
                <p className="text-muted-foreground mb-4">
                  As a professional security company, Trans-World Security belongs to the following professional Associations:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Security and Safety Association of Nigeria (SSAN)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Nigerian Professional Security Association</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Nigerian Institute of Safety Professionals (NISP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">National Burglar & Fire Alarm Association (NBFAA) (U.S)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">National Association of Private Security Industries (NAPSI)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Consultancy */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-charcoal-dark border border-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={controlRoomImage} 
                  alt="Security Consultancy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Consultancy Services
                </h3>
                <p className="text-gray-300">
                  Risk analysis, threat assessment, security surveys, and comprehensive project management.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  onClick={() => window.location.href = '/services'}
                >
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Equipment */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-charcoal-dark border border-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={controlRoomImage} 
                  alt="Security Equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Security Equipment
                </h3>
                <p className="text-gray-300">
                  Advanced CCTV systems, access control, alarms, and fire safety installations.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  onClick={() => window.location.href = '/services'}
                >
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Guard Services */}
            <motion.div 
              className="relative overflow-hidden rounded-xl bg-charcoal-dark border border-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={k9Image} 
                  alt="Guard Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Guard Services
                </h3>
                <p className="text-gray-300">
                  VIP protection, static guards, patrol units, K-9 teams, and investigation services.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  onClick={() => window.location.href = '/services'}
                >
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tactical Callout */}
      <motion.section 
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-tactical-red-dark to-charcoal-dark opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="h-16 w-16 text-primary-foreground mx-auto" />
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
              We Think Like Assailants
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Our tactical approach combines defensive strategy with offensive thinking. We identify vulnerabilities before threats emerge, ensuring comprehensive protection through military-grade security planning.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/about'}
            >
              Discover Our Methodology
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Providing specialized security solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Oil & Gas", description: "Comprehensive protection for critical energy infrastructure and operations" },
              { title: "Banking & Finance", description: "Advanced security for financial institutions and transaction environments" },
              { title: "Manufacturing", description: "Industrial facility security and supply chain protection" },
              { title: "Commercial Real Estate", description: "Property management and tenant security solutions" },
              { title: "Healthcare", description: "Hospital and medical facility security services" },
              { title: "Education", description: "Campus security and student safety programs" },
              { title: "Retail", description: "Loss prevention and customer safety solutions" },
              { title: "Government", description: "Public sector security and compliance services" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Trusted Across Africa
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Three decades of security excellence delivering measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "30+", label: "Years Experience" },
              { number: "500+", label: "Active Clients" },
              { number: "2000+", label: "Security Personnel" },
              { number: "99.8%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                <div className="text-primary-foreground/90 text-lg font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              OUR <span className="text-primary">VALUES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Excellence</h3>
                  <p className="text-muted-foreground">Our watch word in everything we do</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Integrity</h3>
                  <p className="text-muted-foreground">Our word is our bond</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Innovation</h3>
                  <p className="text-muted-foreground">Make things easy</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Customer Focus</h3>
                  <p className="text-muted-foreground">Customer comes first</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Social Responsibility</h3>
                  <p className="text-muted-foreground">Good corporate Citizens</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative h-[600px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={k9Image} 
                alt="Security Values in Action" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
