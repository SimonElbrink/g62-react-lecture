import {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center max-w-sm mx-auto">
            <h3 className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-4">Counter</h3>

            <p className="text-4xl font-black text-blue-600 mb-4">{count}</p>

            <button
                onClick={handleIncrement}
                className="px-6 py-3 bg-blue-50 text-blue-600 rounded-full font-bold hover:bg-blue-100 transition-all active:scale-90"
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;