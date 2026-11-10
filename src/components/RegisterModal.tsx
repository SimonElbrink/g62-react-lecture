import {Mail, User, X} from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form"
import {useState} from "react";
import axios from "axios";
import type {EventResponseDTO} from "./EventList.tsx";

type FormValues = {
    name: string;
    email: string;
}

type RegisterModalProps = {
    event: EventResponseDTO;
    onClose: () => void;
    onSuccess: (message: string) => void;
}

const RegisterModal = ({event, onClose, onSuccess}: RegisterModalProps) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        defaultValues: {name: "", email: ""},
    })

    const [apiError, setApiError] = useState<string>("");
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data)

        try {
            await axios.post(
                `http://localhost:8080/api/v1/events/${event.id}/participants`,
                { name: data.name, email: data.email }
            );

            // Only a successful response reaches this line
            onSuccess(`You have successfully registered for ${event.title}!`);
        } catch (error) {
            console.error("Registration failed:", error);
            setApiError("Registration failed. Please try again.");
        }
    };


    return (
        <div className="fixed inset-0 bg-slate-900/50 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[98vh] overflow-y-auto shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition"
                >
                    <X className="w-5 h-5 text-slate-700"/>
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
                            <span>{new Date(event.dateTime).toLocaleDateString('sv-SE')}</span>
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

                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                                    <input
                                        type="text"
                                        aria-invalid={errors.name ? "true" : "false"}
                                        {...register("name", {required: "Name is required", minLength: {
                                                value: 2,
                                                message: "Should be at least 2 letters"
                                            }})}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                                    />
                                </div>

                                {/* Validation message — rendered only when this field has an error */}
                                {errors.name &&
                                    <p role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}

                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                                    <input
                                        type="email"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        {...register("email", {required: "Email is required"})}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                                    />
                                </div>

                                {errors.email &&
                                    <p role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}

                            </div>

                            {/* Server-side failure — not tied to a single field */}
                            {apiError && (
                                <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                                    {apiError}
                                </p>
                            )}

                            <button
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