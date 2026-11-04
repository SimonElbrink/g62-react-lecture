import {Mail, User, X} from "lucide-react";
import {type ChangeEvent, type FormEvent, useState} from "react";

// or move to types.ts
type EventItem = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    image: string;
    category: string;
}

type RegisterModalProps = {
    event: EventItem;
    onClose: () => void;
    onSuccess: (message: string) => void;
}

const RegisterModal = ({ event, onClose, onSuccess }: RegisterModalProps) => {


    // Controlled form: the inputs show exactly what this state holds
    const [formData, setFormData] = useState<{ name: string; email: string }>({
        name: "",
        email: "",
    });

    // One optional message per field — empty object means "no errors"
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    // One handler for all inputs: the input's `name` attribute matches the state key
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        // Stop the browser's default form submission (which reloads the page)
        e.preventDefault();

        // 1. VALIDATE — plain TypeScript, no library needed
        const newErrors: { name?: string; email?: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is not valid';
        }

        setErrors(newErrors);


        if (Object.keys(newErrors).length > 0) {
            return;
        }



        console.log("Sending the Request -- TO API");

        onSuccess(`You have successfully registered for ${event.title}!`);

    }


    return (
        <div className="fixed inset-0 bg-slate-900/50 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[98vh] overflow-y-auto shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition"
                >
                    <X className="w-5 h-5 text-slate-700" />
                </button>

                <div className="p-8">
                    <div>
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-64 object-cover rounded-xl mb-6"
                        />

                        <h2 className="text-3xl font-bold text-slate-900 mb-2">
                            {event.title}
                        </h2>

                        <div className="text-slate-500 mb-6 flex gap-4 text-sm">
                            <span>{event.date}</span>
                            <span>{event.location}</span>
                        </div>

                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Join us for this exciting event.
                        </p>
                    </div>

                    <div className="border-t border-slate-100 pt-8">
                        <h3 className="text-xl font-semibold mb-4">
                            Register for this Event
                        </h3>

                        <form className="space-y-4"  onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                                    />
                                </div>

                                {/* Validation message — rendered only when this field has an error */}
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                )}

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}

                            </div>

                            <button
                                // onClick={() => onSuccess}
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-sm"
                            >
                                Confirm Registration
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;