// data
import { events as initialEvents } from "@/data/events";

// components
import Events from "@/components/Events";

const Page: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto relative pt-20">
            <Events events={initialEvents} />
        </div>
    );
};

export default Page;
