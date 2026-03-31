export default function Game( {gameData} ) {
    return (
        <>
            <h2>{gameData.title}</h2>
            <p>{gameData.genre}</p>
            <p>{gameData.releaseYear}</p>
            <p>{gameData.platform}</p>
        </>
    )
}