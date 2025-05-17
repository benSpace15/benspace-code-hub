
import { useState } from 'react';
import { Check, Mail, AlertCircle } from 'lucide-react';

import GlowCard from '@/components/ui/GlowCard';
import NeonButton from '@/components/ui/NeonButton';
import PageTransition from '@/components/layout/PageTransition';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const interestOptions = [
    { id: 'web-dev', label: 'Web Development' },
    { id: 'mobile-dev', label: 'Mobile Development' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'devops', label: 'DevOps & Cloud' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
  ];

  const handleInterestChange = (id: string) => {
    if (interests.includes(id)) {
      setInterests(interests.filter(item => item !== id));
    } else {
      setInterests([...interests, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Success!",
        description: "You've been subscribed to the newsletter.",
      });
    }, 1500);
  };

  return (
    <PageTransition>
      <main className="min-h-screen container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <section className="mb-10 text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-neon-blue" />
              </div>
            </div>
            <h1 className="font-space text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple glow-text">
                Weekly Programming Insights
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Stay updated with the latest programming events, tech news, and coding tips from across the digital universe.
            </p>
          </section>

          {isSubscribed ? (
            // Success State
            <GlowCard glowColor="blue" className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-neon-blue/20 rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-neon-blue" />
              </div>
              <h2 className="font-space text-2xl font-bold mb-4">You're Subscribed!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you for joining the BenSpace newsletter. Watch your inbox for weekly updates on programming events and coding insights.
              </p>
              <p className="text-sm text-muted-foreground">
                You can unsubscribe at any time by clicking the unsubscribe link in the footer of our emails.
              </p>
            </GlowCard>
          ) : (
            // Subscription Form
            <GlowCard className="relative">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-t-lg"></div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-dark-secondary/50 border border-white/10 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-colors"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name <span className="text-muted-foreground">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-dark-secondary/50 border border-white/10 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="pt-4">
                      <h3 className="font-medium mb-3 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2 text-neon-blue" />
                        What you'll receive:
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground pl-6">
                        <li className="list-disc">Weekly digest of upcoming programming events</li>
                        <li className="list-disc">Curated coding tips and tutorials</li>
                        <li className="list-disc">Analysis of trending topics on Stack Overflow</li>
                        <li className="list-disc">Early access to workshop registrations</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Programming Interests <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <div className="space-y-3">
                      {interestOptions.map((option) => (
                        <label 
                          key={option.id} 
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <div 
                            className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                              interests.includes(option.id)
                                ? 'bg-neon-blue/20 border-neon-blue'
                                : 'border-white/20 group-hover:border-white/40'
                            }`}
                          >
                            {interests.includes(option.id) && (
                              <Check className="w-3 h-3 text-neon-blue" />
                            )}
                          </div>
                          <span>{option.label}</span>
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={interests.includes(option.id)}
                            onChange={() => handleInterestChange(option.id)}
                          />
                        </label>
                      ))}
                    </div>

                    <div className="mt-6">
                      <p className="text-xs text-muted-foreground mb-6">
                        By subscribing, you agree to receive email communications from BenSpace.
                        We respect your privacy and will never share your information. You can unsubscribe at any time.
                      </p>

                      <NeonButton 
                        variant="purple" 
                        size="lg" 
                        type="submit" 
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                      </NeonButton>
                    </div>
                  </div>
                </div>
              </form>
            </GlowCard>
          )}

          {/* Why Subscribe Section */}
          {!isSubscribed && (
            <section className="mt-12">
              <h2 className="font-space text-2xl font-bold mb-6 text-center">
                <span className="text-neon-cyan">Why</span> Subscribe?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <GlowCard glowColor="blue">
                  <h3 className="font-space text-lg font-medium mb-3">Stay Ahead of Trends</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive curated analysis of emerging programming languages, frameworks, and technologies before they become mainstream.
                  </p>
                </GlowCard>
                <GlowCard glowColor="purple">
                  <h3 className="font-space text-lg font-medium mb-3">Never Miss an Event</h3>
                  <p className="text-sm text-muted-foreground">
                    Get timely notifications about upcoming hackathons, conferences, and coding competitions with registration deadlines.
                  </p>
                </GlowCard>
                <GlowCard glowColor="cyan">
                  <h3 className="font-space text-lg font-medium mb-3">Weekly Coding Tips</h3>
                  <p className="text-sm text-muted-foreground">
                    Practical code snippets and programming techniques that you can immediately apply to your projects.
                  </p>
                </GlowCard>
                <GlowCard glowColor="blue">
                  <h3 className="font-space text-lg font-medium mb-3">Community Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Summaries of important discussions happening on Stack Overflow, GitHub, and other developer communities.
                  </p>
                </GlowCard>
              </div>
            </section>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default Newsletter;
