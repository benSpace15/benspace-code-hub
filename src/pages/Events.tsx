
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Filter, Search } from 'lucide-react';

import GlowCard from '@/components/ui/GlowCard';
import NeonButton from '@/components/ui/NeonButton';
import PageTransition from '@/components/layout/PageTransition';

// Define event type
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  isOnline: boolean;
  description: string;
  category: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample events data
  useEffect(() => {
    const eventsData: Event[] = [
      {
        id: 1,
        title: "React Global Summit",
        date: "2024-08-12",
        location: "Berlin, Germany",
        isOnline: false,
        description: "A three-day conference focused on React ecosystem with workshops and networking opportunities.",
        category: "conference"
      },
      {
        id: 2,
        title: "Inclusive AI Hackathon",
        date: "2024-09-05",
        location: "Online",
        isOnline: true,
        description: "Build AI solutions that address accessibility challenges in technology. $10,000 in prizes.",
        category: "hackathon"
      },
      {
        id: 3,
        title: "TypeScript Deep Dive Workshop",
        date: "2024-07-22",
        location: "Online",
        isOnline: true,
        description: "Master advanced TypeScript features with hands-on exercises and expert guidance.",
        category: "workshop"
      },
      {
        id: 4,
        title: "International Coding Competition",
        date: "2024-10-15",
        location: "Tokyo, Japan",
        isOnline: false,
        description: "Annual algorithmic programming contest with participants from over 50 countries.",
        category: "contest"
      },
      {
        id: 5,
        title: "Data Science & ML Conference",
        date: "2024-09-18",
        location: "San Francisco, USA",
        isOnline: false,
        description: "The largest gathering of data scientists and machine learning practitioners in the industry.",
        category: "conference"
      },
      {
        id: 6,
        title: "Open Source Contributors Meetup",
        date: "2024-07-30",
        location: "Online",
        isOnline: true,
        description: "Connect with maintainers of popular open-source projects and learn how to contribute effectively.",
        category: "meetup"
      },
      {
        id: 7,
        title: "Cybersecurity Challenge",
        date: "2024-08-25",
        location: "London, UK",
        isOnline: false,
        description: "Test your security skills in this intensive 48-hour capture-the-flag competition.",
        category: "contest"
      },
      {
        id: 8,
        title: "DevOps & Cloud Native Summit",
        date: "2024-11-10",
        location: "Singapore",
        isOnline: false,
        description: "Expert talks on containerization, Kubernetes, and cloud infrastructure management.",
        category: "conference"
      },
    ];

    setEvents(eventsData);
    setFilteredEvents(eventsData);
  }, []);

  // Filter events based on search and filters
  useEffect(() => {
    let filtered = events;

    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(event => event.category === categoryFilter);
    }

    if (locationFilter !== 'all') {
      if (locationFilter === 'online') {
        filtered = filtered.filter(event => event.isOnline);
      } else if (locationFilter === 'in-person') {
        filtered = filtered.filter(event => !event.isOnline);
      }
    }

    setFilteredEvents(filtered);
  }, [searchTerm, categoryFilter, locationFilter, events]);

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
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="font-space text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Programming Events
              </span>
            </h1>
            <p className="text-muted-foreground">
              Discover upcoming programming contests, hackathons, and tech conferences from around the world. 
              Connect with like-minded developers and expand your skills.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-dark-secondary/50 border border-white/10 focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-colors"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:w-auto w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-dark-secondary/50 border border-white/10 hover:border-white/20 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-md bg-dark-secondary/30 border border-white/10 animate-accordion-down">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Event Type</label>
                  <select
                    className="w-full px-4 py-2 rounded-md bg-dark-secondary/50 border border-white/10 focus:border-neon-blue/50 focus:outline-none"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="conference">Conferences</option>
                    <option value="hackathon">Hackathons</option>
                    <option value="workshop">Workshops</option>
                    <option value="contest">Contests</option>
                    <option value="meetup">Meetups</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Location</label>
                  <select
                    className="w-full px-4 py-2 rounded-md bg-dark-secondary/50 border border-white/10 focus:border-neon-purple/50 focus:outline-none"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    <option value="all">All Locations</option>
                    <option value="online">Online Only</option>
                    <option value="in-person">In-Person Only</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <GlowCard 
                  key={event.id} 
                  glowColor="purple" 
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`text-xs font-medium px-2 py-1 rounded inline-block mb-4 ${
                    event.category === 'conference' ? 'bg-neon-blue/20 text-neon-blue' :
                    event.category === 'hackathon' ? 'bg-neon-purple/20 text-neon-purple' :
                    event.category === 'workshop' ? 'bg-neon-cyan/20 text-neon-cyan' :
                    event.category === 'meetup' ? 'bg-green-500/20 text-green-500' :
                    'bg-amber-500/20 text-amber-500'
                  }`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </div>
                  
                  <h3 className="font-space text-xl font-medium mb-2">{event.title}</h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {event.description}
                  </p>
                  
                  <NeonButton variant={event.isOnline ? "cyan" : "purple"} fullWidth>
                    Register Now
                  </NeonButton>
                </GlowCard>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">No events found matching your criteria.</p>
                <NeonButton variant="blue" onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setLocationFilter('all');
                }}>
                  Reset Filters
                </NeonButton>
              </div>
            )}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Events;
