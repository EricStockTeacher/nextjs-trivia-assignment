import Character from "@/components/Character";

export default async function CharacterDetail(props) {
    const {id} = await props.params;

    const options = {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            }
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id, options);
    const character = await response.json();

    return(
        <Character name={character.name} species={character.species} image={character.image}/>
    )   
}