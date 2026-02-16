import Link from "next/link";

export default async function GetCharacters(){
    const options = {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            }
    const response = await fetch("https://rickandmortyapi.com/api/character", options);
    const characters = await response.json();
    
    return(
        <>            
            {
                characters.results.map((character)=>(
                    <>
                    <Link href={"/characters/" + character.id}>{character.name}</Link><br />
                    </>
                ))
            }
        </>
    )
};