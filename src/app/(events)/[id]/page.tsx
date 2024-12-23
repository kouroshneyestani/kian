import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    // const [event, setEvent] = useState<Event | null>(null);
    // const [loading, setLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     const fetchEvent = async () => {
    //         const { id } = await params;
    //         setLoading(true);
    //         try {
    //             const response = await fetch(`/api/events/${id}`);
    //             const data = await response.json();
    //             setEvent(data);
    //         } catch (error) {
    //             console.error("Error fetching event:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchEvent();
    // }, [params]);

    // if (loading) return <div>Loading...</div>;
    // if (!event) return <div>Event not found</div>;

    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api/events/${id}`);
    const event = await response.json();

    return (
        <div>
            <h1>{event.name}</h1>
            <p>{new Date(event.date).toISOString().split("T")[0]}</p>
            <p>{event.description}</p>
            {event.gallery && event.gallery.length > 0 && (
                <div className="flex flex-col gap-6">
                    {event.gallery.map((src: string, index: number) => (
                        <Image
                            key={index}
                            src={src}
                            alt="alternative"
                            width={600}
                            height={400}
                            className="max-w-full rounded-2xl object-cover"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
