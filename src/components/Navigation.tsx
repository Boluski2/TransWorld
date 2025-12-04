import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:shadow-tactical transition-all">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xl font-bold text-foreground tracking-wide">TransWorld</div>
              <div className="text-xs text-primary font-semibold tracking-widest">SECURITY</div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                activeClassName="text-primary"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  activeClassName="text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
