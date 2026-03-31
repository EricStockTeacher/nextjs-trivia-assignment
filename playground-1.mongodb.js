// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("video_games");

/*db.getCollection("my_games").insertMany(
    [
    {
        "id": 1,
        "title": "Legend of Zelda",
        "genre": "Adventure",
        "releaseYear": 1986,
        "platform": "Nintendo Entertainment System"
    },
    {
        "id": 2,
        "title": "Super Mario Bros.",
        "genre": "Platformer",
        "releaseYear": 1985,
        "platform": "Nintendo Entertainment System"
    },
    {
        "id": 3,
        "title": "Minecraft",
        "genre": "Sandbox",
        "releaseYear": 2011,
        "platform": "Multiple"
    }
    ]
)*/

console.log(db.collection("my_games").find({}));


// Find a document in a collection.
//db.getCollection("my_games").findOne({

//});
