import { connectToDB } from "@/app/api/db";
export async function GET() {
    const {db} = await connectToDB();
    const gameData = await db.collection("my_games").find({}).toArray();
    
    return new Response(JSON.stringify(gameData), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });
}

export async function POST(request) {
    const {db} = await connectToDB();
    const newGame = await request.json();

    const result = await db.collection("my_games").insertOne(newGame);
    return new Response(
        "Game added successfully with id " + result.insertedId,
        {
            status: 201,
        }
    )
}

