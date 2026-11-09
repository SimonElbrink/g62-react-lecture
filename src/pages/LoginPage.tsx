import {Calendar, Lock, Mail} from "lucide-react";

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-4 flex items-start justify-center">
            <div className="bg-white rounded-3xl border-2 border-slate-100 shadow-sm w-full max-w-md p-10">

                <div className="flex flex-col items-center mb-8">
                    <div className="bg-red-600 p-3 rounded-2xl mb-4">
                        <Calendar className="h-6 w-6 text-white"/>
                    </div>
                    <h1 className="text-3xl font-black text-slate-900">Welcome Back</h1>
                    <p className="text-slate-500 text-sm mt-2">Sign in to manage your events</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                            />
                        </div>
                    </div>

                    <button
                        className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-sm">
                        Sign In
                    </button>
                </div>

                <p className="text-center text-sm text-slate-500 mt-8">
                    Don't have an account?{' '}
                    <a href="/" className="text-red-600 font-semibold hover:underline">
                        Browse events first
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;