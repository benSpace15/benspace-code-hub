
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, BookText, User, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'Events', path: '/events', icon: <Calendar className="h-4 w-4" /> },
    { name: 'Blog', path: '/blog', icon: <BookText className="h-4 w-4" /> },
    { name: 'About', path: '/about', icon: <User className="h-4 w-4" /> },
    { name: 'Newsletter', path: '/newsletter', icon: <Mail className="h-4 w-4" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-white/10 bg-dark/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Avatar className="h-10 w-10 border-2 border-neon-blue/30 bg-dark">
              <AvatarImage src="/lovable-uploads/bdf2d047-a40e-42c3-b8cb-0178c83d46ee.png" alt="BenSpace Logo" />
              <AvatarFallback className="bg-gradient-to-r from-neon-purple to-neon-blue rounded-full">
                <span className="font-space font-bold text-white">B</span>
              </AvatarFallback>
            </Avatar>
            <span className="font-space font-bold text-xl tracking-tight hidden sm:block">
              Ben<span className="text-neon-blue">Space</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-dark-secondary border-b border-white/10 py-2 md:hidden">
            <div className="flex flex-col space-y-1 px-4">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="flex items-center py-3 px-4 text-sm font-medium hover:bg-white/5 rounded-md"
                  onClick={closeMenu}
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
