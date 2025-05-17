
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from '../ui/ParticleBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      <Navbar />
      <div className="flex-grow z-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
