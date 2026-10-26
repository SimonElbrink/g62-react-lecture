const JSXProfileCard = () => {
    const user = {
        name: "Alice Johnson",
        role: "Senior React Developer",
        avatar: "https://i.pravatar.cc/150?u=alice",
        bio: "Passionate about building beautiful, accessible, and performant user interfaces.",
        isAvailable: true,
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-transform hover:scale-[1.02]">
            {/* Header / Banner */}
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

            {/* Profile Content */}
            <div className="px-6 pb-6 text-center">
                <div className="relative -mt-12 mb-4">
                    <img
                        className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md object-cover"
                        src={user.avatar}
                        alt={user.name}
                    />
                    {user.isAvailable && (
                        <span className="absolute bottom-1 right-[35%] w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                </div>

                <h2 className="text-2xl font-bold text-slate-800">{user.name}</h2>
                <p className="text-sm font-medium text-blue-600 mb-4">{user.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {user.bio}
                </p>

                <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-slate-100 text-slate-800 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
                        Message
                    </button>
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JSXProfileCard;