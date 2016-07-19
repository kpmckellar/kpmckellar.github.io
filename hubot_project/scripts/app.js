module.exports = function(robot) {

    // robot.hear(/hello|hi/i, function(res) {
    //     return res.send("Hello, World!");
    // });

    // robot.hear(/cat/i, function(res) {
    // 	return res.send('meooooow');
    // });

    // robot.respond(/how are you/i, function(res) {
    // 	return res.send('I am feeling super!');
    // });

    // robot.respond('/my name is (.*)/i', function(res) {
    // 	var name = res.match[1];
    // 	return res.reply('Hello, ' + name);
    // })

    // robot.hear(/add (.*) and (.*)/i, function (res) {
    // 	var x = parseInt(res.match[1]);
    // 	var y = parseInt(res.match[2]);

    // 	var sum = x + y;

    // 	return res.send(x + " + " + y + " = " + sum);
    // })	
    var listPokemon = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran f", "nidorina", "nidoqueen", "nidoran m", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"]

    robot.hear(/pokemon/i, function(res) {
    	return res.send("Gotta catch 'em all!");
    });

    robot.hear(/just out for a stroll/i, function(res) {
    	var randomNum = Math.floor((Math.random() * listPokemon.length) + 1);
    	return res.send("A wild " + listPokemon[randomNum] + " appeard!");
    });

    robot.respond(/(.*) attack/i, function(res) {
    	var userInput = res.match[1].toLowerCase();
    	var pokemonExist = listPokemon.indexOf(userInput);

    	if (pokemonExist === -1) {
    		return res.reply(userInput + "? You must not be a real trainer.")
    	} else {
    		return res.reply("Let's fight!");
    	}
    });

}