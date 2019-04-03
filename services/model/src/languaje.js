const fetch = require('node-fetch');
class Languaje {

	constructor(){
		this.path = 'http://localhost:3000';
		console.log('-->');	
	}

	async getLanguaje(){
		const data = await fetch(`${this.path}/languaje`);
		return (await data.json());
	}

}

module.exports = Languaje;

