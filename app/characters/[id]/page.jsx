import Image from "next/image";

export default async function CharacterDetail(props) {
    const {id} = await props.params;

    const options = {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            }
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id, options);
    const character = await response.json();

    return(
        <>
            <p>{character.name}</p>
            <p>{character.species}</p>
            <img src={character.image} alt={"An image of" + character.name} height={100} width={200}></img>
        </>
    )   
}