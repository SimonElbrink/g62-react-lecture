

const Hero = () => {

    const handleCreateEvent = () => {
      alert("Handle Create Event")
    }


    return (
        <div
            className="relative flex flex-col justify-center items-center py-28 px-4 overflow-hidden bg-white border-b border-slate-100">
            {/*Background Decoration*/}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px] opacity-60"></div>
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-[120px] opacity-60"></div>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col items-center">
                <div
                    className="flex items-center space-x-2 mb-8 transform hover:scale-105 transition-transform cursor-default">
                <span className="relative flex h-2 w-2">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                    <span className="text-red-700 font-bold tracking-wider uppercase text-[10px]">
                    Plan Your Next Big Event
                </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-slate-900 text-center leading-[1.1] tracking-tight mb-8">
                    Welcome to <span className="text-red-600 relative inline-block">Event App
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10C53.5 3.5 159.5 1 317 10" stroke="#EF4444" stroke-width="3"
                              stroke-linecap="round"/>
                    </svg>
                </span>
                </h1>

                <p className="text-slate-500 text-lg md:text-xl text-center max-w-2xl leading-relaxed mb-12">
                    The ultimate platform to manage and create events effortlessly. Professional, modern, and built for
                    your needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button type="button" onClick={handleCreateEvent}
                        className="group relative bg-red-600 text-white px-10 py-4 rounded-2xl font-bold text-lg border-2 border-red-500 hover:bg-red-700 transition-all shadow-2xl shadow-red-200 hover:shadow-red-400 transform hover:-translate-y-1 active:scale-95 overflow-hidden">
                        <span className="relative z-10 text-white">Create Event</span>
                        <div
                            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>
                    <button
                        className="group bg-white border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:border-red-600 hover:text-red-600 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-slate-100 flex items-center justify-center">
                        Browse Events
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;