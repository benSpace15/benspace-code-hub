
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark-secondary/30 backdrop-blur-lg">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Avatar className="h-8 w-8 border border-neon-blue/30">
                <AvatarImage src="/lovable-uploads/bdf2d047-a40e-42c3-b8cb-0178c83d46ee.png" alt="BenSpace Logo" />
                <AvatarFallback className="bg-gradient-to-r from-neon-purple to-neon-blue rounded-full">
                  <span className="font-space font-bold text-white text-xs">B</span>
                </AvatarFallback>
              </Avatar>
              <span className="font-space font-bold text-xl tracking-tight">
                Ben<span className="text-neon-blue">Space</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Exploring the programming universe one byte at a time. Join me on this journey of digital discovery.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/benspace" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/benspace" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/benspace" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@benspace" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-space font-medium text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-neon-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-neon-blue transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-neon-blue transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-neon-blue transition-colors">About</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-space font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">Coding Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">Programming Books</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">Development Tools</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">Community Forums</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-space font-medium text-sm mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Subscribe to get the latest updates on events and programming news.
            </p>
            <Link to="/newsletter" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-secondary text-foreground hover:bg-neon-purple/20 border border-neon-purple/40 transition-colors">
              Join Newsletter
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} BenSpace. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-neon-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-neon-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
