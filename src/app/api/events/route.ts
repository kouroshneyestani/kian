import events from "@/app/api/db";

const PAGE_SIZE = 3;

export async function GET(req: Request) {
    const url = new URL(req.url);
    const page = url.searchParams.get("page") || "1";
    const pageNumber = parseInt(page, 10);
    const startIndex = (pageNumber - 1) * PAGE_SIZE;
    const endIndex = pageNumber * PAGE_SIZE;
    const paginatedEvents = events.slice(startIndex, endIndex);
    const nextPage = endIndex < events.length ? pageNumber + 1 : null;

    return Response.json({
        data: paginatedEvents,
        nextPage: nextPage,
    });
}
