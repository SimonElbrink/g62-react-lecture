import { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {

        // EFFECT: starts once, after the first render
        const interval = setInterval(() => {
            console.log("Clock tick");
            setTime(new Date()); // state update → re-render → new time on screen
        }, 1000);

        // CLEANUP: stop the interval when the component unmounts.
        // Without this, the interval keeps running forever in the background!
        return () => {
            clearInterval(interval);
            console.log("Clock cleanup");
        };
    }, []); // empty array = run the effect only once, on mount

    return (
        <div className="p-6 bg-slate-900 rounded-2xl shadow-lg text-center max-w-xs mx-auto">
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-2">
                Current Time
            </p>
            <p className="text-4xl font-black text-emerald-400 font-mono tabular-nums">
                {time.toLocaleTimeString('sv-SE')}
            </p>
        </div>
    );
};

export default Clock;