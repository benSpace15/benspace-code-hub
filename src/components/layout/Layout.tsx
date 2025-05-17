
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from '../ui/ParticleBackground';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <link rel="icon" type="image/png" href="/lovable-uploads/bdf2d047-a40e-42c3-b8cb-0178c83d46ee.png" />
        <title>BenSpace | Programming Universe Explorer</title>
      </Helmet>
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
