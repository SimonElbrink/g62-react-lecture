const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-4 flex flex-col items-center justify-center text-center">
            <p className="text-red-600 font-bold tracking-widest uppercase text-xs mb-4">
                404 — Page Not Found
            </p>

            <h1 className="text-5xl font-black text-slate-900 mb-6">
                This page does not exist
            </h1>

            <p className="text-slate-500 text-lg mb-10 max-w-md">
                The address may be misspelled, or the page may have moved.
            </p>

            <a
                href="/"
                className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all">
                Back to Home
            </a>
        </div>
    );
};

export default NotFoundPage;