import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-slate-900 mb-8">Contact <span className="text-red-600">Us</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-slate-600 mb-8">
            Have questions or need support? We're here to help! Reach out to our team using any of the channels below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="text-slate-600">support@eventapp.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Phone</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Office</h3>
                <p className="text-slate-600">123 Event Lane, Celebration City, EC 54321</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all h-32" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
