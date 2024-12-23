"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

// componnets
import EventItem from "@/components/Event";

interface Event {
    id: number;
    name: string;
    date: string;
    description: string;
    gallery: string[];
}

const fetchEvents = async ({ pageParam = 1 }) => {
    const response = await fetch(`/api/events?page=${pageParam}`);
    const data = await response.json();

    return data;
};

const Events: React.FC = () => {
    const { fetchNextPage, hasNextPage, isFetchingNextPage, data, isLoading } =
        useInfiniteQuery({
            queryKey: ["events"],
            queryFn: fetchEvents,
            getNextPageParam: (lastPage) => lastPage.nextPage || false,
            initialPageParam: 1,
        });

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    console.log(data);

    return (
        <div>
            {isLoading && <div>Loading...</div>}

            <ul className="w-full flex flex-col gap-6">
                {data?.pages.map((page: any, pageIndex) =>
                    page.data.map((event: Event, index: number) => (
                        <li key={`${pageIndex}-${index}`}>
                            <EventItem
                                data={{
                                    id: event.id,
                                    date: event.date,
                                    gallery: event.gallery,
                                }}
                            />
                        </li>
                    ))
                )}
            </ul>

            {hasNextPage && !isFetchingNextPage && (
                <div ref={ref} className="h-16 bg-red-300"></div>
            )}

            {!hasNextPage && !isFetchingNextPage && <div>No more events</div>}
        </div>
    );
};

export default Events;
