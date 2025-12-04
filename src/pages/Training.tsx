import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, Clock, DollarSign, Award, Trophy } from "lucide-react";
import trainingClassroomImage from "@/assets/training-classroom.jpg";
import trainingCertificateImage from "@/assets/training-certificate.jpg";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Course {
  title: string;
  duration: string;
  price: string;
}

const Training = () => {
  const trainingStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "TransWorld Security Training Academy",
    "description": "Professional security training courses and certifications in Nigeria",
    "url": "https://transworldsecurity.com/training",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Training Courses",
      "itemListElement": [
        { "@type": "Course", "name": "Certificate In Security Management", "provider": "TransWorld Security" },
        { "@type": "Course", "name": "Professional Security Management", "provider": "TransWorld Security" },
        { "@type": "Course", "name": "Crisis & Emergency Management", "provider": "TransWorld Security" }
      ]
    }
  };
  const certificateCourses: Course[] = [
    { title: "Certificate In Security Management", duration: "6 MONTHS", price: "₦100,000" },
    { title: "Certificate In Security Operations", duration: "6 MONTHS", price: "₦100,000" },
    { title: "Certificate In Security Intelligence", duration: "3 MONTHS", price: "₦75,000" },
  ];

  const professionalCourses: Course[] = [
    { title: "Professional Security Management", duration: "6 MONTHS", price: "₦150,000" },
    { title: "Crisis & Emergency Management", duration: "3 MONTHS", price: "₦75,000" },
    { title: "Advanced Fire & Safety Training", duration: "1 MONTH", price: "₦45,000" },
    { title: "Cyber Security", duration: "3 MONTHS", price: "₦100,000" },
    { title: "Intelligence & Security Analysis", duration: "3 MONTHS", price: "₦85,000" },
    { title: "Risk & Security Management", duration: "3 MONTHS", price: "₦75,000" },
  ];

  const specializedCourses: Course[] = [
    { title: "VIP Close Protection", duration: "2 MONTHS", price: "₦120,000" },
    { title: "K-9 Handler Training", duration: "2 MONTHS", price: "₦150,000" },
    { title: "Fire Safety Training", duration: "7 DAYS", price: "₦25,000" },
    { title: "Maritime Security", duration: "1 MONTH", price: "₦95,000" },
    { title: "Aviation Security", duration: "1 MONTH", price: "₦95,000" },
    { title: "Event Security Management", duration: "2 WEEKS", price: "₦40,000" },
  ];

  const technicalCourses: Course[] = [
    { title: "CCTV Installation & Maintenance", duration: "1 MONTH", price: "₦65,000" },
    { title: "Access Control Systems", duration: "3 WEEKS", price: "₦55,000" },
    { title: "Alarm Systems Installation", duration: "3 WEEKS", price: "₦50,000" },
    { title: "Fire Detection Systems", duration: "1 MONTH", price: "₦60,000" },
    { title: "Biometric Systems", duration: "2 WEEKS", price: "₦45,000" },
    { title: "Security Systems Integration", duration: "6 WEEKS", price: "₦85,000" },
  ];

  const executiveCourses: Course[] = [
    { title: "Executive Protection Specialist", duration: "3 MONTHS", price: "₦200,000" },
    { title: "Advanced Tactical Training", duration: "2 MONTHS", price: "₦180,000" },
    { title: "Surveillance & Counter-Surveillance", duration: "1 MONTH", price: "₦95,000" },
    { title: "Threat Assessment & Management", duration: "6 WEEKS", price: "₦75,000" },
    { title: "Security Driving & Evasive Techniques", duration: "1 MONTH", price: "₦120,000" },
    { title: "Investigation & Intelligence", duration: "2 MONTHS", price: "₦110,000" },
  ];

  const basicCourses: Course[] = [
    { title: "Basic Security Guard Training", duration: "2 WEEKS", price: "₦35,000" },
    { title: "Customer Service in Security", duration: "1 WEEK", price: "₦20,000" },
    { title: "Report Writing for Security", duration: "3 DAYS", price: "₦15,000" },
    { title: "First Aid & CPR", duration: "5 DAYS", price: "₦25,000" },
    { title: "Communication Skills", duration: "1 WEEK", price: "₦18,000" },
    { title: "Conflict Resolution", duration: "5 DAYS", price: "₦22,000" },
  ];

  const renderCourseGrid = (courses: Course[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card 
              className="bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-tactical overflow-hidden h-full"
            >
              <div className="bg-muted/50 p-4 border-b-2 border-border">
                <h3 className="text-lg font-bold text-foreground text-center leading-tight min-h-[3rem] flex items-center justify-center">
                  {course.title}
                </h3>
              </div>
              <CardContent className="p-6 space-y-4 text-center">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Duration</p>
                  <p className="text-2xl font-bold text-primary">{course.duration}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Investment</p>
                  <p className="text-3xl font-bold text-foreground">{course.price}</p>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 font-bold"
                  onClick={() => window.location.href = '/contact'}
                >
                  ENROLL NOW
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Security Training Academy - TransWorld Security | Professional Certifications"
        description="Professional security training courses in Nigeria. Certifications in security management, crisis response, cyber security, and more. Internationally recognized programs."
        keywords="security training Nigeria, security certification Lagos, security management course, professional security training"
        canonicalUrl="https://transworldsecurity.com/training"
        structuredData={trainingStructuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={trainingClassroomImage} 
            alt="TransWorld Security Training Academy" 
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
            Training Academy
          </h1>
          <p className="text-lg text-white drop-shadow-lg">
            World-class security training with international certification
          </p>
        </motion.div>
      </section>

      {/* About the Institute */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-8">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-4 border-primary/20">
                <span className="text-4xl font-bold text-primary">TW</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              TransWorld Security Training Institute
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              TransWorld Security Training Institute is a leading provider of professional security training in Nigeria. 
              Our institute is registered with relevant professional bodies and offers internationally recognized certification programs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine theoretical knowledge with practical hands-on training to produce highly skilled security professionals 
              who meet international standards and are equipped to handle modern security challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Courses */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Certificate <span className="text-primary">Programs</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive certificate programs designed to build foundational security management skills
            </p>
          </div>
          {renderCourseGrid(certificateCourses)}
        </div>
      </section>

      {/* Professional Courses */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional <span className="text-primary">Development</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Advanced programs for security professionals seeking specialized expertise
            </p>
          </div>
          {renderCourseGrid(professionalCourses)}
        </div>
      </section>

      {/* Specialized Training */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Specialized <span className="text-primary">Training</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Focused training programs for specific security roles and environments
            </p>
          </div>
          {renderCourseGrid(specializedCourses)}
        </div>
      </section>

      {/* Technical Courses */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Training</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hands-on technical training for security systems installation and maintenance
            </p>
          </div>
          {renderCourseGrid(technicalCourses)}
        </div>
      </section>

      {/* Executive Protection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Executive <span className="text-primary">Protection</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Elite training programs for high-level security and protection operations
            </p>
          </div>
          {renderCourseGrid(executiveCourses)}
        </div>
      </section>

      {/* Basic Training */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Foundation <span className="text-primary">Courses</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Essential training for those starting their security career
            </p>
          </div>
          {renderCourseGrid(basicCourses)}
        </div>
      </section>

      {/* Training Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                World-Class <span className="text-primary">Training Facilities</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our state-of-the-art training center is equipped with modern facilities including:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Fully equipped classrooms with multimedia capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Practical training areas for hands-on exercises</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Technical laboratories for equipment training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Simulation rooms for realistic scenario training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Physical fitness and tactical training grounds</span>
                </li>
              </ul>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src={trainingClassroomImage} 
                alt="Training Classroom" 
                className="rounded-xl shadow-tactical w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in order-2 lg:order-1">
              <img 
                src={trainingCertificateImage} 
                alt="Training Certificate" 
                className="rounded-xl shadow-tactical w-full"
              />
            </div>
            <div className="space-y-6 animate-fade-in order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground">
                Internationally <span className="text-primary">Recognized Certificates</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Upon successful completion of our training programs, participants receive certificates that are:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Recognized by international security organizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Accepted by leading security companies worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Accredited by relevant professional bodies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Valid for career advancement and professional development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-tactical-red-dark to-charcoal-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Ready to Start Your Training Journey?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8 animate-fade-in">
            Contact us today to enroll in any of our programs or to get more information about course schedules and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 font-bold"
              onClick={() => window.location.href = '/contact'}
            >
              ENROLL NOW
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 font-bold"
              onClick={() => window.location.href = '/contact'}
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
