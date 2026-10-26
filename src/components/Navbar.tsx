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
                               className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:bg-slate-800 cursor-pointer transition-colors duration-200 peer-checked:[&_.menu-icon]:hidden peer-checked:[&_.close-icon]:block">
                            <Menu className="menu-icon block h-6 w-6" aria-hidden="true"/>
                            <X className="close-icon hidden h-6 w-6" aria-hidden="true"/>
                        </label>

                        {/*Mobile Menu Container*/}
                        <div
                            className={"fixed top-20 left-0 w-full max-h-0 opacity-0 overflow-hidden bg-slate-900/98 backdrop-blur-lg border-b border-slate-800 transition-all duration-300 ease-in-out peer-checked:max-h-96 peer-checked:opacity-100"}>
                            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <Home className="size-5 mr-3"/>
                                    Home
                                </a>
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <Info className="size-5 mr-3"/>
                                    About
                                </a>
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <Star className="size-5 mr-3"/>
                                    Features
                                </a>
                                <a href="#"
                                   className="flex items-center px-3 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-red-500 transition-all duration-200">
                                    <Phone className="size-5 mr-3"/>
                                    Contact
                                </a>
                                <div className="pt-4">
                                    <button
                                        className="w-full flex items-center justify-center bg-red-600 text-white px-4 py-3 rounded-xl font-bold text-base hover:bg-red-700 shadow-lg shadow-red-900/20 transition-all">
                                        <Rocket className="w-5 h-5 mr-3"/>
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