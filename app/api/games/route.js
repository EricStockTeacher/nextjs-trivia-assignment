import { gameData } from "@/app/gameData";

export async function GET() {
    return new Response(JSON.stringify(gameData), 
        {status: 200,
        headers: { 'Content-Type' : 'application/json'  
        }
    });
}

