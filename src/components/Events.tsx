"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// components
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

const initalData: number = 3;

const Events: React.FC<EventsProps> = ({ events }) => {
    const [data, setdata] = useState<Event[]>(events.slice(0, initalData));
    const [isLoading, setIsLoading] = useState(false);

    const loadMoreEvents = () => {
        if (isLoading) return;

        setIsLoading(true);

        setdata((prevEvents) => [
            ...prevEvents,
            ...events.slice(prevEvents.length, prevEvents.length + initalData), // add 3 items each time
        ]);

        setIsLoading(false);
    };

    // check the triger item is visible to loadMoreEvents
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 1.0,
    });

    useEffect(() => {
        if (inView) {
            loadMoreEvents();
        }
    }, [inView]);

    return (
        <>
            <ul className="w-full flex flex-col gap-6">
                {data.map((event) => (
                    <li key={event.id}>
                        <EventItem
                            data={{
                                id: event.id,
                                date: event.date,
                                gallery: event.gallery,
                            }}
                        />
                    </li>
                ))}
            </ul>
            {isLoading && <div className="text-center mt-4">Loading...</div>}
            <div ref={ref} className="h-10" />
        </>
    );
};

export default Events;
