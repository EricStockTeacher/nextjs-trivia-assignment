import Game from "@/components/Game.jsx"
export default async function CharacterDetail( props ) {
    const {id} = await props.params;

    const response = await fetch(`${process.env.BACKEND_URL}/api/games/${id}`);
    const data = await response.json()
    return (
        <Game gameData={data}/>
    )
}