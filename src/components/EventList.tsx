import EventCard from "./EventCard.tsx";

const EventList = () => {

    const events = [
        {
            title: "Tech Innovators Summit 2026",
            date: "March 25, 2026",
            time: "09:00 AM",
            location: "Silicon Valley Convention Center",
            attendees: 1200,
            category: "Technology",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Global Marketing Expo",
            date: "April 12, 2026",
            time: "10:30 AM",
            location: "New York City Hall",
            attendees: 850,
            category: "Marketing",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Sustainable Future Forum",
            date: "May 05, 2026",
            time: "02:00 PM",
            location: "London Eco Park",
            attendees: 500,
            category: "Environment",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "AI & Robotics Workshop",
            date: "June 18, 2026",
            time: "11:00 AM",
            location: "Tokyo Innovation Hub",
            attendees: 300,
            category: "Workshop",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Annual Design Awards",
            date: "July 22, 2026",
            time: "07:00 PM",
            location: "Paris Design Center",
            attendees: 1500,
            category: "Design",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Startup Founders Networking",
            date: "August 10, 2026",
            time: "06:30 PM",
            location: "Berlin Co-working Space",
            attendees: 200,
            category: "Networking",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-3 block">Upcoming Experiences</span>
                        <h2 className="text-4xl font-black text-slate-900">Featured <span
                            className="text-red-600">Events</span></h2>
                    </div>
                    <button
                        className="flex items-center text-slate-900 font-bold hover:text-red-600 transition-colors group">
                        View All Events <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {events.map((event, index) => (
                        <EventCard key={index} {...event}/>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default EventList;