import { gameData } from "@/app/gameData";


export async function GET(request,{params}) {
    const {id} = await params;
    const currentGame = gameData.find(game => game.id == parseInt(id))
    console.log(gameData);
    if (!currentGame) {
        return new Response("Game not found", {status: 404});
    }
    return new Response(JSON.stringify(currentGame), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });
}

export async function POST(request) {
    const newGame = await request.json();

    gameData.push(newGame);
    console.log(gameData);
    return new Response(
        "Game added successfully",
        {
            status: 201,
        }
    )
}

export async function DELETE(request, {params}) {
    const {id} = await params;
    const indexToRemove = gameData.findIndex(game => game.id == parseInt(id));

    if (indexToRemove === -1) {
        return new Response("Game not found", {status: 404});
    }

    gameData.splice(indexToRemove, 1);
    console.log(gameData);
    return new Response(
        "Game deleted successfully",
        {
            status: 200,
        }
    )
}
