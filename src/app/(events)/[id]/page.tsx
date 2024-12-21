import { events } from "@/data/events";

interface PageProps {
    params: { id: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
    const { id } = params;

    // find correct event based in ID from URL params
    const event = events.find((event) => event.id === parseInt(id));

    if (!event) {
        return <div>Not found :/</div>;
    }

    return (
        <div>
            <h1>{event.name}</h1>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
            {event.gallery && event.gallery.length > 0 && (
                <div>
                    {event.gallery.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`alternative`}
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
