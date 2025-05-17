
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Globe, Users, Zap } from 'lucide-react';

import GlowCard from '@/components/ui/GlowCard';
import NeonButton from '@/components/ui/NeonButton';
import PageTransition from '@/components/layout/PageTransition';

const Home = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      featureItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <PageTransition>
      <main className="min-h-screen container pb-16">
        {/* Hero Section */}
        <section className="pt-12 sm:pt-20 pb-12 sm:pb-20 text-center relative">
          <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-purple/20 rounded-full filter blur-3xl opacity-20 animate-float"></div>
          
          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple glow-text">BenSpace</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Digital explorer of the programming universe, guiding you through the cosmic pathways of code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/events">
              <NeonButton variant="blue" size="lg">
                Explore Events
              </NeonButton>
            </Link>
            <Link to="/blog">
              <NeonButton variant="purple" size="lg">
                Read Blog
              </NeonButton>
            </Link>
          </div>
          
          <div className="relative w-48 h-48 mx-auto mb-12 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-r from-neon-blue to-neon-purple rounded-full p-1">
              <div className="rounded-full overflow-hidden bg-dark">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80" 
                  alt="BenSpace Avatar" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section ref={featuresRef} className="py-16">
          <h2 className="font-space text-3xl font-bold mb-12 text-center">Exploring the <span className="text-neon-blue">Programming Universe</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-item opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <GlowCard glowColor="blue" className="h-full">
                <div className="bg-neon-blue/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="font-space text-xl font-medium mb-2">Technical Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Deep dives into advanced programming concepts, algorithms, and best practices for modern development.
                </p>
                <Link to="/blog" className="text-neon-blue flex items-center text-sm font-medium hover:underline">
                  <span>Read articles</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </GlowCard>
            </div>

            <div className="feature-item opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <GlowCard glowColor="purple" className="h-full">
                <div className="bg-neon-purple/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-neon-purple" />
                </div>
                <h3 className="font-space text-xl font-medium mb-2">Global Events</h3>
                <p className="text-muted-foreground mb-4">
                  Curated list of international programming contests, hackathons, and tech conferences to expand your network.
                </p>
                <Link to="/events" className="text-neon-purple flex items-center text-sm font-medium hover:underline">
                  <span>Browse events</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </GlowCard>
            </div>

            <div className="feature-item opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <GlowCard glowColor="cyan" className="h-full">
                <div className="bg-neon-cyan/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-space text-xl font-medium mb-2">Community Focus</h3>
                <p className="text-muted-foreground mb-4">
                  Stay connected with the latest trends from Stack Overflow, GitHub, and other programming communities.
                </p>
                <Link to="/blog" className="text-neon-cyan flex items-center text-sm font-medium hover:underline">
                  <span>Read insights</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </GlowCard>
            </div>

            <div className="feature-item opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <GlowCard glowColor="blue" className="h-full">
                <div className="bg-neon-blue/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="font-space text-xl font-medium mb-2">Weekly Updates</h3>
                <p className="text-muted-foreground mb-4">
                  Subscribe to receive curated weekly newsletter with coding tips, event alerts, and tech news.
                </p>
                <Link to="/newsletter" className="text-neon-blue flex items-center text-sm font-medium hover:underline">
                  <span>Join newsletter</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <GlowCard className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-gradient-to-br from-dark-secondary to-dark">
            <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
              <h2 className="font-space text-2xl md:text-3xl font-bold mb-4">
                Start Your Programming Journey
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Join BenSpace to stay updated with the latest programming trends, events, and insights. Let's explore the coding universe together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events">
                <NeonButton variant="blue" size="lg">
                  Upcoming Events
                </NeonButton>
              </Link>
              <Link to="/newsletter">
                <NeonButton variant="purple" size="lg">
                  Subscribe Now
                </NeonButton>
              </Link>
            </div>
          </GlowCard>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;
