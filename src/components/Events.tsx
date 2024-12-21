import React from "react";
import EventItem from "@/components/Event"; 

interface Event {
    id: number;
    name: string;
    date: string;
    description: string;
    gallery: string[];
}

interface EventsProps {
    events: Event[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
    return (
        <div className="max-w-2xl mx-auto relative pt-20">
            <ul className="flex flex-col gap-6">
                {events.map((event) => (
                    <li key={event.id}>
                        <EventItem
                            data={{
                                date: event.date,
                                gallery: event.gallery,
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
