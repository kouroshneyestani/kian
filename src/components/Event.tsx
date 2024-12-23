import Link from "next/link";
import Image from "next/image";

type EventItemProps = {
    data: {
        id: number; // event id
        date: string;
        gallery?: string[]; // Image URLs
    };
};

function EventItem({ data }: EventItemProps) {

    return (
        <article className="flex flex-col items-center justify-between gap-6 relative border border-red-600 rounded-2xl p-6">
            {data.date && (
                <span className="w-40 h-12 rounded-xl bg-blue-600 text-white inline-flex items-center justify-center sticky top-16 z-10">
                    {data.date}
                </span>
            )}

            <Link href={`/${data.id}`}>
                <h1 className="text-4xl text-red-600">{data.id}</h1>

                {data.gallery && data.gallery.length > 0 && (
                    <div className="flex flex-col gap-6">
                        {data.gallery.map((src, index) => (
                            <div
                                key={index}
                                className="w-full rounded-2xl overflow-hidden relative  bg-red-300"
                            >
                                <Image
                                    src={src}
                                    alt={`Event ${data.id} image ${index + 1}`}
                                    objectFit="cover"
                                    width={600}
                                    height={400}
                                    className="max-w-full"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </Link>
        </article>
    );
};

export default EventItem;
