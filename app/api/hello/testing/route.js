

export async function GET() {
    return new Response("Hello World", {status: 200});
}

export async function POST() {
    return new Response("Post route hit", {status: 200});
}