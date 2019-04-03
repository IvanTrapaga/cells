const fetch = require('node-fetch');
class Films {
	constructor(){
		this.path = 'http://localhost:3000';
		console.log('-->');
	}
	//--
	async getFilms(){
		const data = await fetch(`${this.path}/films`);
		//console.log(await data)
		return (await data.json())
	}
	getFilmsById(){}
	getFilmsByTitle(title){}
	getFilmsByActorId(actorId){}
	getFilmsByRating(ratingStart, ratingEnd){}
	getFilmsByLenguajeId(LenguajeId){}

	updateFilm(id, film){}
	deleteFilm(id){}
	addFilm(){}
	
}

module.exports = Films;

//const films = new Films();
//console.log(await films.getFilms());
