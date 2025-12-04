import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Eye, Target, Shield, Award, Users, Globe } from "lucide-react";
import tacticalTrainingImage from "@/assets/tactical-training.jpg";
import k9Image from "@/assets/k9-unit.jpg";
import controlRoomImage from "@/assets/control-room.jpg";
import uniqueApproachImage from "@/assets/unique-approach.jpg";
import director1 from "@/assets/director-1.jpg";
import director2 from "@/assets/director-2.jpg";
import director3 from "@/assets/director-3.jpg";
import director4 from "@/assets/director-4.jpg";
import director5 from "@/assets/director-5.jpg";
import director6 from "@/assets/director-6.jpg";
import manager1 from "@/assets/manager-1.jpg";
import manager2 from "@/assets/manager-2.jpg";
import manager3 from "@/assets/manager-3.jpg";
import clientLogo1 from "@/assets/client-logo-1.jpg";
import clientLogo2 from "@/assets/client-logo-2.jpg";
import clientLogo3 from "@/assets/client-logo-3.jpg";
import clientLogo4 from "@/assets/client-logo-4.jpg";
import clientLogo5 from "@/assets/client-logo-5.jpg";
import clientLogo6 from "@/assets/client-logo-6.jpg";
import guard1 from "@/assets/guard-1.jpg";
import guard2 from "@/assets/guard-2.jpg";
import guard3 from "@/assets/guard-3.jpg";
import guard4 from "@/assets/guard-4.jpg";
import { motion } from "framer-motion";

const About = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About TransWorld Security",
    "description": "Learn about TransWorld Security's 30+ years of excellence in protecting Nigeria's most valuable assets.",
    "url": "https://transworldsecurity.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "TransWorld Security",
      "foundingDate": "1994",
      "numberOfEmployees": "500+",
      "slogan": "Elite Protection. Intelligent Security. Trusted Expertise."
    }
  };
  const directors = [
    { name: "Ono Ekhueme MBA", position: "Chairman", image: director1 },
    { name: "Dr Chimgoke Ikhiena", position: "Vice Chairman", image: director2 },
    { name: "Chief Dr Mrs Victoria Obioma", position: "Director", image: director3 },
    { name: "Barrister Adisa, FRA", position: "Company Secretary", image: director4 },
    { name: "Chief Hilda F. Unah, H.A", position: "Director", image: director5 },
    { name: "Engr. Segun Akinmu", position: "Managing Director", image: director6 }
  ];

  const managers = [
    { name: "Austin Ibe Ikwueme", position: "Chief Executive Officer", image: manager1 },
    { name: "Echeeanya Adada", position: "Chief Operating Officer", image: manager2 },
    { name: "Olalenji Esanbigbe", position: "Chief Financial Officer", image: manager3 }
  ];

  const clientLogos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6];
  const guards = [guard1, guard2, guard3, guard4];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - TransWorld Security | 30+ Years of Excellence"
        description="Discover TransWorld Security's legacy of excellence. Meet our leadership team, learn our mission, and see why we're Nigeria's trusted security partner."
        keywords="about TransWorld Security, security company history, Nigeria security experts, professional security team"
        canonicalUrl="https://transworldsecurity.com/about"
        structuredData={aboutStructuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={tacticalTrainingImage} 
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
            About TransWorld Security
          </h1>
          <p className="text-lg text-white drop-shadow-lg">
            Africa's premier security consultancy with 30+ years of excellence
          </p>
        </motion.div>
      </section>

      {/* About Transworld */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">About Transworld</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We are a world class security consultancy, solution and services company, established to deliver cutting-edge security solutions to clients both locally and internationally. We are known for our expert security audits and consulting services. As one of Africa's most reputable security solutions providers, we have garnered experience in the field of security that spans decades.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our services and operations cuts across security consultancy, security systems and security guard services. We operate seamlessly in the Oil & Gas, Manufacturing, Banking, Commercial and others sectors both locally and internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Differentiates Us */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">What Differentiates us</h2>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">Our values:</span> Excellence is our watchword, integrity is our bond. Innovation makes things easy and customer focus puts the customer first. These core values guide every decision and action we take.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">Our people:</span> We employ only the best hands and provide continuous training to keep our team at the cutting edge of security practices. Our personnel are carefully selected, thoroughly vetted, and professionally trained to deliver exceptional service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">Our approach:</span> We bring a multi-level strategic approach to security. This comprehensive methodology ensures that every aspect of your security needs is addressed with precision and expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">Our strategic advantage:</span> We think like assailants but act professionally. This unique perspective allows us to anticipate threats before they materialize and implement proactive security measures that truly protect.
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
                src={k9Image} 
                alt="Security Personnel" 
                className="rounded-xl shadow-tactical w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership and Founder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Leadership & Founder</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Captain Osim Udoh - Founder & Chief Executive Officer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Captain Osim Udoh is a distinguished retired Naval Officer who joined the prestigious Nigerian Defense Academy (NDA), Kaduna, and was commissioned as a Naval Officer in 1987. He served in the Nigerian Navy with distinction for over 27 years, holding various critical appointments across different directorates and commands throughout the federation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Throughout his exemplary military career, Captain Udoh attended numerous advanced military and civilian courses both within Nigeria and internationally. His extensive operational experience encompasses security operations, strategic planning, crisis management, and organizational leadership. This wealth of knowledge and hands-on experience has been instrumental in establishing TransWorld Security as a premier security organization.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Captain Udoh's vision for TransWorld Security is to establish a world-class security enterprise that seamlessly integrates military precision, cutting-edge technology, and exceptional client service delivery. His strategic leadership philosophy emphasizes proactive threat assessment, comprehensive risk mitigation, and sustainable security solutions tailored to each client's unique operational requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Under his visionary leadership, TransWorld Security has evolved into one of Africa's most trusted and respected security solution providers, serving a diverse portfolio of clients across multiple sectors including Oil & Gas, Banking, Manufacturing, and Commercial enterprises. His commitment to excellence, integrity, and innovation continues to drive the organization's growth and success in the dynamic security landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History & Achievements */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Company History & Achievements</h2>
            
            <div className="space-y-8">
              <div className="bg-background p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-4">Foundation & Early Years</h3>
                <p className="text-muted-foreground leading-relaxed">
                  TransWorld Security was established with a clear vision to revolutionize the security industry in Africa. Founded by Captain Osim Udoh, a distinguished retired Naval Officer with over 27 years of military service, the company was built on the principles of military precision, technological innovation, and unwavering commitment to client protection. From its inception, TransWorld Security distinguished itself through rigorous personnel training, strategic security planning, and deployment of cutting-edge security systems.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-4">Growth & Expansion</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Over three decades, TransWorld Security has expanded its operations across multiple sectors and geographical regions. The company has successfully secured contracts with leading organizations in Oil & Gas, Banking, Manufacturing, and Commercial sectors. Our growth trajectory reflects our consistent delivery of exceptional security solutions and our ability to adapt to evolving security challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, TransWorld Security operates a fleet of over 2,000 trained security personnel, maintains state-of-the-art control rooms, and manages comprehensive security operations for more than 500 active clients across Nigeria and internationally. Our expansion includes specialized divisions for K-9 units, VIP protection services, security consulting, and advanced security systems installation.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-4">Industry Recognition & Certifications</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TransWorld Security maintains active membership in prestigious professional associations including the Security and Safety Association of Nigeria (SSAN), Nigerian Institute of Safety Professionals (NISP), National Association of Private Security Industries (NAPSI), and the National Burglar & Fire Alarm Association (NBFAA) in the United States. These affiliations underscore our commitment to international standards and continuous professional development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our Training Institute is registered with relevant regulatory bodies and offers internationally recognized certification programs. We have successfully trained thousands of security professionals who now serve in various capacities across the security industry in Africa and beyond.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-4">Innovation & Technology Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  TransWorld Security has consistently been at the forefront of security technology adoption in Africa. We were among the first security companies to deploy integrated CCTV surveillance systems, biometric access control, and real-time GPS tracking for patrol vehicles. Our control rooms utilize advanced monitoring software and communication systems that enable rapid response to security incidents. We continue to invest in research and development to stay ahead of emerging security threats and technological advancements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Us & Our Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Us */}
            <div className="bg-primary text-primary-foreground rounded-xl p-12 animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-primary-foreground/90">(+234) 803-304-5381</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-primary-foreground/90">info@transworld.ng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-charcoal-dark text-white rounded-xl p-12 animate-fade-in-right">
              <h2 className="text-3xl font-bold text-primary mb-4">Core Values & Philosophy</h2>
              <p className="text-gray-300 italic mb-6">
                "Security advances first, enabling safe progress into new frontiers"
              </p>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-primary">Excellence:</span> We pursue the highest standards in every aspect of our operations, continuously improving our methodologies and capabilities to deliver superior security solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-primary">Integrity:</span> We operate with unwavering honesty, transparency, and ethical conduct in all our business relationships and operational activities.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-primary">Innovation:</span> We embrace cutting-edge technology and creative problem-solving to stay ahead of emerging security threats and challenges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-primary">Client-Centric Approach:</span> Our clients' security needs, satisfaction, and peace of mind remain our paramount priority in every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-12">Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl border-2 border-primary/20 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To integrate our diverse expertise, professional dedication, and advanced technology to strengthen security infrastructure, optimize operational costs, and achieve incident-free operations that safeguard our clients' assets, personnel, and business continuity.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl border-2 border-primary/20 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be recognized as Africa's foremost security solutions provider, setting industry standards through innovation, excellence, and unwavering commitment to creating safer environments for businesses and communities across the continent and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Unique Approach</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden"
              >
                <img 
                  src={uniqueApproachImage} 
                  alt="Our Unique Security Approach" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    icon: Eye,
                    title: "Observe",
                    description: "We carefully analyze your security landscape, identifying vulnerabilities and potential threats through comprehensive assessments and continuous monitoring."
                  },
                  {
                    icon: Target,
                    title: "Predict",
                    description: "Using advanced analytics and threat intelligence, we anticipate security challenges before they materialize, allowing us to stay one step ahead."
                  },
                  {
                    icon: Shield,
                    title: "Protect",
                    description: "We implement robust security measures tailored to your specific needs, ensuring comprehensive protection of your assets, personnel, and operations."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guards */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-primary"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Guards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {guards.map((guard, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden group"
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src={guard} 
                    alt={`Security Guard ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-charcoal-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Board of Directors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {directors.map((director, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{director.name}</h3>
                <p className="text-primary text-xs font-semibold">{director.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Management Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Management Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {managers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-semibold">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-12 text-center">Our Clients</h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={logo} 
                    alt={`Client ${index + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </motion.div>
              ))}
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-primary-foreground mt-8 text-lg"
            >
              Trusted by leading organizations across Oil & Gas, Manufacturing, Banking, and Commercial sectors
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;