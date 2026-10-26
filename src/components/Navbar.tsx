import React from "react";
import {Calendar, Home, Info, Menu, Phone, Rocket, Star, X} from "lucide-react";

type NavItem = {
    label: string;
    href: string;
    icon: React.ElementType;
}

const Navbar = () => {

    const title: string = "Event App"

    const items: NavItem[] = [
        {label: 'Home', href: '#', icon: Home},
        {label: 'About', href: '#', icon: Info},
        {label: 'Features', href: '#', icon: Star},
        {label: 'Contact', href: '#', icon: Phone}
    ];


    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Brand */}
                    <div className="flex items-center group cursor-pointer">
                        <div
                            className="flex-shrink-0 bg-red-600 p-2 rounded-xl group-hover:bg-red-700 transition-colors duration-300">
                            <Calendar className="size-6 text-white"/>

                        </div>
                        <span
                            className="ml-3 font-bold text-2xl tracking-tight text-white group-hover:text-red-500 transition-colors duration-300">{title}</span>
                    </div>

                    {/*Desktop Menu*/}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">

                            {items.map((item, index) => {

                                const Icon = item.icon;
                                return (
                                    <a key={index}
                                       href={item.href}
                                       className="flex items-center text-slate-300 hover:text-red-500 text-sm font-semibold transition-colors duration-200">
                                        <Icon className="w-4 h-4 mr-2"/>
                                        {item.label}
                                    </a>
                                )
                            })}


                            <button
                                className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center">
                                <Rocket className="w-4 h-4 mr-2"/>
                                Get Started
                            </button>
                        </div>
                    </div>


                    {/*Mobile Menu Toggle (Checkbox Hack)*/}
                    <div className="md:hidden flex items-center">
                        <input type="checkbox" id="mobile-menu-toggle" className="hidden peer"/>
                        <label htmlFor="mobile-menu-toggle"
                               className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:bg-slate-800 cursor-pointer transition-colors duration-200">
                            <Menu className="block h-6 w-6 peer-checked:hidden" aria-hidden="true"/>
                            <X className="hidden h-6 w-6 peer-checked:block" aria-hidden="true"/>
                        </label>

                        {/*Mobile Menu Container*/}
                        <div
                            className="fixed top-20 left-0 w-full max-h-0 opacity-0 overflow-hidden bg-slate-900/98 backdrop-blur-lg border-b border-slate-800 transition-all duration-300 ease-in-out peer-checked:max-h-96 peer-checked:opacity-100">
                            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    Home
                                </a>
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                    About
                                </a>
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    Features
                                </a>
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    Contact
                                </a>
                                <div className="pt-4">
                                    <button
                                        className="w-full flex items-center justify-center bg-red-600 text-white px-4 py-3 rounded-xl font-bold text-base hover:bg-red-700 shadow-lg shadow-red-900/20 transition-all">
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round">
                                            <path
                                                d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                            <path
                                                d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                            <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-2.5 5-2.5"></path>
                                            <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 2.5-5 2.5-5"></path>
                                        </svg>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;