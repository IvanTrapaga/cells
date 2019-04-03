const Films = require("./films");
const Languaje = require("./languaje")
const films = new Films();
const languaje = new Languaje();

//films.getFilms().then(function(data){ console.log(data) });
languaje.getLanguaje().then(function(data){console.log(data)});
//console.log( await films.getFilms() );
