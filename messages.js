const planets = ["Mars", "Venus", "Jupiter", "Saturn"];
const seasons = ["Spring", "Summer", "Winter", "Fall"];
const times = ["Morning", "Day", "Evening", "Night"];

const factoryUser = name => {
    return {
        name,
        planet: planets[Math.floor(Math.random()*4)],
        season: seasons[Math.floor(Math.random()*4)],
        time: times[Math.floor(Math.random()*4)]
    }
}

const Antonio = factoryUser("Antonio");

console.log("You are "+Antonio.name+". Your informations are: "+Antonio.planet+", "+Antonio.season+", "+Antonio.time+".");

