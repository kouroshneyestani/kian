import { events, Event } from "@/data/events";

const Page: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto relative pt-20">
            <ul className="flex flex-col gap-6">
                {events.map((event: Event) => (
                    <li key={event.id}>
                        <article className="p-6 rounded-2xl bg-orange-600 text-white">
                            {new Date(event.date).toLocaleDateString()}
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
