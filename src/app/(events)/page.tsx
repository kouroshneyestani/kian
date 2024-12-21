// data
import { events, Event } from "@/data/events";

// componnets
import EventItem from "@/components/Event";

const Page: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto relative pt-20">
            <ul className="flex flex-col gap-6">
                {events.map((event: Event) => (
                    <li key={event.id}>
                        <EventItem
                            data={{ date: event.date, gallery: event.gallery }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
