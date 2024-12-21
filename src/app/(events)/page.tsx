// data
import { events as initialEvents } from "@/data/events";

// components
import Events from "@/components/Events";
import EventsNavbar from "@/components/EventsNavbar";

const Page: React.FC = () => {
    return (
        <>
            <EventsNavbar />
            <Events events={initialEvents} />
        </>
    );
};

export default Page;
