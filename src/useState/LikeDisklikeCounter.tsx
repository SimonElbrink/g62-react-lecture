import { useState } from 'react';

const LikeDislikeCounter = () => {
    // useState stores a value that survives re-renders.
    // It returns an array with two elements, the current value & a function that updates the value AND re-renders the component
    const [likes, setLikes] = useState<number>(0);
    const [dislikes, setDislikes] = useState<number>(0); // each call = its own independent state

    // Event handler names use the 'handle' prefix by convention.
    const handleLike = () => {
        setLikes(prev => prev + 1);
    };

    const handleDislike = () => {
        setDislikes(prev => prev + 1);
    };

    return (
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center max-w-sm mx-auto">
            <h3 className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-4">Event Feedback</h3>

            <div className="flex items-center justify-around mb-6">
                {/* Like Section */}
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-black text-blue-600 mb-2">{likes}</p>
                    <button
                        onClick={handleLike}
                        className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-all active:scale-90"
                    >
                        👍
                    </button>
                    <span className="text-[10px] mt-2 font-bold text-blue-400 uppercase tracking-tighter">Like</span>
                </div>

                {/* Dislike Section */}
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-black text-red-600 mb-2">{dislikes}</p>
                    <button
                        onClick={handleDislike}
                        className="p-3 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-all active:scale-90"
                    >
                        👎
                    </button>
                    <span className="text-[10px] mt-2 font-bold text-red-400 uppercase tracking-tighter">Dislike</span>
                </div>
            </div>

            <p className="text-slate-400 text-xs italic">
                Total interactions: {likes + dislikes}
            </p>
        </div>
    );
};

export default LikeDislikeCounter;