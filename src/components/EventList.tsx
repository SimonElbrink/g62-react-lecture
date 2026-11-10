import EventCard from "./EventCard.tsx";
import {useEffect, useState} from "react";
import Toast from "./Toast.tsx";
import RegisterModal from "./RegisterModal.tsx";
import axios from "axios";

// or move to types.ts
export type EventResponseDTO = {
    id: number;
    title: string;
    description: string;
    dateTime: string;
    location: string;
    status: string;
    image: string;
    category: string;
    attendees: number;
};

const EventList = () => {

    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<EventResponseDTO | null>(null);

    const [events,setEvents] = useState<EventResponseDTO[]>([]);
    const [apiError, setApiError] = useState<string>("");

    useEffect(() => {
        const loadEvents = async () =>{
            try{

                const response = await axios.get<EventResponseDTO[]>(
                    `http://localhost:8080/api/v1/events`
                );

                console.log(response.data);
                setEvents(response.data);
                setApiError("");


            }catch (error){
                console.error("Failed to load events:", error);
                setApiError("Failed to load events. Please try again later.");
            }
        };

        void loadEvents();

    },[]);





    const handleClick = (event: EventResponseDTO) => {
        setToastMessage("Register form opened.")
        setShowToast(true);

        setSelectedEvent(event);
        setIsModalOpen(true);

    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-3 block">Upcoming Experiences</span>
                        <h2 className="text-4xl font-black text-slate-900">Featured <span
                            className="text-red-600">Events</span></h2>
                    </div>
                    <button
                        className="flex items-center text-slate-900 font-bold hover:text-red-600 transition-colors group">
                        View All Events <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    </button>
                </div>

                {apiError && <p className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">{apiError}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {events.map((event, index) => (
                        <EventCard key={index} event={event} onRegister={() => handleClick(event)}/>
                    ))}

                    {showToast && (
                        <Toast message={toastMessage} type="success" onClose={() => setShowToast(false)}/>
                    )}


                    {isModalOpen && selectedEvent && (
                        <RegisterModal event={selectedEvent}
                                       onClose={() => {
                                           setIsModalOpen(false);
                                           setSelectedEvent(null)
                                       }}
                                       onSuccess={(message: string) => {
                                           setIsModalOpen(false);
                                           setSelectedEvent(null);
                                           setShowToast(true);
                                           setToastMessage(message)
                                       }}
                        />
                    )}

                </div>
            </div>
        </section>
    );
};

export default EventList;