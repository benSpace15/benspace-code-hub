
import { useState } from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import GlowCard from '@/components/ui/GlowCard';
import NeonButton from '@/components/ui/NeonButton';
import PageTransition from '@/components/layout/PageTransition';

// Define blog post type
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Rise of WebAssembly: Beyond JavaScript",
      excerpt: "Exploring how WebAssembly is changing the landscape of web development by allowing languages beyond JavaScript to run in the browser with near-native performance.",
      date: "2024-05-10",
      author: "BenSpace",
      category: "web-development",
      tags: ["webassembly", "javascript", "web-performance"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      id: 2,
      title: "Analyzing Stack Overflow's 2024 Developer Survey",
      excerpt: "Breaking down key findings from Stack Overflow's annual developer survey and what they reveal about current programming trends and developer preferences.",
      date: "2024-04-25",
      author: "BenSpace",
      category: "community",
      tags: ["stackoverflow", "survey", "trends"],
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    {
      id: 3,
      title: "Rust vs. Go: Systems Programming Showdown",
      excerpt: "Comparing two modern languages designed for performance and safety. Which one should you choose for your next systems programming project?",
      date: "2024-04-02",
      author: "BenSpace",
      category: "languages",
      tags: ["rust", "golang", "systems-programming"],
    },
    {
      id: 4,
      title: "Building Resilient Microservices with Circuit Breakers",
      excerpt: "Learn how to implement the Circuit Breaker pattern to create fault-tolerant microservices that gracefully handle failure scenarios.",
      date: "2024-03-18",
      author: "BenSpace",
      category: "architecture",
      tags: ["microservices", "fault-tolerance", "patterns"],
    },
    {
      id: 5,
      title: "GitHub Copilot: AI Pair Programming Review",
      excerpt: "An in-depth look at GitHub's AI coding assistant after using it for six months. How is it changing the way developers write code?",
      date: "2024-03-05",
      author: "BenSpace",
      category: "tools",
      tags: ["ai", "github", "productivity"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },
    {
      id: 6,
      title: "The Future of Database Technology in 2024",
      excerpt: "Examining emerging database technologies and trends that are shaping how we store and process data in modern applications.",
      date: "2024-02-20",
      author: "BenSpace",
      category: "databases",
      tags: ["nosql", "timeseries-db", "vector-db"],
    },
  ];

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <PageTransition>
      <main className="min-h-screen container py-12">
        <section className="mb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-space text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
                BenSpace Blog
              </span>
            </h1>
            <p className="text-muted-foreground">
              Insights on programming trends, code forums, and the ever-evolving tech landscape.
              Explore articles that will help you navigate the vastness of the coding universe.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === 'all'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/40'
                  : 'bg-dark-secondary/50 border border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Posts
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === 'web-development'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/40'
                  : 'bg-dark-secondary/50 border border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActiveCategory('web-development')}
            >
              Web Development
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === 'languages'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/40'
                  : 'bg-dark-secondary/50 border border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActiveCategory('languages')}
            >
              Languages
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === 'architecture'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/40'
                  : 'bg-dark-secondary/50 border border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActiveCategory('architecture')}
            >
              Architecture
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === 'tools'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/40'
                  : 'bg-dark-secondary/50 border border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActiveCategory('tools')}
            >
              Tools
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === 'community'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/40'
                  : 'bg-dark-secondary/50 border border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActiveCategory('community')}
            >
              Community
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === 'databases'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/40'
                  : 'bg-dark-secondary/50 border border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActiveCategory('databases')}
            >
              Databases
            </button>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <GlowCard
                key={post.id}
                glowColor="cyan"
                className="overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                {post.imageUrl && (
                  <div className="h-48 mb-4 -mx-6 -mt-6 overflow-hidden relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent opacity-70"></div>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3 text-xs">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <User className="h-3 w-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="font-space text-xl font-medium mb-3">{post.title}</h3>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <div key={tag} className="flex items-center text-xs text-muted-foreground bg-dark-secondary/70 px-2 py-1 rounded">
                      <Tag className="h-3 w-3 mr-1" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <NeonButton variant="blue" fullWidth>
                    <div className="flex items-center justify-center">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </NeonButton>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-8">
          <GlowCard className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
            <div className="flex-1">
              <h2 className="font-space text-2xl font-medium mb-2">Stay Updated with BenSpace</h2>
              <p className="text-muted-foreground">
                Subscribe to my newsletter for weekly coding insights and updates on the latest tech trends.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Link to="/newsletter">
                <NeonButton variant="purple" size="lg">
                  Join Newsletter
                </NeonButton>
              </Link>
            </div>
          </GlowCard>
        </section>
      </main>
    </PageTransition>
  );
};

export default Blog;
