// data
import { events as initialEvents } from "@/data/events";

// components
import Events from "@/components/Events";
import EventsNavbar from "@/components/EventsNavbar";

const Page: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto relative flex flex-col gap-6 pt-20">
            <EventsNavbar />
            <Events events={initialEvents} />
        </div>
    );
};

export default Page;
