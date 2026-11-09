const AboutPage = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-slate-900 mb-8">About <span className="text-red-600">Event App</span></h1>
      <div className="prose prose-slate lg:prose-xl">
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Event App is a modern platform designed to bring people together through exceptional experiences. 
          Our mission is to provide organizers with the tools they need to create successful events 
          and help attendees find their next great memory.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Built with React and Spring Boot, this application demonstrates the power of modern web technologies 
          in creating fast, responsive, and user-friendly interfaces.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
