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

const gameHorizon = new GameObj("Horizon: Forbidden West", 
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

