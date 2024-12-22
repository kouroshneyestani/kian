import events from "@/app/api/db";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const eventId = parseInt(id, 10);

    const event = events.find((event) => event.id === eventId);

    if (!event) {
        return new Response(JSON.stringify({ error: "Event not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify(event), {
        headers: { "Content-Type": "application/json" },
    });
}
