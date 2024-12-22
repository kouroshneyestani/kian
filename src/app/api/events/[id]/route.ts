import events from "@/app/api/db";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    const eventId = parseInt(id, 10);

    const event = events.find((event) => event.id === eventId);

    if (!event) {
        return Response.json({ error: "Event not found" }, { status: 404 });
    }

    return Response.json(event);
}
