//import { gameData } from "@/app/gameData";
import { connectToDB } from "@/app/api/db";

export async function GET(request,{params}) {
    const {db} = await connectToDB();
    const {id} = await params;

    const currentGame = await db.collection("my_games").findOne({id: parseInt(id)});
    if (!currentGame) {
        return new Response("Game not found", {status: 404});
    }
    return new Response(JSON.stringify(currentGame), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });
}

export async function DELETE(request, {params}) {
    const {db} = await connectToDB();
    const {id} = await params;
    const deleteResult = await db.collection("my_games").deleteOne({id: parseInt(id)});
    const returnString = deleteResult.deletedCount === 1 ? "Game deleted successfully" : "Game not found";
    return new Response(
        returnString,
        {
            status: 200,
        }
    )
}
