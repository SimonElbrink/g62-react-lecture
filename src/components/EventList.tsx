import EventCard from "./EventCard.tsx";

const EventList = () => {
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

                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>

                </div>
            </div>
        </section>
    );
};

export default EventList;