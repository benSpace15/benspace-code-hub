
import { Code, Compass, Award, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

import GlowCard from '@/components/ui/GlowCard';
import NeonButton from '@/components/ui/NeonButton';
import PageTransition from '@/components/layout/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <main className="min-h-screen container py-16">
        {/* Hero Section */}
        <section className="mb-16 text-center relative">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple glow-text">BenSpace</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              The digital persona on a mission to guide fellow coders through the vast programming universe.
            </p>

            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-xl"></div>
              <div className="relative h-full w-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full p-1">
                <div className="rounded-full h-full w-full overflow-hidden bg-dark">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80" 
                    alt="BenSpace Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <GlowCard className="max-w-4xl mx-auto">
            <h2 className="font-space text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
              The Story Behind BenSpace
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                BenSpace was born out of a simple idea: to create a central hub for programmers to discover events, share knowledge, and navigate the ever-expanding universe of code. As technology evolves at breakneck speed, developers need a guiding star to help them find their way through new languages, frameworks, and paradigms.
              </p>
              
              <p>
                What started as a personal blog to document my journey through various programming challenges soon evolved into something greater. I noticed that many developers were struggling to keep track of important events and stay updated with community trends. Information was scattered across dozens of websites, forums, and social media platforms.
              </p>
              
              <p>
                BenSpace aims to solve this fragmentation by curating the most relevant programming events, distilling insights from tech forums like Stack Overflow, and providing practical coding tips. My mission is to inspire coders of all levels and create a community that celebrates the art and science of programming.
              </p>
              
              <p>
                Whether you're a veteran developer looking for advanced techniques or a newcomer seeking guidance, BenSpace is your compass in the programming cosmos.
              </p>
            </div>
          </GlowCard>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="font-space text-3xl font-bold text-center mb-10">
            My <span className="text-neon-blue">Mission</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlowCard glowColor="blue" className="text-center">
              <div className="bg-neon-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="font-space text-xl font-medium mb-3">Guide</h3>
              <p className="text-muted-foreground">
                Provide clear direction through the complex landscape of modern programming technologies.
              </p>
            </GlowCard>

            <GlowCard glowColor="purple" className="text-center">
              <div className="bg-neon-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="font-space text-xl font-medium mb-3">Connect</h3>
              <p className="text-muted-foreground">
                Build bridges between programmers globally through events, discussions, and shared resources.
              </p>
            </GlowCard>

            <GlowCard glowColor="cyan" className="text-center">
              <div className="bg-neon-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="font-space text-xl font-medium mb-3">Teach</h3>
              <p className="text-muted-foreground">
                Simplify complex coding concepts through practical examples and clear explanations.
              </p>
            </GlowCard>

            <GlowCard glowColor="blue" className="text-center">
              <div className="bg-neon-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="font-space text-xl font-medium mb-3">Inspire</h3>
              <p className="text-muted-foreground">
                Motivate coders to push boundaries, explore new technologies, and build innovative solutions.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="font-space text-3xl font-bold text-center mb-10">
            <span className="text-neon-purple">Achievements</span> & Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard glowColor="purple" className="flex items-center">
              <div className="bg-neon-purple/10 p-4 rounded-full mr-4">
                <Award className="w-8 h-8 text-neon-purple" />
              </div>
              <div>
                <h3 className="font-space font-medium mb-1">12,000+</h3>
                <p className="text-sm text-muted-foreground">Developers joined events</p>
              </div>
            </GlowCard>

            <GlowCard glowColor="blue" className="flex items-center">
              <div className="bg-neon-blue/10 p-4 rounded-full mr-4">
                <Award className="w-8 h-8 text-neon-blue" />
              </div>
              <div>
                <h3 className="font-space font-medium mb-1">250+</h3>
                <p className="text-sm text-muted-foreground">Events cataloged globally</p>
              </div>
            </GlowCard>

            <GlowCard glowColor="cyan" className="flex items-center">
              <div className="bg-neon-cyan/10 p-4 rounded-full mr-4">
                <Award className="w-8 h-8 text-neon-cyan" />
              </div>
              <div>
                <h3 className="font-space font-medium mb-1">85+</h3>
                <p className="text-sm text-muted-foreground">Countries represented</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <GlowCard className="text-center py-12 px-6 max-w-3xl mx-auto">
            <h2 className="font-space text-3xl font-bold mb-4">
              Join the Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Ready to explore the programming universe together? Connect with BenSpace through the newsletter, upcoming events, or dive into the latest blog posts.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/newsletter">
                <NeonButton variant="blue" size="lg">
                  Subscribe to Newsletter
                </NeonButton>
              </Link>
              <Link to="/events">
                <NeonButton variant="purple" size="lg">
                  Browse Events
                </NeonButton>
              </Link>
            </div>
          </GlowCard>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
