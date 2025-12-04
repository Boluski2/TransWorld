import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import consultancyImage from "@/assets/consultancy-handshake.jpg";

const Contact = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact TransWorld Security",
    "description": "Get in touch with TransWorld Security for all your security needs in Nigeria.",
    "url": "https://transworldsecurity.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "TransWorld Security",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Turton St, Lafiaji",
        "addressLocality": "Lagos Island",
        "addressRegion": "Lagos",
        "addressCountry": "NG"
      },
      "telephone": "+234-1-234-5678",
      "email": "info@transworldsecurity.com"
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - TransWorld Security | Get in Touch"
        description="Contact TransWorld Security for elite protection services in Lagos, Nigeria. Visit us at 10 Turton St, Lafiaji, Lagos Island or call for a consultation."
        keywords="contact TransWorld Security, security services Lagos, security consultation Nigeria"
        canonicalUrl="https://transworldsecurity.com/contact"
        structuredData={contactStructuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={consultancyImage} 
            alt="Contact TransWorld Security" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal-dark/50" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-primary-foreground text-sm font-semibold tracking-wider">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg text-white drop-shadow-lg">
            24/7 Emergency Response & Security Consultation
          </p>
        </motion.div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 text-primary-foreground"
          >
            <a href="tel:+2348033045381" className="flex items-center gap-3 hover:scale-105 transition-transform">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">(+234) 803-304-5381</span>
            </a>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <a href="mailto:info@transworld.ng" className="flex items-center gap-3 hover:scale-105 transition-transform">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">info@transworld.ng</span>
            </a>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">24/7 Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have a security concern? Our team of experts is ready to assist you 24/7. Reach out through any of our contact channels.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">24/7 Emergency Hotline</h3>
                <p className="text-muted-foreground mb-3">Immediate response for urgent security matters</p>
                <a href="tel:+2348033045381" className="text-primary font-semibold text-lg hover:underline">
                  (+234) 803-304-5381
                </a>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-3">Send detailed inquiries anytime</p>
                <a href="mailto:info@transworld.ng" className="text-primary font-semibold text-lg hover:underline">
                  info@transworld.ng
                </a>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Head Office</h3>
                <p className="text-muted-foreground">
                  Lagos, Nigeria<br />
                  Serving clients across Africa and beyond
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-primary text-primary-foreground rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                  <div className="pt-3 mt-3 border-t border-primary-foreground/30">
                    <p className="font-bold">Emergency Services: 24/7</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card border-2 border-border rounded-xl p-8 lg:p-10 sticky top-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Request Consultation</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our security experts will contact you within 24 hours to discuss your needs.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <Input 
                        placeholder="John Doe" 
                        className="bg-background border-2 border-border focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Company</label>
                      <Input 
                        placeholder="Your Company Ltd" 
                        className="bg-background border-2 border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email *</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-background border-2 border-border focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone *</label>
                      <Input 
                        type="tel" 
                        placeholder="+234 800 000 0000" 
                        className="bg-background border-2 border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Service Interest *</label>
                    <select className="w-full h-12 px-4 rounded-md bg-background border-2 border-border focus:border-primary text-foreground">
                      <option value="">Select a service</option>
                      <option>Security Consultancy</option>
                      <option>Guard Services</option>
                      <option>Security Equipment & Systems</option>
                      <option>VIP Protection Services</option>
                      <option>Security Training</option>
                      <option>Background Checks & Investigations</option>
                      <option>Risk Assessment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Message *</label>
                    <Textarea 
                      placeholder="Please describe your security needs and any specific requirements..." 
                      rows={6}
                      className="bg-background border-2 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg h-14 gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-8 pt-8 border-t-2 border-border">
                  <p className="text-center text-muted-foreground mb-4">Prefer instant messaging?</p>
                  <motion.a 
                    href="https://wa.me/2348033045381" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-4 transition-colors font-semibold"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Chat on WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose TransWorld?</h2>
            <p className="text-muted-foreground text-lg">
              Decades of experience protecting Africa's most valued assets
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Rapid Response",
                description: "24/7 emergency response team ready to deploy within minutes"
              },
              {
                title: "Proven Expertise",
                description: "30+ years of security excellence across multiple industries"
              },
              {
                title: "Advanced Technology",
                description: "State-of-the-art security systems and monitoring equipment"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background border-2 border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Location</h2>
            <p className="text-muted-foreground">Visit our headquarters in Lagos, Nigeria</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl overflow-hidden border-2 border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.3947!3d6.4547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0e4c8f8d0d%3A0x1234567890abcdef!2s10%20Turton%20St%2C%20Lafiaji%2C%20Lagos%20Island!5e0!3m2!1sen!2sng!4v1701702000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TransWorld Security Location - 10 Turton St, Lafiaji, Lagos Island"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
