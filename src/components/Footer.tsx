import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-charcoal-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">TransWorld</div>
                <div className="text-xs text-primary font-semibold tracking-widest">SECURITY</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Elite protection. Intelligent security. Trusted expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wider">QUICK LINKS</h3>
            <div className="flex flex-col gap-2">
              <NavLink to="/" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">
                About Us
              </NavLink>
              <NavLink to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Services
              </NavLink>
              <NavLink to="/training" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Training Academy
              </NavLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wider">SERVICES</h3>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-gray-300">Consultancy Services</div>
              <div className="text-sm text-gray-300">Security Equipment</div>
              <div className="text-sm text-gray-300">Guard Services</div>
              <div className="text-sm text-gray-300">VIP Protection</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wider">CONTACT</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <span>24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@transworld-security.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} TransWorld Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;