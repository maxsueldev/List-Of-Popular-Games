let games = [];
class GameObj {
    constructor(name, developer, genre, distributor) {
        this.name = name;
        this.developer = developer;
        this.genre = genre;
        this.distributor = distributor

        this.addToGames();
    }
    addToGames() {
        games.push(this);
    } 
}

// function sendANewGame() {   //WTF
//     let inputGameName = document.querySelector("input[name='gameName']").value;
//     let inputGameDeveloper = document.querySelector("input[name='gameDeveloper']").value;
//     let inputGameGenre = document.querySelector("input[name='gameGenre']").value;
//     let inputGameDistributor = document.querySelector("input[name='gameDistributor']").value;
//     let newGame = new GameObj(inputGameName, inputGameDeveloper,inputGameGenre, inputGameDistributor);
    
//     games.addToGames(newGame);
//     console.log(games);
    
// }

const gameForbiddenWest = new GameObj("Horizon: Forbidden West", 
                                "Guerrilla Games", 
                                "Adventure", 
                                "Sony Interactive Entertainment");

const gameZeroDawn = new GameObj("Horizon: Zero Dawn", 
                                "Guerrilla Games", 
                                "Adventure", 
                                "Sony Interactive Entertainment");

const gameTheLastOfUs = new GameObj("The Last Of Us: Part 2", 
                                    "Naughty Dogs", 
                                    "Survival Horror", 
                                    "Sony Interactive Entertainment");

const gameFifa = new GameObj("Fifa 23", 
                             "Eletronic Arts", 
                             "Sport", 
                             "Eletronic Arts");

const gameDeadRelics = new GameObj("Dead Relics",
                                    "Maxsuel Fernando",
                                    "Horror Puzzle",
                                    "onUnity");

let { name: nameGame, genre: genreGame } = gameFifa;
// console.log(`This game is ${nameGame} and your genre is ${genreGame}`);


const gamesWithoutSpecialCharacters = games.map(game => game.name.replace(/\s|[0-9_]|\W|[#$%^&*()]/g, ""));
const gamesSony = games.filter(game => game.distributor.includes("Sony"));
// let gamesNames = games.reduce((acumulator, initialValue) => [...acumulator, ...initialValue.name]);

console.log(games);

const myFavoriteGame = document.querySelector(".favoriteGame");
const {name: nameZeroDawn} = gameZeroDawn;
myFavoriteGame.innerHTML = "Favorite Game: " + nameZeroDawn;   
console.log(myFavoriteGame);

const gamesList = document.querySelector(".gamesList");

const allNameGames = games.map(game => {
    const [{name}] = games;
    return game.name; 
});

for(let i=0; i<allNameGames.length; i++) {
    gamesList.innerHTML += "<li>"+ allNameGames[i] +"</li>";
}

// divGames.innerHTML(
//     '<ul>' +
        
//     '<ul'
// );


