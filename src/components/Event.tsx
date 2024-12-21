import Link from "next/link";
import Image from "next/image";

interface EventData {
    id: number; // event id
    date: string;
    gallery?: string[]; // Image URLs
}

interface EventItemProps {
    data: EventData;
}

const EventItem: React.FC<EventItemProps> = ({ data }) => {
    return (
        <article className="flex flex-col items-center gap-6 relative">
            {data.date && (
                <span className="w-40 h-12 rounded-xl bg-blue-600 text-white inline-flex items-center justify-center sticky top-16 z-10">
                    {new Date(data.date).toLocaleDateString()}
                </span>
            )}

            {data.gallery && data.gallery.length > 0 && (
                <div className="flex flex-col gap-6">
                    {data.gallery.map((src, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden relative aspect-[6-4] bg-red-300"
                        >
                            <Link href={`/${data.id}`}>
                                <Image
                                    src={src}
                                    alt="alternative"
                                    width={600}
                                    height={400}
                                    className="max-w-full h-auto object-cover"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
};

export default EventItem;
