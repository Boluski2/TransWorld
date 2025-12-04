import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <Card 
        className="group bg-charcoal-dark border-charcoal-light hover:border-primary transition-all duration-300 hover:shadow-tactical h-full"
      >
        <CardContent className="p-6 space-y-4">
          <motion.div 
            className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
          </motion.div>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;