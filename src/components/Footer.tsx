import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-health rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">NutriLife</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted companion for healthy living and nutrition guidance. 
              Making nutrition simple and accessible for everyone.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/nutrition-info" className="text-muted-foreground hover:text-primary transition-colors text-sm">Nutrition Info</Link></li>
              <li><Link to="/healthy-foods" className="text-muted-foreground hover:text-primary transition-colors text-sm">Healthy Foods</Link></li>
              <li><Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors text-sm">Tools</Link></li>
              
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Health Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/bmi-bmr" className="text-muted-foreground hover:text-primary transition-colors text-sm">BMI & BMR Calculator</Link></li>
              <li><Link to="/activity-calories" className="text-muted-foreground hover:text-primary transition-colors text-sm">Activity Calories</Link></li>
              <li><Link to="/nutrition-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">Nutrition Guide</Link></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground text-sm">
                <Mail className="h-4 w-4 mr-2" />
                info@nutrilife.com
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +66 (0) 2-xxx-xxxx
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Bangkok, Thailand
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 NutriLife. All rights reserved. | 
            <Link to="/contact" className="hover:text-primary transition-colors ml-1">Privacy Policy</Link> | 
            <Link to="/contact" className="hover:text-primary transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;