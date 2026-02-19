export default function Character({name, species, image}){
    return(
        <>
            <p>{name}</p>
            <p>{species}</p>
            <img src={image} alt={"An image of" + name} height={100} width={200}></img>
        </>
    )   
}